# InfinityPhoto — Design System

## Typography

| Role | Font | Weight | Tracking |
|------|------|--------|----------|
| Display headings | Cormorant Garamond | Light (300) | tight |
| Card titles | Cormorant Garamond | Light–Normal (300–400) | wide |
| Body text | DM Sans | Light (300) | normal |
| Labels & eyebrows | DM Sans | SemiBold (600) | 0.12em–0.15em |
| Monospace / data | Geist Mono | Light (300) | widest |

Minimum text size: **11px**. Nothing smaller ships.

---

## Color Palette

### Light Mode — "Porcelain"

| Token | HSL | Hex | Role |
|-------|-----|-----|------|
| background | 220 20% 97% | #F4F5F7 | Cool white-blue canvas |
| foreground | 220 25% 12% | #171D2A | Deep navy-charcoal text |
| primary | 42 58% 52% | #C9A961 | Classic Antique Champagne Gold |
| accent | 42 30% 75% | #D4C7A0 | Muted Champagne/Bronze |
| destructive | 12 45% 55% | #C87A5A | Warm Terracotta Rose (secondary) |
| muted | 220 15% 93% | #ECEDF0 | Soft slate |
| muted-foreground | 220 12% 46% | #6B7080 | Secondary text |

### Dark Mode — "Obsidian"

| Token | HSL | Hex | Role |
|-------|-----|-----|------|
| background | 224 32% 8% | #0E121E | Deep navy-obsidian |
| foreground | 220 20% 93% | #ECEDF0 | Cool white text |
| primary | 42 58% 58% | #D4B46E | Bright Gold |
| accent | 42 25% 65% | #BBA878 | Antique Gold |
| destructive | 12 40% 50% | #B36B50 | Warm Terracotta Rose (secondary) |

---

## Glassmorphism

All elevated surfaces use the `.glass` utility:
- Background: semi-transparent white (light) or navy (dark)
- Border: 1px translucent white edge
- Blur: 20px backdrop-filter
- Shadow: gold-tinted soft glow with inner highlight

Heavy variant (`.glass-heavy`) for overlays uses 28px blur and higher opacity.

---

## Interaction

- Hover transitions: 280–320ms with `cubic-bezier(0.32, 0.72, 0, 1)`
- Spring animations: Framer Motion with `stiffness: 180, damping: 20`
- Scroll reveals: `whileInView` with Y-axis translation and blur fade
- Film grain: Fixed SVG noise overlay at 2.5% opacity (global)

---

## Layout

- Max content width: `max-w-6xl` (content) / `max-w-7xl` (full-width sections)
- Section padding: `py-32 md:py-44`
- Card border-radius: `rounded-[2rem]` (standard) / `rounded-[2.5rem]` (CTA panels)
- Glass cards use `p-1.5` outer bezel with inner rounded corners

---

## WebGL

- `LiquidHeroCanvas`: Three.js full-screen shader canvas behind Hero section
- Custom GLSL fragment shader with liquid UV displacement, auto-breathing ripple, and chromatic aberration on mouse velocity
- `CursorSpotlight`: Amber radial glow tracking cursor position

---

## Fonts Loaded

```html
<!-- Google Fonts -->
Cormorant Garamond: 300, 400, 500, 600, 700 (+ italics)
DM Sans: Variable 100–1000
Geist Mono: Variable 100–900
```
