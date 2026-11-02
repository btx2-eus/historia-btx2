/* Ulermen-galderen bankua · Historia BTX2
 * Galdera bakoitzak: epigrafe ofiziala (USaP 2026-27), mota, galdera, ideia gakoak,
 * erlazio gakoa (3. mailarako ezinbestekoa), ohiko akatsak eta pista sokratikoak.
 * Gai berri bat gehitzeko: gehitu objektu bat `gaiak` zerrendan, egitura berarekin.
 */
window.ULERMEN_BANKUA = {
  bertsioa: "2026-11-02",

  motak: {
    kausa: { izena: "Kausak", galdera: "Zergatik gertatu zen?" },
    ondorioa: { izena: "Ondorioak", galdera: "Zer ekarri zuen?" },
    aldaketa: { izena: "Aldaketa", galdera: "Zer aldatu zen eta zergatik?" },
    kontzeptua: { izena: "Kontzeptua testuinguruan", galdera: "Zer zen eta zergatik da garrantzitsua?" },
    akatsa: { izena: "Akatsa zuzendu", galdera: "Zer dago gaizki baieztapen honetan?" }
  },

  mailak: [
    { maila: 0, izena: "Ez du ulertu", azalpena: "Ez dio galderari erantzuten, edo funtsezko akats historiko batek erantzun osoa baliogabetzen du." },
    { maila: 1, izena: "Zatika", azalpena: "Datu edo ideia solteak ditu, baina deskribatu edo zerrendatu egiten ditu: ez du azaltzen zergatik edo nola." },
    { maila: 2, izena: "Ulertu du", azalpena: "Ideia gako gehienak zuzen ditu eta galderari erantzuten dio, baina erlazio gakoa partziala edo inplizitua da." },
    { maila: 3, izena: "Ondo garatua", azalpena: "Ideia gakoak erlazio esplizitu batekin lotzen ditu (kausa → ondorioa, aurretik → ondoren…), zehaztasunez (datak, eragileak, kontzeptuak) eta akatsik gabe." }
  ],

  arauak: [
    "Erlazio gakorik ez badago, gehienez 2. maila.",
    "Akats historiko larri bat badago (data, eragile edo prozesu okerra), gehienez 1. maila.",
    "Kontzeptuen zerrenda edo definizio solteak ez dira azalpena: gehienez 1. maila.",
    "Ideia gakoak ez dira hitzez hitz eskatzen: esanahi bera duten formulazioak onartu."
  ],

  gaiak: [
    {
      num: 4,
      izenburua: "II. Errepublika",
      urteak: "1931–1936",
      orria: "temas/04-bigarren-errepublika.html",
      epigrafeak: [
        { num: "4.1", izenburua: "Monarkiaren behin betiko krisia", atala: "g4-1" },
        { num: "4.2", izenburua: "Biurteko errepublikar-sozialista eta haren erreformak", atala: "g4-2" },
        { num: "4.3", izenburua: "Biurteko erradikal-cedista edo kontrarreformatzailea", atala: "g4-4" },
        { num: "4.4", izenburua: "Fronte Popularraren etapa", atala: "g4-5" }
      ],
      galderak: [
        {
          id: "4.1-a",
          epigrafea: "4.1",
          mota: "kausa",
          galdera: "Zergatik esaten da Primo de Riveraren diktadurak, monarkia salbatzeko sortu zenak, monarkia bera hondoratu zuela?",
          ideiak: [
            "Alfonso XIII.ak 1923ko estatu-kolpea onartu eta diktadura babestu zuen; 1876ko Konstituzioa eten zen.",
            "Diktadurak porrot egin zuenean (1930: krisi ekonomikoa, oposizioa, babes militarraren galera), erregea haren konplize gisa ikusi zen.",
            "Berenguer eta Aznarren gobernuek («Dictablanda») ez zuten itzulera konstituzionala bideratzea lortu.",
            "Oposizioa (errepublikanoak, sozialistak, katalanistak) monarkiaren aurka bildu zen."
          ],
          erlazioa: "Erregeak bere burua diktadurari lotu ziolako, diktaduraren porrota monarkiaren beraren porrota bihurtu zen.",
          akatsak: [
            "Primo de Riverak erregea kendu zuela esatea.",
            "Diktadura 1931 arte iraun zuela esatea (1930ean amaitu zen).",
            "Monarkiaren erorketa 1929ko krisiaren ondorio hutsa dela esatea, erregearen erantzukizuna aipatu gabe."
          ],
          pistak: [
            "Nork onartu zuen 1923ko kolpea, eta zer ondorio izan zuen horrek erregearen irudiarentzat?",
            "Diktadura erori zenean, zergatik ez zen monarkia «salbu» geratu?",
            "Zer gertatu zen 1930 eta 1931 bitartean Berenguer eta Aznarren gobernuekin?"
          ]
        },
        {
          id: "4.1-b",
          epigrafea: "4.1",
          mota: "kontzeptua",
          galdera: "Zer izan zen Donostiako Ituna (1930) eta zergatik izan zen erabakigarria Errepublikaren etorrerarako?",
          ideiak: [
            "1930eko abuztuan Donostian sinatutako akordioa: errepublikanoak (Alcalá-Zamora, Maura, Lerroux…), sozialistak (Prieto, De los Ríos) eta ezker katalanista.",
            "Helburua: monarkia amaitu eta errepublika demokratiko bat ezartzea; Kataluniaren autonomia aintzat hartzea.",
            "«Errepublika Aldarrikatzeko Batzordea» sortu zuen, 1931ko apirilean behin-behineko gobernua izango zena.",
            "Oposizio zatitua lehen aldiz helburu komun baten inguruan batu zen."
          ],
          erlazioa: "Itunak oposizioa batu eta gobernu alternatibo bat prestatu zuen; horregatik, monarkia erori zenean, boterea hartzeko prest zegoen talde bat zegoen.",
          akatsak: [
            "EAJ-PNV itunaren parte izan zela esatea (ez zen izan).",
            "Itunak berak Errepublika aldarrikatu zuela esatea (1931ko apirilaren 14an aldarrikatu zen).",
            "Iraultza sozial bat egiteko akordioa izan zela esatea (erregimen politikoa aldatzea zen helburua)."
          ],
          pistak: [
            "Zein indar politiko bildu ziren Donostian, eta zein falta zen Euskal Herritik?",
            "Itunean sortutako batzordeak zer bihurtu zen 1931ko apirilean?",
            "Zergatik zen garrantzitsua oposizioa batzea, monarkia ahul zegoen une hartan?"
          ]
        },
        {
          id: "4.1-c",
          epigrafea: "4.1",
          mota: "akatsa",
          galdera: "Ikasle batek hau idatzi du: «1931ko apirilaren 12an errepublikanoek hauteskunde orokorrak irabazi zituzten Espainia osoan, eta horregatik erori zen monarkia.» Zer dago gaizki? Azaldu zuzen.",
          ideiak: [
            "Udal-hauteskundeak ziren, ez hauteskunde orokorrak.",
            "Hautagai errepublikanoek hiriburuetan eta hiri handietan irabazi zuten; zinegotzi guztiak kontatuta, monarkikoek gehiago lortu zituzten, batez ere landa-eremuan.",
            "Emaitza monarkiari buruzko plebiszitu gisa ulertu zen: hirietako boto librea zilegitasun-galeraren seinale zen.",
            "Erregeak, babes politiko eta militarrik gabe, erbestea aukeratu zuen eta apirilaren 14an Errepublika aldarrikatu zen."
          ],
          erlazioa: "Monarkia ez zen bozka kopuruagatik erori, hirietako emaitza zilegitasunaren galera gisa interpretatu zelako baizik.",
          akatsak: [
            "Akatsa zuzentzea baina zergatik erori zen monarkia azaldu gabe uztea.",
            "Errepublikanoek hauteskundeak Espainia osoan irabazi zituztela onartzea."
          ],
          pistak: [
            "Zer motatako hauteskundeak izan ziren 1931ko apirilaren 12koak?",
            "Non irabazi zuten errepublikanoek, eta zergatik zuen horrek hainbeste pisu politiko?",
            "Bozka kopurua ez bazen erabakigarria izan, zer izan zen?"
          ]
        },
        {
          id: "4.2-a",
          epigrafea: "4.2",
          mota: "ondorioa",
          galdera: "Zergatik sortu zuen 1932ko nekazaritza-erreformak gatazka, bai haren aurkakoen artean bai hura itxaroten zutenen artean?",
          ideiak: [
            "Arazoa: latifundioak Andaluzian eta Extremaduran, jabe gutxi batzuen esku, eta lurrik gabeko jornalero ugari.",
            "1932ko legeak jabetza handiak desjabetu eta nekazariei banatzea aurreikusten zuen.",
            "Lur-jabe handiek eta eskuinak erasotzat hartu zuten eta erreformari aurre egin zioten.",
            "Aplikazioa oso motela eta mugatua izan zen (burokrazia, diru gutxi): familia gutxi kokatu ziren.",
            "Jornalero eta anarkisten frustrazioa: lurren okupazioak eta gatazkak (Casas Viejas, 1933)."
          ],
          erlazioa: "Erreforma batzuentzat gehiegi zen eta besteentzat gutxiegi eta motelegi; horregatik bi aldeetatik sortu zuen oposizioa.",
          akatsak: [
            "Errepublikak lurrak banatu eta nekazaritza-arazoa konpondu zuela esatea.",
            "Erreforma Euskal Herrian edo iparraldean zentratu zela esatea.",
            "Casas Viejas eskuinaren erreakzio gisa aurkeztea (nekazari anarkistak eta Guardia Zibilaren errepresioa izan zen)."
          ],
          pistak: [
            "Zein eskualdetan zegoen nekazaritza-arazoa larriena, eta zergatik?",
            "Lur-jabeen begietatik, zer zekarren erreformak?",
            "Jornaleroen begietatik, zer gertatu zen erreformaren erritmoarekin?"
          ]
        },
        {
          id: "4.2-b",
          epigrafea: "4.2",
          mota: "kausa",
          galdera: "Zer bilatzen zuen Azañaren erreforma militarrak, eta zergatik bihurtu zen arrisku-iturri Errepublikarentzat?",
          ideiak: [
            "Helburua: armada modernizatzea eta botere zibilaren menpe jartzea.",
            "Ofizial soberakina murriztea (erretiroa soldata osoarekin) eta Errepublikari leialtasun-zina eskatzea.",
            "Zaragozako Akademia Militar Nagusia ixtea (Franco zen zuzendaria).",
            "Ofizial kontserbadore askoren haserrea; 1932ko Sanjurjada, 1936ko kolpearen aurrekaria."
          ],
          erlazioa: "Armadaren boterea mugatzeko neurriek ofizial askoren aurkako jarrera elikatu zuten, eta haietako batzuk Errepublikaren aurka altxatu ziren.",
          akatsak: [
            "Azañak armada desegin zuela esatea.",
            "Sanjurjada 1936an gertatu zela esatea (1932koa da)."
          ],
          pistak: [
            "Zer harreman nahi zuen Azañak armadaren eta gobernu zibilaren artean?",
            "Nola sentitu ziren ofizial kontserbadoreak? Ba al dago 1932ko gertakari bat hori erakusten duena?",
            "Zer lotura dago erreforma honen eta 1936ko uztailaren artean?"
          ]
        },
        {
          id: "4.2-c",
          epigrafea: "4.2",
          mota: "kontzeptua",
          galdera: "Zergatik izan ziren hezkuntza-erreforma eta Eliza-Estatua bereizketa Errepublikaren itxaropen-iturri eta, aldi berean, gatazka-iturri?",
          ideiak: [
            "1931ko Konstituzioak Estatu laikoa ezarri zuen: Eliza eta Estatua bereizi, jesuitak desegin.",
            "Hezkuntza publiko, laiko eta doakoa: milaka eskola berri eta irakasleen prestakuntza; analfabetismoa murriztea eta modernizatzea.",
            "Elizaren hierarkiak eta katoliko askok erlijioaren aurkako erasotzat hartu zuten.",
            "Eskuin katolikoa antolatu zen (CEDA, 1933) eta polarizazioa handitu zen; 1931ko eliza-erreketek tentsioa areagotu zuten."
          ],
          erlazioa: "Batzuentzat modernizazioa zena, beste batzuentzat beren balioen aurkako erasoa zen; proiektu berak ilusioa eta erresistentzia sortu zituen.",
          akatsak: [
            "Errepublikak erlijioa debekatu zuela esatea (erlijio-askatasuna aitortu zen).",
            "Hezkuntza-erreforma Elizarekin adostu zela esatea."
          ],
          pistak: [
            "Zer esan nahi du Estatu laikoak? Nola islatu zen 1931ko Konstituzioan?",
            "Zer espero zuten erreformatzaileek eskola publikoaren bidez?",
            "Nola erreakzionatu zuen Elizak, eta zer ondorio politiko izan zuen horrek 1933an?"
          ]
        },
        {
          id: "4.3-a",
          epigrafea: "4.3",
          mota: "aldaketa",
          galdera: "Zergatik deitzen zaio 1933–1935 aldiari «biurteko kontrarreformatzailea»? Azaldu bi adibiderekin.",
          ideiak: [
            "1933ko azaroko hauteskundeak eskuinak irabazi zituen (CEDA eta Lerrouxen Alderdi Erradikala); emakumeek lehen aldiz bozkatu zuten; ezkerra zatituta eta CNTk abstentzioa bultzatu zuen.",
            "Lerrouxek gobernatu zuen, CEDAren babesarekin (CEDA 1934ko urrian sartu zen gobernuan).",
            "Lehen biurteko erreformak geldiarazi edo desegin ziren: adibidez, nekazaritza-erreforma (lurrak jabeei itzuli), erlijio-politika (Elizari eskubideak itzuli), militarrak (ofizial kontserbadoreak berriro) edo hezkuntza (aurrekontuak murriztu).",
            "Ondorioa: ezkerraren eta langileen frustrazioa eta polarizazioa."
          ],
          erlazioa: "«Kontrarreforma» ez da gobernu-aldaketa soilik: aurreko biurtekoaren erreformak geldiarazi edo atzera egitea da, eta adibideek hori frogatu behar dute.",
          akatsak: [
            "CEDAk 1933an zuzenean gobernua osatu zuela esatea.",
            "Gil-Robles gobernuburu edo presidente izan zela esatea.",
            "Adibideak eman baina zein erreformaren aurkakoak diren ez esatea."
          ],
          pistak: [
            "Nork irabazi zuen 1933ko azaroan, eta zergatik galdu zuen ezkerrak?",
            "«Kontrarreforma» hitzean, zer da «kontra» horren objektua?",
            "Aukeratu lehen biurteko erreforma bat: zer egin zuen gobernu berriak harekin?"
          ]
        },
        {
          id: "4.3-b",
          epigrafea: "4.3",
          mota: "kausa",
          galdera: "Zergatik piztu zen 1934ko Urriko Iraultza, eta zergatik izan zen Asturiasen beste lekuetan baino indartsuagoa?",
          ideiak: [
            "Abiapuntua: 1934ko urrian CEDAren hiru ministro gobernuan sartu ziren.",
            "Ezkerrak (PSOE, UGT) faxismorako atarikotzat hartu zuen, Europako testuinguruan (Hitler 1933, Austria 1934); greba orokor iraultzailea deitu zuen.",
            "Asturiasen meatzarien batasuna (sozialistak, anarkistak eta komunistak): lurraldea bi astez kontrolatu zuten.",
            "Katalunian Companysek «Kataluniako Estatua» aldarrikatu zuen Errepublika federalaren barruan, baina berehala zapaldu zuten.",
            "Errepresio gogorra: Franco eta Afrikako armada Asturiasen; mila hildako baino gehiago eta milaka preso."
          ],
          erlazioa: "CEDAren sarrera faxismoaren mehatxu gisa interpretatu zen eta iraultza piztu zuen; Asturiasen langile-batasunak eman zion indar berezia.",
          akatsak: [
            "Urriko Iraultza eskuinaren altxamendua izan zela esatea.",
            "Gerra Zibilaren hasiera izan zela esatea.",
            "Companysek Katalunia independente aldarrikatu zuela esatea (Errepublika federalaren barruko estatua izan zen)."
          ],
          pistak: [
            "Zer gertatu zen 1934ko urrian gobernuan, ezkerra mobilizatzeko?",
            "Zergatik zen hain beldurgarria ezkerrarentzat, Europan 1933–1934an gertatzen ari zenarekin alderatuta?",
            "Zer zuten Asturiasko langileek beste lekuetan falta zena?"
          ]
        },
        {
          id: "4.3-c",
          epigrafea: "4.3",
          mota: "ondorioa",
          galdera: "Nola lagundu zuten 1934ko errepresioak eta 1935eko ustelkeria-aferek Fronte Popularraren garaipena prestatzen?",
          ideiak: [
            "1934ko errepresioak milaka preso politiko utzi zituen; haien amnistia ezkerra batzeko ardatza bihurtu zen.",
            "Estraperlo eta Nombela aferek Lerroux eta Alderdi Erradikala desprestigiatu zituzten; gobernua erori zen.",
            "Alcalá-Zamorak Gorteak desegin eta 1936ko otsailerako hauteskundeak deitu zituen.",
            "Ezkerrak 1933ko zatiketaren ikasgaia ikasi zuen eta koalizio bakarrean aurkeztu zen."
          ],
          erlazioa: "Eskuineko gobernuaren higadura eta ezkerraren batasuna (amnistiaren inguruan) batera gertatu ziren, eta horrek ekarri zuen 1936ko garaipena.",
          akatsak: [
            "Ustelkeria-aferak CEDArekin edo ezkerrarekin lotzea (Lerrouxen inguruko erradikalak izan ziren).",
            "Bi faktoreak aipatu baina hauteskundeekin lotu gabe uztea."
          ],
          pistak: [
            "1934ko errepresioaren ondoren, zer eskaera komun zuten ezkerreko indar guztiek?",
            "Nor geratu zen nahastuta Estraperlo aferan, eta zer ondorio izan zuen gobernuarentzat?",
            "Zer egin zuen ezkerrak 1936an 1933an egin ez zuena?"
          ]
        },
        {
          id: "4.4-a",
          epigrafea: "4.4",
          mota: "kontzeptua",
          galdera: "Zer zen Fronte Popularra eta zergatik irabazi zituen 1936ko otsaileko hauteskundeak?",
          ideiak: [
            "Ezkerreko koalizio zabala: errepublikano aurrerakoiak (Azaña), PSOE eta UGT, Alderdi Komunista eta ezker nazionalistak (ERC, EAE-ANV).",
            "Programa: 1934ko presoen amnistia, 1931ko erreformak berrabiaraztea eta autonomia-estatutuak.",
            "Europako antifaxismoaren testuingurua (fronte popularren estrategia, Frantzian ere bai).",
            "1933an ez bezala, ezkerra batuta aurkeztu zen eta hauteskunde-sistemak koalizio handiak saritzen zituen; otsailaren 16an irabazi zuen."
          ],
          erlazioa: "1933an zatiketak porrota ekarri zuen bezala, 1936an batasunak eta amnistiaren eskaerak garaipena ekarri zuten.",
          akatsak: [
            "Fronte Popularra alderdi bakarra edo alderdi komunista bat zela esatea.",
            "EAJ-PNV Fronte Popularraren parte izan zela esatea (bakarrik aurkeztu zen).",
            "Fronte Popularrak gerra irabazi zuela edo kolpea eman zuela nahastea."
          ],
          pistak: [
            "Zer alderdik osatzen zuten koalizioa? Alderdi bakarra zen?",
            "Zein zen haien eskaera nagusia, 1934ko gertakarien ondoren?",
            "Zer egin zuen ezkerrak desberdin 1933arekin alderatuta?"
          ]
        },
        {
          id: "4.4-b",
          epigrafea: "4.4",
          mota: "kausa",
          galdera: "Zergatik hazi ziren indarkeria eta polarizazioa 1936ko udaberrian, eta nola erabili zuten kolpistek giro hori?",
          ideiak: [
            "Ezkerreko sektoreen lurren okupazioak eta grebak, gobernuaren kontroletik kanpo; lur-jabe eta enpresaburuen presioa eta boikota.",
            "Falangeren kale-borroka eta atentatuak, eta ezkerreko milizien erantzunak.",
            "Krisi instituzionala: Alcalá-Zamora kargutik kendu, Azaña presidente eta Casares Quirogaren gobernu ahula.",
            "Castillo tenientearen (uztailak 12) eta Calvo Soteloren (uztailak 13) hilketak.",
            "Eskuinak «anarkia» diskurtsoa zabaldu zuen; konspirazio militarrak (Mola) giro hori erabili zuen kolpea justifikatzeko."
          ],
          erlazioa: "Indarkeriak kolpearen aitzakia eman zuen, baina konspirazioa lehenagotik zetorren: polarizazioa ez zen kolpearen kausa bakarra, haren justifikazioa baizik.",
          akatsak: [
            "Indarkeria alde bakarrari egoztea.",
            "Kolpea Calvo Soteloren hilketaren ondorioz bakarrik antolatu zela esatea."
          ],
          pistak: [
            "Zer gertatzen zen landa-eremuan eta kaleetan 1936ko udaberrian?",
            "Zergatik zen ahula gobernua egoera kontrolatzeko?",
            "Militarrak noiztik zeuden konspiratzen? Nola erabili zuten «ordena» ideia?"
          ]
        },
        {
          id: "4.4-c",
          epigrafea: "4.4",
          mota: "akatsa",
          galdera: "Ikasle batek idatzi du: «Gerra Zibila Calvo Soteloren hilketaren ondorioz hasi zen.» Zergatik da azalpen hori nahikoa ez? Azaldu zuzen.",
          ideiak: [
            "Konspirazio militarra 1936ko otsaileko hauteskundeen ondoren hasi zen, Mola koordinatzaile zela.",
            "Kausa sakonak: polarizazioa, erreformen aurkako erresistentzia (lur-jabeak, Eliza, armada) eta eskuin antierrepublikanoak hauteskundeen emaitza ez onartzea.",
            "Calvo Soteloren hilketa (uztailak 13) detonantea izan zen: kolpea azkartu zuen eta zalantzan zeuden militar batzuk erabakitzera bultzatu zituen.",
            "Kolpea uztailaren 17an hasi zen Afrikan; porrot partzialak gerra ekarri zuen, ez berehalako garaipena."
          ],
          erlazioa: "Kausa sakonak, epe laburreko kausak eta detonantea bereizi behar dira: hilketak kolpea azkartu zuen, baina ez zuen sortu.",
          akatsak: [
            "Baieztapena zuzentzea baina beste kausa bakar bat ordezko gisa jartzea.",
            "Gerra eta estatu-kolpea gauza bera direla esatea (kolpearen porrot partzialak ekarri zuen gerra)."
          ],
          pistak: [
            "Noiz hasi ziren militarrak kolpea prestatzen? Hilketaren aurretik ala ondoren?",
            "Zer arazo sakon zeuden 1931tik metatuta?",
            "Zer da «detonante» bat, eta nola bereizten da «kausa» batetik?"
          ]
        }
      ]
    },
    {
      num: 5,
      izenburua: "Gerra Zibila",
      urteak: "1936–1939",
      orria: "temas/05-gerra-zibila.html",
      epigrafeak: [
        { num: "5.1", izenburua: "Altxamendu militarra eta gobernuaren erantzuna", atala: "g5-1" },
        { num: "5.2", izenburua: "Nazioarteko testuingurua", atala: "g5-2" },
        { num: "5.3", izenburua: "Gerraren bilakaera", atala: "g5-4" },
        { num: "5.4", izenburua: "Erretagoardiako indarkeria", atala: "g5-5" }
      ],
      galderak: [
        {
          id: "5.1-a",
          epigrafea: "5.1",
          mota: "kausa",
          galdera: "Zergatik bihurtu zen 1936ko uztaileko estatu-kolpea hiru urteko gerra zibil?",
          ideiak: [
            "Altxamenduak porrot partziala izan zuen: matxinatuek ez zituzten hiri nagusiak kontrolatu (Madril, Bartzelona, Valentzia, Bilbo).",
            "Armada eta segurtasun-indarrak zatitu egin ziren: batzuk matxinatu, beste batzuk Errepublikari leial.",
            "Errepublikaren eremuan langile-erakundeek eta miliziek kolpeari aurre egin zioten.",
            "Matxinatuek Afrikako armada (eta laster Alemaniaren eta Italiaren laguntza) zuten; Errepublikak hiriak, industria eta baliabideak."
          ],
          erlazioa: "Kolpeak ez zuen ez garaipena ez porrot osoa lortu: herrialdea bitan zatitu zen, eta bi eremuek borrokan jarraitzeko indarra zutenez, kolpe azkarra gerra luze bihurtu zen.",
          akatsak: [
            "Kolpea eta gerra gauza bera direla esatea (gerra kolpearen porrot partzialaren ondorioa da).",
            "Matxinatuek hasieratik lurralde gehiena eta hiri nagusiak hartu zituztela esatea.",
            "Gerraren hasiera Calvo Soteloren hilketan jartzea, kolpearen emaitza azaldu gabe."
          ],
          pistak: [
            "Zer hiri garrantzitsu geratu ziren matxinatuen eskuetatik kanpo 1936ko uztailaren amaieran?",
            "Kolpe batek bi egunetan irabazten edo galtzen badu, zer gertatzen da? Eta ez bata ez bestea gertatzen bada?",
            "Bi eremuetako bakoitzak zer baliabide zituen borrokan jarraitzeko?"
          ]
        },
        {
          id: "5.1-b",
          epigrafea: "5.1",
          mota: "aldaketa",
          galdera: "Nola aldatu zen boterearen antolaketa Errepublikaren eremuan Giral gobernutik Largo Caballeroren gobernura (1936)?",
          ideiak: [
            "Kolpeak Estatuaren egiturak kolokan utzi zituen: armada eta polizia zatituta, gobernuak ezin zuen ordena bermatu.",
            "Giral gobernuak (uztaila–iraila) herritarrei armak eman zizkien; botere-hutsunean komiteek eta miliziek boterea hartu zuten.",
            "1936ko irailean Largo Caballeroren gobernu antifaxista sortu zen, langile-erakundeak barne hartuta (PSOE, PCE, UGT, eta azaroan CNT).",
            "Helburua: boterea berriro zentralizatzea, miliziak Armada Popularrean integratzea eta industria gerrara egokitzea."
          ],
          erlazioa: "Estatuaren kolapsoak boterea zatitu zuenez, gerra irabazteko gobernuak langile-erakundeak gobernura ekarri eta boterea berriro bildu behar izan zuen.",
          akatsak: [
            "Errepublikaren eremuan hasieratik aginte bateratu eta sendoa zegoela esatea.",
            "Armada Popularra gerraren hasieratik zegoela esatea (miliziak militarizatuz sortu zen).",
            "Largo Caballero gobernuko buru zela altxamendua gertatu zenean esatea."
          ],
          pistak: [
            "Kolpearen ondoren, nork zuen benetan indarra kaleetan: gobernuak ala komiteek eta miliziek?",
            "Zergatik da zaila gerra bat irabaztea milizia askok bakoitzak bere aldetik borrokatzen badu?",
            "Zein erakunde sartu ziren Largo Caballeroren gobernuan, eta zergatik zen hori berria?"
          ]
        },
        {
          id: "5.1-c",
          epigrafea: "5.1",
          mota: "akatsa",
          galdera: "Ikasle batek idatzi du: «Francok bakarrik antolatu zuen altxamendua eta hasieratik izan zen matxinatuen buruzagia.» Zer dago gaizki? Azaldu zuzen.",
          ideiak: [
            "Konspirazioaren koordinatzaile nagusia Emilio Mola izan zen, Nafarroatik.",
            "Konspirazioaren burua Sanjurjo izan behar zen (1936ko uztailean hegazkin-istripuz hil zen).",
            "Konspirazioan jeneral askok (Queipo de Llano, Goded, Cabanellas…) eta monarkikoek parte hartu zuten.",
            "Franco Afrikako armadaren buru izan zen hasieran, eta 1936ko urrian lortu zuen aginte gorena: Estatuko Buru eta Jeneralisimo."
          ],
          erlazioa: "Kolpea talde-konspirazio bat izan zen; Franco gerran zehar bihurtu zen buruzagi, Afrikako armadaren pisuagatik eta matxinatuek aginte bakarra behar zutelako.",
          akatsak: [
            "Baieztapena zuzentzea baina Mola altxamenduaren buruzagi bakartzat jotzea.",
            "Franco 1939an bakarrik izendatu zutela esatea (1936ko urrian izan zen)."
          ],
          pistak: [
            "Nork koordinatu zuen konspirazioa Nafarroatik?",
            "Zer gertatu zitzaion Sanjurjori altxamenduaren lehen egunetan?",
            "Noiz eta zer kargu lortu zuen Francok?"
          ]
        },
        {
          id: "5.2-a",
          epigrafea: "5.2",
          mota: "kausa",
          galdera: "Ez-Interbentzio politikak bi aldeei laguntza debekatzen zien. Zergatik kaltetu zuen, praktikan, batez ere Errepublika?",
          ideiak: [
            "Britainia Handiak eta Frantziak proposatu zuten (1936), gerra Europara hedatzeko beldurrez eta, Britainian, iraultzaren beldurrez.",
            "Errepublika gobernu legitimoa zen, baina demokrazietatik armarik ezin erosi zuen.",
            "Alemaniak eta Italiak akordioa sinatu zuten, baina sistematikoki urratu zuten, matxinatuei laguntza bidaliz.",
            "Ondorioz, Errepublika ia isolatuta geratu zen, eta URSSen laguntzaren mende."
          ],
          erlazioa: "Neutraltasun formal batek desoreka sortu zuen: araua bete zutenek Errepublikari laguntza ukatu zioten, eta urratu zutenek matxinatuak armatu zituzten.",
          akatsak: [
            "Ez-Interbentzioa Alemaniak edo Italiak proposatu zutela esatea.",
            "Politika horrek bi aldeei berdin eragin ziela esatea.",
            "AEBak edo URSS Ez-Interbentzioaren sustatzaile nagusiak izan zirela esatea."
          ],
          pistak: [
            "Nork bete zuen benetan Ez-Interbentzioaren araua, eta nork ez?",
            "Errepublika gobernu legitimoa bazen, zer eskubide galdu zuen politika horrekin?",
            "Zergatik ez zuten Britainia Handiak eta Frantziak Errepublika lagundu nahi?"
          ]
        },
        {
          id: "5.2-b",
          epigrafea: "5.2",
          mota: "kontzeptua",
          galdera: "Zergatik esaten da Gerra Zibila II. Mundu Gerraren «entsegu-zelaia» edo atari izan zela?",
          ideiak: [
            "Faxismoaren eta antifaxismoaren arteko lehen talka handia izan zen: Alemania eta Italia matxinatuen alde; URSS eta Brigada Internazionalak Errepublikaren alde.",
            "Alemaniak eta Italiak arma eta taktika berriak probatu zituzten (Condor Legioa, Aviazione Legionaria).",
            "Zibilen aurkako bonbardaketa estrategikoak (Durango, Gernika) gerra modernoaren aurrekari izan ziren.",
            "Demokrazia liberalen pasibotasuna agerian geratu zen, eta potentzia faxistak ausartu egin ziren."
          ],
          erlazioa: "Geroago Europan talka egingo zuten bloke ideologikoak eta gerra-metodoak Espainian elkartu eta probatu zirelako da «atari»: II. Mundu Gerran errepikatuko zena aurreratu zuen.",
          akatsak: [
            "Espainiak II. Mundu Gerran bando batean parte hartu zuela esatea.",
            "Gerra Zibila II. Mundu Gerraren parte izan zela esatea (aurrekaria da, ez zati bat).",
            "Kontzeptua definitzea, baina adibide konkreturik eman gabe."
          ],
          pistak: [
            "Zer ideologia egon ziren aurrez aurre Espainian, eta non egongo ziren aurrez aurre 1939tik aurrera?",
            "Zer probatu zuen Condor Legioak Gernikan?",
            "Nola jokatu zuten Britainia Handiak eta Frantziak, eta zer ikasi zuten horretatik Hitlerrek eta Mussolinik?"
          ]
        },
        {
          id: "5.2-c",
          epigrafea: "5.2",
          mota: "akatsa",
          galdera: "Ikasle batek idatzi du: «Bi aldeek kanpoko laguntza bera jaso zuten, beraz nazioarteko laguntzak ez zuen gerraren emaitza erabaki.» Zergatik da okerra? Azaldu zuzen.",
          ideiak: [
            "Matxinatuek Alemaniaren eta Italiaren laguntza militar zuzena, jarraitua eta handia jaso zuten (hegazkinak, tropak, armak).",
            "Errepublikak URSSen laguntza jaso zuen, baina urre-erreserbarekin ordaindu zuen, eta Moskuren interesen mende zegoen.",
            "Brigada Internazionalak boluntarioak ziren, ez armada erregular bat.",
            "Ez-Interbentzioak Errepublika isolatu zuen; laguntzaren desoreka erabakigarria izan zen emaitzarako."
          ],
          erlazioa: "Laguntza ez zen berdina ez kopuruz ez izaeraz: matxinatuen laguntza handiagoa eta segurua zen, eta Errepublikarena mugatua eta garestia; desoreka horrek gerraren bilakaera matxinatuen alde makurtu zuen.",
          akatsak: [
            "Brigada Internazionalak URSSen armada zirela esatea.",
            "Errepublikak laguntzarik batere ez zuela jaso esatea.",
            "Desoreka aipatzea, baina gerraren emaitzarekin lotu gabe."
          ],
          pistak: [
            "Nola ordaindu zuen Errepublikak laguntza sobietarra?",
            "Zer ziren Brigada Internazionalak: armada bat ala boluntarioak?",
            "Laguntza baten «kopurua» ez ezik, zer gehiago da garrantzitsua (iraupena, segurtasuna, baldintzak)?"
          ]
        },
        {
          id: "5.3-a",
          epigrafea: "5.3",
          mota: "ondorioa",
          galdera: "Zer ondorio izan zuen Madrilen erresistentziak (1936ko azaroa) gerraren bilakaeran?",
          ideiak: [
            "Matxinatuen helburu nagusia Madril azkar hartzea zen, gerra laburra izan zedin.",
            "Madrilek ez zuen amore eman: Defentsa Batzordea, miliziak eta herritarren mobilizazioa, Brigada Internazionalak eta lehen arma sobietarrak («¡No pasarán!»).",
            "Gobernua Valentziara lekualdatu zen, baina hiriak erresistitu zuen.",
            "Gerra azkarraren plana porrot egin zuen: gerra luze eta higatzaile bihurtu zen, eta Francok erasoaren ardatza Iparraldera aldatu zuen (1937)."
          ],
          erlazioa: "Madril hartu ez zutelako, gerra azkarraren aukera desagertu zen; horren ondorioz, gerra luze bihurtu zen eta Francok estrategia aldatu zuen, Iparraldeari erasoz.",
          akatsak: [
            "Matxinatuek 1936an Madril hartu zutela esatea (1939ko martxoan erori zen).",
            "Gobernua Madrilen geratu zela esatea (Valentziara joan zen).",
            "Erresistentzia deskribatzea, baina gerraren iraupenarekin edo estrategia-aldaketarekin lotu gabe."
          ],
          pistak: [
            "Zer espero zuten matxinatuek Madril hartuz gero?",
            "Madril hartu ez zutenean, zer aldatu behar izan zuen Francok?",
            "Zein izan zen hurrengo fronte nagusia 1937an, eta zergatik?"
          ]
        },
        {
          id: "5.3-b",
          epigrafea: "5.3",
          mota: "kausa",
          galdera: "Zergatik eraman zuen Francok 1937an erasoaren ardatza Iparraldera, eta zergatik izan zen Bilboren erorketa hain garrantzitsua?",
          ideiak: [
            "Madril hartzeko saiakerak porrot egin ondoren, Francok beste helburu bat behar zuen.",
            "Iparraldea isolatuta zegoen: Gipuzkoa 1936ko irailean erori zen (Irun, Donostia), eta Frantziarekiko muga itxi zen.",
            "Bizkaiak industria (siderurgia, ontzigintza), meategiak eta portuak zituen, eta Euzko Jaurlaritzaren egoitza zen.",
            "Durango eta Gernikako bonbardaketen ondoren, Burdin Hesia hautsi eta Bilbo 1937ko ekainaren 19an erori zen; urrian Iparraldeko frontea desagertu zen."
          ],
          erlazioa: "Iparraldea Errepublikaren eremu ahulena (isolatua) eta baliotsuena (industria) zelako hautatu zuen Francok; Bilbo hartzeak gerra-industria matxinatuen eskuetara pasatu eta indar-oreka haien alde makurtu zuen.",
          akatsak: [
            "Gernika frankisten hegazkinek bakarrik bonbardatu zutela esatea (Condor Legioa eta Aviazione Legionaria izan ziren).",
            "Bilbo Gernikaren aurretik erori zela esatea.",
            "Industria aipatu gabe, arrazoi politikoak bakarrik ematea."
          ],
          pistak: [
            "Zer zuen Bizkaiak beste eskualde batzuek ez zutena?",
            "Gipuzkoa erori ondoren, nola geratu zen Iparraldea gainerako Errepublikarekiko?",
            "Bilbo galtzean, zer galdu zuen Errepublikak eta zer irabazi zuten matxinatuek?"
          ]
        },
        {
          id: "5.3-c",
          epigrafea: "5.3",
          mota: "akatsa",
          galdera: "Ikasle batek idatzi du: «Errepublikak gerra galdu zuen bere barne-liskarrengatik.» Zergatik da azalpen hori partziala? Azaldu zuzen.",
          ideiak: [
            "Barne-liskarrak egon ziren: 1937ko maiatzeko Bartzelonako gertakariak (komunistak, anarkistak, POUM), Largo Caballeroren erorketa eta Negrínen gobernua.",
            "Kanpoko desoreka: Alemaniaren eta Italiaren laguntza vs. Ez-Interbentzioa eta URSSen laguntza mugatua.",
            "Matxinatuek aginte bakarra zuten (Franco); Errepublikak hasierako Estatuaren kolapsoa gainditu behar izan zuen.",
            "Iparraldearen eta haren industriaren galera (1937) eta Ebroko porrota (1938), azken indar militarra agortu zuena."
          ],
          erlazioa: "Porrotak kausa anitz eta elkarri lotuak izan zituen: barne-zatiketak kanpoko isolamenduarekin eta galera militarrekin batera eragin zuen; bakarra hautatzea azalpen partziala da.",
          akatsak: [
            "Baieztapena zuzentzea baina beste kausa bakar bat ordezko gisa jartzea.",
            "Errepublikan barne-liskarrik ez zela egon esatea.",
            "Ebroko gudua gerraren azken gertakaria izan zela esatea (ondoren Katalunia erori zen, eta Madril 1939ko martxoan)."
          ],
          pistak: [
            "Barne-liskarrik ez balego, Errepublikak matxinatuek adina arma eta hegazkin izango al zituen?",
            "Zer galdu zuen Errepublikak 1937an Iparraldean?",
            "Zer gertatu zen Ebroko guduaren ondoren?"
          ]
        },
        {
          id: "5.4-a",
          epigrafea: "5.4",
          mota: "kontzeptua",
          galdera: "Bi aldeetan egon zen indarkeria erretagoardian. Zertan desberdintzen ziren «terrore zuria» eta «terrore gorria»?",
          ideiak: [
            "Terrore zuria (matxinatuen eremua): planifikatua eta sistematikoa; Molaren aginduek beldurra estrategia gisa erabiltzea agintzen zuten.",
            "Terrore zuriak aurkari politikoak, sindikalistak, irakasleak eta alkateak jazarri zituen, eta gerraostean luzatu zen (130.000–150.000 biktima inguru).",
            "Terrore gorria (errepublikar eremua): Estatuaren kolapsoaren ondorioa; milizia eta komiteek eskuindarrak eta elizgizonak jazarri zituzten, batez ere 1936an (Paracuellos).",
            "Errepublikako gobernuek indarkeria hori kontrolatzea bilatu zuten, eta 1937tik aurrera nabarmen gutxitu zen (50.000–60.000 biktima inguru)."
          ],
          erlazioa: "Aldea ez da kopurua bakarrik, logika baizik: matxinatuen errepresioa estatu berria eraikitzeko tresna planifikatua zen; errepublikarra, berriz, Estatuaren kolapsoaren ondorio, eta gobernuak geldiarazi nahi izan zuen.",
          akatsak: [
            "Alde batean bakarrik egon zela indarkeria esatea.",
            "Bi indarkeriak berdinak izan zirela esatea, logika eta iraupena bereizi gabe.",
            "Errepublikako gobernuek terrore gorria antolatu edo agindu zutela esatea."
          ],
          pistak: [
            "Nork agindu zuen indarkeria alde bakoitzean: gobernuak, armadak ala komiteek?",
            "Noiz izan zen indarkeria handiena errepublikar eremuan, eta zergatik gutxitu zen gero?",
            "Zer gertatu zen matxinatuen errepresioarekin 1939an gerra amaitu ondoren?"
          ]
        },
        {
          id: "5.4-b",
          epigrafea: "5.4",
          mota: "kontzeptua",
          galdera: "Zer esan nahi du «Euskal Oasia» kontzeptuak, eta zergatik izan zen Euskadi berezia errepublikar eremuaren barruan?",
          ideiak: [
            "Errepublikaren aldeko euskal eremuan Euzko Jaurlaritzak (Agirre, 1936ko urria) ordena publikoa hobeto mantendu zuen (Ertzaintza).",
            "Elizaren aurkako indarkeria oso mugatua izan zen, eta erlijio-askatasuna errespetatu zen.",
            "Arrazoiak: EAJren izaera katolikoa, gobernu autonomoaren sendotasuna eta alderdien arteko oreka.",
            "«Oasia» ez da indarkeriarik ez zegoela esatea; eta frankistek euskal lurraldeak hartu zituztenean, errepresio gogorra ezarri zuten (euskal apaizak ere fusilatu zituzten)."
          ],
          erlazioa: "Euskadin, gobernu autonomo sendo eta katoliko batek Estatuaren kolapsoa saihestu zuelako, beste eremu errepublikanoetako indarkeria iraultzaile eta antiklerikala askoz txikiagoa izan zen.",
          akatsak: [
            "Euskadin inolako indarkeriarik ez zela egon esatea.",
            "Euskal Oasia frankisten eremuari buruzkoa dela esatea.",
            "Euskadi osoa (Nafarroa barne) Errepublikaren alde zegoela esatea (Nafarroa matxinatuen eskuetan geratu zen)."
          ],
          pistak: [
            "Errepublikaren beste eremu batzuetan, zergatik izan zen indarkeria handia lehen hilabeteetan? Gertatu al zen hori Euskadin?",
            "Zer alderdi zen EAJ erlijioari dagokionez, eta zer ondorio izan zuen horrek?",
            "«Oasia» hitzak indarkeriarik ez zegoela esan nahi du, ala gutxiago zegoela?"
          ]
        },
        {
          id: "5.4-c",
          epigrafea: "5.4",
          mota: "ondorioa",
          galdera: "Zergatik esaten da 1939an gerra amaitu zela, baina ez zela bakea iritsi? Zer ondorio izan zituen gerrak eta errepresioak?",
          ideiak: [
            "Giza galerak izugarriak izan ziren: ~500.000 hildako (frontea, erretagoardia, bonbardaketak, gosea, gerraosteko fusilamenduak).",
            "Erbestea: ~450.000 errefuxiatu Frantziara 1939an; askok erbeste luzea bizi izan zuten (Mexiko, URSS, Latinoamerika). «Gerraren haurrak» atzerrira bidali zituzten.",
            "Gerraostean errepresioak jarraitu zuen: espetxeak, fusilamenduak, depurazioak, lan behartuak, gosea eta beldurra.",
            "Frankismoak ez zuen adiskidetzerik bilatu: garaipena errepresioaren bidez sendotu zuen, eta galtzaileak gizartetik baztertu zituen."
          ],
          erlazioa: "Garaipen militarrak ez zuen adiskidetzerik ekarri: errepresioa erregimen berriaren oinarri bihurtu zenez, gerraren indarkeria eta haren ondorioak diktadura luzean iraun zuten.",
          akatsak: [
            "1939an errepresioa amaitu zela esatea.",
            "Errefuxiatu guztiak berehala itzuli zirela esatea.",
            "Ondorioak zerrendatzea, baina frankismoaren izaerarekin lotu gabe."
          ],
          pistak: [
            "1939ko apirilaren 1aren ondoren, zer gertatu zen galtzaileekin?",
            "Zer bilatu zuen frankismoak: adiskidetzea ala garaipena sendotzea?",
            "Zenbat jende joan zen erbestera, eta nora?"
          ]
        }
      ]
    },
    {
      num: 6,
      izenburua: "Frankismoa I: gerraostea eta autarkia",
      urteak: "1939–1959",
      orria: "temas/06-frankismoa-i.html",
      epigrafeak: [
        { num: "6.1", izenburua: "Francoren erregimenaren oinarri instituzional eta ideologikoak", atala: "g6-1" },
        { num: "6.2", izenburua: "Gerraosteko gizartea (garaileak eta garaituak) eta gerraosteko errepresio politikoa", atala: "g6-2" },
        { num: "6.3", izenburua: "Autarkia ekonomikoa. Gosearen eta eskasiaren hedapena", atala: "g6-3" },
        { num: "6.4", izenburua: "Nazioarteko politika: isolamendutik integraziora", atala: "g6-5" }
      ],
      galderak: [
        {
          id: "6.1-a",
          epigrafea: "6.1",
          mota: "kontzeptua",
          galdera: "Zer esan nahi du frankismoa «diktadura pertsonalista» edo kaudillismoa zela? Zer ondorio zuen horrek erakundeentzat?",
          ideiak: [
            "Botere guztia Francoren esku zegoen: Estatuko burua, armadaren agintari gorena eta gobernuaren norabidea markatzen zuena.",
            "Subiranotasuna ez zegoen herritarren edo ordezkaritza-organo libre baten esku.",
            "Alderdi bakarra zegoen (Mugimendu Nazionala, FET y de las JONS); pluralismo politikoa debekatuta zegoen.",
            "Erakundeek (Gorteak, «demokrazia organikoa») ez zuten Franco kontrolatzen; Ondorengotza Legeak (1947) biziarteko Estatuko buru izendatu zuen."
          ],
          erlazioa: "Boterea pertsona bakarrean kontzentratzen zenez, erakundeak haren mende zeuden eta ez zuten boterea mugatzen; erregimena Francoren figurari lotuta zegoen.",
          akatsak: [
            "Francok boterea Gorteekin edo gobernuarekin partekatzen zuela esatea.",
            "Mugimendu Nazionala hainbat alderdiren artean bat zela esatea (alderdi bakarra zen).",
            "Kontzeptua definitzea, baina erakundeen ondoriorik azaldu gabe."
          ],
          pistak: [
            "Zein kargu zituen Francok aldi berean?",
            "Gorteek Franco kontrolatu edo kargutik kendu zezaketen?",
            "Zer ezarri zuen 1947ko Ondorengotza Legeak Francoren karguari buruz?"
          ]
        },
        {
          id: "6.1-b",
          epigrafea: "6.1",
          mota: "kausa",
          galdera: "Zergatik izan zen Eliza Katolikoa frankismoaren zutabe nagusietako bat? Zer irabazi zuen alde bakoitzak?",
          ideiak: [
            "Elizaren hierarkiak altxamendua babestu zuen, eta gerra «Gurutzada» gisa aurkeztu zuen.",
            "Elizak erregimenari legitimazio morala eman zion.",
            "Trukean, erregimenak hezkuntza, moral publikoa eta gizarte-kontrola eman zizkion Elizari.",
            "Nazional-katolizismoa: Espainiaren identitatea katolikotasunarekin identifikatu zen; 1953ko Konkordatuak aliantza berretsi zuen."
          ],
          erlazioa: "Elkarren arteko aliantza zen: Elizak erregimena legitimatzen zuen, eta erregimenak Elizari gizartean botere eta pribilegioak ematen zizkion.",
          akatsak: [
            "Eliza osoak, salbuespenik gabe, frankismoa babestu zuela esatea (Euskadin, adibidez, frankistek apaiz katolikoak fusilatu zituzten).",
            "Elizari zer eman zion erregimenak azaldu gabe, aliantzaren alde bakarra aipatzea.",
            "Konkordatua 1939an sinatu zela esatea (1953an izan zen)."
          ],
          pistak: [
            "Nola aurkeztu zuen Elizaren hierarkiak Gerra Zibila?",
            "Zer eremutan eman zion erregimenak Elizari boterea?",
            "Zergatik behar zuen diktadura batek legitimazio «morala»?"
          ]
        },
        {
          id: "6.1-c",
          epigrafea: "6.1",
          mota: "akatsa",
          galdera: "Ikasle batek idatzi du: «Funtsezko Legeek eskubideak eta ordezkaritza bermatzen zituzten; beraz, frankismoa ez zen benetako diktadura bat izan.» Zer dago gaizki? Azaldu zuzen.",
          ideiak: [
            "Funtsezko Legeak ez ziren konstituzio demokratiko bat: Lanaren Forua (1938), Gorteak Eratzeko Legea (1942), Espainolen Forua (1945), Ondorengotza Legea (1947), Mugimenduaren Printzipioak (1958).",
            "Gorteen ordezkaritza «korporatiboa» zen (familia, udala, sindikatua): ez zegoen sufragio unibertsal librerik ez alderdirik.",
            "Espainolen Foruak aitortutako «eskubideak» Estatuaren interesaren mende zeuden.",
            "Legeen helburua erregimenari itxura legala ematea zen, batez ere 1945etik aurrera nazioartean."
          ],
          erlazioa: "Legeek erregimenari itxura legala eman zioten, baina ez zuten Francoren boterea mugatzen: lege izateak ez du demokrazia bermatzen.",
          akatsak: [
            "Baieztapena ukatzea, baina Funtsezko Legerik aipatu gabe.",
            "Frankismoak konstituzio bat izan zuela esatea.",
            "«Demokrazia organikoa» demokrazia mota baliokidetzat hartzea."
          ],
          pistak: [
            "Nola aukeratzen ziren Gorteetako kideak? Alderdirik zegoen?",
            "Espainolen Foruko eskubideak: noiz murriztu zitezkeen?",
            "Zergatik nahi izango zuen diktadura batek, 1945ean bereziki, «legala» dirudien itxura?"
          ]
        },
        {
          id: "6.2-a",
          epigrafea: "6.2",
          mota: "kontzeptua",
          galdera: "Zer esan nahi du gerraostean Espainia «garaileen» eta «garaituen» artean banatu zela? Nola nabaritzen zen eguneroko bizitzan?",
          ideiak: [
            "Gerraren amaierak ez zuen adiskidetzerik ekarri: erregimenak zatiketa mantendu zuen.",
            "Garaituak «anti-Espainia» gisa tratatu zituen: errepublikanoak, sozialistak, komunistak, anarkistak, nazionalistak eta susmagarri oro.",
            "Banaketak ondorio zuzenak zituen: enplegua, babesa eta aukerak garaileentzat; jazarpena, depurazioa eta baztertzea garaituentzat.",
            "Zigorrak identitateagatik, loturengatik edo «aurrekariengatik» etor zitezkeen; beldurra eta isiltasuna biziraupen-baldintza bihurtu ziren."
          ],
          erlazioa: "Garaipena adiskidetzerako ez, menderatzeko erabili zelako, gerraren zatiketa gizartearen egitura iraunkor bihurtu zen eta kontrol sozialerako tresna izan zen.",
          akatsak: [
            "Gerraostean bi aldeak berdin tratatu zituztela esatea.",
            "Garaituak oposizio politiko antolatua bakarrik zirela esatea (susmagarri oro ere jazarri zuten).",
            "Banaketa deskribatzea, eguneroko ondoriorik eman gabe."
          ],
          pistak: [
            "Errepublikaren alde egon zen irakasle batek zer aukera zuen 1940an bere lana mantentzeko?",
            "Zigortzeko, nahikoa al zen zerbait egitea, ala nor zinen ere kontatzen zuen?",
            "Zergatik bihurtu zen isiltasuna biziraupen-estrategia?"
          ]
        },
        {
          id: "6.2-b",
          epigrafea: "6.2",
          mota: "kausa",
          galdera: "Gerra irabazita zegoen. Zergatik jarraitu zuen frankismoak errepresio zabal batekin gerraostean? Zer tresna erabili zituen?",
          ideiak: [
            "Errepresioaren funtzioak: zigortzea, beldurra zabaltzea, depurazio politikoa eta gizartea ideologikoki berrantolatzea.",
            "Justizia militarra eta epaiketa azkarrak; espetxeak eta lan behartuak.",
            "Erantzukizun Politikoen Legea (1939): iraganeko jarrerak zigortu eta ondasunak konfiskatu; Masoneria eta Komunismoaren Aurkako Legea (1940).",
            "Salaketa-kultura: auzokideen zelatatzea eta autozentsura."
          ],
          erlazioa: "Errepresioa ez zen gerraren mendeku hutsa: erregimen berria eraikitzeko eta edozein oposizio ezinezko bihurtzeko tresna zen; beldurrak bermatzen zuen kontrola.",
          akatsak: [
            "Errepresioa 1939an amaitu zela esatea.",
            "Erantzukizun Politikoen Legeak gerraosteko ekintzak bakarrik zigortzen zituela esatea (iraganeko jarrerak ere zigortzen zituen).",
            "Tresnak zerrendatzea, haien funtzioa azaldu gabe."
          ],
          pistak: [
            "Errepresioak zigortu besterik ez zuen egiten, ala beste zerbait ere lortzen zuen gainerako gizartean?",
            "Zer zigortzen zuen 1939ko Erantzukizun Politikoen Legeak, eta noizko jarrerak?",
            "Zergatik da eraginkorra salaketa-kultura poliziarik ez dagoen tokian ere?"
          ]
        },
        {
          id: "6.2-c",
          epigrafea: "6.2",
          mota: "ondorioa",
          galdera: "Zer ondorio izan zituen frankismoaren errepresioak Euskal Herrian dimentsio kultural eta nazionalean?",
          ideiak: [
            "Euskararen erabilera publikoa gogor mugatu zen: administrazioan, eskolan eta espazio ofizialean gaztelania ezarri zen.",
            "Euskara familia-eremura eta erabilera pribatura murriztu zen.",
            "Sinbolo abertzaleak debekatu eta erakunde autonomikoak desegin ziren; Eusko Jaurlaritza erbestera joan zen.",
            "Abertzaletasuna separatismoarekin eta traizioarekin lotu zen."
          ],
          erlazioa: "Frankismoaren zentralismoa ez zen administrazio-antolaketa hutsa: «Espainia bakarra» inposatzeko eta nazio-identitate alternatiboak ahultzeko politika kulturala zen.",
          akatsak: [
            "Euskara legez erabat debekatuta zegoela esatea etxean ere (eremu publikotik baztertu zen, eta pribatura murriztu).",
            "Euskal Estatutuak frankismoan indarrean jarraitu zuela esatea.",
            "Ondorioak zerrendatzea, zentralismoaren helburuarekin lotu gabe."
          ],
          pistak: [
            "Non ezin zen euskara erabili, eta non iraun zuen?",
            "Zer gertatu zen 1936ko Estatutuarekin eta Eusko Jaurlaritzarekin?",
            "Zergatik ikusten zuen frankismoak arrisku gisa euskal identitatea?"
          ]
        },
        {
          id: "6.3-a",
          epigrafea: "6.3",
          mota: "kausa",
          galdera: "Zergatik hautatu zuen frankismoak autarkia 1939tik aurrera?",
          ideiak: [
            "Gerraren suntsipena: azpiegiturak, nekazaritza, industria eta garraioa kaltetuta.",
            "Nazioarteko isolamendua, bereziki 1945etik aurrera.",
            "Nazionalismo ekonomikoa: Espainiak «bere kabuz» bizi behar zuela, kanpoko mendekotasunik gabe.",
            "Diktadurak ekonomia kontrolatu nahi zuen, gizartea kontrolatu nahi zuen bezala: prezioak, ekoizpena, inportazioak eta banaketa."
          ],
          erlazioa: "Autarkia egoeraren eta ideologiaren batura izan zen: suntsipenak eta isolamenduak kanpora begiratzea zailtzen zuten, eta ideologiak itxiera hori bertute gisa aurkeztu zuen.",
          akatsak: [
            "Autarkia nazioarteko isolamenduaren ondorio hutsa izan zela esatea (ideologia ere bazegoen, eta 1939an hasi zen, isolamendua baino lehen).",
            "Autarkiak merkatu librea esan nahi zuela esatea (Estatuaren kontrol zorrotza zen).",
            "Kausak zerrendatzea, elkarren artean lotu gabe."
          ],
          pistak: [
            "Zer egoeratan zegoen ekonomia 1939an?",
            "Autarkia isolamenduaren ondorio hutsa bada, zergatik hasi zen 1939an, isolamendua 1945ean hasi bazen?",
            "Zer ideia zegoen «Espainiak bere kabuz bizi behar du» esaldiaren atzean?"
          ]
        },
        {
          id: "6.3-b",
          epigrafea: "6.3",
          mota: "ondorioa",
          galdera: "Zer ondorio sozial izan zituzten errazionamenduak eta estraperloak 1940ko hamarkadan («gosearen urteak»)?",
          ideiak: [
            "Errazionamendu-txartelekin banatzen ziren oinarrizko elikagaiak (ogia, olioa, azukrea), 1952ra arte.",
            "Eskasiak estraperloa (merkatu beltza) sortu zuen, prezio altuekin.",
            "Dirua, kontaktuak edo boterearekiko hurbiltasuna zutenek aukera gehiago zituzten: pribilegioak, klientelismoa eta aberasteak.",
            "Gehiengoarentzat: elikadura urria, gaixotasunak, pobrezia eta etxebizitza-arazoak."
          ],
          erlazioa: "Eskasiak ez zion guztiei berdin eragin: kontrolak sortutako merkatu beltzak desberdintasuna eta mendekotasuna areagotu zituen, eta janaria kontrol sozialeko tresna bihurtu zen.",
          akatsak: [
            "Errazionamenduak guztiei hornidura nahikoa bermatu ziela esatea.",
            "Estraperloa Estatuak antolatutako merkatu ofiziala zela esatea.",
            "Gosea gerraren ondorio hutsa izan zela esatea, autarkiaren politikak aipatu gabe."
          ],
          pistak: [
            "Txartelak guztiei gutxieneko bat bermatzen bazien, zergatik pasatu zuten jende askok gosea?",
            "Nork irabazi zuen estraperloarekin, eta nork galdu?",
            "Nola bihur daiteke janaria jendea kontrolatzeko tresna?"
          ]
        },
        {
          id: "6.3-c",
          epigrafea: "6.3",
          mota: "aldaketa",
          galdera: "Zergatik utzi zion frankismoak autarkiari 1959an, eta zer aldatu zuen Egonkortze Planak? Zer ez zen aldatu?",
          ideiak: [
            "Autarkiak porrot egin zuen: ekoizpen urria, inflazioa, dibisa falta eta teknologia zaharkitua (INI, lehiarik gabe).",
            "1950etik Gerra Hotzak kanpo-laguntza eta kredituak ekarri zituen, eta erregimenaren barruan autarkia modernizazioaren oztopotzat ikusi zen.",
            "Egonkortze Plana (1959): gastu publikoa kontrolatu, inflazioa murriztu, kanpo-inbertsioa erraztu eta merkataritza ireki.",
            "Ekonomia ireki zen (1960ko desarrollismoa), baina erregimen politikoa diktadura izaten jarraitu zuen."
          ],
          erlazioa: "Autarkiaren porrot ekonomikoak behartu zuen aldaketa, ez demokratizazio-nahiak: ekonomia liberalizatu zen, politika ez.",
          akatsak: [
            "Egonkortze Plana demokratizazio-neurria izan zela esatea.",
            "Autarkia arrakastatsua izan zela esatea, INIri esker.",
            "Plana 1953an onartu zela esatea (1959an izan zen)."
          ],
          pistak: [
            "Zer arazo zeuden ekonomian 1950eko hamarkadaren amaieran?",
            "Plana aldaketa ekonomikoa ala politikoa izan zen? Zer jarraitu zuen berdin?",
            "Zer etorri zen 1960ko hamarkadan plan horren ondorioz?"
          ]
        },
        {
          id: "6.4-a",
          epigrafea: "6.4",
          mota: "aldaketa",
          galdera: "Zergatik pasa zen frankismoa nazioarteko isolamendutik (1945–1950) integraziora (1950–1959)?",
          ideiak: [
            "1945ean Ardatza garaitu zenean, frankismoa faxismoarekin lotuegia ikusten zen; 1946an NBEk gaitzetsi zuen eta enbaxadoreak erretiratu ziren.",
            "Gerra Hotzarekin Mendebaldearen lehentasuna Sobietar Batasunaren hedapena geldiaraztea bihurtu zen.",
            "Frankismoak bi «txanpon» zituen: antikomunismoa eta Espainiaren kokapen geografiko estrategikoa.",
            "1953an Konkordatua eta Madrilgo Itunak (AEB) sinatu ziren; 1955ean Espainia NBEan onartu zuten."
          ],
          erlazioa: "Erregimena ez zen demokratizatu: nazioarteko testuingurua aldatu zen, eta Gerra Hotzak frankismoaren antikomunismoa Mendebaldearentzat baliagarri bihurtu zuen.",
          akatsak: [
            "Integrazioa erregimenaren demokratizazioaren ondorioa izan zela esatea.",
            "Espainia 1945ean NBEan sartu zela esatea (1955ean onartu zuten).",
            "Aldaketa deskribatzea, Gerra Hotzarekin lotu gabe."
          ],
          pistak: [
            "Zergatik zen frankismoa «toxikoa» 1945ean garaileentzat?",
            "1950ean, nor zen Mendebaldearen etsai nagusia, eta zer pentsatzen zuen frankismoak etsai horri buruz?",
            "Frankismoa aldatu zen, ala aldatu zena bestea izan zen?"
          ]
        },
        {
          id: "6.4-b",
          epigrafea: "6.4",
          mota: "akatsa",
          galdera: "Ikasle batek idatzi du: «II. Mundu Gerran Espainia neutrala izan zen beti, eta horregatik ez zuen inolako arazorik izan 1945ean.» Zer dago gaizki? Azaldu zuzen.",
          ideiak: [
            "Frankismoa Alemania naziaren eta Italia faxistaren laguntza erabakigarriarekin jaio zen 1939an.",
            "Gerran ez zen formalki sartu, baina ez zen neutraltasun argia izan: «ez-beligerantzia» eta Ardatzarekiko hurbiltasuna.",
            "Dibisio Urdina Alemaniaren alde borrokatu zen Sobietar Batasunaren aurka.",
            "Gerraren norabidea aldatu ahala, erregimenak tonu faxista apaldu zuen; hala ere, 1945ean Ardatzarekin lotuta ikusi zuten eta isolamendua etorri zen."
          ],
          erlazioa: "Gerran zehar Ardatzarekin izandako hurbiltasunagatik, Aliatuen garaipenak frankismoa isolamendura eraman zuen 1945etik aurrera.",
          akatsak: [
            "Espainia Ardatzaren aldeko gerrako kide formala izan zela esatea.",
            "Dibisio Urdina Aliatuen alde borrokatu zela esatea.",
            "Baieztapena zuzentzea, baina 1945eko isolamenduarekin lotu gabe."
          ],
          pistak: [
            "Zein potentziak lagundu zioten Francori Gerra Zibilean?",
            "Zer zen Dibisio Urdina eta noren aurka borrokatu zen?",
            "Gerra Ardatzak galdu zuenean, zer gertatu zen Espainiaren nazioarteko harremanekin?"
          ]
        },
        {
          id: "6.4-c",
          epigrafea: "6.4",
          mota: "kontzeptua",
          galdera: "Zer izan ziren 1953ko Madrilgo Itunak eta zergatik izan ziren hain garrantzitsuak frankismoarentzat?",
          ideiak: [
            "AEBekin sinatutako akordioak (1953), Gerra Hotzaren testuinguruan.",
            "Espainiak base militarrak eskaini zizkien AEBei.",
            "Trukean, laguntza ekonomikoa eta militarra eta irekitze diplomatikoa jaso zituen.",
            "Urte berean Vatikanoarekin Konkordatua sinatu zen, eta 1955ean Espainia NBEan onartu zuten."
          ],
          erlazioa: "Base militarren truke, Mendebaldeko potentzia nagusiak erregimena onartu zuen: horrek isolamendua hautsi eta diktadurari iraupena eman zion, demokratizatu beharrik gabe.",
          akatsak: [
            "Itunak Sobietar Batasunarekin edo Europako demokraziekin sinatu zirela esatea.",
            "Itunen ondorioz Espainia NATOn sartu zela esatea (frankismoan ez zen sartu).",
            "Itunak deskribatzea, erregimenaren iraupenarekin lotu gabe."
          ],
          pistak: [
            "Zer eman zuen Espainiak, eta zer jaso zuen trukean?",
            "Zergatik interesatzen zitzaien AEBei Espainia 1953an?",
            "Zer esan nahi zuen munduko potentzia nagusiak diktadura batekin akordioak sinatzeak?"
          ]
        }
      ]
    },
    {
      num: 7,
      izenburua: "Frankismoa II: desarrollismoa",
      urteak: "1959–1975",
      orria: "temas/07-frankismoa-ii.html",
      epigrafeak: [
        { num: "7.1", izenburua: "Garapen ekonomikoa eta gizarte-eraldaketak", atala: "g7-1" },
        { num: "7.2", izenburua: "Erregimenaren finkapenari emandako erantzuna: babesa, indiferentzia eta oposizioa", atala: "g7-3" },
        { num: "7.3", izenburua: "Frankismo berantiarraren krisia", atala: "g7-4" },
        { num: "7.4", izenburua: "Errepresio politiko eta soziala", atala: "g7-5" }
      ],
      galderak: [
        {
          id: "7.1-a",
          epigrafea: "7.1",
          mota: "kausa",
          galdera: "Zerk azaltzen du 1960ko hamarkadako «mirari ekonomikoa»?",
          ideiak: [
            "1959ko Egonkortze Planak autarkia amaitu zuen: inflazioa kontrolatu eta ekonomia kanpora ireki (teknokratak).",
            "Atzerriko kapitalak eta teknologiak industria-adar berriak eta enpresa handiak ekarri zituzten.",
            "Turismoaren boom-a eta emigranteen diru-bidalketak dibisa-iturri erabakigarriak izan ziren; barne-migrazioak lan-eskua eraman zuen industria-guneetara.",
            "Estatuak ere bultzatu zuen: INIren enpresak (SEAT, Endesa…), azpiegiturak eta Garapen Planak."
          ],
          erlazioa: "Irekierak kanpoko baliabideak (kapitala, turistak, dibisak) ekarri zituenez, autarkian falta zitzaizkion faktoreak lortu zituen ekonomiak, eta hazkunde azkarra posible bihurtu zen.",
          akatsak: [
            "Hazkundea autarkiaren arrakastaren ondorioa izan zela esatea (autarkia uztearen ondorioa da).",
            "Faktore bakar bat (turismoa, adibidez) aipatzea kausa oso gisa.",
            "Faktoreak zerrendatzea, 1959ko irekierarekin lotu gabe."
          ],
          pistak: [
            "Zer aldatu zen 1959an, eta zer ate ireki zuen horrek?",
            "Dibisak behar ziren makinak eta petrolioa erosteko: nondik etorri ziren?",
            "Zer egin zuten Europara lanera joandako milaka espainiarrek beren soldatekin?"
          ]
        },
        {
          id: "7.1-b",
          epigrafea: "7.1",
          mota: "ondorioa",
          galdera: "Zer gizarte-eraldaketa ekarri zuen desarrollismoak, eta zergatik bihurtu zen hori arazo erregimenarentzat?",
          ideiak: [
            "Urbanizazio azkarra eta migrazio masiboa: landa-eremuetatik industria-guneetara; auzo periferikoak, planifikazio eskasarekin.",
            "Lan-munduaren eraldaketa: soldata-lana hedatu zen; langile masa eta klase ertain berriak.",
            "Kontsumo-gizartea: autoa, telebista, oporrak; hezkuntza hedatu zen.",
            "Kontraesanak: lurralde-desorekak, lan-segurtasun eskasa, sindikatu askerik eta greba-eskubiderik ez."
          ],
          erlazioa: "Gizartea urbanoago, heziago eta konektatuago bihurtu ahala, askatasun-nahia eta gatazka soziala hazi ziren: erregimena sendotu zuen hazkundeak berak elikatu zuen haren krisia.",
          akatsak: [
            "Aldaketak guztiei berdin eta desorekarik gabe iritsi zitzaizkiela esatea.",
            "Hazkundearekin batera sindikatu askeak onartu zirela esatea.",
            "Eraldaketak zerrendatzea, erregimenarekiko ondoriorik azaldu gabe."
          ],
          pistak: [
            "Nora joan zen landa-eremuko jendea, eta nolako auzoetan bizi izan zen?",
            "Langile asko fabrika berean biltzean, zer errazten da?",
            "Erregimenak hazkundea erabili zuen legitimatzeko. Zer gertatzen da jendeak askatasun gehiago nahi badu?"
          ]
        },
        {
          id: "7.1-c",
          epigrafea: "7.1",
          mota: "akatsa",
          galdera: "Ikasle batek idatzi du: «Desarrollismoak Espainia modernizatu zuen, eta horregatik frankismoa demokratizatu egin zen 60ko hamarkadan.» Zer dago gaizki? Azaldu zuzen.",
          ideiak: [
            "Modernizazioa ekonomikoa izan zen, ez politikoa: «hazkundea bai, askatasunik gabe».",
            "Alderdi bakarra, Sindikatu Bertikala eta greba-eskubiderik eza mantendu ziren.",
            "Errepresioa ez zen desagertu: sofistikatu egin zen (TOP 1963, salbuespen-egoerak).",
            "Erregimenak hazkundea legitimazio-tresna gisa erabili zuen, askatasunak ukatzen jarraituz."
          ],
          erlazioa: "Modernizazio ekonomikoak ez zuen demokratizaziorik ekarri; aitzitik, sortutako gizarte berriak erregimenaren aurkako tentsioak elikatu zituen, eta erregimenak errepresioz erantzun zuen.",
          akatsak: [
            "Baieztapena zuzentzea, baina desarrollismoak ezer aldatu ez zuela esatea (ekonomia eta gizartea errotik aldatu ziren).",
            "Alderdi politikoak 60ko hamarkadan legeztatu zirela esatea."
          ],
          pistak: [
            "Zer aldatu zen 60ko hamarkadan: ekonomia, politika, ala biak?",
            "Langileek greba egin zezaketen? Sindikatu askeak zeuden?",
            "Zer organo sortu zen 1963an delitu politikoak epaitzeko?"
          ]
        },
        {
          id: "7.2-a",
          epigrafea: "7.2",
          mota: "kontzeptua",
          galdera: "Zer esan nahi du gizarteak frankismoari «babesa, indiferentzia eta oposizioa» eman ziola? Zergatik laguntzen du horrek erregimenaren iraupena ulertzen?",
          ideiak: [
            "Babesa: garaileen Espainia (militarrak, administrazioa, jabeak), antikomunismoa eta «ordena»; batzuen babesa pragmatikoa zen, hobekuntza materialengatik.",
            "Indiferentzia edo egokitzapena: gizartearen zati handia ez zen frankista militantea, ezta oposiziokoa ere; gerraren trauma, beldurra, nekea eta eguneroko hobekuntza.",
            "Oposizioa: anitza eta gero eta zabalagoa (langileak, ikasleak, alderdi klandestinoak, nazionalismoak, Elizaren zati bat).",
            "Hiru jarrerak batera existitu ziren, eta pertsona batek denboran zehar jarreraz alda zezakeen."
          ],
          erlazioa: "Erregimenaren egonkortasuna ez zen poliziaren ondorio hutsa: babes aktiboari gizartearen zati handiaren egokitzapena gehitu zitzaion, eta horrek oposizioa gutxiengoan mantendu zuen urte askotan.",
          akatsak: [
            "Espainiar guztiak frankistak edo antifrankistak zirela esatea, erdiko jarrerarik gabe.",
            "Erregimenak errepresioagatik bakarrik iraun zuela esatea.",
            "Hiru jarrerak definitzea, iraupenarekin lotu gabe."
          ],
          pistak: [
            "Gerra bizi izan zuen pertsona batek, zergatik nahiago izango zuen politikan ez sartzea?",
            "60ko hamarkadan bizimodua hobetzen ari bazen, nola eragiten zion horrek jendearen jarrerari?",
            "Erregimena polizia bakarrik bada eusten, zer gertatzen da gizartearen zati handi bat aurka jartzen denean?"
          ]
        },
        {
          id: "7.2-b",
          epigrafea: "7.2",
          mota: "kausa",
          galdera: "Zergatik hazi zen frankismoaren aurkako oposizioa 60ko hamarkadan, hazkunde ekonomikoaren garaian?",
          ideiak: [
            "Industrializazioak langile masa handiak sortu zituen; CCOOk fabriketako ordezkaritza «legala» aprobetxatu eta grebak antolatu zituen.",
            "Hezkuntzaren hedapenarekin unibertsitatea erregimenaren aurkako espazio bihurtu zen (asanbladak, manifestazioak, grebak).",
            "Nazionalismo periferikoak (Euskal Herria, Katalunia) identitatearen eta hizkuntzaren zapalkuntzaren aurka.",
            "Elizaren zati bat (langile-pastorala, apaiz gazteak) eskubide sozialen alde jarri zen; gerra bizi ez zuen belaunaldi berri bat agertu zen."
          ],
          erlazioa: "Hazkunde ekonomikoak berak sortu zituen oposizioaren subjektu berriak (langileak, ikasleak): gizartea modernizatu zen, baina sistema politikoa itxita jarraitzen zuen.",
          akatsak: [
            "Oposizioa erbesteko alderdietan bakarrik zegoela esatea.",
            "Elizak, oso-osorik, erregimena babesten jarraitu zuela esatea 60ko hamarkadan.",
            "Oposizio-taldeak zerrendatzea, garapen ekonomikoarekin lotu gabe."
          ],
          pistak: [
            "Nork osatzen zuen CCOO, eta non antolatzen zen?",
            "Zer gertatu zen unibertsitateko ikasle-kopuruarekin?",
            "Hazkunde ekonomikoa eta oposizioaren hazkundea: kontraesana dira, ala bata bestearen kausa?"
          ]
        },
        {
          id: "7.2-c",
          epigrafea: "7.2",
          mota: "akatsa",
          galdera: "Ikasle batek idatzi du: «ETA izan zen frankismoaren aurkako oposizio nagusia.» Zergatik da baieztapen hori okerra? Azaldu zuzen.",
          ideiak: [
            "ETA 1959an sortu zen, EAJren jarrera moderatuarekin etsitako gazte nazionalistek bultzatuta; 60ko hamarkadan bide armatua hautatu zuen (1968an lehen hilketa).",
            "Oposizioa askoz zabalagoa zen: langile-mugimendua (CCOO), ikasleak, PCE, PSOE, nazionalismo periferikoak, Elizaren zati bat.",
            "Langile-mugimendua eta PCE izan ziren oposizio antolatu eta masiboena.",
            "ETAren eragina bikoitza izan zen: erregimenaren errepresioa gogortu (Burgosko Prozesua, 1970) eta nazioartean deslegitimatu (Carrero Blancoren hilketa, 1973)."
          ],
          erlazioa: "ETAk oposizioaren zati bat ordezkatzen zuen, ez osoa; haren ekintzek eragin handia izan zuten (errepresioa eta deslegitimazioa), baina oposizio masiboa langile- eta ikasle-mugimenduak izan ziren.",
          akatsak: [
            "ETA 1970eko hamarkadan sortu zela esatea (1959an sortu zen).",
            "ETAren eragina ukatzea, haren ekintzen ondorioak aipatu gabe.",
            "Baieztapena zuzentzea, beste oposizio-talderik aipatu gabe."
          ],
          pistak: [
            "Zein mugimenduk antolatzen zituen grebak fabriketan?",
            "Noiz eta zergatik sortu zen ETA?",
            "Zer ondorio izan zuen Burgosko Prozesuak nazioartean?"
          ]
        },
        {
          id: "7.3-a",
          epigrafea: "7.3",
          mota: "kausa",
          galdera: "Zergatik sartu zen frankismoa krisi sakonean 1973 eta 1975 artean?",
          ideiak: [
            "Krisi ekonomikoa: 1973ko petrolio-krisiak inflazioa eta kostuak igo zituen; «ongizatearen promesa» higatu eta grebak ugaritu ziren.",
            "Krisi politikoa: Franco zahartzen ari zen; Carrero Blancoren hilketak (1973) jarraipena kolokan jarri zuen, eta «bunkerra» eta aperturistak zatitu ziren.",
            "Arias Navarroren «irekiera» (otsailaren 12ko espiritua) oso mugatua izan zen eta frustrazioa sortu zuen.",
            "Krisi sozial eta nazioartekoa: oposizio antolatuagoa, indarkeria politikoa, Portugaleko Krabelinen Iraultza (1974) eta Greziako demokratizazioa; Europan «anomalia» zen."
          ],
          erlazioa: "Hiru krisiak batera iritsi ziren: erregimenak bere legitimazio nagusia (hazkundea) galdu zuen, liderra agortzen ari zen, eta gizarteak eta Europak aldaketa posible zela erakusten zuten.",
          akatsak: [
            "Krisia Francoren heriotzarekin hasi zela esatea (lehenago hasi zen).",
            "Kausa bakarra (petrolioa, adibidez) aipatzea.",
            "Arias Navarroren irekierak benetako pluralismoa ekarri zuela esatea."
          ],
          pistak: [
            "Erregimenak hazkunde ekonomikoarekin legitimatzen bazuen bere burua, zer gertatu zen 1973an?",
            "Nor zen Carrero Blanco, eta zer zekarren haren heriotzak?",
            "Zer gertatu zen 1974an Portugalen, eta zergatik zen garrantzitsua Espainiarentzat?"
          ]
        },
        {
          id: "7.3-b",
          epigrafea: "7.3",
          mota: "ondorioa",
          galdera: "Zergatik izan zen Carrero Blancoren hilketa (1973ko abendua) kolpe handia «Franco gabeko frankismoa» prestatzeko planarentzat?",
          ideiak: [
            "Francok jarraipena prestatu zuen: 1969an Juan Carlos ondorengo izendatu zuen («a título de Rey»).",
            "Carrero Blanco Francoren konfiantzazko gizona zen, eta 1973an Gobernuko Presidente izendatu zuten.",
            "Plana: monarkiaren forma (Juan Carlos), baina edukia frankista; Carrero zen horren bermea.",
            "ETAk hil zuenean, erregimena barrutik zatitu zen («bunkerra» vs. aperturistak), eta Arias Navarrok ordezkatu zuen."
          ],
          erlazioa: "Carrero zen Franco hil ondoren erregimenaren jarraipena bermatu behar zuen pieza; hura desagertzean, jarraipen-planak bere zutabe nagusia galdu zuen eta barne-zatiketak ageriko bihurtu ziren.",
          akatsak: [
            "Carrero Blanco Francoren ondorengo izendatua zela esatea (Juan Carlos zen).",
            "Hilketa Francoren heriotzaren ondoren gertatu zela esatea.",
            "Hilketa deskribatzea, jarraipen-planarekin lotu gabe."
          ],
          pistak: [
            "Nor izan behar zen Estatuko burua Franco hil ondoren, eta nor gobernuburua?",
            "Zergatik zen Carrero hain garrantzitsua Francorentzat?",
            "Haren heriotzaren ondoren, nola banatu ziren erregimenaren barruko taldeak?"
          ]
        },
        {
          id: "7.3-c",
          epigrafea: "7.3",
          mota: "akatsa",
          galdera: "Ikasle batek idatzi du: «Francok Juan Carlos ondorengo aukeratu zuen, Espainiara demokrazia ekar zezan.» Zer dago gaizki? Azaldu zuzen.",
          ideiak: [
            "1969an Francok Juan Carlos izendatu zuen «a título de Rey», Don Juan (haren aita, oinordeko «naturalagoa») baztertuta.",
            "Juan Carlos erregimenaren barruan hezia zen, eta «kontrolagarriagoa» iruditzen zitzaion Francori.",
            "Helburua jarraipena zen: monarkia frankista, «lotuta» utzitako instituzioekin.",
            "Hala ere, Trantsizioan jarraipenerako sortutako tresna (monarkia) aldaketarako bide bihurtu zen."
          ],
          erlazioa: "Francoren asmoa (frankismoaren jarraipena) eta gertatu zena (Trantsizioa) bereizi behar dira: jarraipenerako sortutako monarkia aldaketarako tresna bihurtu zen ondoren.",
          akatsak: [
            "Juan Carlos Don Juanen aita zela esatea (semea zen).",
            "Juan Carlos 1975 baino lehen errege zela esatea (1975eko azaroaren 22an proklamatu zuten).",
            "Baieztapena zuzentzea, baina gero gertatutako Trantsizioa ukatzea."
          ],
          pistak: [
            "Zergatik ez zuen Francok Don Juan aukeratu?",
            "Zer espero zuen Francok bere ondorengoarengandik?",
            "Asmoa eta emaitza: beti bat datoz historian?"
          ]
        },
        {
          id: "7.4-a",
          epigrafea: "7.4",
          mota: "aldaketa",
          galdera: "Nola aldatu zen errepresioa 1959–1975ean, oposizioa hazi ahala? Zer jarraitu zuen berdin?",
          ideiak: [
            "Errepresioa ez zen desagertu: sofistikatu egin zen eta legalitate-itxuraz jantzi.",
            "Tresna juridikoak: Ordena Publikoaren Legea (1959), Tribunal de Orden Público (TOP, 1963), Prentsa Legea (1966, zentsura berrantolatua).",
            "Aparatua: Brigada Político-Social, espetxeak, isunak, lanpostu-galerak eta salbuespen-egoerak (1969an estatu osoan; Euskal Herrian behin baino gehiagotan).",
            "Azken urteetan gogortu egin zen: Burgosko Prozesua (1970), Terrorismoaren Prebentziorako Dekretua eta fusilamenduak (1975)."
          ],
          erlazioa: "Oposizioa hazi ahala, errepresioak forma aldatu zuen (legezkoago eta sofistikatuago), baina helburua bera zen: disidentzia isilaraztea; eta krisia sakondu zenean, berriz gogortu zen.",
          akatsak: [
            "60ko hamarkadan errepresioa amaitu zela esatea.",
            "TOP auzitegi demokratiko arrunta zela esatea (delitu politikoetarako organo berezia zen).",
            "Tresnak zerrendatzea, aldaketa (sofistikazioa) azaldu gabe."
          ],
          pistak: [
            "Gerraostean nola zigortzen ziren aurkariak, eta nola 60ko hamarkadan?",
            "Zer zen TOP, eta zergatik zen garrantzitsua «legez» epaitzea?",
            "Zer gertatu zen errepresioarekin 1974–1975ean?"
          ]
        },
        {
          id: "7.4-b",
          epigrafea: "7.4",
          mota: "kontzeptua",
          galdera: "Zer esan nahi du frankismoaren errepresioa politikoa ez ezik «soziala» ere izan zela? Jarri adibide bat.",
          ideiak: [
            "Frankismoak gizarte-eredu bat inposatu zuen: familia patriarkala, moral katolikoa eta genero-rol zorrotzak (nazional-katolizismoa).",
            "Eredu horretatik kanpo zeudenak kontrolatu eta zigortu ziren, politikan aritu ez arren.",
            "Adibidea: 1970eko Peligrosidad y Rehabilitación Social Legeak homosexualak, prostituzioarekin lotutako emakumeak eta eskaleak «arriskutsutzat» jo eta zigortu zituen.",
            "Emakumeen mugak moral- eta lege-murrizketen bidez mantendu ziren."
          ],
          erlazioa: "Errepresioa ez zen oposizio politikoaren aurka bakarrik: erregimenaren gizarte-eredu nazional-katolikotik kanpo zegoen oro kontrolatzeko tresna zen.",
          akatsak: [
            "Errepresio soziala gerraostean bakarrik egon zela esatea (1970eko legea frankismo berantiarrekoa da).",
            "Errepresio soziala eta politikoa gauza bera direla esatea, bereizi gabe.",
            "Adibidea ematea, nazional-katolizismoarekin lotu gabe."
          ],
          pistak: [
            "Nor zigortu zezakeen erregimenak inoiz politikan aritu ez bazen ere?",
            "Zer zen «normala» frankismoarentzat familia eta moralari dagokienez?",
            "Zer jokabide jo zituen «arriskutsutzat» 1970eko legeak?"
          ]
        },
        {
          id: "7.4-c",
          epigrafea: "7.4",
          mota: "ondorioa",
          galdera: "Zer ondorio izan zuen azken frankismoaren errepresioaren gogortzeak (1974–1975)?",
          ideiak: [
            "1974an Puig Antich anarkista gaztea «garrote vil»en bidez exekutatu zuten.",
            "1975eko Terrorismoaren Prebentziorako Dekretuak neurri oso zorrotzak ezarri zituen.",
            "1975eko irailaren 27ko bost fusilamenduek (ETAko 2, FRAPeko 3) nazioarteko gaitzespen zabala eta protestak eragin zituzten.",
            "Erregimenaren deslegitimazioa, barnean eta nazioartean, azkartu egin zen; Franco handik bi hilabetera hil zen (1975eko azaroaren 20a)."
          ],
          erlazioa: "Errepresioak indarra erakutsi nahi zuen, baina kontrako efektua izan zuen: erregimena are gehiago deslegitimatu eta isolatu zuen, haren amaiera iristear zegoenean.",
          akatsak: [
            "Fusilamenduek erregimena indartu zutela esatea, ondorioak aipatu gabe.",
            "1975eko fusilatuak ETAko kideak bakarrik zirela esatea (FRAPekoak ere bai).",
            "Frankismoa erreforma adostu baten bidez amaitu zela esatea (Francoren heriotzarekin amaitu zen)."
          ],
          pistak: [
            "Nola erreakzionatu zuen Europak 1975eko irailaren fusilamenduen aurrean?",
            "Errepresio gogorrak erregimena indartzen du beti, ala ahuldu ere egin dezake?",
            "Zer gertatu zen bi hilabete geroago?"
          ]
        }
      ]
    }
  ]
};
