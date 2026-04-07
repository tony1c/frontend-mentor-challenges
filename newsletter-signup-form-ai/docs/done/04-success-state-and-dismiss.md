# 04 — Success state and dismiss

## Objective

Add a second UI mode after valid submit: success confirmation including the submitted email, success artwork, and a dismiss control that returns to the sign-up form and resets relevant state.

## Acceptance (from AGENTS.md / challenge)

- [ ] After successful validation, user sees a success view (not the form).
- [ ] Confirmation copy includes the submitted email address dynamically.
- [ ] `icon-success.svg` is used on the success view per design.
- [ ] “Dismiss” (or equivalent) returns to the form; submission remains simulated in the browser only (no backend).

## Implementation hints

- Files: [`src/App.tsx`](../../src/App.tsx).
- Use React state (e.g. `"signup" | "success"`) and clear stored email/error when dismissing if appropriate.

## Done when

Full happy path works: valid email → success → dismiss → form again without a page reload.
