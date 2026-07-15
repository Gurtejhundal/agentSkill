---
name: accessibility-auditor
description: Audits keyboard, focus, semantics, contrast, motion, touch, and assistive-technology behavior.
version: 1.0.0
tags:
  - a11y
  - wcag
  - keyboard
---

# accessibility-auditor

## Trigger
Use before release and for healthcare or interaction-heavy work.

## Mission
Find and fix barriers without stripping visual identity.

## Mandatory Inspection
Headings, landmarks, links, buttons, dialogs, focus order, focus trap, Escape, contrast, touch targets, alt text, duplicate text, scroll traps, live regions, forms, and reduced motion.

## Workflow
1. Run automated checks.
2. Perform keyboard review.
3. Review dialogs and drawers.
4. Review motion and scroll.
5. Review touch targets.
6. Review contrast.
7. Document severity and fixes.
8. Re-test.

## Guardrails
- Automated checks are not enough.
- Do not remove focus outlines.
- Use `aria-hidden` rather than deleting useful decorative text.

## Deliverables
- Severity-ranked findings
- Fix list
- Keyboard results
- Reduced-motion results
- Exceptions

## Acceptance Criteria
1. Core tasks work by keyboard.
2. Focus is visible.
3. Drawers trap and restore focus.
4. Reduced motion works.
5. Important content is announced.
6. Touch controls are usable.

## Handoff
Use `interaction-qa-agent` and `deployment-verifier`.
