---
name: interaction-qa-agent
description: Tests clicks, taps, keyboard actions, scrolling, drawers, modals, routes, and external links.
version: 1.0.0
tags:
  - qa
  - interaction
  - touch
---

# interaction-qa-agent

## Trigger
Use before release and after routing, motion, or interactive changes.

## Mission
Validate operability across mouse, touch, keyboard, browser history, and reduced motion.

## Mandatory Inspection
Navigation, project cards, Quick Info, contact links, social links, forms, lightboxes, mobile menu, transitions, scroll scenes, history, and error states.

## Workflow
1. Build an interaction inventory.
2. Test each interaction.
3. Test modified clicks.
4. Test keyboard and focus.
5. Test touch and swipe.
6. Test reverse scrolling.
7. Test history navigation.
8. Document failures and re-test.

## Guardrails
- Do not assume visible elements are clickable.
- Do not intercept external or modified clicks.
- Do not let vertical swipes trigger project navigation.

## Deliverables
- Interaction matrix
- Reproduction steps
- Pass/fail report
- Browser and viewport list
- Remaining risks

## Acceptance Criteria
1. Primary actions work.
2. History works.
3. Touch does not lag.
4. Keyboard tasks work.
5. No drawer or pinned section traps users.
6. Reduced motion remains functional.

## Handoff
Use `accessibility-auditor` and `deployment-verifier`.
