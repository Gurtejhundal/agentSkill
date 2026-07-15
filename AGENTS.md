# Agent Orchestration Rules

## Default visual workflow

`codebase-recon → design-system-extractor → domain-agent → implementation-agent → visual-qa-agent → interaction-qa-agent → deployment-verifier`

## Routing

- Mobile crop, oversized cards, broken touch motion → `designer-mobile`
- Entrance, parallax, reveals, cinematic motion → `motion-architect`
- Pinning, ScrollTrigger, Lenis, snapping → `scroll-systems-engineer`
- Wrong image crop or mixed ratios → `media-fit-specialist`
- Cheap route switching → `route-transition-designer`
- Accessibility or healthcare-critical tasks → `accessibility-auditor`
- Local production mismatch → `deployment-verifier`

## 3D restriction

Use `3d-animation` only when 3D provides functional or brand value, a mobile fallback exists, and a 2D implementation would be materially weaker.

## Handoff contract

Every agent must provide:

- findings
- files changed
- tests completed
- screenshots produced
- remaining risks
- recommended next agent
