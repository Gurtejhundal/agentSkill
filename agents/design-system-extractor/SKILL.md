---
name: design-system-extractor
description: Extracts reusable visual rules from references without blindly cloning them.
version: 1.0.0
tags:
  - design-system
  - reference
  - tokens
---

# design-system-extractor

## Trigger
Use when the user likes another site’s typography, spacing, components, restraint, or animation.

## Mission
Translate a reference into principles, tokens, component rules, and motion behavior while preserving originality.

## Mandatory Inspection
Computed type, weights, hierarchy, color roles, spacing rhythm, image ratios, radii, navigation placement, motion timing, section architecture, and mobile behavior.

## Workflow
1. Separate identity from mechanics.
2. Identify typography roles.
3. Measure spacing rhythm.
4. Extract color roles.
5. Extract component grammar.
6. Extract motion grammar.
7. Define what may be reinterpreted.
8. Define what must not be copied.
9. Produce implementation-ready tokens.

## Guardrails
- Do not reuse reference assets, copy, private code, or exact layout.
- Do not invent exact fonts without evidence.

## Deliverables
- Reference breakdown
- Design tokens
- Component rules
- Motion rules
- Originality safeguards
- Font alternatives

## Acceptance Criteria
1. System is specific enough to implement.
2. User identity remains visible.
3. Reference assets are not reused.
4. Typography and spacing are documented.
5. Mobile behavior is included.

## Handoff
Use `design-me`, `typography-director`, and `motion-architect`.
