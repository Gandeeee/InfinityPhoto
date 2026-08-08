# TASK BRIEF: InfinityPhoto Web Optimization, B2B Repositioning, Impeccable UI/UX & High-Converting Copywriting

You are acting as an expert Senior React Developer, UI/UX Accessibility Specialist, and World-Class Human Copywriter.
Please refactor and upgrade the existing `InfinityPhoto` codebase according to the technical, architectural, visual, and copywriting specifications below.

## SKILLS USE
- use the context7 mcp to get Impeccable for audit design of the ui/ux in order there are no ai slops.

- use the copywritting skills for copywritting technics in order to make sure the copywritting is organic and human crafter.

- use the context7 also to get the up to date method of using the tech stack used in this project. 

- if you change the color outside the DESIGN.md file, make sure update that files as well.

- use high-end-visual-design skills as well
---

## OBJECTIVES
1. **Performance & Core Web Vitals Optimization**: Fix slow loading times, optimize large image assets, and improve LCP/CLS metrics.
2. **Single-Page Repositioning (Hybrid B2C + B2B)**: Integrate B2C photo booking services and a B2B "Hotel & Venue Standby Booth Partnership" model into a seamless, high-converting Single Page React application.
3. **UI/UX Anti-Pattern & Contrast Elimination**: Fix UI bugs flagged by visual audit plugins (nested cards, line length, oversized icons, overlapping watermarks, and low contrast).
4. **Authentic English Copywriting (No AI Slop)**: Write 100% English copy using professional human copywriting techniques that sound natural, sophisticated, and tailored for luxury B2C clients and 4/5-star hospitality managers.

---

## ARCHITECTURE & CLEAN CODE FORMULA
- **Framework & Stack**: React (Functional Components, Hooks, Modular Folder Structure).
- **Clean Code Principles**:
  - Keep components small, single-responsibility, and reusable.
  - Separate business logic (form routing, asset handling) into custom hooks or utility functions.
  - Maintain a clean, readable, and well-typed/well-commented codebase.

---

