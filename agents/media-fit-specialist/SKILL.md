---
name: media-fit-specialist
description: Fits mixed-ratio artwork into cards without stretching, severe crop, or exposed artboards.
version: 1.0.0
tags:
  - images
  - cards
  - object-fit
---

# media-fit-specialist

## Trigger
Use when some cards look correct while others appear squeezed, cropped, too small, or boxed.

## Mission
Create per-project media presentation rules while keeping the overall card system coherent.

## Mandatory Inspection
Source dimensions, baked canvas, transparency, card ratios, wrapper background, fit, position, scale, hover transforms, and responsive sizes.

## Workflow
1. Classify each asset.
2. Inspect baked whitespace and artboards.
3. Define mediaMode per project.
4. Define fit, position, scale, and stage background.
5. Test hover and mobile.
6. Create cleaned derivatives only when necessary.

## Guardrails
- No universal fit rule.
- Do not stretch portrait artwork into landscape cards.
- Do not hide source defects with arbitrary overlays.

## Deliverables
- Asset classification
- Per-project config
- Cleaned asset list
- Card ratio map
- Screenshots

## Acceptance Criteria
1. No important title is cropped.
2. No image is stretched.
3. No accidental artboard edge appears.
4. Mixed ratios feel intentional.
5. Hover does not expose bad crops.
6. Mobile remains readable.

## Handoff
Use `asset-optimizer`, `designer-mobile`, and `visual-qa-agent`.
