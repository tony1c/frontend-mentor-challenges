# Todo: Refactor `App.tsx` into a clean multi-file layout

**Status:** Planning only — do not execute this list until you are ready to refactor.

**Goal:** Split the single-file `src/App.tsx` implementation into small, named modules so routing between sign-up and success, copy, validation, and layout are easy to find and change without scrolling a 200+ line file.

**Constraints (keep aligned with project rules):**

- Preserve behavior: controlled email field, `noValidate` + `checkValidity()`, error copy, success view with `submittedEmail`, dismiss resets state.
- Keep Tailwind patterns: mobile-first (`md:` / `lg:` only, no `sm:`), focus-visible and hover states, `font-roboto`, theme from `src/index.css`.
- Keep accessibility: `aria-invalid`, `aria-describedby`, `role="alert"` on errors, labeled input.

---

## 1. Data and types

- [ ] Extract `benefits` (and any future copy constants) to something like `src/content/newsletter.ts` or `src/constants/benefits.ts`.
- [ ] Extract `type View = "signup" | "success"` to `src/types/newsletter.ts` (or colocate with a small state module if you prefer fewer files).

## 2. Presentation components (dumb / mostly markup)

- [ ] **`NewsletterIllustration`** — `<picture>` + `<source>` + `<img>` block (desktop / tablet / mobile assets).
- [ ] **`BenefitsList`** — maps over `benefits` with `icon-list.svg`.
- [ ] **`SignUpCard`** — outer article, grid layout, composes illustration + inner column.
- [ ] **`SuccessCard`** — success article: icon, heading, body with bold email, dismiss button.
- [ ] **`SiteFooter`** — challenge attribution links; share `linkClass` via a `footerLinkClass` constant in `src/styles/link.ts` or a tiny `src/components/FooterLink.tsx` if you want typed props.

## 3. Form and validation logic

- [ ] **`EmailSubscribeForm`** (or **`NewsletterForm`**) — label, input (controlled `email` + ref for `checkValidity`), error paragraph, submit button. Accept props: `email`, `onEmailChange`, `error`, `onSubmit` handler, ids from parent or generated inside with `useId`.
- [ ] Optionally extract **`useNewsletterSignup`** in `src/hooks/useNewsletterSignup.ts` — holds `view`, `email`, `submittedEmail`, `error`, `handleSubmit`, `handleDismiss`, refs/ids — so `App` only composes views.

## 4. Composition root

- [ ] **`NewsletterPage`** (or **`NewsletterApp`**) — renders `main` shell, switches `view === "signup"` vs success, passes callbacks into children.
- [ ] Slim **`App.tsx`** — import `NewsletterPage` (or the hook + two cards), render page + `SiteFooter`; **or** keep footer inside `NewsletterPage` if you want one “feature” entry.

## 5. Barrel file (optional)

- [ ] Add `src/components/newsletter/index.ts` (or similar) re-exporting public pieces if imports get noisy — only if the team likes barrels; skip if you prefer explicit paths.

## 6. Verification (after implementation)

- [ ] `npm run lint` clean.
- [ ] `npm run build` succeeds.
- [ ] Manual smoke: empty submit → required error; invalid email → valid email error; valid submit → success copy includes email; dismiss → back to form, field cleared, no stale error.

---

## Suggested folder sketch (adjust names to taste)

```text
src/
  App.tsx
  types/newsletter.ts
  content/benefits.ts
  hooks/useNewsletterSignup.ts          # optional
  components/
    NewsletterIllustration.tsx
    BenefitsList.tsx
    EmailSubscribeForm.tsx
    SignUpCard.tsx
    SuccessCard.tsx
    NewsletterPage.tsx                  # or SiteFooter here
    SiteFooter.tsx
```

---

## Notes

- Prefer **props down, events up** for form and dismiss actions so components stay testable.
- Avoid duplicating long Tailwind class strings: shared button classes can live in `const primaryButtonClass = "..."` next to the components that use them, or a small `newsletter-ui.ts` — only if it reduces noise without hiding behavior.
