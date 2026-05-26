#!/usr/bin/env python3
"""
parse_existing.py — Existitzen den tema HTML batetik YAML edukia ateratzen du.

Use:    python3 scripts/parse_existing.py temas/01-antzinako-erregimena.html
        python3 scripts/parse_existing.py --all      # gai guztiak content/temas/

Behar du:
  pip install pyyaml beautifulsoup4
"""
import sys
import re
import glob
from pathlib import Path

try:
    import yaml
    from bs4 import BeautifulSoup
    from bs4.element import NavigableString, Tag
except ImportError as e:
    print(f"❌ Dependentzia falta: {e}", file=sys.stderr); sys.exit(1)


ROOT = Path(__file__).parent.parent


def inner_html(node):
    """Return inner HTML of a BS4 tag, minified-ish."""
    if node is None:
        return ""
    parts = []
    for c in node.contents:
        if isinstance(c, NavigableString):
            parts.append(str(c))
        else:
            parts.append(str(c))
    text = "".join(parts).strip()
    # Compact whitespace between tags a bit
    return text


def parse_tema(html_path: Path):
    with open(html_path, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f.read(), "html.parser")

    out = {"meta": {}, "intro": "", "timeline": [], "keydates": [], "sections": [], "glossary": []}
    meta = out["meta"]

    # Meta: number, slug, era from filename
    fname = html_path.name
    m = re.match(r"(\d{2})-([\w-]+)\.html", fname)
    if m:
        meta["num"] = int(m.group(1))
        meta["slug"] = m.group(2)

    # Title (h1 in tema-hero)
    h1 = soup.select_one(".tema-hero h1")
    if h1:
        meta["title"] = h1.get_text(strip=True)
    # Years (years-pill)
    yp = soup.select_one(".tema-hero .years-pill")
    if yp:
        meta["years"] = yp.get_text(strip=True).lstrip("📅 ").strip()
    # PDF download
    dl = soup.select_one(".tema-hero .dl-btn")
    if dl:
        href = dl.get("href", "")
        if href.endswith(".pdf") and "apunteak-osoa" not in href:
            meta["pdf"] = href.split("/")[-1]
    # Iturri PDF
    ifr = soup.select_one(".iturri-frame")
    if ifr:
        src = ifr.get("src", "")
        if src:
            meta["iturri_pdf"] = src.split("/")[-1].split("#")[0]

    # Source note (callout at top of content)
    intro_area = soup.select_one(".tema-content")
    if intro_area:
        first_callout = intro_area.find("div", class_="callout")
        # If the callout is the first child AND has Iturri-oharra title, treat as source note
        if first_callout and "Iturri-oharra" in first_callout.get_text():
            # Extract the text body (after the title)
            note = first_callout.get_text("\n").replace("ℹ️ Iturri-oharra", "").strip()
            meta["source_note"] = note

    # Intro: <p class="intro-card reveal">...</p>
    intro_p = soup.select_one(".intro-card")
    if intro_p:
        out["intro"] = inner_html(intro_p)

    # Timeline items
    for item in soup.select(".tema-tl-section .tl-item"):
        out["timeline"].append({
            "year": item.select_one(".tl-year").get_text(strip=True),
            "label": item.select_one(".tl-label").get_text(strip=True),
            "target": item.get("href", "").lstrip("#"),
            "desc": item.get("title", ""),
        })

    # Key dates
    for li in soup.select(".keydates li"):
        out["keydates"].append({
            "year": li.select_one(".kd-year").get_text(strip=True),
            "text": li.select_one(".kd-text").get_text(strip=True),
        })

    # Sections (g1-1, g1-2, etc.)
    for sec in soup.select('.tema-content > section[id^="g"]'):
        sid = sec.get("id", "")
        if not re.match(r"g\d+-\d+", sid):
            continue
        h2 = sec.find("h2")
        if not h2:
            continue
        # Extract number from h2's first .h-num span
        hnum = h2.select_one(".h-num")
        number = hnum.get_text(strip=True) if hnum else ""
        # Title = h2 text without the .h-num content
        title_parts = []
        for c in h2.contents:
            if isinstance(c, NavigableString):
                title_parts.append(str(c))
            elif isinstance(c, Tag) and "h-num" not in (c.get("class") or []):
                title_parts.append(c.get_text())
        title = "".join(title_parts).strip()

        # Body: everything in section except h2
        body_parts = []
        for c in sec.contents:
            if isinstance(c, Tag) and c.name == "h2":
                continue
            if isinstance(c, NavigableString):
                if str(c).strip():
                    body_parts.append(str(c))
            else:
                body_parts.append(str(c))
        body = "".join(body_parts).strip()

        out["sections"].append({
            "id": sid,
            "number": number,
            "title": title,
            "body": body,
        })

    # Glossary
    for g in soup.select(".glossary-grid .gloss-item"):
        dt = g.find("dt")
        dd = g.find("dd")
        if dt and dd:
            out["glossary"].append({
                "term": dt.get_text(strip=True),
                "def": inner_html(dd),
            })

    return out


# Custom YAML representer for multi-line strings to use literal block style
def str_representer(dumper, data):
    if "\n" in data or len(data) > 80:
        return dumper.represent_scalar("tag:yaml.org,2002:str", data, style="|")
    return dumper.represent_scalar("tag:yaml.org,2002:str", data)


yaml.add_representer(str, str_representer)


def write_yaml(data, out_path: Path):
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        yaml.dump(data, f, allow_unicode=True, sort_keys=False, width=1000)


def process_file(html_path: Path):
    data = parse_tema(html_path)
    n = data["meta"].get("num")
    if not n:
        print(f"⚠️  Could not determine tema number from {html_path}", file=sys.stderr)
        return
    out = ROOT / "content" / "temas" / f"{n:02d}.yaml"
    write_yaml(data, out)
    sections = len(data["sections"])
    keydates = len(data["keydates"])
    glossary = len(data["glossary"])
    timeline = len(data["timeline"])
    print(f"✓ Tema {n:>2}: {sections} atal, {keydates} data, {timeline} mugarri, {glossary} glosario → {out.relative_to(ROOT)}")


def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__); sys.exit(0)

    if args == ["--all"]:
        files = sorted(glob.glob(str(ROOT / "temas" / "*.html")))
        for f in files:
            process_file(Path(f))
    else:
        for arg in args:
            process_file(Path(arg))


if __name__ == "__main__":
    main()
