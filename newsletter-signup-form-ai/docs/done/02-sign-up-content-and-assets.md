# 02 — Sign-up content and assets

## Objective

Replace placeholder copy with the challenge headlines and bullet list; integrate provided SVGs (responsive hero illustrations, list icon) and align typography and spacing with design mockups in [`src/assets/design/`](../../src/assets/design/) when available.

## Acceptance (from AGENTS.md / challenge)

- [ ] Headings and list items match challenge brief (e.g. “Stay updated!”, three benefit lines with check icons).
- [ ] Hero uses `illustration-sign-up-mobile.svg`, `illustration-sign-up-tablet.svg`, and `illustration-sign-up-desktop.svg` with appropriate display at base / `md:` / `lg:` (no `sm:`).
- [ ] List markers or rows use `icon-list.svg` as intended.
- [ ] Roboto via `font-roboto`; colors from `@theme` in [`src/index.css`](../../src/index.css) (not `style-guide.md` as source of truth).

## Implementation hints

- Files: [`src/App.tsx`](../../src/App.tsx), assets under [`src/assets/images/`](../../src/assets/images/).
- Import SVGs as URLs/modules in Vite, or inline if needed for styling.

## Done when

Sign-up view shows real copy and artwork; no lorem ipsum in the main UI.
