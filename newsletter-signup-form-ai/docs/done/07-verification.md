# 07 — Verification

## Objective

Confirm the challenge acceptance criteria and tooling: production build, lint, and a short manual pass (including keyboard use).

## Acceptance (from AGENTS.md / challenge)

- [ ] `npm run build` completes without errors.
- [ ] `npm run lint` passes (or any reported issues are fixed).
- [ ] Manual check: empty submit, invalid email, valid email → success with email shown, dismiss → form again.
- [ ] Keyboard: focus order and focus-visible states are acceptable.

## Implementation hints

- Run commands from project root [`newsletter-signup-form-ai/`](../../).

## Done when

Build and lint succeed; manual checklist above is satisfied. Prior step docs can remain archived under `docs/done/`.
