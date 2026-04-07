# 05 — Responsive breakpoints

## Objective

Tune layout across viewports using mobile-first Tailwind: base for phones, then `md:` and `lg:` overrides. Do not introduce `sm:` utilities.

## Acceptance (from AGENTS.md / challenge)

- [ ] Layout reads well from small phones through large desktops.
- [ ] Only `md:` and `lg:` (plus unprefixed base) are used for breakpoint-specific layout/spacing in this project’s new work—verify no new `sm:` classes.
- [ ] Illustration switching (mobile / tablet / desktop assets) matches intended breakpoints.

## Implementation hints

- Files: [`src/App.tsx`](../../src/App.tsx) primarily; cross-check [`src/assets/design/`](../../src/assets/design/).

## Done when

Manual resize (or devtools) shows coherent structure at narrow, medium, and wide widths.
