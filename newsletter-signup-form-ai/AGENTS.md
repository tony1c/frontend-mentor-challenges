# AGENTS.md — newsletter-signup-form-ai

Guidance for humans and coding agents working in this Frontend Mentor challenge folder.

## Project summary

This app is the **Newsletter sign-up form** challenge: users enter an email, pass client-side validation, and see a **success** message. There is **no real subscription API**—submission is simulated in the browser only.

## User / acceptance criteria

- Users can **enter an email** and **submit** the form.
- After a successful submit, they see a **success message** that **includes their email** in the confirmation copy.
- **Validation messages** appear when:
  - the field is **left empty**, or
  - the value is **not a valid email** (pick one consistent approach project-wide, e.g. `type="email"` with `checkValidity()` or a pragmatic format check).
- **Responsive layout**: optimal layout across screen sizes using **Tailwind** breakpoints in a **mobile-first** way: **base styles** target the smallest viewports; add **`md:`** and **`lg:`** overrides as needed. **Do not use `sm:`** in new work. Verify from small phones through large desktops.
- **Interactive states**: clear **hover** and **focus** styling for all interactive elements (links, buttons, inputs), including **keyboard** focus (e.g. Tailwind `focus-visible:` / `outline` patterns).

## Tech stack

- **React** 19, **TypeScript**, **Vite** 8 — see [package.json](package.json).
- **Tailwind CSS** v4 via `@tailwindcss/vite` — wired in [vite.config.ts](vite.config.ts) and [src/index.css](src/index.css).
- **React Compiler** is enabled on this template; see [README.md](README.md).
- **Scripts**: `npm run dev`, `npm run build`, `npm run lint`, `npm run preview`.

## Design / styling references

- **UI layout and behavior**: use [src/assets/design/](src/assets/design/) for **visual references** (Frontend Mentor mockups: mobile/desktop sign-up and success, error states, active states). Match spacing, structure, and states to these when implementing or reviewing the UI.
- **Tokens and global CSS**: do **not** treat [style-guide.md](style-guide.md) as the source of truth for implementation. Colors, fonts, and shared styles are defined in [src/index.css](src/index.css) (`@theme`, `@font-face`, Tailwind `@import`). Use **`index.css`** when applying theme values in code.
- **Artwork**: SVGs in [src/assets/images/](src/assets/images/) (`illustration-sign-up-mobile.svg`, `illustration-sign-up-tablet.svg`, `illustration-sign-up-desktop.svg`, `icon-list.svg`, `icon-success.svg`). [preview.jpg](preview.jpg) at project root is an extra overview (optional compared to the detailed `design/` mockups).

## Implementation hints

- **Tailwind breakpoints**: mobile-first (**unprefixed** utilities), then **`md:`** and **`lg:`**. Avoid **`sm:`** for this project.
- **Two UI modes**: sign-up form vs success (e.g. React state); **Dismiss** returns to the form.
- **Copy**: placeholder and headings are sketched in comments in [src/App.tsx](src/App.tsx)—align with the challenge brief and `design/` mockups.
- **Accessibility**: label the email control; expose errors with `aria-invalid`, `aria-describedby`, and/or a live region where appropriate.
- **Scope**: stay within the challenge; match existing Tailwind usage and **Roboto** via `font-roboto` / `@font-face` in [src/index.css](src/index.css).

## Out of scope

- No real email backend, transactional email, or persistent user storage unless explicitly added later.

For template-level ESLint and compiler notes beyond this challenge, see [README.md](README.md).
