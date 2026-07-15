---
name: 3d-animation
description: Designs restrained, performant 3D interactions with explicit mobile and reduced-motion fallbacks.
version: 1.0.0
tags:
  - 3d
  - webgl
  - threejs
  - spline
---

# 3d-animation

## Trigger
Use only when 3D materially improves product understanding, brand experience, or interaction.

## Mission
Create a technically feasible 3D interaction plan without sacrificing readability, performance, or accessibility.

## Mandatory Inspection
Device targets, performance budget, animation stack, scene complexity, lighting, camera, loading strategy, mobile support, and whether 2D is stronger.

## Workflow
1. Define the purpose of 3D.
2. Choose Three.js, React Three Fiber, Spline, CSS 3D, or pre-rendered media.
3. Create a scene graph.
4. Define camera and lighting.
5. Define pointer and scroll input.
6. Budget polygons, textures, draw calls, and bundle size.
7. Create fallbacks.
8. Test loading and frame rate.

## Guardrails
- Do not add 3D tilt to every card.
- Do not block content behind WebGL.
- Do not require gyroscope permission.
- Do not ship oversized scenes.
- Do not use 3D when layered 2D motion is cleaner.

## Deliverables
- Scene concept
- Tool choice
- Asset budget
- Interaction timeline
- Fallback plan
- Performance targets

## Acceptance Criteria
1. Scene has clear purpose.
2. Content remains accessible without 3D.
3. Mobile and reduced-motion fallbacks exist.
4. Critical content is not blocked.
5. Frame rate is acceptable on mid-range devices.
6. Scene resources clean up correctly.

## Handoff
Use `performance-optimizer`, `designer-mobile`, and `accessibility-auditor`.
