# Website Agent Skills Repository

A repository-ready system of specialized AI-agent skills and workflows for high-end website design, frontend implementation, responsive reconstruction, cinematic motion, accessibility, testing, and production verification.

> [!NOTE]
> Read the complete interactive documentation offline by opening [docs/index.html](file:///e:/Code/models/AgentWorkload/agentSkill/docs/index.html) or viewing the GitHub Pages deployment.

---

## Why This Repository Exists

Generic AI coding agents often fail at complex website engineering tasks. A single agent asked to inspect a codebase, optimize layout responsiveness, fix animations, and deploy will frequently skip steps, use generic mobile scaling hacks, or claim completion based purely on successful local compilation. 

This repository solves that problem by dividing website work into **24 focused specialist skills**, coordinated by structured multi-agent workflows and validated by strict quality-assurance checklists.

---

## Architecture Flow

The repository operates on a sequential pipeline that forces AI agents to inspect, plan, and verify before claiming completion:

```text
       Generic Request
              ↓
    Codebase Reconnaissance (codebase-recon)
              ↓
    Design/Domain Specialist (design-me, automotive-ux, etc.)
              ↓
    Implementation Specialist (designer-mobile, component-refactor)
              ↓
    Visual and Interaction QA (visual-qa-agent, interaction-qa-agent)
              ↓
    Production Verification (deployment-verifier)
```

---

## Quick-Start Instructions

### 1. Identify the Relevant Skills
Avoid invoking all skills for a simple task. Select only the necessary ones:
- **Mobile cards are oversized or breaking:** use `designer-mobile` → `scroll-systems-engineer` → `visual-qa-agent`.
- **Images are cropped or stretched:** use `media-fit-specialist` → `asset-optimizer` → `visual-qa-agent`.
- **Page transitions feel basic or cheap:** use `route-transition-designer` → `motion-architect` → `interaction-qa-agent`.

### 2. Supply Concrete Inputs
Provide the agent with exact targets:
- Live URL and repository workspace paths.
- Expected breakpoints (e.g., 390px, 430px, 1440px).
- Reference websites or design systems.
- Strict constraints (e.g., "Do not change global color variables").

### 3. Enforce Evidence-Based Handoffs
Do not accept "build success" as completion. Force agents to report:
- Root cause analysis and file diffs.
- Tested viewports and interaction matrix.
- Screenshots of start, middle, and final animation states.
- Known remaining limitations.

---

## Skill Categories

The 24 skills are categorized systematically. Click a skill name to view its detailed rules:

| Category | Skill Name & Link | Purpose |
|---|---|---|
| **Strategy & Design** | [`design-me`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/design-me/SKILL.md) | Creative direction and layout audits. |
| | [`design-system-extractor`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/design-system-extractor/SKILL.md) | Extracts visual tokens from reference URLs. |
| | [`content-hierarchy`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/content-hierarchy/SKILL.md) | Reorganizes pages and reduces redundant copy. |
| | [`ux-conversion-strategist`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/ux-conversion-strategist/SKILL.md) | Optimizes CTA layout and trust placement. |
| **Responsive & Typography** | [`designer-mobile`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/designer-mobile/SKILL.md) | True mobile layout reconstruction (not desktop cropping). |
| | [`typography-director`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/typography-director/SKILL.md) | Fluid responsive typography and pairing scripts. |
| | [`media-fit-specialist`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/media-fit-specialist/SKILL.md) | Handles mixed-ratio media in cards without stretching. |
| **Motion & Interaction** | [`motion-architect`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/motion-architect/SKILL.md) | Establishes a unified cinematic animation system. |
| | [`scroll-systems-engineer`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/scroll-systems-engineer/SKILL.md) | Implements pinned scenes, snap, and ScrollTriggers. |
| | [`route-transition-designer`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/route-transition-designer/SKILL.md) | Creates shared-element page transitions. |
| | [`3d-animation`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/3d-animation/SKILL.md) | Restrained Three.js rendering with mobile fallbacks. |
| **Architecture** | [`codebase-recon`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/codebase-recon/SKILL.md) | Maps routes, configs, and APIs in unfamiliar repos. |
| | [`component-refactor`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/component-refactor/SKILL.md) | Refactors brittle markup into clean reusable components. |
| | [`backend-admin-preserver`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/backend-admin-preserver/SKILL.md) | Keeps CMS and database models editable during frontend edits. |
| **Domain UX** | [`automotive-ux`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/automotive-ux/SKILL.md) | Designs details booking grids and local proof features. |
| | [`healthcare-ux`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/healthcare-ux/SKILL.md) | Manages hospitals emergency, doctor, and OPD layouts. |
| | [`portfolio-ux`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/portfolio-ux/SKILL.md) | Elevates creative portfolios, scanning, and positioning. |
| **Quality & Delivery** | [`accessibility-auditor`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/accessibility-auditor/SKILL.md) | Audits tab order, outline visibility, and WCAG AA. |
| | [`performance-optimizer`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/performance-optimizer/SKILL.md) | Limits layout shift, loops, and script sizing. |
| | [`asset-optimizer`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/asset-optimizer/SKILL.md) | Compresses images to WebP/AVIF and subsets fonts. |
| | [`visual-qa-agent`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/visual-qa-agent/SKILL.md) | Screenshots viewports for regression checks. |
| | [`interaction-qa-agent`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/interaction-qa-agent/SKILL.md) | Gesture, form submit, history, and keyboard QA tests. |
| | [`seo-local-search`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/seo-local-search/SKILL.md) | Handles structured schemas, robots, sitemaps, and OG tags. |
| | [`deployment-verifier`](file:///e:/Code/models/AgentWorkload/agentSkill/agents/deployment-verifier/SKILL.md) | Checks live Vercel deployments, branch commits, and logs. |

---

## Common Use Cases

1. **Brand Website Redesign:** Run `codebase-recon` → `design-me` → `component-refactor` to audit layouts, extract color design tokens, and clean duplicate structures.
2. **Optimizing Desktop Sites for Mobile:** Invoke `designer-mobile` → `typography-director` → `visual-qa-agent` to adapt viewports down to 390px, fix safe areas, and screenshot card structures.
3. **Debugging Stuttering Scroll Animation:** Run `scroll-systems-engineer` → `performance-optimizer` to inspect ScrollTrigger markers, optimize rendering loops, and set up performance gates.
4. **Deploying Local Business Portals:** Use `automotive-ux` (or `healthcare-ux`) → `seo-local-search` → `deployment-verifier` to configure LocalBusiness maps, schema meta tags, and test the production live URL.
5. **Pre-release Quality Audit:** Invoke `accessibility-auditor` → `interaction-qa-agent` → `deployment-verifier` to verify keyboard tab navigation, form feedback, and production deployment commit logs.

---

## Recommended Workflows

Workflows coordinates multiple agents in sequence. The files in the `workflows/` folder document their rules:
- **[Full Website Audit](file:///e:/Code/models/AgentWorkload/agentSkill/workflows/full-website-audit.md):** From repo reconnaissance to live verification.
- **[Mobile Reconstruction](file:///e:/Code/models/AgentWorkload/agentSkill/workflows/mobile-reconstruction.md):** Fix mobile layout, overflow, and scrolling.
- **[Cinematic Motion](file:///e:/Code/models/AgentWorkload/agentSkill/workflows/cinematic-motion.md):** Unifies reveals and scroll snap.
- **[Route Transition](file:///e:/Code/models/AgentWorkload/agentSkill/workflows/route-transition.md):** Shared morphing page animations.
- **[Portfolio Workflow](file:///e:/Code/models/AgentWorkload/agentSkill/workflows/portfolio-workflow.md):** Editorial style profile audits.
- **[Automotive Workflow](file:///e:/Code/models/AgentWorkload/agentSkill/workflows/automotive-workflow.md):** Packages, booking, and local SEO.
- **[Healthcare Workflow](file:///e:/Code/models/AgentWorkload/agentSkill/workflows/healthcare-workflow.md):** Emergency call links, OPD tables, and DB editability.
- **[Release Gate](file:///e:/Code/models/AgentWorkload/agentSkill/workflows/release-gate.md):** Final QA, audits, and Vercel build verification.

---

## Repository Structure

```text
website-agent-skills-repo/
├── agents/                 # 24 specialized skill folders (metadata & rules)
├── workflows/              # 8 structured multi-agent sequences & index
├── checklists/             # Quality-assurance checklist templates
├── templates/              # Standard prompts and deliverables templates
├── schemas/                # Schemas for JSON validations
├── examples/               # Reference logs and risks for real website plans
├── docs/                   # Interactive offline-first documentation website
├── scripts/                # Node validation and data generation scripts
├── AGENTS.md               # Global orchestration rules
├── SKILLS_INDEX.md         # Detailed markdown index
├── manifest.json           # Central database declaration
└── README.md               # This concise manual
```

---

## How to Invoke a Skill

Create your prompt matching the input template located at `templates/AGENT_REQUEST_TEMPLATE.md`:

```text
Use the designer-mobile skill.

PROJECT
Gurtejbir Singh Portfolio

TARGET
Homepage Recent Work carousel.

CURRENT PROBLEM
Desktop pinned carousel breaks on mobile, falling back to a vertical list. 
Grid headings are oversized at 390px.

CONSTRAINTS
- Do not redesign desktop styles.
- Preserve Punjab Gurmukhi font styling.
```

---

## How to Add a New Skill

1. Copy `templates/SKILL_TEMPLATE.md` to `agents/<new-skill-name>/SKILL.md`.
2. Populate its mission, inspection rules, deliverables, and handoff.
3. Write its `metadata.json` and `examples.md` details.
4. Add the skill name to `manifest.json`.
5. Run `npm run validate` to test validation schemas.
6. Run `npm run build:docs` to compile site databases.

---

## Contributions

Contributions are welcome! Please read our [Contributing Guide](file:///e:/Code/models/AgentWorkload/agentSkill/CONTRIBUTING.md) and conform to our [Code of Conduct](file:///e:/Code/models/AgentWorkload/agentSkill/CODE_OF_CONDUCT.md).

---

## License

This project is licensed under the MIT License. See [LICENSE](file:///e:/Code/models/AgentWorkload/agentSkill/LICENSE) for details.
