# Rock Bag Filter Units — Website

Reworked marketing website for [rockbagfilterunits.com](https://www.rockbagfilterunits.com) —
Rock Bag Filter Units by Project Material Pty Ltd (Brendale, QLD, Australia).

## Stack

Fully static, dependency-free site:

- `index.html` — single-page site (hero, product, applications, sizes & specs, comparison, installation, about, contact)
- `css/style.css` — all styling (responsive, mobile nav, scroll-reveal, reduced-motion support)
- `js/main.js` — mobile nav toggle, scroll-reveal animations, contact form (mailto handoff)

No build step, no frameworks, no external assets — deploy the folder to any static host
(GitHub Pages, Netlify, Cloudflare Pages) or drop it into an existing web root.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Content sources

Content is based on the existing rockbagfilterunits.com site and Project Material
public materials: product sizes (1–10 tonne), HDPE/carbon-black mesh specification,
applications, installation workflow, and contact details.

## Notes

- The contact form is a `mailto:` handoff (static hosting has no backend). Swap the
  submit handler in `js/main.js` for a form service (e.g. Formspree) or an API endpoint
  if server-side handling is wanted.
- Replace the SVG hero illustration with real project photography when available —
  the previous site's image assets were not accessible from this environment.
