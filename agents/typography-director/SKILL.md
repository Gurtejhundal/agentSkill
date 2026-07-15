---
name: typography-director
description: Builds responsive, multilingual typography systems with correct hierarchy and optical balance.
version: 1.0.0
tags:
  - typography
  - gurmukhi
  - latin
---

# typography-director

## Trigger
Use when fonts feel cheap, scripts do not match, headings overflow, or hierarchy lacks control.

## Mission
Create a coherent system across display, body, navigation, metadata, and multilingual identity marks.

## Mandatory Inspection
Loaded fonts, licenses, computed styles, script coverage, optical weight, tracking, line-height, container width, wrapping, and breakpoints.

## Workflow
1. Define role-based font families.
2. Match Gurmukhi and Latin optically.
3. Create fluid scale tokens.
4. Set mobile maximums.
5. Control line breaks.
6. Test long names and labels.
7. Verify loading and fallbacks.

## Guardrails
- Do not repeat decorative script roles.
- Do not apply careless letter spacing to Gurmukhi.
- Do not recommend fonts without testing glyphs.

## Deliverables
- Font pairing
- Type scale
- Script rules
- CSS tokens
- Wrapping guidance
- Licensing note
- Mobile screenshots

## Acceptance Criteria
1. Text roles are distinct.
2. Punjabi and English have balanced visual weight.
3. No heading overflows.
4. Body is readable.
5. Fallbacks preserve layout.
6. Font loading does not cause severe shift.

## Handoff
Use `designer-mobile`, `design-system-extractor`, and `performance-optimizer`.
