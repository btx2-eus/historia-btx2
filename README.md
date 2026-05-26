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

## Edukia eguneratzeko

1. Gai baten edukia aldatzeko: editatu `temas/NN-…html`.
2. Glosarioa: editatu `<dl class="glossary-grid">` ataleko `<dt>` / `<dd>` parak (flashcardak automatikoki sortuko dira berriz).
3. Funtsezko datak: editatu `<ul class="keydates">` zerrenda.
4. Aldaketa egin ostean:
   ```bash
   git add -A && git commit -m "..." && git push
   ```
5. GitHub Pages-ek automatikoki publikatzen du 1–3 minututan.

> **Oharra:** CSS edo JS aldatzen badira, igo `?v=N` zenbakia HTML-en estekan (`styles.css?v=N`, `app.js?v=N`), ikasleen arakatzaileek azken bertsioa karga dezaten.

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
