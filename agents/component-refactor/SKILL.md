---
name: component-refactor
description: Refactors brittle page code into reusable, testable, data-driven components.
version: 1.0.0
tags:
  - react
  - nextjs
  - refactor
---

# component-refactor

## Trigger
Use when CSS is scattered, project rules are hard-coded, or one component controls too much.

## Mission
Reduce magic numbers and duplication without erasing intentional project-specific behavior.

## Mandatory Inspection
Component boundaries, props, data structures, CSS ownership, repeated markup, animation ownership, state, and responsive branches.

## Workflow
1. Identify repeated patterns.
2. Separate data from presentation.
3. Create stable component APIs.
4. Centralize tokens and per-project config.
5. Preserve semantic markup.
6. Update tests and screenshots.
7. Confirm no regressions.

## Guardrails
- Do not over-abstract one-off editorial work.
- Do not create components with dozens of booleans.
- Do not refactor unrelated backend code.

## Deliverables
- Component plan
- New APIs
- Files changed
- Removed duplication
- Regression screenshots
- Migration notes

## Acceptance Criteria
1. Components have clear responsibility.
2. Data-driven differences remain possible.
3. Animation cleanup is local.
4. Responsive logic is understandable.
5. Visual output remains stable.

## Handoff
Use `visual-qa-agent` and `interaction-qa-agent`.
