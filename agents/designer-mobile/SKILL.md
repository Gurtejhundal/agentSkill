---
name: designer-mobile
description: Reconstructs desktop experiences for mobile without cropping, shrinking, or deleting core behavior.
version: 1.0.0
tags:
  - mobile
  - responsive
  - touch
---

# designer-mobile

## Trigger
Use when cards, headings, fixed controls, scroll scenes, or animation break on phones and tablets.

## Mission
Create a genuine mobile composition that preserves identity while changing hierarchy, dimensions, and interaction for touch.

## Mandatory Inspection
Breakpoints, clamp values, viewport units, safe areas, fixed elements, card dimensions, mobile assets, animation media queries, touch targets, horizontal overflow, and 430/390/360px screenshots.

## Workflow
1. Capture mobile baselines.
2. List desktop assumptions surviving on mobile.
3. Create a mobile type scale.
4. Rebuild section order and spacing.
5. Set mobile card ratios and maximum heights.
6. Fix fixed-control and safe-area collisions.
7. Create mobile-specific animation timelines.
8. Test touch, reverse scroll, orientation, and reduced motion.
9. Compare screenshots.

## Guardrails
- No whole-section `transform: scale()` hacks.
- Do not hide broken sections.
- Do not replace cinematic scenes with static lists except for reduced motion.
- Do not keep desktop `vw` type values unchanged.

## Deliverables
- Breakpoint plan
- Mobile type scale
- Card dimension map
- Touch behavior plan
- Collision report
- Screenshots
- Performance notes

## Acceptance Criteria
1. No horizontal overflow.
2. Headings do not unintentionally fill the viewport.
3. Cards remain readable and proportionate.
4. Fixed controls do not cover content.
5. Touch targets are approximately 44px.
6. Scroll responds immediately.
7. Core desktop functionality remains available.

## Handoff
Use `scroll-systems-engineer` for pinned scenes and `visual-qa-agent` for validation.
