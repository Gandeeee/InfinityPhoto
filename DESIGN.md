# Design System: Infinity Photo (Porcelain & Obsidian)

## 1. Visual Theme & Atmosphere
A high-end, contemporary editorial photography portfolio that evokes natural light, clean structures, and the coastal atmosphere of Bali. The layout centers around translucent, layered **glassmorphism panels** floating over ambient, slowly shifting mesh gradients, creating visual depth and tactile realism without heavy borders.
- **Density:** Spatial Airy (3.5/10) — Content breathes with generous margin spaces and clean lines.
- **Variance:** Offset Asymmetrical Bento & Cascade (8/10) — Masonry grids, diagonal photo alignments, and Z-axis staggered stacks.
- **Aesthetic:** Glassmorphism and Mesh Gradients — Floating glassy cards over organic gradient fields.

## 2. Color Palette & Roles

### Porcelain Theme (Light Mode - Default)
- **Canvas Background:** HSL(220, 20%, 97%) — Cool white with a subtle blue/gray sky undertone.
- **Glass Base:** `rgba(255, 255, 255, 0.45)`
- **Glass Border:** `rgba(255, 255, 255, 0.65)`
- **Glass Shadow:** `0 8px 32px 0 rgba(99, 102, 241, 0.04)`
- **Typography Ink:** HSL(220, 25%, 12%) — Rich deep navy-charcoal.
- **Muted Ink:** HSL(220, 15%, 45%) — Slate gray for descriptions and metadata.
- **Primary Accent:** HSL(239, 84%, 67%) — Slate Indigo (`#6366F1`)
- **Secondary Accent:** HSL(328, 90%, 70%) — Blush Rose (`#F472B6`)

### Obsidian Theme (Dark Mode)
- **Canvas Background:** HSL(224, 32%, 8%) — Deep navy-obsidian black.
- **Glass Base:** `rgba(15, 20, 35, 0.45)`
- **Glass Border:** `rgba(130, 140, 200, 0.12)`
- **Glass Shadow:** `0 8px 32px 0 rgba(0, 0, 0, 0.35)`
- **Typography Ink:** HSL(220, 20%, 92%) — Crisp cool white.
- **Muted Ink:** HSL(220, 12%, 52%) — Gray-slate with cool undertone.
- **Primary Accent:** HSL(234, 89%, 74%) — Soft Amethyst (`#818CF8`)

## 3. Typography Rules
- **Display:** "Cormorant Garamond" (Serif) — Headings, display lines, and quotes. Styled with light weights (`font-light` / 300) and narrow letter spacing (`tracking-tight`) to evoke boutique editorial magazines.
- **Body:** "DM Sans" (Sans-Serif) — Paragraph copy, buttons, labels, and spec sheets. Line height set to 1.62.
- **Mono:** "Geist Mono" — Utilized for index tags, dates, and spec numerals.

## 4. Component Stylings
- **The Glass Card (Porcelain & Obsidian Glass):**
  - Uses the `.glass` utility. A background backing with `backdrop-filter: blur(20px)` and soft box-shadows.
- **Buttons:** Fully rounded capsule pills (`rounded-full`) with a glass base. Primary CTAs feature a nested icon button-in-button.
- **Inputs:** Underlined glass fields with smooth transitions on focus.
- **Theme Toggle:** Floating Sun/Moon button inside the navbar.

## 5. Ambient Mesh Backgrounds
Decorative fixed radial gradients behind glass sections:
- `mesh-hero`: Indigo/Blush blooms in top-left & bottom-right.
- `mesh-portfolio`: Diffused indigo center-bottom bloom.
- `mesh-services`: Soft blush violet bloom.

## 6. Anti-Patterns
- **NO** solid solid-black `#000` or solid grey backgrounds.
- **NO** generic 1px gray borders — use transparent white/indigo glass border variables.
- **NO** gold accents (`#C9A961`) — replaced completely with Indigo (`#6366F1`) & Blush (`#F472B6`).
- **NO** bouncing chevrons or filler guides.
