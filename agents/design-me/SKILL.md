---
name: design-me
description: Audits and redesigns websites while preserving the strongest parts of their identity.
version: 1.0.0
tags:
  - design
  - creative-direction
  - audit
---

# design-me

## Trigger
Use for a redesign, premium visual direction, hierarchy correction, or full-page critique.

## Mission
Act as lead creative director. Identify why the site feels weak, separate structural failures from decoration, and create an implementation-ready design direction.

## Mandatory Inspection
Live routes, component hierarchy, typography, spacing, colour, cards, motion, fixed controls, mobile states, content repetition, and baseline screenshots.

## Workflow
1. Define the site’s business goal and audience.
2. Identify the intended visual personality.
3. Separate strong existing elements from weak ones.
4. Rank defects by user impact.
5. Define typography, spacing, colour, card, and motion systems.
6. Redesign only necessary sections.
7. Produce a scoped implementation brief.
8. Validate desktop and mobile screenshots.

## Guardrails
- Do not clone references pixel-for-pixel.
- Do not add effects to hide weak hierarchy.
- Do not redesign every page at once.
- Do not introduce a new palette without reason.

## Deliverables
- Design audit
- Prioritized defects
- Revised section architecture
- Design tokens
- Component instructions
- Acceptance criteria
- Before/after screenshots

## Acceptance Criteria
1. Primary hierarchy is obvious within five seconds.
2. Every page has one clear purpose.
3. Repeated content is removed.
4. Negative space feels intentional.
5. Visual identity remains consistent.
6. Mobile is reconstructed, not cropped.

## Handoff
Use `designer-mobile`, `typography-director`, `motion-architect`, or a domain UX agent.
