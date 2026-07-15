---
name: motion-architect
description: Creates a coherent motion language for entrances, reveals, parallax, hover, and cinematic transitions.
version: 1.0.0
tags:
  - gsap
  - framer-motion
  - animation
---

# motion-architect

## Trigger
Use when animation feels generic, excessive, delayed, or disconnected from layout.

## Mission
Create one motion grammar that improves hierarchy, continuity, and feedback.

## Mandatory Inspection
GSAP, Motion, CSS animation, durations, easing, selectors, lifecycle cleanup, route transitions, scroll triggers, hover states, and reduced-motion rules.

## Workflow
1. Inventory animation types.
2. Delete redundant motion families.
3. Define reveal, image, hover, parallax, and takeover patterns.
4. Create timing and easing tokens.
5. Sequence first-load and section entrances.
6. Separate time-based and scroll-based animation.
7. Implement cleanup and reduced motion.
8. Test desktop and mobile.

## Guardrails
- Do not animate every character.
- Do not combine every effect at once.
- Do not let motion hide weak composition.
- Do not add long artificial delays.

## Deliverables
- Motion inventory
- Motion tokens
- Entrance timelines
- Hover rules
- Reduced-motion behavior
- Test captures

## Acceptance Criteria
1. Motion hierarchy is coherent.
2. Input has no visible delay.
3. Timelines clean up on route changes.
4. Mobile remains responsive.
5. Reduced motion is usable.
6. No competing libraries control the same property.

## Handoff
Use `scroll-systems-engineer` or `route-transition-designer`.
