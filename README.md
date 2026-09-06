# [YOUR NAME] — Web Development × SEO
### Editorial Art Direction & Technical Showcase

> **Core Philosophy:** "TECHNICAL PRECISION × VISUAL SIMPLICITY"  
> Combining Swiss editorial typography, minimal brutalism, and uncompromising technical SEO performance.

---

## ✦ Design Architecture

This site rejects the generic templates, SaaS cards, and AI-bloated designs common across the web. Instead, it operates like an architectural monograph and interactive case study:

1. **No Conventional Navbar**: The page is a single, continuous editorial flow. The only persistent element is a micro-action `[ LET'S TALK → ]` anchor in the corner.
2. **Visual Editorial Spine**: A left-hand hairline guide and dynamic numeric counter (`00` to `08`) that updates as the visitor scrolls through the study.
3. **Restrained Monochrome + One Accent**: Archival paper-white background (`#fbfbf9`), near-black typography (`#121211`), and an architectural Swiss vermilion accent (`#e63b19`) used strictly for micro-indicators, links, and status highlights.
4. **Editorial Asymmetry**: Expansive typographic scale, asymmetric overhang project layouts, and hairline grid dividers.

---

## ✦ Structure & Sections

* **Hero — The Signature Moment**: Typographic entrance (`BUILT TO BE SEEN.`), craft statement, real-time availability indicator, and KPI spec strip.
* **01 / What I Build**: The 3-pillar convergence of Design, Development, and SEO.
* **02 / Expertise**: Typographic capability list (`01 WEB DEVELOPMENT`, `02 TECHNICAL SEO`, `03 PERFORMANCE`, etc.) with interactive drawers and contextual cursor hints.
* **03 / The Numbers**: Minimal, uninflated metric glyphs with transparent placeholders.
* **04 / Selected Work**: 3 horizontal editorial blocks with bespoke wireframe preview canvases, service metadata, and verified result badges.
* **05 / Work Sequence**: `DISCOVER` → `BUILD` → `OPTIMIZE` → `GROW`.
* **06 / SEO Philosophy**: *"SEO starts before the first page is indexed."* Detailed teardown of 6 core pillars.
* **07 / About**: Crisp, personal narrative free of agency buzzwords.
* **08 / Contact**: Typographic climax (*"Let's build something worth finding."*), visible direct inbox, and one-click copy feedback.
* **Minimal Footer**: Channel links and copyright.

---

## ✦ Content Customization Checklist

Search and replace the bracketed placeholders across `index.html`, `robots.txt`, and `sitemap.xml`:

| Placeholder | Context | Example Replacement |
| :--- | :--- | :--- |
| `[YOUR NAME]` | Masthead, Hero, About, Footer, Schema JSON-LD | `Alex Vance` |
| `[YOUR EMAIL]` | Direct inbox link, mailto buttons, Schema | `hello@alexvance.dev` |
| `[YOUR LOCATION]` | Masthead location stamp, About | `Zurich, Switzerland` |
| `[YOUR-DOMAIN]` | Canonical, Open Graph, Twitter, Sitemap | `alexvance.dev` |
| `[YOUR-HANDLE]` | Twitter / X creator tag | `@alexvance` |
| `[LINKEDIN]` | Footer & Schema social profile | `alexvancedev` |
| `[GITHUB]` | Footer & Schema social profile | `alexvance` |
| `[INSTAGRAM]` | Footer social profile | `alexvance.studio` |
| `[PROJECT ONE NAME]` | Selected Work 01 | `Studio Forma Architecture` |
| `[PROJECT ONE-URL]` | Project 01 external URL | `https://forma-studio.com` |
| `[REAL RESULT]` | Verified result callout | `+140% organic impressions in 90 days` |
| `[XX]+` / `[XX]%` | Verified proof metrics | `28+ Projects`, `94% Avg. Improvement` |

---

## ✦ Technical & SEO Architecture

* **Valid Semantic HTML5**: Accessible heading structure (`h1` &rarr; `h2` &rarr; `h3`), landmarks (`header`, `main`, `section`, `footer`, `aside`).
* **Rich Schema.org JSON-LD**: Comprehensive graph linking `WebSite`, `Person`, and `ProfessionalService` entities.
* **Core Web Vitals Optimized**:
  * Zero heavy JS frameworks (clean vanilla JS under 4KB).
  * System/Geist font loading with `font-display: swap`.
  * Zero cumulative layout shift (`CLS = 0`).
  * Instant First Contentful Paint (`FCP < 0.4s`).
* **Accessibility (WCAG 2.1 AA)**:
  * High-contrast ratios (> 13:1).
  * Keyboard navigation and visible focus rings.
  * Native `prefers-reduced-motion` overrides (disables cursor physics and transition delays).
  * Touch-screen detection that disables cursor elements on coarse pointers.

---

## ✦ Testing & Local Preview

Serve locally using any static HTTP server or open directly in a modern browser:

```powershell
# Using Python:
python -m http.server 8080 --directory "C:\Users\Anonim-PC\.gemini\antigravity\scratch\editorial-web-seo"

# Or using Node:
npx serve "C:\Users\Anonim-PC\.gemini\antigravity\scratch\editorial-web-seo"
```
