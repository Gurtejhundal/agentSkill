---
name: asset-optimizer
description: Optimizes images, video, fonts, and visual assets for responsive delivery.
version: 1.0.0
tags:
  - assets
  - images
  - fonts
  - video
---

# asset-optimizer

## Trigger
Use when the site has large screenshots, portraits, project posters, video, or multiple fonts.

## Mission
Create an asset inventory and delivery strategy balancing quality, crop, format, and loading priority.

## Mandatory Inspection
Dimensions, formats, transparency, compression, responsive variants, Next Image sizes, preload, poster frames, SVG cleanliness, and duplicates.

## Workflow
1. Inventory assets.
2. Classify critical and deferred media.
3. Create responsive variants.
4. Convert formats where useful.
5. Define `sizes`.
6. Preload only critical assets.
7. Verify crops.
8. Measure savings.

## Guardrails
- Do not share font files.
- Do not degrade logo edges.
- Do not preload every project image.

## Deliverables
- Asset inventory
- Conversion plan
- Responsive map
- Preload plan
- Savings report

## Acceptance Criteria
1. Correct asset loads per breakpoint.
2. No accidental crop changes.
3. Critical visuals remain sharp.
4. Duplicates are removed.
5. Transferred bytes decrease.

## Handoff
Use `media-fit-specialist` and `performance-optimizer`.
