(function () {
  "use strict";

  var CONCEPTS = window.LKE_CONCEPTS || [];
  var STORAGE_KEY = "lke:v1:progress";
  var DRAFT_KEY = "lke:v1:draft";

  var MODE_SECONDS = {
    training: 12 * 60,
    pau: 15 * 60
  };

  var MODE_LABELS = {
    training: "Entrenamendua",
    pau: "PAU modua"
  };

  var PAU_WORD_LIMIT = 350;

  var MODELS = {
    process: [
      { id: "kausa", label: "Kausa", help: "Zein kontzeptuk azaltzen du prozesuaren abiapuntua?" },
      { id: "testuingurua", label: "Testuingurua", help: "Zein kontzeptuk kokatzen du garaia edo egoera?" },
      { id: "prozesua", label: "Prozesua", help: "Zein kontzeptuk erakusten du aldaketa edo garapena?" },
      { id: "ondorioa", label: "Ondorioa", help: "Zein kontzeptuk ixten du azalpena?" }
    ],
    conflict: [
      { id: "aurrekaria", label: "Aurrekaria", help: "Zein kontzeptuk azaltzen du aurreko egoera?" },
      { id: "erdigunea", label: "Erdigunea", help: "Zein kontzeptuk kokatzen du gatazkaren muina?" },
      { id: "gatazka", label: "Gatazka", help: "Zein kontzeptuk erakusten du tentsioa edo talka?" },
      { id: "ondorio-politikoa", label: "Ondorio politikoa", help: "Zein kontzeptuk azaltzen du ondorio instituzionala?" }
    ]
  };

  var CONNECTORS = [
    "ondorioz", "horregatik", "izan ere", "testuinguru horretan", "hala ere",
    "beraz", "gainera", "aldi berean", "horren ondorioz", "horren bidez",
    "bestalde", "azkenean", "ondoren", "aurretik", "horren harira"
  ];

  var TEMPORAL_MARKERS = [
    "xix", "xx", "mende", "urte", "ondoren", "aurretik", "garaian",
    "frankismo", "trantsizio", "errestaurazio", "gerraostea", "1876",
    "1936", "1939", "1975", "1978"
  ];

  var state = {
    mode: "training",
    model: "process",
    challenge: [],
    selected: [],
    board: {},
    remaining: MODE_SECONDS.training,
    running: false,
    timerId: null,
    hintsUsed: 0
  };

  var el = {
    modeButtons: Array.prototype.slice.call(document.querySelectorAll(".mode-button")),
    drawConcepts: document.getElementById("drawConcepts"),
    conceptCards: document.getElementById("conceptCards"),
    selectionCounter: document.getElementById("selectionCounter"),
    modelSelect: document.getElementById("modelSelect"),
    connectionPanel: document.getElementById("connectionPanel"),
    board: document.getElementById("connectionBoard"),
    answer: document.getElementById("answerText"),
    timerDisplay: document.getElementById("timerDisplay"),
    timerBox: document.querySelector(".timer-box"),
    startTimer: document.getElementById("startTimer"),
    pauseTimer: document.getElementById("pauseTimer"),
    hintButton: document.getElementById("hintButton"),
    hintBox: document.getElementById("hintBox"),
    pauGuide: document.getElementById("pauGuide"),
    wordCount: document.getElementById("wordCount"),
    draftStatus: document.getElementById("draftStatus"),
    checkAnswer: document.getElementById("checkAnswer"),
    resultBox: document.getElementById("resultBox"),
    resetChallenge: document.getElementById("resetChallenge"),
    clearProgress: document.getElementById("clearProgress"),
    statAttempts: document.getElementById("statAttempts"),
    statAverage: document.getElementById("statAverage"),
    statPracticed: document.getElementById("statPracticed"),
    lastScore: document.getElementById("lastScore"),
    masteredList: document.getElementById("masteredList"),
    confusedList: document.getElementById("confusedList"),
    cardTemplate: document.getElementById("conceptCardTemplate")
  };

  function init() {
    if (!CONCEPTS.length) {
      el.conceptCards.innerHTML = "<p>Ez dago kontzepturik bankuan.</p>";
      return;
    }

    var draftRestored = restoreDraft();
    if (!MODE_SECONDS[state.mode]) state.mode = "training";
    bindEvents();
    if (!draftRestored) drawNewChallenge();
    renderAll();
  }

  function bindEvents() {
    el.modeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        setMode(button.dataset.mode);
      });
    });

    el.drawConcepts.addEventListener("click", drawNewChallenge);
    el.resetChallenge.addEventListener("click", drawNewChallenge);
    el.modelSelect.addEventListener("change", function () {
      state.model = el.modelSelect.value;
      rebuildBoardDefaults();
      renderBoard();
      saveDraft();
    });

    el.startTimer.addEventListener("click", startTimer);
    el.pauseTimer.addEventListener("click", pauseTimer);
    el.hintButton.addEventListener("click", showHint);
    el.checkAnswer.addEventListener("click", checkAnswer);
    el.clearProgress.addEventListener("click", clearProgress);

    el.answer.addEventListener("input", function () {
      renderWordCount();
      saveDraft();
    });
  }

  function setMode(mode) {
    state.mode = mode;
    state.remaining = MODE_SECONDS[mode];
    state.hintsUsed = 0;
    pauseTimer();
    el.modeButtons.forEach(function (button) {
      var active = button.dataset.mode === mode;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-checked", active ? "true" : "false");
    });
    el.hintBox.hidden = true;
    drawNewChallenge();
  }

  function drawNewChallenge() {
    pauseTimer();
    state.challenge = pickChallenge();
    state.selected = [];
    state.board = {};
    state.remaining = MODE_SECONDS[state.mode];
    state.hintsUsed = 0;
    el.answer.value = "";
    el.resultBox.className = "result-box empty";
    el.resultBox.innerHTML = "<p>Zuzendu botoia sakatzean, hemen ikusiko duzu errubrika, puntuazioa eta hobetzeko aholkuak.</p>";
    el.hintBox.hidden = true;
    localStorage.removeItem(DRAFT_KEY);
    renderAll();
  }

  function pickChallenge() {
    return pickCoherentChallenge({ crossTopic: false });
  }

  function pickCoherentChallenge(options) {
    var crossTopic = !!options.crossTopic;
    var anchors = crossTopic
      ? CONCEPTS.filter(function (concept) { return concept.gaiak.length > 1 || concept.loturak.length > 2; })
      : CONCEPTS;
    var best = [];

    for (var attempt = 0; attempt < 24; attempt += 1) {
      var anchor = sample(anchors.length ? anchors : CONCEPTS, 1)[0];
      var challenge = crossTopic ? expandCrossTopicChallenge(anchor) : expandTopicChallenge(anchor);
      if (challenge.length === 5 && challengeScore(challenge) > challengeScore(best)) best = challenge;
      if (challenge.length === 5 && isCoherentChallenge(challenge, crossTopic)) return shuffle(challenge);
    }

    return best.length === 5 ? shuffle(best) : fallbackChallenge(crossTopic);
  }

  function expandTopicChallenge(anchor) {
    var topic = sample(anchor.gaiak, 1)[0];
    var topicPool = CONCEPTS.filter(function (concept) {
      return concept.id !== anchor.id && concept.gaiak.indexOf(topic) !== -1;
    });
    return fillChallenge([anchor], topicPool, false);
  }

  function expandCrossTopicChallenge(anchor) {
    return fillChallenge([anchor], CONCEPTS.filter(function (concept) {
      return concept.id !== anchor.id;
    }), true);
  }

  function fillChallenge(chosen, pool, crossTopic) {
    while (chosen.length < 5) {
      var ranked = pool
        .filter(function (concept) { return chosen.map(prop("id")).indexOf(concept.id) === -1; })
        .map(function (concept) {
          return {
            concept: concept,
            score: conceptFitScore(concept, chosen, crossTopic)
          };
        })
        .filter(function (item) { return item.score > 0; })
        .sort(function (a, b) { return b.score - a.score || Math.random() - 0.5; });

      if (!ranked.length) break;
      chosen.push(ranked[0].concept);
    }
    return chosen;
  }

  function conceptFitScore(concept, chosen, crossTopic) {
    var score = chosen.reduce(function (sum, other) {
      return sum + pairScore(concept, other);
    }, 0);

    if (crossTopic) {
      var usedHeads = chosen.map(primaryTopic);
      var sameHeadCount = usedHeads.filter(function (topic) { return topic === primaryTopic(concept); }).length;
      if (usedHeads.indexOf(primaryTopic(concept)) === -1) score += 8;
      if (sameHeadCount >= 2) score -= 10;
    }

    return score;
  }

  function pairScore(a, b) {
    var sharedTopics = a.gaiak.filter(function (topic) { return b.gaiak.indexOf(topic) !== -1; }).length;
    var directLink = a.loturak.indexOf(b.id) !== -1 || b.loturak.indexOf(a.id) !== -1;
    var distance = Math.abs((a.ordenHistorikoa || 0) - (b.ordenHistorikoa || 0));
    var score = 0;

    if (directLink) score += 8;
    score += sharedTopics * 5;
    if (primaryTopic(a) === primaryTopic(b)) score += 2;
    if (distance <= 10) score += 2;
    else if (distance <= 45) score += 1;
    return score;
  }

  function isCoherentChallenge(challenge, crossTopic) {
    if (challenge.length < 5) return false;
    var minimumScore = crossTopic ? 34 : 46;
    var topicHeads = unique(challenge.map(primaryTopic)).length;
    return challengeScore(challenge) >= minimumScore && (!crossTopic || topicHeads >= 3);
  }

  function challengeScore(challenge) {
    var score = 0;
    for (var i = 0; i < challenge.length; i += 1) {
      for (var j = i + 1; j < challenge.length; j += 1) {
        score += pairScore(challenge[i], challenge[j]);
      }
    }
    return score;
  }

  function fallbackChallenge(crossTopic) {
    var topics = unique(flatten(CONCEPTS.map(function (c) { return c.gaiak; })));
    var topic = sample(topics, 1)[0];
    var topicPool = CONCEPTS.filter(function (concept) {
      return concept.gaiak.indexOf(topic) !== -1;
    });
    var firstPass = sample(topicPool, Math.min(5, topicPool.length));
    if (firstPass.length >= 5) return firstPass;
    return firstPass.concat(sample(CONCEPTS.filter(function (c) {
      return firstPass.map(prop("id")).indexOf(c.id) === -1;
    }), 5 - firstPass.length));
  }

  function primaryTopic(concept) {
    return concept.gaiak[0] || "";
  }

  function renderAll() {
    renderModeButtons();
    renderConceptCards();
    renderBoard();
    renderTimer();
    renderWordCount();
    renderProgress();
    updateHintState();
    renderPauGuide();
    renderConnectionVisibility();
  }

  function renderPauGuide() {
    if (el.pauGuide) el.pauGuide.hidden = state.mode !== "pau";
  }

  // PAU moduan ez dago lotura-taularik: zuzenean idatzi behar da, azterketan bezala.
  function renderConnectionVisibility() {
    if (el.connectionPanel) el.connectionPanel.hidden = state.mode === "pau";
  }

  function boardRequired() {
    return state.mode !== "pau";
  }

  function renderModeButtons() {
    el.modeButtons.forEach(function (button) {
      var active = button.dataset.mode === state.mode;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-checked", active ? "true" : "false");
    });
    el.modelSelect.value = state.model;
  }

  function renderConceptCards() {
    el.conceptCards.innerHTML = "";
    state.challenge.forEach(function (concept) {
      var node = el.cardTemplate.content.firstElementChild.cloneNode(true);
      var selected = state.selected.indexOf(concept.id) !== -1;
      node.classList.toggle("is-selected", selected);
      var hideDefinition = state.mode === "pau";
      node.querySelector(".difficulty").textContent = "Zailtasuna " + concept.zailtasuna + "/3";
      node.querySelector(".era").textContent = concept.garaia;
      node.querySelector("h3").textContent = concept.kontzeptua;
      var definitionNode = node.querySelector(".definition");
      if (hideDefinition) {
        definitionNode.hidden = true;
      } else {
        definitionNode.textContent = concept.definizioLaburra;
      }
      node.querySelector(".tags").innerHTML = concept.gaiak.slice(0, 2).map(function (tag) {
        return '<span class="tag">' + esc(tag) + "</span>";
      }).join("");
      var button = node.querySelector(".select-concept");
      button.textContent = selected ? "Kendu" : "Aukeratu";
      button.disabled = !selected && state.selected.length >= 4;
      button.addEventListener("click", function () {
        toggleConcept(concept.id);
      });
      el.conceptCards.appendChild(node);
    });

    el.selectionCounter.textContent = state.selected.length + "/4 aukeratuta";
  }

  function toggleConcept(id) {
    var index = state.selected.indexOf(id);
    if (index !== -1) {
      state.selected.splice(index, 1);
      removeFromBoard(id);
    } else if (state.selected.length < 4) {
      state.selected.push(id);
    }
    rebuildBoardDefaults();
    renderConceptCards();
    renderBoard();
    updateHintState();
    saveDraft();
  }

  function removeFromBoard(id) {
    Object.keys(state.board).forEach(function (roleId) {
      if (state.board[roleId] === id) delete state.board[roleId];
    });
  }

  function rebuildBoardDefaults() {
    var roles = MODELS[state.model];
    var used = [];
    roles.forEach(function (role, index) {
      var current = state.board[role.id];
      if (current && state.selected.indexOf(current) !== -1 && used.indexOf(current) === -1) {
        used.push(current);
        return;
      }
      var next = state.selected.filter(function (id) { return used.indexOf(id) === -1; })[0];
      if (next) {
        state.board[role.id] = next;
        used.push(next);
      } else {
        delete state.board[role.id];
      }
      if (!state.board[role.id] && state.selected[index]) state.board[role.id] = state.selected[index];
    });
  }

  function renderBoard() {
    var roles = MODELS[state.model];
    el.board.innerHTML = "";
    roles.forEach(function (role, index) {
      var card = document.createElement("article");
      var selectedId = state.board[role.id] || "";
      card.className = "slot-card" + (selectedId ? " is-filled" : "");
      card.innerHTML =
        '<span class="slot-number">' + (index + 1) + "</span>" +
        "<h3>" + esc(role.label) + "</h3>" +
        "<p>" + esc(role.help) + "</p>" +
        '<label class="sr-only" for="slot-' + esc(role.id) + '">' + esc(role.label) + "</label>" +
        '<select id="slot-' + esc(role.id) + '" data-role="' + esc(role.id) + '">' +
        '<option value="">Aukeratu</option>' +
        state.selected.map(function (id) {
          var concept = byId(id);
          return '<option value="' + esc(id) + '"' + (id === selectedId ? " selected" : "") + ">" + esc(concept.kontzeptua) + "</option>";
        }).join("") +
        "</select>";
      card.querySelector("select").addEventListener("change", function (event) {
        assignSlot(role.id, event.target.value);
      });
      el.board.appendChild(card);
    });
  }

  function assignSlot(roleId, conceptId) {
    Object.keys(state.board).forEach(function (key) {
      if (key !== roleId && state.board[key] === conceptId) delete state.board[key];
    });
    if (conceptId) state.board[roleId] = conceptId;
    else delete state.board[roleId];
    renderBoard();
    saveDraft();
  }

  function startTimer() {
    if (state.selected.length < 4) {
      flashMessage("Lehenik aukeratu 4 kontzeptu.");
      return;
    }
    if (boardRequired() && !isBoardComplete()) {
      flashMessage("Kokatu 4 kontzeptuak konexio-taulan.");
      return;
    }
    if (state.running) return;
    state.running = true;
    state.timerId = window.setInterval(function () {
      state.remaining = Math.max(0, state.remaining - 1);
      renderTimer();
      if (state.remaining === 0) {
        pauseTimer();
        flashMessage("Denbora amaitu da. Orain zuzendu dezakezu.");
      }
    }, 1000);
  }

  function pauseTimer() {
    state.running = false;
    if (state.timerId) window.clearInterval(state.timerId);
    state.timerId = null;
  }

  function renderTimer() {
    var minutes = Math.floor(state.remaining / 60);
    var seconds = state.remaining % 60;
    el.timerDisplay.textContent = pad(minutes) + ":" + pad(seconds);
    el.timerBox.classList.toggle("is-low", state.remaining <= 90);
  }

  function updateHintState() {
    var limit = state.mode === "training" ? 3 : 0;
    el.hintButton.disabled = limit === 0 || state.hintsUsed >= limit || state.selected.length === 0;
    el.hintButton.textContent = limit === 0 ? "Pistarik ez" : "Pista " + state.hintsUsed + "/" + limit;
  }

  function showHint() {
    var limit = state.mode === "training" ? 3 : 0;
    if (state.hintsUsed >= limit) return;
    var concept = byId(state.selected[state.hintsUsed % state.selected.length]) || byId(state.selected[0]);
    if (!concept) return;
    state.hintsUsed += 1;
    el.hintBox.hidden = false;
    el.hintBox.innerHTML =
      "<strong>" + esc(concept.kontzeptua) + ":</strong> " +
      esc(concept.esaldiErabilgarriak[0]) +
      '<br><span>Hitz gakoak: ' + esc(concept.hitzGakoak.slice(0, 4).join(", ")) + ".</span>";
    updateHintState();
  }

  function checkAnswer() {
    if (state.selected.length < 4) {
      flashMessage("Zuzendu aurretik, aukeratu 4 kontzeptu.");
      return;
    }
    if (boardRequired() && !isBoardComplete()) {
      flashMessage("Zuzendu aurretik, osatu konexio-taula.");
      return;
    }
    var assessment = assess(el.answer.value);
    renderAssessment(assessment);
    saveAttempt(assessment);
    pauseTimer();
    renderProgress();
    saveDraft();
  }

  function assess(text) {
    var normalized = normalize(text);
    var words = normalized.split(/\s+/).filter(Boolean);
    var selectedConcepts = state.selected.map(byId);
    var conceptResults = selectedConcepts.map(function (concept) {
      return {
        concept: concept,
        mentioned: conceptMentioned(concept, normalized),
        keywordHits: keywordHits(concept, normalized),
        mentions: mentionCount(concept, normalized)
      };
    });

    var usedCount = conceptResults.filter(prop("mentioned")).length;
    var keywordTotal = conceptResults.reduce(function (sum, item) { return sum + item.keywordHits.length; }, 0);
    var keywordPossible = conceptResults.reduce(function (sum, item) { return sum + Math.min(3, item.concept.hitzGakoak.length); }, 0) || 1;
    var connectorHits = CONNECTORS.filter(function (connector) {
      return normalized.indexOf(normalize(connector)) !== -1;
    });
    var temporalHits = TEMPORAL_MARKERS.filter(function (marker) {
      return normalized.indexOf(normalize(marker)) !== -1;
    });
    // Euskal atzizkiak onartu (1977ko, 1936an...): ez eskatu hitz-mugarik atzean.
    var yearHits = normalized.match(/(?<!\d)(18|19|20)\d{2}(?!\d)/g) || [];
    var listLike = looksLikeList(text);
    var sentenceCount = (text.match(/[.!?;]+/g) || []).length;
    var chronologicalOk = boardChronologyScore();
    var relationScore = relationScoreFor(selectedConcepts, connectorHits.length);
    var balanceScore = balanceScoreFor(conceptResults);
    // PAU moduan testuan oinarritutako neurriak (taularik gabe).
    var linkSentences = linkSentenceCount(text, selectedConcepts);
    var textChronology = yearHits.length
      ? (temporalHits.length ? 15 : 11)
      : (temporalHits.length ? 8 : 0);

    var rubric = state.mode === "pau" ? [
      {
        key: "concepts",
        label: "4 kontzeptuak agertzen dira",
        max: 20,
        score: usedCount * 5
      },
      {
        key: "chronology",
        label: "Testuinguru historikoa eta kronologia",
        max: 15,
        score: textChronology
      },
      {
        key: "connectors",
        label: "Konektore kausalak eta azalpenekoak daude",
        max: 15,
        score: connectorHits.length >= 3 ? 15 : connectorHits.length === 2 ? 12 : connectorHits.length === 1 ? 7 : 0
      },
      {
        key: "explanation",
        label: "Azalpena da, ez definizio-zerrenda",
        max: 20,
        score: listLike ? 0
          : sentenceCount >= 4 && connectorHits.length >= 3 ? 20
          : sentenceCount >= 3 && connectorHits.length >= 2 ? 14
          : sentenceCount >= 2 ? 8 : 4
      },
      {
        key: "relations",
        label: "Kontzeptuak esaldietan lotzen dira (ez zerrendatu)",
        max: 20,
        score: listLike ? 0
          : linkSentences >= 3 ? 20
          : linkSentences === 2 ? 14
          : linkSentences === 1 ? 8
          : connectorHits.length >= 2 ? 4 : 0
      },
      {
        key: "length",
        label: "Luzera eta sintesia (≤ 350 hitz)",
        max: 10,
        score: (function () {
          var base = words.length >= 120 ? 10 : words.length >= 70 ? 7 : words.length >= 40 ? 4 : words.length >= 20 ? 2 : 0;
          return words.length > PAU_WORD_LIMIT ? Math.max(0, base - 5) : base;
        })()
      }
    ] : [
      {
        key: "concepts",
        label: "4 kontzeptuak agertzen dira",
        max: 20,
        score: usedCount * 5
      },
      {
        key: "keywords",
        label: "Hitz gako historikoak erabiltzen dira",
        max: 15,
        score: Math.round(Math.min(1, keywordTotal / keywordPossible) * 15)
      },
      {
        key: "connectors",
        label: "Konektore kausalak eta azalpenekoak daude",
        max: 15,
        score: connectorHits.length >= 3 ? 15 : connectorHits.length === 2 ? 12 : connectorHits.length === 1 ? 7 : 0
      },
      {
        key: "chronology",
        label: "Kokapen kronologikoa eta testuingurua agertzen dira",
        max: 15,
        score: Math.min(15, (temporalHits.length || yearHits.length ? 8 : 0) + chronologicalOk)
      },
      {
        key: "balance",
        label: "Kontzeptuen arteko oreka mantentzen da",
        max: 10,
        score: balanceScore
      },
      {
        key: "explanation",
        label: "Azalpena da, ez definizio-zerrenda",
        max: 10,
        score: listLike ? 2 : sentenceCount >= 3 && connectorHits.length >= 2 ? 10 : 6
      },
      {
        key: "relations",
        label: "Kontzeptuen arteko harreman historikoa dago",
        max: 10,
        score: relationScore
      },
      {
        key: "length",
        label: "Luzera minimoa nahikoa da",
        max: 5,
        score: words.length >= 90 ? 5 : words.length >= 60 ? 3 : words.length >= 35 ? 1 : 0
      }
    ];

    var score = rubric.reduce(function (sum, row) { return sum + row.score; }, 0);
    return {
      score: score,
      rubric: rubric,
      feedback: (state.mode === "pau" ? buildPauFeedback : buildFeedback)({
        score: score,
        conceptResults: conceptResults,
        connectorHits: connectorHits,
        temporalHits: temporalHits.concat(yearHits),
        listLike: listLike,
        words: words.length,
        relationScore: relationScore,
        linkSentences: linkSentences,
        balanceScore: balanceScore,
        chronologicalOk: chronologicalOk
      }),
      details: {
        conceptResults: conceptResults,
        connectorHits: connectorHits,
        temporalHits: temporalHits,
        listLike: listLike,
        words: words.length
      }
    };
  }

  function buildFeedback(info) {
    var messages = [];
    var missing = info.conceptResults.filter(function (item) { return !item.mentioned; });
    if (missing.length) {
      messages.push("Testuan kontzeptu hau falta da edo ez da argi agertzen: " + missing.map(function (item) {
        return item.concept.kontzeptua;
      }).join(", ") + ".");
    } else {
      messages.push("4 kontzeptuak erabili dituzu: ondo. Orain gakoa haien arteko lotura historikoa sendotzea da.");
    }
    if (info.connectorHits.length < 2) {
      messages.push("Kausa-ondorio lotura indartzeko, erabili konektore gehiago: ondorioz, horregatik, hala ere, testuinguru horretan.");
    }
    if (!info.temporalHits.length || info.chronologicalOk < 4) {
      messages.push("Kronologia hobetu daiteke: gehitu garaia, urtea edo prozesuaren ordena argiagoa.");
    }
    if (info.listLike) {
      messages.push("Azalpena zerrenda baten antzekoa da. Saiatu paragrafo jarraitu batean prozesu historiko bakarra eraikitzen.");
    }
    if (info.balanceScore < 7) {
      messages.push("Kontzeptuen arteko oreka zaindu: ez utzi kontzeptu bat aipamen huts gisa.");
    }
    if (info.relationScore < 7) {
      messages.push("Kontzeptuen arteko harreman historikoa esplizituago egin: zer eragin du batek bestean?");
    }
    if (info.words < 60) {
      messages.push("Testua laburregia da azalpen historiko sendo baterako. Gehitu testuingurua eta ondorioa.");
    }
    messages.push("Oharra: zuzenketa hau orientagarria da; ez du irakaslearen irakurketa ordezkatzen.");
    return messages;
  }

  function buildPauFeedback(info) {
    var messages = [];
    var missing = info.conceptResults.filter(function (item) { return !item.mentioned; });
    var wellConnected = !info.listLike && info.linkSentences >= 2 && info.connectorHits.length >= 2;

    // 1. Kontzeptuak agertzen dira?
    if (!missing.length) {
      messages.push("✅ Kontzeptuak erabili dituzu.");
    } else {
      messages.push("⚠️ Lau kontzeptuetatik batzuk ez dira argi agertzen: " + missing.map(function (item) {
        return item.concept.kontzeptua;
      }).join(", ") + ". PAU erantzunean laurak txertatu behar dituzu.");
    }

    // 2. Definitu ala lotu? Hau da PAU moduaren gakoa.
    if (wellConnected) {
      messages.push("✅ Ez dituzu definitu bakarrik: kontzeptuen arteko lotura historikoa eraiki duzu.");
    } else {
      messages.push("⚠️ Baina ez da nahikoa definitzea: lotura historikoa azaldu behar da.");
      messages.push("🔧 Hurrengo saiakeran, saiatu esaldi hauen egitura erabiltzen: «Testuinguru honetan… Horrek eragin zuen… Ondorioz… Horregatik…»");
    }

    // 3. Testuingurua eta kronologia.
    if (!info.temporalHits.length || info.chronologicalOk < 4) {
      messages.push("🕐 Gehitu testuinguru historikoa: garaia, data edo prozesuaren ordena argia.");
    }

    // 4. Amaiera-esaldia eta luzera.
    if (info.words > PAU_WORD_LIMIT) {
      messages.push("✂️ " + PAU_WORD_LIMIT + " hitzeko muga gainditu duzu (" + info.words + " hitz). PAU azterketan sintesia ezinbestekoa da: laburtu eta utzi funtsezkoa.");
    } else if (info.words < 60) {
      messages.push("➕ Erantzuna laburregia da: falta dira testuinguru labur bat eta ideia nagusia ixten duen amaiera-esaldi bat.");
    }

    messages.push("Oharra: zuzenketa hau orientagarria da; ez du irakaslearen irakurketa ordezkatzen.");
    return messages;
  }

  function renderAssessment(assessment) {
    var quality = assessment.score >= 75 ? "good" : assessment.score >= 50 ? "warn" : "bad";
    el.resultBox.className = "result-box";
    el.resultBox.innerHTML =
      '<div class="score-card">' +
      '<span class="score-pill ' + quality + '">' + esc(MODE_LABELS[state.mode]) + "</span>" +
      "<strong>" + assessment.score + "/100</strong>" +
      "<p>Zuzenketa orientagarria.</p>" +
      "</div>" +
      '<ul class="rubric-list">' +
      assessment.rubric.map(function (row) {
        return "<li><span>" + esc(row.label) + "</span><strong>" + row.score + "/" + row.max + "</strong></li>";
      }).join("") +
      "</ul>" +
      '<ul class="feedback-list">' +
      assessment.feedback.map(function (message) {
        return "<li>" + esc(message) + "</li>";
      }).join("") +
      "</ul>";
  }

  function saveAttempt(assessment) {
    var progress = loadProgress();
    var selectedConcepts = state.selected.map(byId);
    var missing = assessment.details.conceptResults
      .filter(function (item) { return !item.mentioned || item.keywordHits.length === 0; })
      .map(function (item) { return item.concept.id; });

    progress.attempts.push({
      id: "attempt-" + Date.now(),
      date: new Date().toISOString(),
      mode: state.mode,
      challenge: state.challenge.map(prop("id")),
      selected: state.selected.slice(),
      board: Object.assign({}, state.board),
      score: assessment.score,
      words: assessment.details.words,
      rubric: assessment.rubric.map(function (row) {
        return { key: row.key, score: row.score, max: row.max };
      })
    });

    selectedConcepts.forEach(function (concept) {
      progress.practiced[concept.id] = (progress.practiced[concept.id] || 0) + 1;
      if (assessment.score >= 80 && missing.indexOf(concept.id) === -1) {
        progress.mastered[concept.id] = (progress.mastered[concept.id] || 0) + 1;
      }
      if (missing.indexOf(concept.id) !== -1) {
        progress.confused[concept.id] = (progress.confused[concept.id] || 0) + 1;
      }
    });

    if (progress.attempts.length > 40) progress.attempts = progress.attempts.slice(-40);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  function renderProgress() {
    var progress = loadProgress();
    var attempts = progress.attempts;
    var avg = attempts.length
      ? Math.round(attempts.reduce(function (sum, item) { return sum + item.score; }, 0) / attempts.length)
      : 0;
    el.statAttempts.textContent = attempts.length;
    el.statAverage.textContent = avg;
    el.statPracticed.textContent = Object.keys(progress.practiced).length;
    el.lastScore.textContent = attempts.length ? attempts[attempts.length - 1].score + "/100" : "-";
    el.masteredList.textContent = topConcepts(progress.mastered).join(", ") || "-";
    el.confusedList.textContent = topConcepts(progress.confused).join(", ") || "-";
  }

  function clearProgress() {
    if (!window.confirm("Ziur zaude aurrerapen lokala ezabatu nahi duzula?")) return;
    localStorage.removeItem(STORAGE_KEY);
    renderProgress();
  }

  function loadProgress() {
    try {
      var parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (parsed && parsed.attempts) return parsed;
    } catch (error) {
      // Datu zahar edo hondatuak badaude, berriro hasiko da.
    }
    return { attempts: [], practiced: {}, mastered: {}, confused: {}, commonErrors: {} };
  }

  function saveDraft() {
    var draft = {
      mode: state.mode,
      model: state.model,
      challenge: state.challenge.map(prop("id")),
      selected: state.selected,
      board: state.board,
      remaining: state.remaining,
      answer: el.answer.value,
      hintsUsed: state.hintsUsed
    };
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    el.draftStatus.textContent = "Zirriborroa gordeta.";
  }

  function restoreDraft() {
    try {
      var draft = JSON.parse(localStorage.getItem(DRAFT_KEY));
      if (!draft || !draft.challenge) return false;
      state.mode = draft.mode || state.mode;
      state.model = draft.model || state.model;
      state.challenge = draft.challenge.map(byId).filter(Boolean);
      state.selected = (draft.selected || []).filter(function (id) { return byId(id); });
      state.board = draft.board || {};
      state.remaining = draft.remaining || MODE_SECONDS[state.mode];
      state.hintsUsed = draft.hintsUsed || 0;
      if (el.answer) el.answer.value = draft.answer || "";
      return state.challenge.length === 5;
    } catch (error) {
      localStorage.removeItem(DRAFT_KEY);
    }
    return false;
  }

  function renderWordCount() {
    var count = normalize(el.answer.value).split(/\s+/).filter(Boolean).length;
    if (state.mode === "pau") {
      el.wordCount.textContent = count + " / " + PAU_WORD_LIMIT + " hitz";
      el.wordCount.classList.toggle("is-over", count > PAU_WORD_LIMIT);
    } else {
      el.wordCount.textContent = count + " hitz";
      el.wordCount.classList.remove("is-over");
    }
  }

  function isBoardComplete() {
    var values = Object.keys(state.board).map(function (key) { return state.board[key]; }).filter(Boolean);
    return values.length === 4 && unique(values).length === 4;
  }

  function conceptMentioned(concept, normalizedText) {
    return conceptAliases(concept).some(function (alias) {
      return normalizedText.indexOf(normalize(alias)) !== -1;
    });
  }

  function mentionCount(concept, normalizedText) {
    return conceptAliases(concept).reduce(function (count, alias) {
      var needle = normalize(alias);
      var parts = normalizedText.split(needle);
      return count + Math.max(0, parts.length - 1);
    }, 0);
  }

  function keywordHits(concept, normalizedText) {
    return concept.hitzGakoak.filter(function (keyword) {
      return normalizedText.indexOf(normalize(keyword)) !== -1;
    }).slice(0, 3);
  }

  function conceptAliases(concept) {
    return unique([concept.kontzeptua].concat(concept.aliases || []));
  }

  function looksLikeList(text) {
    var lines = text.split(/\n+/).map(function (line) { return line.trim(); }).filter(Boolean);
    var bulletLines = lines.filter(function (line) { return /^[-*0-9.)]+/.test(line); }).length;
    var colonLines = lines.filter(function (line) { return line.indexOf(":") !== -1 && line.length < 80; }).length;
    return bulletLines >= 2 || colonLines >= 3;
  }

  // Esaldi kopurua, non bi kontzeptu (edo gehiago) elkarrekin azaltzen diren:
  // benetako lotura prosan (ez zerrendatzea) neurtzeko.
  function linkSentenceCount(text, concepts) {
    var sentences = String(text || "").split(/[.!?;\n]+/);
    return sentences.reduce(function (count, sentence) {
      var norm = normalize(sentence);
      if (!norm) return count;
      var present = concepts.filter(function (concept) {
        return conceptAliases(concept).some(function (alias) {
          return norm.indexOf(normalize(alias)) !== -1;
        });
      }).length;
      return present >= 2 ? count + 1 : count;
    }, 0);
  }

  function boardChronologyScore() {
    var roles = MODELS[state.model];
    var ordered = roles.map(function (role) { return byId(state.board[role.id]); }).filter(Boolean);
    if (ordered.length < 4) return 0;
    var inversions = 0;
    for (var i = 1; i < ordered.length; i += 1) {
      if ((ordered[i].ordenHistorikoa || 0) + 8 < (ordered[i - 1].ordenHistorikoa || 0)) inversions += 1;
    }
    if (inversions === 0) return 7;
    if (inversions === 1) return 4;
    return 1;
  }

  function balanceScoreFor(results) {
    if (results.some(function (item) { return !item.mentioned; })) return 2;
    var counts = results.map(function (item) { return item.mentions || 1; });
    var max = Math.max.apply(Math, counts);
    var min = Math.min.apply(Math, counts);
    if (max - min <= 1) return 10;
    if (max - min <= 3) return 7;
    return 4;
  }

  function relationScoreFor(concepts, connectorCount) {
    var relatedPairs = 0;
    concepts.forEach(function (concept) {
      concepts.forEach(function (other) {
        if (concept.id !== other.id && concept.loturak.indexOf(other.id) !== -1) relatedPairs += 1;
      });
    });
    relatedPairs = Math.ceil(relatedPairs / 2);
    if (relatedPairs >= 2 && connectorCount >= 2) return 10;
    if (relatedPairs >= 1 && connectorCount >= 1) return 7;
    if (connectorCount >= 2) return 5;
    return 2;
  }

  function flashMessage(message) {
    el.resultBox.className = "result-box empty";
    el.resultBox.innerHTML = "<p>" + esc(message) + "</p>";
  }

  function topConcepts(map) {
    return Object.keys(map)
      .sort(function (a, b) { return map[b] - map[a]; })
      .slice(0, 3)
      .map(function (id) { return byId(id) ? byId(id).kontzeptua : id; });
  }

  function byId(id) {
    return CONCEPTS.filter(function (concept) { return concept.id === id; })[0];
  }

  function sample(items, count) {
    return shuffle(items).slice(0, count);
  }

  function shuffle(items) {
    var copy = items.slice();
    for (var i = copy.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var swap = copy[i];
      copy[i] = copy[j];
      copy[j] = swap;
    }
    return copy;
  }

  function unique(items) {
    return items.filter(function (item, index) { return items.indexOf(item) === index; });
  }

  function flatten(items) {
    return Array.prototype.concat.apply([], items);
  }

  function prop(key) {
    return function (item) { return item[key]; };
  }

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  }

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  init();
})();
