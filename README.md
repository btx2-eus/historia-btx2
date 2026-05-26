# Espainiako Historia · 2. Batxilergoa · 1808–2011

Espainiako Historia (1808–2011) ikasteko web interaktiboa, **euskara hutsean**, **EBAU/USaP** azterketarako prestatua.

🔗 **Web orria:** [https://btx2-eus.github.io/historia-btx2/](https://btx2-eus.github.io/historia-btx2/)

## Ezaugarriak

- 📚 **10 gaiak osorik** (1808–2011): bakoitza bere koloreaz, sarrera, atalak eta laburpenarekin.
- 🕓 **Denbora-lerro interaktiboa**: nagusia (gai guztietan zehar) eta gaiz gaiko mugarriak.
- 📖 **Glosarioa**: 250+ kontzeptu funtsezko, lerro etenez azpimarratuta testuan eta tooltipekin.
- 🃏 **Flashcardak**: kartak iraulgarriak (glosarioa + funtsezko datak), nahaste eta nabigazio-botoiekin.
- 📜 **Iturri historikoak**: PDFak orrian txertatuta, gida-galderekin (B galderarako).
- 📄 **Apunte deskargagarriak**: gai bakoitzaren PDFa + apunte osoak (170 orrialde).
- ♿ **Erabilgarritasuna**: teklatu-nabigazioa, skip-link, fokuratze-eraztunak, kontraste egokia.
- 📱 **Diseinu egokitua**: ondo ikusten da mugikorrean, tabletean eta ordenagailuan.

## Egitura

```
historia-btx2-web/
├── index.html              # Hasierako orria
├── temas/                  # 10 gaietako orriak
│   ├── 01-antzinako-erregimena.html
│   ├── 02-berrezarkuntza.html
│   └── …
├── assets/
│   ├── css/styles.css      # Diseinu-sistema osoa
│   └── js/app.js           # Interakzio guztiak
├── pdf/                    # Apunteak deskargatzeko
│   ├── 01-antzinako-erregimena.pdf
│   ├── historia-btx2-apunteak-osoa.pdf
│   └── iturri/             # Iturri historikoen PDFak
└── README.md               # Fitxategi hau
```

## Lokalean exekutatzeko

Webgunea zerbitzu-eskakizun gabea da (HTML/CSS/JS hutsa). Ikusteko:

```bash
cd historia-btx2-web
python3 -m http.server 8000
# Sartu http://localhost:8000
```

Edo `index.html` zuzenean ireki dezakezu nabigatzailearekin.

## Edukia eguneratzeko (build sistema)

Web orriaren HTML guztiak **sortzen dira** YAML edukietatik eta Jinja2 plantilletatik. Hala, aldaketa orok puntu bakar batean egin behar dira.

### Edukia aldatzeko

1. **Gai baten edukia** aldatzeko: editatu `content/temas/NN.yaml` (atalak, glosarioa, datak, denbora-lerroa, e.a.).
2. **Egitura, nabigazioa edo orri-diseinua** aldatzeko: editatu `templates/tema.html.j2` edo `templates/index.html.j2`.
3. **Gune-konfigurazioa** (logo-testua, copyright, etab.): editatu `content/site.yaml`.

### Eraikitzeko

```bash
pip install pyyaml jinja2 beautifulsoup4   # behin bakarrik
python3 build.py                          # HTMLak berriz sortzen ditu
```

Honek `index.html` eta `temas/*.html` berridazten ditu.

### Sortutakoa argitaratzeko

```bash
git add -A && git commit -m "..." && git push
```

GitHub Pages-ek automatikoki publikatzen du 1–3 minututan.

> **Oharra:** CSS edo JS aldatzen badira, igo `site.cache_version` `content/site.yaml`-en eta exekutatu `python3 build.py` berriro.

### Egitura tekniko

```
content/
  site.yaml              # Gune-konfigurazioa, gai-zerrenda, era-koloreak
  temas/01.yaml … 10.yaml  # Gai bakoitzaren edukia
templates/
  index.html.j2          # Hasierako orriaren plantilla
  tema.html.j2           # Gaien plantilla
scripts/
  parse_existing.py      # Existitzen den HTMLetik YAMLa atera (parseatzailea, behin bakarrik erabili behar dena migraziorako)
build.py                 # Eraikitzailea
```

## Edukia

| Gaia | Garaia | Egoera |
|---|---|---|
| 1. Antzinako Erregimenaren krisia | 1808–1876 | ✓ |
| 2. Berrezarkuntzaren sistema | 1876–1930 | ✓ |
| 3. Euskal Herriko industrializazioa | 1875–1930 | ✓ (iturri historikoak gabe) |
| 4. II. Errepublika | 1931–1936 | ✓ |
| 5. Gerra Zibila | 1936–1939 | ✓ |
| 6. Diktadura frankista I | 1939–1959 | ✓ |
| 7. Diktadura frankista II | 1959–1975 | ✓ |
| 8. Trantsizioa | 1975–1982 | ✓ |
| 9. Monarkia parlamentarioa | 1982–1996 | ✓ (iturri historikoak gabe) |
| 10. XXI. mendea | 1996–2011 | ✓ (irakaslearen iturri-materialarik gabe; ezagutza orokorretik idatzia, berrikuspena behar du) |

## Egilea eta lizentzia

- **Egilea:** La Salle Donostia · Historia BTX2 mintegia
- **Lizentzia:** [CC BY-NC-SA 4.0](LICENSE) — Aitortza, Ez-komertziala, Bizkide-bizkide.
  - ✓ Banatu eta egokitu daiteke libreki.
  - ✓ Aitortza eman behar zaio jatorrizko egileari.
  - ✗ Erabilera komertziala ez da onartzen.
  - ↺ Eratorritako lanak lizentzia berdinarekin partekatu behar dira.
