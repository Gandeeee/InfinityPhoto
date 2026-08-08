# AGENTS.md

## Stack
Vite + React 18 + TypeScript single-page marketing site (no backend). Vite root is `client/` (entry `client/index.html`). Path aliases `@/*` → `client/src/*`, `@assets/*` → `attached_assets/*` — keep them in sync across `vite.config.ts` and `tsconfig.json`.

## Commands
- `npm run dev` — Vite dev server
- `npm run check` — TypeScript typecheck (`tsc`); the only static check (no ESLint, no tests)
- `npm run build` — builds to repo-root `dist/` (not `client/dist`)
- `npm run start` — `vite preview`
- `db:push` is a stub; backend was removed.

## Architecture
- `client/src/pages/` — thin route wrappers only. `Home.tsx` composes the single page in order: Navigation → Hero → Portfolio → Partnership → Collaboration → Contact → Footer.
- `client/src/components/` — the real section components (Hero, Portfolio, Contact, etc.).
- `client/src/components/ui/` — shadcn/ui components.
- `client/src/components/examples/` — dead stub files; do not edit.
- `client/src/components/About.tsx`, `Services.tsx`, `WorkProcedure.tsx`, `BeforeAfter.tsx`, `ConceptBuilder.tsx` are NOT referenced by `Home.tsx` — dead code from an older composition; do not assume they render.
- Routing: `wouter` with a dynamic base (`/InfinityPhoto-main` subfolder or root) — preserve that logic when adding routes.

## Design system
- `DESIGN.md` is authoritative. `design_guidelines.md` and `revisi.md` are older specs / a prior task brief — do not treat as current. If you change colors, update `DESIGN.md`.
- Design tokens + `.glass` / `.glass-heavy` / `transition-premium` / `mesh-*` utilities live in `client/src/index.css`. Dark mode via `next-themes` `.dark` class ("Porcelain" light / "Obsidian" dark).
- All site copy must be 100% English and avoid AI-slop phrasing (banned-word list in `revisi.md`).

## Gotchas
- Assets: photography PNGs in `attached_assets/generated_images/` are 1–1.7 MB. Keep hero eager; lazy-load below the fold. Filenames are case-sensitive on Linux builds (e.g. `Digital_gallery.jpg`).
- Contact form is a WhatsApp router: `wa.me/6281805610551` is hardcoded in `client/src/components/Contact.tsx`. (`ConceptBuilder.tsx` — unused — hardcodes a different number, `6282146802311`.)
- Tailwind is v3 via PostCSS (`tailwind.config.ts` + `postcss.config.js`). `@tailwindcss/vite` (v4) in package.json is NOT wired in — don't add v4-only syntax.
- Deploy target is Replit (port 5000, `npm run build` + `npm run start`); `dist/` is gitignored.
