#!/usr/bin/env python3
"""
build.py — Historia BTX2 web orriaren eraikitzailea.

Use:    python3 build.py

Behar du:
  pip install pyyaml jinja2

Edukia content/-en dago, plantillak templates/-en, eta irteera proiektuaren
erroan (index.html eta temas/*.html).
"""
import sys
from datetime import date, datetime
from html import escape
from pathlib import Path

try:
    import yaml
    from jinja2 import Environment, FileSystemLoader, select_autoescape
except ImportError as e:
    print(f"❌ Dependentzia falta: {e}\n   Exekutatu: pip install pyyaml jinja2", file=sys.stderr)
    sys.exit(1)


ROOT = Path(__file__).parent
CONTENT = ROOT / "content"
TEMPLATES = ROOT / "templates"
TEMAS_DIR = ROOT / "temas"

# --- Helpers ---------------------------------------------------------------

def load_yaml(path: Path):
    with open(path, "r", encoding="utf-8") as f:
        return yaml.safe_load(f)


def format_num(n):
    return f"{int(n):02d}"


def render_to(template_name: str, ctx: dict, out_path: Path, env):
    tpl = env.get_template(template_name)
    html = tpl.render(**ctx)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)


def write_text(out_path: Path, text: str):
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(text)


def page_url(base_url: str, path: str = "") -> str:
    return f"{base_url.rstrip('/')}/{path.lstrip('/')}" if path else f"{base_url.rstrip('/')}/"


def build_sitemap(site: dict, temas_meta: list):
    base_url = site["base_url"]
    today = date.today().isoformat()
    pages = [
        ("", "1.0"),
        ("kronologia.html", "0.9"),
        ("kontzeptu-entrenamendua.html", "0.7"),
        ("pau-egitura.html", "0.8"),
    ]
    for tema in temas_meta:
        pages.append((f"temas/{format_num(tema['num'])}-{tema['slug']}.html", "0.8"))

    urls = []
    for path, priority in pages:
        loc = escape(page_url(base_url, path))
        urls.append(
            "  <url>\n"
            f"    <loc>{loc}</loc>\n"
            f"    <lastmod>{today}</lastmod>\n"
            "    <changefreq>weekly</changefreq>\n"
            f"    <priority>{priority}</priority>\n"
            "  </url>"
        )

    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "\n".join(urls)
        + "\n</urlset>\n"
    )


def build_robots(site: dict):
    return (
        "User-agent: *\n"
        "Allow: /\n\n"
        f"Sitemap: {page_url(site['base_url'], 'sitemap.xml')}\n"
    )


def build_404(site: dict, current_year: int):
    return f"""<!DOCTYPE html>
<html lang="eu">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>404 · Orria ez da aurkitu · {escape(site['brand']['label'])}</title>
  <meta name="robots" content="noindex" />
  <meta name="description" content="Orria ez da aurkitu. Itzuli Historia BTX2 webgunearen hasierara." />
  <link rel="canonical" href="{escape(page_url(site['base_url']))}" />
  <link rel="stylesheet" href="assets/css/styles.css?v={escape(str(site['cache_version']))}" />
</head>
<body>
  <a class="skip-link" href="#main">Edukira saltatu</a>
  <header class="nav">
    <div class="container">
      <a class="brand" href="index.html"><span class="logo">H</span><span>{escape(site['brand']['label'])}<small>{escape(site['brand']['sublabel'])}</small></span></a>
      <nav class="nav-links">
        <a href="index.html#denbora-lerroa">Denbora-lerroa</a>
        <a href="index.html#gaiak">Gaiak</a>
        <a href="index.html#tresnak">Tresnak</a>
        <a class="cta" href="index.html">Hasiera</a>
      </nav>
    </div>
  </header>
  <main class="section" id="main" tabindex="-1">
    <div class="container section-head">
      <span class="kicker">404</span>
      <h1>Orria ez da aurkitu</h1>
      <p>Baliteke esteka zaharra izatea edo helbidea gaizki idatzita egotea.</p>
      <p><a class="btn btn-primary" href="index.html">Itzuli hasierara</a></p>
    </div>
  </main>
  <footer class="footer">
    <div class="container">
      <div class="foot-bottom">
        <span>{escape(site['title'])}</span>
        <span>© <span data-year>{current_year}</span> · {site['copyright']}</span>
      </div>
    </div>
  </footer>
</body>
</html>
"""


# --- Main ------------------------------------------------------------------

def main():
    if not CONTENT.exists():
        print(f"❌ Edukia ez dago: {CONTENT}", file=sys.stderr); sys.exit(1)

    site_data = load_yaml(CONTENT / "site.yaml")
    site = site_data["site"]
    eras = site_data["eras"]
    temas_meta = site_data["temas"]
    home_timeline = site_data["home_timeline"]

    env = Environment(
        loader=FileSystemLoader(TEMPLATES),
        autoescape=select_autoescape(disabled_extensions=("j2",)),
        trim_blocks=False,
        lstrip_blocks=False,
        keep_trailing_newline=True,
    )
    env.filters["format_num"] = format_num

    current_year = datetime.now().year

    # --- Build index.html ----
    render_to(
        "index.html.j2",
        {
            "site": site,
            "temas": temas_meta,
            "home_timeline": home_timeline,
            "current_year": current_year,
        },
        ROOT / "index.html",
        env,
    )
    print("✓ index.html")

    write_text(ROOT / "sitemap.xml", build_sitemap(site, temas_meta))
    print("✓ sitemap.xml")
    write_text(ROOT / "robots.txt", build_robots(site))
    print("✓ robots.txt")
    write_text(ROOT / "404.html", build_404(site, current_year))
    print("✓ 404.html")

    # --- Build temas ----
    built = 0
    for i, tmeta in enumerate(temas_meta):
        num = tmeta["num"]
        yaml_path = CONTENT / "temas" / f"{num:02d}.yaml"
        if not yaml_path.exists():
            # Skip silently — file not yet migrated to YAML
            continue

        tema_data = load_yaml(yaml_path)

        # Ensure meta has num/era/slug/years/title (from site.yaml if missing)
        meta = tema_data.setdefault("meta", {})
        for key in ("num", "slug", "years", "title", "era", "short"):
            meta.setdefault(key, tmeta.get(key))
        meta["number"] = meta["num"]

        era_num = meta["era"]
        accent = eras[era_num]

        # Pager
        prev_t = temas_meta[i - 1] if i > 0 else None
        next_t = temas_meta[i + 1] if i + 1 < len(temas_meta) else None
        pager = {"prev": prev_t, "next": next_t}

        out = TEMAS_DIR / f"{num:02d}-{meta['slug']}.html"
        render_to(
            "tema.html.j2",
            {
                "site": site,
                "tema": tema_data,
                "accent": accent,
                "pager": pager,
                "current_year": current_year,
            },
            out,
            env,
        )
        print(f"✓ temas/{out.name}")
        built += 1

    print(f"\nEgina: 1 hasiera + {built} gai ({len(temas_meta) - built} oraindik YAML-era migratu gabe).")


if __name__ == "__main__":
    main()
