# Rock Bag Filter Units — Website

A reworked, modern website for [Rock Bag Filter Units](https://www.rockbagfilterunits.com) — supplier of rock-filled mesh filter units for scour protection, erosion control and asset protection.

## Pages

| Page | Purpose |
|------|---------|
| `index.html` | Home — hero, benefits, unit sizes, applications overview, HDPE highlight |
| `products.html` | Product range — 1, 2, 4, 6, 8 and 10 tonne units, netting options |
| `applications.html` | Applications — coastal, bridges/rivers, ports, offshore, subsea, habitat |
| `advantages.html` | Why HDPE — material advantages and comparison table |
| `about.html` | About the company, milestones and values |
| `contact.html` | Contact details, enquiry form (mailto-based, no backend) and FAQ |

## Tech

- Pure static HTML/CSS/JS — no build step, no frameworks, no external dependencies
- Fully responsive (mobile nav, fluid grids), with scroll-reveal animations that respect `prefers-reduced-motion`
- All graphics are inline SVG, so the site works offline and loads fast
- Ready to host anywhere static files are served (GitHub Pages, Netlify, any web server)

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
