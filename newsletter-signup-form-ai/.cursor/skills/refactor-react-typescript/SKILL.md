---
name: refactor-react-typescript
description: >-
  Refactors React and TypeScript UI code for clearer structure: extracts
  presentational pieces into src/components (or the repo’s components folder),
  tightens types and props, reduces duplication, and keeps behavior and
  accessibility intact. Use when the user asks to refactor, reorganize, split
  components, clean up App.tsx or large files, or improve maintainability of
  React/TS code.
---

# React / TypeScript refactoring

Guides refactoring toward **clear file layout**, **small focused components**, and **explicit TypeScript**—the quality bar of a strong intern or junior who writes reviewable, merge-ready code. **Do not change product behavior** unless the user asks; preserve validation, routes, and a11y contracts.

## Principles

1. **Structure before cleverness** — Prefer boring, obvious folder names and one job per file.
2. **Extract for readability** — Split when a JSX region has a name in the design (header, form, list item) or when duplication appears twice+.
3. **Minimal blast radius** — Prefer several small diffs over one giant rewrite; keep exports stable if other files import them.
4. **Match the repo** — Follow existing `src/` layout, path aliases, lint rules, and styling system (e.g. Tailwind, CSS modules).

## Directory layout

| Location | Use |
|----------|-----|
| `src/components/` | **Reusable or extracted UI blocks** (buttons, cards, form fields, layout shells). One main component per file; name file after the component (`EmailField.tsx`). |
| `src/components/<Feature>/` | Optional subfolder when **multiple related pieces** belong together (e.g. `NewsletterSignup/`, `SuccessDialog.tsx` inside it). |
| `src/hooks/` | **Custom hooks** shared across features (`useMediaQuery`, `useFormField`). |
| `src/lib/` or `src/utils/` | **Pure helpers** (formatting, parsing) — only if the repo already uses them; don’t invent new top-level dirs without cause. |
| Feature routes / pages | Keep **route-level composition** in `pages/`, `routes/`, or `App.tsx` depending on project convention. |

If the project uses `component/` (singular) or a different path, **follow the existing convention** instead of renaming folders.

## When to extract a component

Extract when **any** of these hold:

- The JSX block is **~40+ lines** or nests more than **three** levels deep.
- The same markup/styling appears **twice** (DRY).
- The block has a **clear name** in the UI (“Benefits list”, “Sign-up form”).
- Isolating it makes **state or effects** easier to reason about.

**Keep inline** when the fragment is tiny, used once, and extraction would scatter related logic.

## Component design

- **Props**: Define a `type` or `interface` for public props; use `Readonly<...>` for immutable props if the team does so elsewhere.
- **Children**: Type as `React.ReactNode` when accepting slots; avoid `any`.
- **Events**: Use React’s typed events (`FormEvent`, `ChangeEvent<HTMLInputElement>`, etc.).
- **Display name**: Only add `displayName` when debugging anonymous HOCs/wrapped components; not required for simple function components.
- **Default exports vs named**: Match the **dominant pattern in the codebase**; don’t mix styles in one PR without reason.

## State and logic

- **Lift state** only to the **lowest common parent** that needs it.
- **Derived values** — compute in render or with `useMemo` only when profiling or cost justifies it; don’t default to `useMemo` everywhere.
- **Side effects** — keep in `useEffect` with correct deps; extracting custom hooks is appropriate when logic is reused or the component is still too long.

## Files and imports

- **Import order** (if no ESLint rule): external packages → internal aliases → relative parents → relative siblings → types-only imports (`import type`).
- **Barrel files** (`index.ts` re-exports): use only if the repo already does; avoid deep barrel chains that harm tree-shaking.
- **Static assets**: Keep imports next to the component that owns the visual, or follow existing `assets/` patterns.

## Styling and markup

- Preserve **class names and layout** when the goal is refactor-only; avoid drive-by redesign.
- Keep **semantic HTML** (`main`, `form`, `label`, `button` types) and **ARIA** (`aria-invalid`, `aria-describedby`, live regions) at least as good as before.

## Quality checklist before finishing

- [ ] New components live under **`src/components/`** (or project equivalent) with **PascalCase** names.
- [ ] No unused props, dead state, or commented-out bulk code left behind.
- [ ] Types compile with **no new `any`** unless the codebase already allows it there.
- [ ] No accidental behavior change (submit flow, validation, navigation).
- [ ] **`npm run lint`** / **`npm run build`** (or project equivalents) succeed if the user expects verification.

## Out of scope unless requested

- Framework migrations, new libraries, or global state rewrites.
- Visual redesign or copy changes.
- Adding tests — offer separately unless the user asked.
