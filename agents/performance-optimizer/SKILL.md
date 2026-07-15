---
name: performance-optimizer
description: Improves loading, rendering, animation, and mobile runtime performance without degrading design.
version: 1.0.0
tags:
  - performance
  - core-web-vitals
  - images
---

# performance-optimizer

## Trigger
Use when pages stutter, assets are heavy, or animation drops frames.

## Mission
Reduce cost in assets, fonts, effects, JavaScript, and scroll systems while preserving quality.

## Mandatory Inspection
Bundle, image sizes, Next Image, fonts, layout shift, animation loops, filters, blur, listeners, ScrollTriggers, Swiper, 3D, and mobile network behavior.

## Workflow
1. Measure baseline.
2. Find largest costs.
3. Optimize images and fonts.
4. Remove duplicate loops.
5. Reduce expensive filters.
6. Lazy-load non-critical media.
7. Test mid-range mobile.
8. Compare metrics.

## Guardrails
- Do not optimize by blindly removing key design.
- Do not serve desktop assets to phones.
- Do not run duplicate RAF loops.

## Deliverables
- Baseline metrics
- Cost breakdown
- Changes
- Before/after metrics
- Remaining bottlenecks

## Acceptance Criteria
1. No severe layout shift.
2. Mobile assets are correctly sized.
3. Scroll remains responsive.
4. Animation cleanup works.
5. First content appears quickly.
6. Visual quality remains acceptable.

## Handoff
Use `asset-optimizer`, `visual-qa-agent`, and `deployment-verifier`.
