---
name: codebase-recon
description: Maps an unfamiliar website codebase before design or implementation begins.
version: 1.0.0
tags:
  - codebase
  - architecture
  - inspection
---

# codebase-recon

## Trigger
Use at the start of any non-trivial website task.

## Mission
Produce a reliable map of framework, routes, components, styles, state, animation, data sources, and deployment structure.

## Mandatory Inspection
Package files, routing, root layout, pages, components, styles, animation libraries, smooth scroll, data modules, backend, tests, environment, and deployment metadata.

## Workflow
1. Identify framework and versions.
2. Map routes.
3. Map shared and page components.
4. Locate tokens and global CSS.
5. Locate data sources.
6. Locate animation systems.
7. Identify brittle and duplicated logic.
8. Produce a change-risk map.

## Guardrails
- Do not modify code during reconnaissance unless requested.
- Do not assume production matches local or main.

## Deliverables
- Architecture map
- Route map
- Component map
- Library inventory
- Data-flow map
- Risk list
- Recommended agents

## Acceptance Criteria
1. Another agent can work without rediscovery.
2. Shared and page components are distinguished.
3. Deployment drift is identified.
4. Animation and scroll systems are mapped.

## Handoff
Route to the smallest relevant specialist set.
