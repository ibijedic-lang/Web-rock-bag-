# Rock Bag Filter Units — Website

A modern, responsive rework of [www.rockbagfilterunits.com](https://www.rockbagfilterunits.com) —
the dedicated rock bag brand of Project Material Pty Ltd (Brendale, QLD, Australia).

## Pages

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero, product overview, benefits, unit sizes table, installation steps, applications preview |
| Applications | `applications.html` | Nine application areas across marine, civil and energy sectors |
| Why Rock Bags | `advantages.html` | HDPE material advantages and comparison vs riprap, gabions, concrete |
| About Us | `about.html` | Company story, services, worldwide supply |
| Contact | `contact.html` | Contact details and enquiry form (mailto-based, no backend required) |

## Tech

- Pure static HTML/CSS/JS — no build step, no frameworks, no external dependencies.
- All graphics are inline SVG (fast, crisp, zero image requests).
- Mobile-first responsive layout with a hamburger nav under 680px.
- Scroll-reveal animations (respects `prefers-reduced-motion`).
- Deployable as-is to GitHub Pages, Netlify, or any static host.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Notes

- The specification table on the home page uses indicative figures; swap in certified
  datasheet values when available.
- The contact form opens the visitor's email client via `mailto:`. To use a real form
  backend, point the form at a service such as Formspree and remove the mailto handler
  in `js/main.js`.
- Replace `sales@rockbagfilterunits.com` if the business uses a different enquiry address.
