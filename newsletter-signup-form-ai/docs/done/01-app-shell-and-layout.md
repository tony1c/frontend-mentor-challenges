# 01 — App shell and layout

## Objective

Establish the outer page structure for the newsletter challenge: full-viewport main area, centered content container, and footer attribution. Base styles target the smallest viewports first (mobile-first); inner sections will be refined in later steps.

## Acceptance (from AGENTS.md / challenge)

- [ ] `main` wraps primary challenge UI with appropriate min-height and background using theme tokens from `index.css`.
- [ ] Visual container (card or equivalent) provides structure for forthcoming sign-up / success content.
- [ ] Footer retains Frontend Mentor / author attribution with sensible placement.
- [ ] Layout uses Tailwind only: base utilities first, no `sm:` breakpoints added in this step.

## Implementation hints

- Files: [`src/App.tsx`](../../src/App.tsx), optionally [`src/index.css`](../../src/index.css).
- Breakpoints: base, `md:`, `lg:` only on follow-up tasks.

## Done when

Shell renders without placeholder body copy; layout holds space for illustration + form (or success) in next steps.
