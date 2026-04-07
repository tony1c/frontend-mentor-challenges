# 06 — Interactive states

## Objective

Ensure all interactive elements (links, primary button, email input, dismiss control) have clear hover and keyboard focus styles, including `focus-visible` where appropriate, and error styling matches the design intent.

## Acceptance (from AGENTS.md / challenge)

- [ ] Links in footer (and elsewhere) have visible hover and `focus-visible` outlines or rings.
- [ ] Submit and dismiss buttons show hover and focus-visible states.
- [ ] Email input shows focus-visible styling; invalid state is visually distinct and matches error messaging.
- [ ] Reference [`src/assets/design/`](../../src/assets/design/) for active/error reference if present.

## Implementation hints

- Files: [`src/App.tsx`](../../src/App.tsx), possibly small additions in [`src/index.css`](../../src/index.css).

## Done when

Tab navigation clearly shows which control is focused; hover states are obvious on pointer devices.
