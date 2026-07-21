# Rock Bag Filter Units — Website

A reworked, modern website for [www.rockbagfilterunits.com](https://www.rockbagfilterunits.com) —
Rock Bag Filter Units by **Project Material Pty Ltd** (Brendale QLD, Australia).

## What's here

A fast, dependency-free static site:

```
index.html      — single-page site (hero, product, sizes, applications, advantages, about, contact)
css/style.css   — all styling (responsive, reduced-motion aware)
js/main.js      — mobile nav, scroll-reveal, nav scroll-spy
```

- **No build step, no frameworks, no external assets** — deploy the folder anywhere
  (GitHub Pages, Netlify, Cloudflare Pages, or any web host).
- Fully responsive from mobile to desktop; sticky header with mobile menu.
- Accessible: skip link, semantic landmarks, labelled forms, `prefers-reduced-motion` support.
- SEO: meta description and Open Graph tags included.
- All graphics are inline SVG (logo, hero rock-bag illustration, icons), so there are
  no image files to manage. Replace them with real project photography when available —
  the hero (`.hero-art`) and application cards are the natural places to add photos.

## Content sections

1. **Hero** — value proposition, key stats (0.5–12 t sizes, 100+ bags/day, 50–100 yr HDPE life)
2. **Product** — what a rock bag filter unit is; PE vs HDPE material comparison
3. **Sizes & specs** — visual size scale and specification table (0.5–12 tonne)
4. **Applications** — 9 application cards (bridge piers, offshore wind, cables & pipelines, coastal, flood response, culverts, ports, mangroves, temporary works)
5. **Why rock bags** — advantages vs concrete/gabions + engineering support panel
6. **About** — Project Material story and milestone timeline (2022 full-scale Brisbane test, 2023 global supply)
7. **Contact** — enquiry form and company details (design@rockbagfilterunits.com)

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Notes for going live

- The contact form currently uses a `mailto:` action as a zero-backend fallback.
  For production, point it at a form service (Formspree, Netlify Forms, etc.) or the
  existing WordPress/PHP mail handler.
- Verify the phone number and any additional contact channels before launch; the site
  currently lists the published address and design@ email only.
