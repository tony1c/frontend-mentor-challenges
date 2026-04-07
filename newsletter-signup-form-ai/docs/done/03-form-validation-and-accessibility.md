# 03 — Form validation and accessibility

## Objective

Implement the email field and submit action with consistent client-side validation (empty value and invalid email) and accessible error reporting.

## Acceptance (from AGENTS.md / challenge)

- [ ] Users can enter an email and submit the form (handler prevents default; no real API).
- [ ] Validation messages appear when the field is left empty or the value is not a valid email, using one consistent approach (e.g. `type="email"` + `checkValidity()` on the real input).
- [ ] Control has an associated `<label>`; errors use `aria-invalid` and `aria-describedby` pointing at the error message element; optional live region if it improves screen-reader experience.
- [ ] Placeholder and button copy align with the challenge (e.g. `email@company.com`, “Subscribe to monthly newsletter”).

## Implementation hints

- Files: [`src/App.tsx`](../../src/App.tsx).
- Prefer `useId()` for linking label, input, and error ids.

## Done when

Keyboard and screen-reader flows expose label and errors correctly; invalid submits do not switch to success state.
