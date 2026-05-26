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
from datetime import datetime
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
        for key in ("num", "slug", "years", "title", "era"):
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
