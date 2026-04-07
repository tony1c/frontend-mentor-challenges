---
name: ux-visual-page-review
description: >-
  Conducts structured visual and UX analysis from an attached UI screenshot;
  maps layout to primary and secondary goals; recommends information hierarchy,
  empty/loading/error/success patterns, and actionable design improvements. Use
  when the user attaches a screen or mockup, asks for better hierarchy or UX,
  wants critique of a page tied to an open file, or mentions empty states and
  loading skeletons.
---

# UX / visual page review

Guides the agent to act as a graphic design and UX practitioner: analyze the provided image, align recommendations with stated goals, and produce a consistent, implementation-aware review without generic fluff.

## When to use

- User attaches a screenshot, mockup, or design reference for the page or component they are working on.
- User asks for better layout, hierarchy, styling, polish, or “professional” design feedback.
- User names **primary** and **secondary** goals (or implies them) and wants the screen optimized toward those goals.
- User wants **empty states**, **loading** (including skeletons), **error**, or **success** patterns planned for the same screen.

## Prerequisites

Before detailed recommendations:

1. **Page intent** — What is this screen for in one sentence?
2. **Primary goal** — The single outcome the design should optimize for (e.g. submit email, complete purchase).
3. **Secondary goal** — Supporting outcomes (e.g. trust, discover related content, comply with legal copy).

If any of the above are missing, use **AskQuestion** (or ask in chat) with concise options or short-answer prompts. Optionally confirm constraints (brand, desktop-only vs responsive, WCAG level) if they change the advice materially.

If **no image** is attached, ask for a screenshot or clarify what to review before analyzing.

## Analysis workflow

Work in this order. Tie every observation to **what is visible in the image** where possible.

### 1. Image pass

- First impression and intended focal point.
- Scan path (F-pattern / Z-pattern as relevant); where the eye lands first, second, third.
- Contrast, whitespace, alignment to an implicit grid, repeated spacing rhythm.
- Typography scale: headings vs body vs labels; legibility at implied size.
- Component consistency (buttons, inputs, cards), visual noise, clutter.

### 2. Goal alignment

- For each major visible block, label whether it primarily serves the **primary goal**, **secondary goal**, or is **neutral / potentially distracting**.
- Call out friction: weak CTA, competing CTAs, buried form, unclear next step.

### 3. Information hierarchy

- Recommend **order** and **grouping** of content (what belongs above the fold vs below, sidebar vs stack).
- Clarify **one primary CTA**; demote secondary actions (visual weight, placement, or overflow).
- Suggest **progressive disclosure** if the screen packs too much at once.

### 4. States

Adapt to screen type (dashboard, form, list, detail, marketing). For each relevant state, specify **user-visible copy** and **layout behavior** at a high level.

| State | Guidance |
| --- | --- |
| **Empty** | Placeholder content, helpful hint, optional illustration; one clear action if applicable. |
| **Loading** | Prefer **skeletons** for list/card/layout-heavy UIs (mirror final layout); use **spinner** sparingly for short or indeterminate global waits. Say what to skeletonize (e.g. title bar, rows, image block). |
| **Error** | Inline field errors vs page-level message; preserve user input; recovery action. |
| **Success** | Inline confirmation vs dedicated success view vs dismissible toast—pick based on primary goal and task length. |

### 5. Accessibility and interaction

- Focus order vs visual order; visible focus styles.
- Target sizes, label association, error messaging (`aria-invalid`, `aria-describedby`, live regions if appropriate).
- Motion: reduce unnecessary animation; respect reduced motion where relevant.

### 6. Tying to the user’s file

If the user references an open file (e.g. `App.tsx`), map suggestions to **named sections or components** conceptually (hero, form panel, list region). Do **not** rewrite code unless the user asks for implementation.

## Output template

Use this structure for the final response:

```markdown
## Context
- Page intent:
- Primary goal:
- Secondary goal:
- Constraints (if any):

## Current state (from image)
- [Observation tied to visible UI]
- …

## Goal alignment
- What supports the primary goal:
- What supports secondary goals only:
- Distractions or gaps:

## Recommended information hierarchy
1. …
2. …
3. …

## Primary vs secondary actions
- Primary CTA: …
- Secondary actions: …

## States
- Empty: …
- Loading: …
- Error: …
- Success: …

## Prioritized changes
- P0 (must fix for goal / clarity / trust):
- P1 (strong improvement):
- P2 (polish):
```

## Anti-patterns

- Do not list generic design advice (“make it pop”, “more modern”) without tying it to **specific elements in the image** or **stated goals**.
- Do not assume primary/secondary goals if unstated—**ask first**.
- Do not prescribe a specific framework; stay pattern- and goal-driven unless the user requests stack-specific tokens or components.
