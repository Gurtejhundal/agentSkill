---
name: route-transition-designer
description: Creates premium page transitions rooted in persistent navigation and shared elements.
version: 1.0.0
tags:
  - routing
  - shared-element
  - flip
---

# route-transition-designer

## Trigger
Use when page switching feels like a generic fade, line, curtain, or loader.

## Mission
Create a transition with clear visual cause and effect, preferably transforming a persistent navigation element into the destination page.

## Mandatory Inspection
Router architecture, persistent layout, navigation geometry, destination headings, scroll restoration, browser history, drawer state, and reduced motion.

## Workflow
1. Identify a persistent shared element.
2. Measure source and destination geometry.
3. Define cover, route-swap, and reveal phases.
4. Keep page chrome mounted.
5. Lock duplicate clicks.
6. Handle browser history.
7. Close drawers before navigation.
8. Create reduced-motion fallback.
9. Test every route pair.

## Guardrails
- No unrelated curtains, centre lines, fake loaders, or page flips.
- Do not replay the full preloader between routes.

## Deliverables
- Transition concept
- Geometry plan
- Destination color logic
- Route readiness behavior
- History behavior
- Mobile variant
- Screenshots

## Acceptance Criteria
1. Transition originates from a real control.
2. Old page is covered before swap.
3. Incoming title resolves into its real location.
4. Persistent controls do not jump.
5. Same-page clicks do nothing.
6. History works.
7. Mobile is fast.
8. Reduced motion works.

## Handoff
Use `motion-architect`, `interaction-qa-agent`, and `deployment-verifier`.