## COPYWRITING & BRAND VOICE GUIDELINES (100% ENGLISH & NO AI SLOP)
- **Language Constraint**: ALL text, headlines, subheadlines, body copy, CTAs, placeholders, and labels across the entire website MUST be in **100% English**.
- **Human-Crafted Copywriting (Anti-AI Slop)**:
  - Write crisp, punchy, persuasive, and authentic copy tailored for luxury photography clients and high-end hotel executives.
  - **STRICTLY AVOID** generic AI jargon, clichés, and buzzwords (e.g., *elevate your experience, delve into, tapestry, testament to, seamlessly blend, unparalleled journey, in today's fast-paced world, game-changer, unlock the power of*).
  - Use direct, value-driven, and emotionally resonant messaging focused on real benefits, aesthetics, and business revenue for venue partners.

---

##  TECHNICAL SPECIFICATIONS & TASKS

### TASK 1: Performance & Asset Optimization
- [ ] **Image Optimization**:
  - Compress and convert all high-res assets in `attached_assets/generated_images/` (and static gallery images) to modern `.webp` or `.avif` formats.
  - Implement responsive image loading (`srcset` or React-equivalent responsive components).
  - Apply `loading="eager"` and `fetchpriority="high"` ONLY to the Hero section asset.
  - Apply `loading="lazy"` to all images below the fold.
  - Set explicit `width`, `height`, or CSS `aspect-ratio` on image containers to eliminate Cumulative Layout Shift (CLS).
- [ ] **Animation Efficiency**:
  - Refactor heavy JS-driven animations into hardware-accelerated CSS3 / Framer Motion transitions (`transform`, `opacity`).

---

### TASK 2: Information Architecture & Content Revision (Single Page)

Structure the Single Page React layout in the following exact scroll order:

#### 1. Hero Section
- **Headline**: "Capturing Moments for Clients, Creating Value for Venues."
- **Subheadline**: Premium photography services for private events, paired with turn-key photo booth partnerships for luxury venues.
- **Dual CTA Buttons**:
  - `[Primary CTA]`: "Book a Session" -> Smooth scroll to Section 2 (#gallery).
  - `[Secondary CTA]`: "Hotel & Venue Partnership" -> Smooth scroll to Section 3 (#partnership).

#### 2. Section: B2C Portfolio & Services (#gallery)
- Display primary services (Wedding, Corporate Event, Lifestyle, Portrait).
- Include an interactive React category filter tab (All, Wedding, Corporate, Lifestyle).
- Implement progressive loading (initial view: 6-8 photos max) with a "Load More" button to preserve page speed.

#### 3. Section: B2B Venue Partnership Program (#partnership)
- **Title**: "Plug & Play Venue Partnership (Standby Photo Corner)".
- **Visual**: Use an elegant UI placeholder card/illustration labeled "Infinity Standby Corner Mockup".
- **3 Pillars of Partnership**:
  1. **Zero Asset & Operational Cost**: Infinity Photo handles all equipment, professional photographers, lighting, and instant digital/print delivery.
  2. **Minimal Footprint**: Requires only 1x1 m² space and 1 power outlet.
  3. **Revenue Sharing & Guest Experience**: Flexible revenue share on photo purchases while offering a memorable amenity for hotel guests.

#### 4. Section: Social Proof & Venue Partners (#social-proof)
- Grid for venue partner logos and brief testimonials (B2C clients & Hotel Managers).

#### 5. Section: Interactive Lead Capture Form (#contact)
- Implement a clean React contact form component with a selector for intent:
  - Option A: `[ ] I want to book a photo session (Client)`
  - Option B: `[ ] I represent a venue/hotel (Partnership)`
- **Fields**: Full Name / Company Name, Request Type, Short Message.
- **Form Action (Smart WhatsApp Router)**:
  - On submit, construct a dynamically formatted `https://wa.me/<NUMBER>?text=...` URI in **English** based on the selected option and form values, then trigger a direct redirect / open in a new tab.

---

## STYLING, ACCESSIBILITY, & IMPECCABLE UI GUIDELINES

### 1. Fix UI Anti-Patterns & Visual Bugs (CRITICAL)
- **Eliminate Nested Cards**: Do NOT wrap single buttons or CTAs inside unnecessary extra border containers or cards (`nested cards` anti-pattern). Keep CTA elements clean, flat, and directly integrated into the parent layout.
- **Optimal Line Length (Measure)**: Fix "line length too long" issues on paragraph texts and descriptions by setting `max-width: 65ch` (or `max-width: 600px`). Ensure readable line wrapping across all screen sizes.
- **Proportional Icon Sizing**: Fix oversized icons inside buttons and components. Keep arrow icons and badges small, balanced, and aligned (e.g., 16px–20px icon size with proper padding).
- **Clean Background Watermarks**: Remove or fix overlapping large background letters/decorations (e.g., giant "E" or "D" watermarks) that collide with headings and body text.

### 2. Impeccable Contrast & Light Mode Fixes (WCAG AA Compliance)
- **Contrast Thresholds**:
  - Normal Text / Body Copy: Minimum contrast ratio of **4.5:1** against the background.
  - Large Text / UI Controls / Buttons / Icons: Minimum contrast ratio of **3.0:1**.
- Fix all low-contrast muted fonts and headings in Light Mode flagged by Impeccable/contrast checkers.

### 3. General Aesthetic
- Maintain a luxury, modern, clean aesthetic suitable for a high-end photography brand and 4/5-star hotels.
- Ensure 100% mobile responsiveness and touch-friendly interactive targets (minimum 44x44px for buttons/links).

---

Please proceed with implementing these refactoring, copywriting, accessibility, and UI design fixes cleanly across the React project components and styling files.