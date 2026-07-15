# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: docs-search.spec.js >> Search and Category Filters >> should filter skills by description
- Location: tests\docs-search.spec.js:17:3

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.skill-card')
Expected: 1
Received: 0
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" with timeout 5000ms
  - waiting for locator('.skill-card')
    14 × locator resolved to 0 elements
       - unexpected value "0"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - banner [ref=e3]:
    - generic [ref=e4]:
      - link "Website Agent Skills" [ref=e5] [cursor=pointer]:
        - /url: "#"
      - navigation "Main navigation" [ref=e6]:
        - list [ref=e7]:
          - listitem [ref=e8]:
            - link "Overview" [ref=e9] [cursor=pointer]:
              - /url: "#overview"
          - listitem [ref=e10]:
            - link "Skills" [ref=e11] [cursor=pointer]:
              - /url: "#skills"
          - listitem [ref=e12]:
            - link "Workflows" [ref=e13] [cursor=pointer]:
              - /url: "#workflows"
          - listitem [ref=e14]:
            - link "Examples" [ref=e15] [cursor=pointer]:
              - /url: "#examples"
          - listitem [ref=e16]:
            - link "Structure" [ref=e17] [cursor=pointer]:
              - /url: "#structure"
      - generic [ref=e18]:
        - link "View Repository" [ref=e19] [cursor=pointer]:
          - /url: https://github.com/Gurtejhundal/agentSkill
        - button "Copy Starter Prompt" [ref=e20] [cursor=pointer]
  - main [ref=e21]:
    - generic [ref=e23]:
      - generic [ref=e24]:
        - heading "Specialist agents for serious website work." [level=1] [ref=e25]
        - paragraph [ref=e26]: A structured system for design, responsive reconstruction, motion, domain UX, testing, and production verification.
        - generic [ref=e27]:
          - link "Explore skills" [ref=e28] [cursor=pointer]:
            - /url: "#skills"
          - link "View workflows" [ref=e29] [cursor=pointer]:
            - /url: "#workflows"
      - generic [ref=e30]:
        - generic [ref=e31]:
          - generic [ref=e32]: "24"
          - generic [ref=e33]: Specialist Skills
        - generic [ref=e34]:
          - generic [ref=e35]: "8"
          - generic [ref=e36]: Core Workflows
        - generic [ref=e37]:
          - generic [ref=e38]: "3"
          - generic [ref=e39]: Real Project Examples
        - generic [ref=e40]:
          - generic [ref=e41]: 100%
          - generic [ref=e42]: Framework-Free & Static
      - generic [ref=e43]:
        - generic [ref=e44]: Operating Pipeline
        - generic [ref=e45]:
          - generic [ref=e46]: Inspect
          - generic [ref=e47]: →
          - generic [ref=e48]: Design
          - generic [ref=e49]: →
          - generic [ref=e50]: Implement
          - generic [ref=e51]: →
          - generic [ref=e52]: Test
          - generic [ref=e53]: →
          - generic [ref=e54]: Deploy
    - generic [ref=e56]:
      - heading "Why this repository exists" [level=2] [ref=e57]
      - paragraph [ref=e58]: Generic frontend agents usually fail at complex website tasks. They modify code before inspecting, treat mobile as a cropped desktop, break ScrollTriggers, ignore accessibility, and claim completion without production verification. This repository solves these failures by dividing website engineering into focused, specialist skills.
      - generic [ref=e59]:
        - generic [ref=e60]:
          - heading "Common Agent Failures" [level=3] [ref=e61]
          - generic [ref=e62]:
            - generic [ref=e63]:
              - heading "Generic agents skip inspection" [level=4] [ref=e64]
              - paragraph [ref=e65]: They rush to patch style files without understanding CSS token hierarchies, breaking global design architectures.
            - generic [ref=e66]:
              - heading "Mobile becomes cropped desktop" [level=4] [ref=e67]
              - paragraph [ref=e68]: They shrink container dimensions or hide desktop animations, resulting in long vertical lists and unreadable layouts.
            - generic [ref=e69]:
              - heading "Animation ships without verification" [level=4] [ref=e70]
              - paragraph [ref=e71]: They deploy timelines that trigger layout shifts or run slow scroll calculations, causing runtime stutter.
            - generic [ref=e72]:
              - heading "Local and production drift apart" [level=4] [ref=e73]
              - paragraph [ref=e74]: They assume local build compilation means the live server state behaves identically, ignoring caching or env config errors.
        - generic [ref=e75]:
          - heading "The Repository Solution" [level=3] [ref=e76]
          - generic [ref=e77]:
            - generic [ref=e78]:
              - heading "Specialized Roles" [level=4] [ref=e79]
              - paragraph [ref=e80]: Focused skills for layout reconstruction, mobile adaptation, scroll-animations, SEO, accessibility, and deployments.
            - generic [ref=e81]:
              - heading "Explicit Workflows" [level=4] [ref=e82]
              - paragraph [ref=e83]: Structured sequences that route assignments systematically from mapping to coding to QA to delivery gates.
            - generic [ref=e84]:
              - heading "Measurable Acceptance Criteria" [level=4] [ref=e85]
              - paragraph [ref=e86]: Strict requirements specifying minimum touch targets, no scroll overflow, and exact viewport screenshot matrices.
            - generic [ref=e87]:
              - heading "Evidence-Based Completion" [level=4] [ref=e88]
              - paragraph [ref=e89]: Completion reports require files changed, live URLs, and screenshots of start, middle, and final scroll states.
    - generic [ref=e91]:
      - heading "Skill Explorer" [level=2] [ref=e92]
      - generic [ref=e93]:
        - generic [ref=e94]:
          - generic: 🔍
          - textbox "Search skills" [active] [ref=e95]:
            - /placeholder: Search skills by title, tags, outputs...
            - text: preserves the strongest parts of their identity
          - generic [ref=e96]: Press / to focus
        - generic [ref=e97]:
          - group "Category filters" [ref=e98]:
            - button "All Skills" [ref=e99] [cursor=pointer]
            - button "Strategy & Design" [ref=e100] [cursor=pointer]
            - button "Responsive & Typography" [ref=e101] [cursor=pointer]
            - button "Motion & Interaction" [ref=e102] [cursor=pointer]
            - button "Architecture" [ref=e103] [cursor=pointer]
            - button "Domain UX" [ref=e104] [cursor=pointer]
            - button "Quality & Delivery" [ref=e105] [cursor=pointer]
          - generic [ref=e106]:
            - generic [ref=e107]: 0 skills visible
            - button "Reset Filters" [ref=e108] [cursor=pointer]
      - generic [ref=e110]: No matching skills found.
    - generic [ref=e112]:
      - heading "Workflow Explorer" [level=2] [ref=e113]
      - paragraph [ref=e114]: Multi-agent workflows guide agents step-by-step through complex engineering processes. Click on any step in a workflow to view details for that skill.
      - generic [ref=e115]:
        - generic [ref=e116]:
          - heading "Automotive Workflow" [level=3] [ref=e117]
          - paragraph [ref=e118]: Premium automotive detailing business layout and conversion path.
          - generic [ref=e119]:
            - button "Open Codebase Reconnaissance details" [ref=e120] [cursor=pointer]: Codebase Reconnaissance
            - generic [ref=e121]: ↓
            - button "Open Automotive UX Design details" [ref=e122] [cursor=pointer]: Automotive UX Design
            - generic [ref=e123]: ↓
            - button "Open Design System Extraction details" [ref=e124] [cursor=pointer]: Design System Extraction
            - generic [ref=e125]: ↓
            - button "Open Content Hierarchy Optimization details" [ref=e126] [cursor=pointer]: Content Hierarchy Optimization
            - generic [ref=e127]: ↓
            - button "Open Mobile Design Reconstruction details" [ref=e128] [cursor=pointer]: Mobile Design Reconstruction
            - generic [ref=e129]: ↓
            - button "Open Media Fit Specialization details" [ref=e130] [cursor=pointer]: Media Fit Specialization
            - generic [ref=e131]: ↓
            - button "Open UX Conversion Strategy details" [ref=e132] [cursor=pointer]: UX Conversion Strategy
            - generic [ref=e133]: ↓
            - button "Open SEO & Local Search details" [ref=e134] [cursor=pointer]: SEO & Local Search
            - generic [ref=e135]: ↓
            - button "Open Visual QA Auditing details" [ref=e136] [cursor=pointer]: Visual QA Auditing
            - generic [ref=e137]: ↓
            - button "Open Deployment Verification details" [ref=e138] [cursor=pointer]: Deployment Verification
        - generic [ref=e139]:
          - heading "Cinematic Motion" [level=3] [ref=e140]
          - paragraph [ref=e141]: Creates a unified motion system and scroll experiences.
          - generic [ref=e142]:
            - button "Open Creative Design Audit details" [ref=e143] [cursor=pointer]: Creative Design Audit
            - generic [ref=e144]: ↓
            - button "Open Motion Architecture details" [ref=e145] [cursor=pointer]: Motion Architecture
            - generic [ref=e146]: ↓
            - button "Open Scroll Systems Engineering details" [ref=e147] [cursor=pointer]: Scroll Systems Engineering
            - generic [ref=e148]: ↓
            - button "Open Performance Optimization details" [ref=e149] [cursor=pointer]: Performance Optimization
            - generic [ref=e150]: ↓
            - button "Open Mobile Design Reconstruction details" [ref=e151] [cursor=pointer]: Mobile Design Reconstruction
            - generic [ref=e152]: ↓
            - button "Open Visual QA Auditing details" [ref=e153] [cursor=pointer]: Visual QA Auditing
            - generic [ref=e154]: ↓
            - button "Open Interaction QA Auditing details" [ref=e155] [cursor=pointer]: Interaction QA Auditing
        - generic [ref=e156]:
          - heading "Full Website Audit" [level=3] [ref=e157]
          - paragraph [ref=e158]: Comprehensive audit, redesign, testing, and production verification.
          - generic [ref=e159]:
            - button "Open Codebase Reconnaissance details" [ref=e160] [cursor=pointer]: Codebase Reconnaissance
            - generic [ref=e161]: ↓
            - button "Open Design System Extraction details" [ref=e162] [cursor=pointer]: Design System Extraction
            - generic [ref=e163]: ↓
            - button "Open UX Conversion Strategy details" [ref=e164] [cursor=pointer]: UX Conversion Strategy
            - generic [ref=e165]: ↓
            - button "Open Content Hierarchy Optimization details" [ref=e166] [cursor=pointer]: Content Hierarchy Optimization
            - generic [ref=e167]: ↓
            - button "Open Mobile Design Reconstruction details" [ref=e168] [cursor=pointer]: Mobile Design Reconstruction
            - generic [ref=e169]: ↓
            - button "Open Motion Architecture details" [ref=e170] [cursor=pointer]: Motion Architecture
            - generic [ref=e171]: ↓
            - button "Open Scroll Systems Engineering details" [ref=e172] [cursor=pointer]: Scroll Systems Engineering
            - generic [ref=e173]: ↓
            - button "Open Accessibility Auditing details" [ref=e174] [cursor=pointer]: Accessibility Auditing
            - generic [ref=e175]: ↓
            - button "Open Performance Optimization details" [ref=e176] [cursor=pointer]: Performance Optimization
            - generic [ref=e177]: ↓
            - button "Open Visual QA Auditing details" [ref=e178] [cursor=pointer]: Visual QA Auditing
            - generic [ref=e179]: ↓
            - button "Open Interaction QA Auditing details" [ref=e180] [cursor=pointer]: Interaction QA Auditing
            - generic [ref=e181]: ↓
            - button "Open Deployment Verification details" [ref=e182] [cursor=pointer]: Deployment Verification
        - generic [ref=e183]:
          - heading "Healthcare Workflow" [level=3] [ref=e184]
          - paragraph [ref=e185]: Hospital and clinic website organization, accessibility, and CMS preservation.
          - generic [ref=e186]:
            - button "Open Codebase Reconnaissance details" [ref=e187] [cursor=pointer]: Codebase Reconnaissance
            - generic [ref=e188]: ↓
            - button "Open Healthcare UX Design details" [ref=e189] [cursor=pointer]: Healthcare UX Design
            - generic [ref=e190]: ↓
            - button "Open Content Hierarchy Optimization details" [ref=e191] [cursor=pointer]: Content Hierarchy Optimization
            - generic [ref=e192]: ↓
            - button "Open Accessibility Auditing details" [ref=e193] [cursor=pointer]: Accessibility Auditing
            - generic [ref=e194]: ↓
            - button "Open Backend & Admin Preservation details" [ref=e195] [cursor=pointer]: Backend & Admin Preservation
            - generic [ref=e196]: ↓
            - button "Open Mobile Design Reconstruction details" [ref=e197] [cursor=pointer]: Mobile Design Reconstruction
            - generic [ref=e198]: ↓
            - button "Open Interaction QA Auditing details" [ref=e199] [cursor=pointer]: Interaction QA Auditing
            - generic [ref=e200]: ↓
            - button "Open SEO & Local Search details" [ref=e201] [cursor=pointer]: SEO & Local Search
            - generic [ref=e202]: ↓
            - button "Open Deployment Verification details" [ref=e203] [cursor=pointer]: Deployment Verification
        - generic [ref=e204]:
          - heading "Mobile Reconstruction" [level=3] [ref=e205]
          - paragraph [ref=e206]: Rebuilds desktop experiences for mobile screens and touch inputs.
          - generic [ref=e207]:
            - button "Open Codebase Reconnaissance details" [ref=e208] [cursor=pointer]: Codebase Reconnaissance
            - generic [ref=e209]: ↓
            - button "Open Mobile Design Reconstruction details" [ref=e210] [cursor=pointer]: Mobile Design Reconstruction
            - generic [ref=e211]: ↓
            - button "Open Typography Direction details" [ref=e212] [cursor=pointer]: Typography Direction
            - generic [ref=e213]: ↓
            - button "Open Media Fit Specialization details" [ref=e214] [cursor=pointer]: Media Fit Specialization
            - generic [ref=e215]: ↓
            - button "Open Scroll Systems Engineering details" [ref=e216] [cursor=pointer]: Scroll Systems Engineering
            - generic [ref=e217]: ↓
            - button "Open Visual QA Auditing details" [ref=e218] [cursor=pointer]: Visual QA Auditing
            - generic [ref=e219]: ↓
            - button "Open Interaction QA Auditing details" [ref=e220] [cursor=pointer]: Interaction QA Auditing
        - generic [ref=e221]:
          - heading "Portfolio Workflow" [level=3] [ref=e222]
          - paragraph [ref=e223]: Optimizes editorial developer portfolios for positioning and credentials.
          - generic [ref=e224]:
            - button "Open Codebase Reconnaissance details" [ref=e225] [cursor=pointer]: Codebase Reconnaissance
            - generic [ref=e226]: ↓
            - button "Open Portfolio UX Design details" [ref=e227] [cursor=pointer]: Portfolio UX Design
            - generic [ref=e228]: ↓
            - button "Open Design System Extraction details" [ref=e229] [cursor=pointer]: Design System Extraction
            - generic [ref=e230]: ↓
            - button "Open Typography Direction details" [ref=e231] [cursor=pointer]: Typography Direction
            - generic [ref=e232]: ↓
            - button "Open Motion Architecture details" [ref=e233] [cursor=pointer]: Motion Architecture
            - generic [ref=e234]: ↓
            - button "Open Scroll Systems Engineering details" [ref=e235] [cursor=pointer]: Scroll Systems Engineering
            - generic [ref=e236]: ↓
            - button "Open Route Transition Design details" [ref=e237] [cursor=pointer]: Route Transition Design
            - generic [ref=e238]: ↓
            - button "Open Mobile Design Reconstruction details" [ref=e239] [cursor=pointer]: Mobile Design Reconstruction
            - generic [ref=e240]: ↓
            - button "Open Media Fit Specialization details" [ref=e241] [cursor=pointer]: Media Fit Specialization
            - generic [ref=e242]: ↓
            - button "Open Visual QA Auditing details" [ref=e243] [cursor=pointer]: Visual QA Auditing
            - generic [ref=e244]: ↓
            - button "Open Interaction QA Auditing details" [ref=e245] [cursor=pointer]: Interaction QA Auditing
            - generic [ref=e246]: ↓
            - button "Open Deployment Verification details" [ref=e247] [cursor=pointer]: Deployment Verification
        - generic [ref=e248]:
          - heading "Release Gate" [level=3] [ref=e249]
          - paragraph [ref=e250]: Validates visual regression, interaction, SEO, and production deployment.
          - generic [ref=e251]:
            - button "Open Accessibility Auditing details" [ref=e252] [cursor=pointer]: Accessibility Auditing
            - generic [ref=e253]: ↓
            - button "Open Performance Optimization details" [ref=e254] [cursor=pointer]: Performance Optimization
            - generic [ref=e255]: ↓
            - button "Open Visual QA Auditing details" [ref=e256] [cursor=pointer]: Visual QA Auditing
            - generic [ref=e257]: ↓
            - button "Open Interaction QA Auditing details" [ref=e258] [cursor=pointer]: Interaction QA Auditing
            - generic [ref=e259]: ↓
            - button "Open SEO & Local Search details" [ref=e260] [cursor=pointer]: SEO & Local Search
            - generic [ref=e261]: ↓
            - button "Open Deployment Verification details" [ref=e262] [cursor=pointer]: Deployment Verification
        - generic [ref=e263]:
          - heading "Route Transition" [level=3] [ref=e264]
          - paragraph [ref=e265]: Premium page switching rooted in a real interface element.
          - generic [ref=e266]:
            - button "Open Codebase Reconnaissance details" [ref=e267] [cursor=pointer]: Codebase Reconnaissance
            - generic [ref=e268]: ↓
            - button "Open Route Transition Design details" [ref=e269] [cursor=pointer]: Route Transition Design
            - generic [ref=e270]: ↓
            - button "Open Motion Architecture details" [ref=e271] [cursor=pointer]: Motion Architecture
            - generic [ref=e272]: ↓
            - button "Open Interaction QA Auditing details" [ref=e273] [cursor=pointer]: Interaction QA Auditing
            - generic [ref=e274]: ↓
            - button "Open Accessibility Auditing details" [ref=e275] [cursor=pointer]: Accessibility Auditing
            - generic [ref=e276]: ↓
            - button "Open Deployment Verification details" [ref=e277] [cursor=pointer]: Deployment Verification
      - generic [ref=e278]:
        - heading "Interactive Workflow Builder" [level=3] [ref=e279]
        - generic [ref=e280]:
          - generic [ref=e281]:
            - generic [ref=e282]: What are you trying to fix?
            - combobox "What are you trying to fix?" [ref=e283]:
              - option "Full redesign" [selected]
              - option "Mobile optimization"
              - option "Broken scroll animation"
              - option "Project image fitting"
              - option "Page transition"
              - option "Accessibility review"
              - option "Performance optimization"
              - option "Local business conversion"
              - option "Hospital UX"
              - option "Portfolio UX"
              - option "Deployment mismatch"
          - generic [ref=e285]:
            - heading "Recommended Sequence" [level=4] [ref=e286]
            - generic [ref=e287]:
              - button "Codebase Reconnaissance" [ref=e288] [cursor=pointer]
              - generic [ref=e289]: →
              - button "Creative Design Audit" [ref=e290] [cursor=pointer]
              - generic [ref=e291]: →
              - button "Design System Extraction" [ref=e292] [cursor=pointer]
              - generic [ref=e293]: →
              - button "Content Hierarchy Optimization" [ref=e294] [cursor=pointer]
              - generic [ref=e295]: →
              - button "Mobile Design Reconstruction" [ref=e296] [cursor=pointer]
              - generic [ref=e297]: →
              - button "Motion Architecture" [ref=e298] [cursor=pointer]
              - generic [ref=e299]: →
              - button "Visual QA Auditing" [ref=e300] [cursor=pointer]
              - generic [ref=e301]: →
              - button "Deployment Verification" [ref=e302] [cursor=pointer]
            - heading "Workflow Prompt" [level=4] [ref=e303]
            - code [ref=e305]: "SELECTED PROBLEM: FULL REDESIGN RECOMMENDED SEQUENCE: codebase-recon → design-me → design-system-extractor → content-hierarchy → designer-mobile → motion-architect → visual-qa-agent → deployment-verifier WORKFLOW INSTRUCTIONS: I want to do a full redesign of the website. Follow the Full Website Audit workflow. Ensure visual-qa-agent captures both desktop and mobile viewports. REQUIRED EVIDENCE: - Files changed list - Desktop & mobile layout screenshots - Interaction test outcomes - Performance runtime logs - Production live deployment URL verification"
            - button "Copy Workflow Prompt" [ref=e306] [cursor=pointer]
    - generic [ref=e308]:
      - heading "Example Projects" [level=2] [ref=e309]
      - paragraph [ref=e310]: These case studies demonstrate how specialist skills coordinate to solve specific architectural, design, and conversion problems on production sites.
      - generic [ref=e311]:
        - generic [ref=e312]:
          - generic [ref=e313]:
            - heading "Bibi Kaulan Hospital" [level=3] [ref=e314]
            - paragraph [ref=e315]: Hospital website with emergency, doctors, departments, OPD timings, appointments, and admin-managed content.
          - button "View Project Plan" [ref=e316] [cursor=pointer]
        - generic [ref=e317]:
          - generic [ref=e318]:
            - heading "Gurtejbir Portfolio" [level=3] [ref=e319]
            - paragraph [ref=e320]: Editorial portfolio with route morphs, pinned project scrolling, mixed-ratio project media, and complex mobile behavior.
          - button "View Project Plan" [ref=e321] [cursor=pointer]
        - generic [ref=e322]:
          - generic [ref=e323]:
            - heading "House Of Details" [level=3] [ref=e324]
            - paragraph [ref=e325]: Premium automotive detailing and protection website.
          - button "View Project Plan" [ref=e326] [cursor=pointer]
    - generic [ref=e329]:
      - generic [ref=e330]:
        - heading "How to use a skill" [level=2] [ref=e331]
        - paragraph [ref=e332]: Copy the prompt template below when assigning website tasks to your AI coding agents. Replace the template markers with your project specifics.
        - code [ref=e334]: "Use the <skill-name> skill. PROJECT <project name> TARGET <route, component, file, or URL> CURRENT PROBLEM <exact failure> DESIRED RESULT <observable behavior> CONSTRAINTS - Do not modify: - Preserve: - Existing libraries: - Required breakpoints: REQUIRED TESTS - Breakpoints: - Input methods: - Routes: - Reduced motion: REQUIRED REPORT - Root cause - Files changed - Screenshots - Remaining limitations"
        - button "Copy Template" [ref=e335] [cursor=pointer]
      - generic [ref=e336]:
        - heading "How to create a new skill" [level=2] [ref=e337]
        - paragraph [ref=e338]: "Expand the repository capabilities by adding custom specialist skills following this workflow:"
        - generic [ref=e339]:
          - generic [ref=e340]:
            - generic [ref=e341]: "1"
            - generic [ref=e342]:
              - heading "Copy template" [level=4] [ref=e343]
              - paragraph [ref=e344]:
                - text: Copy the
                - link "SKILL_TEMPLATE.md" [ref=e345] [cursor=pointer]:
                  - /url: ../templates/SKILL_TEMPLATE.md
                - text: from the templates folder.
          - generic [ref=e346]:
            - generic [ref=e347]: "2"
            - generic [ref=e348]:
              - heading "Create folder" [level=4] [ref=e349]
              - paragraph [ref=e350]: "Create `agents/<new-skill-name>/` utilizing lowercase kebab-case naming."
          - generic [ref=e351]:
            - generic [ref=e352]: "3"
            - generic [ref=e353]:
              - heading "Add files" [level=4] [ref=e354]
              - paragraph [ref=e355]: "Create `SKILL.md` (mission, guardrails, criteria), `metadata.json` (categories, use-cases), and `examples.md` files."
          - generic [ref=e356]:
            - generic [ref=e357]: "4"
            - generic [ref=e358]:
              - heading "Validate and build" [level=4] [ref=e359]
              - paragraph [ref=e360]: "Update the manifest, run `npm run validate` to test schemas, and `npm run build:docs` to update this website."
        - generic [ref=e361]:
          - link "Contributing Guide" [ref=e362] [cursor=pointer]:
            - /url: ../CONTRIBUTING.md
          - link "Skill JSON Schema" [ref=e363] [cursor=pointer]:
            - /url: ../schemas/skill.schema.json
    - generic [ref=e365]:
      - heading "Repository structure" [level=2] [ref=e366]
      - paragraph [ref=e367]: Click on any folder in the tree below to expand details about its contents and architectural purpose in the repository.
      - list [ref=e368]:
        - listitem [ref=e369]:
          - button "📁 agents/" [ref=e370] [cursor=pointer]
        - listitem [ref=e371]:
          - button "📁 workflows/" [ref=e372] [cursor=pointer]
        - listitem [ref=e373]:
          - button "📁 checklists/" [ref=e374] [cursor=pointer]
        - listitem [ref=e375]:
          - button "📁 templates/" [ref=e376] [cursor=pointer]
        - listitem [ref=e377]:
          - button "📁 schemas/" [ref=e378] [cursor=pointer]
        - listitem [ref=e379]:
          - button "📁 examples/" [ref=e380] [cursor=pointer]
        - listitem [ref=e381]:
          - button "📁 docs/" [ref=e382] [cursor=pointer]
        - listitem [ref=e383]:
          - button "📁 scripts/" [ref=e384] [cursor=pointer]
        - listitem [ref=e385]:
          - button "📁 .github/" [ref=e386] [cursor=pointer]
    - generic [ref=e388]:
      - heading "Open Source Contribution" [level=2] [ref=e389]
      - paragraph [ref=e390]: Website Agent Skills is an open-source framework designed to elevate AI agent frontend capabilities. Feel free to submit issues, add new skills, refine workflows, or adapt schemas to fit your development pipelines.
      - generic [ref=e391]:
        - link "Star on GitHub" [ref=e392] [cursor=pointer]:
          - /url: https://github.com/Gurtejhundal/agentSkill
        - link "Contribution Guidelines" [ref=e393] [cursor=pointer]:
          - /url: ../CONTRIBUTING.md
  - contentinfo [ref=e394]:
    - paragraph [ref=e396]: © 2026 Website Agent Skills. Released under the MIT License.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Search and Category Filters', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto('index.html');
  6  |   });
  7  | 
  8  |   test('should filter skills by name', async ({ page }) => {
  9  |     const search = page.locator('#search-input');
  10 |     await search.fill('designer-mobile');
  11 |     
  12 |     const cards = page.locator('.skill-card');
  13 |     await expect(cards).toHaveCount(1);
  14 |     await expect(cards.first().locator('.skill-title-text')).toHaveText('Mobile Design Reconstruction');
  15 |   });
  16 | 
  17 |   test('should filter skills by description', async ({ page }) => {
  18 |     const search = page.locator('#search-input');
  19 |     await search.fill('preserves the strongest parts of their identity');
  20 |     
  21 |     const cards = page.locator('.skill-card');
> 22 |     await expect(cards).toHaveCount(1);
     |                         ^ Error: expect(locator).toHaveCount(expected) failed
  23 |     await expect(cards.first().locator('.skill-title-text')).toHaveText('Creative Design Audit');
  24 |   });
  25 | 
  26 |   test('should filter skills by tag', async ({ page }) => {
  27 |     const search = page.locator('#search-input');
  28 |     await search.fill('wcag');
  29 |     
  30 |     const cards = page.locator('.skill-card');
  31 |     await expect(cards).toHaveCount(1);
  32 |     await expect(cards.first().locator('.skill-title-text')).toHaveText('Accessibility Auditing');
  33 |   });
  34 | 
  35 |   test('should filter skills by category buttons', async ({ page }) => {
  36 |     // Click Strategy & Design
  37 |     await page.click('button:has-text("Strategy & Design")');
  38 |     let cards = page.locator('.skill-card');
  39 |     await expect(cards).toHaveCount(4); // design-me, design-system-extractor, content-hierarchy, ux-conversion-strategist
  40 | 
  41 |     // Click Motion & Interaction
  42 |     await page.click('button:has-text("Motion & Interaction")');
  43 |     cards = page.locator('.skill-card');
  44 |     await expect(cards).toHaveCount(4); // 3d-animation, motion-architect, scroll-systems-engineer, route-transition-designer
  45 |   });
  46 | 
  47 |   test('should reset all filters and search input on Reset click', async ({ page }) => {
  48 |     const search = page.locator('#search-input');
  49 |     await search.fill('3d-animation');
  50 |     await page.click('button:has-text("Motion & Interaction")');
  51 | 
  52 |     const resetButton = page.locator('#reset-filters');
  53 |     await expect(resetButton).toBeVisible();
  54 |     await resetButton.click();
  55 | 
  56 |     await expect(search).toHaveValue('');
  57 |     await expect(page.locator('.skill-card')).toHaveCount(24);
  58 |   });
  59 | 
  60 |   test('should focus search input when "/" hotkey is pressed outside inputs', async ({ page }) => {
  61 |     const search = page.locator('#search-input');
  62 |     await expect(search).not.toBeFocused();
  63 | 
  64 |     await page.keyboard.press('/');
  65 |     await expect(search).toBeFocused();
  66 |   });
  67 | 
  68 |   test('should not hijack slash character when already typing in search input', async ({ page }) => {
  69 |     const search = page.locator('#search-input');
  70 |     await search.focus();
  71 |     
  72 |     await page.keyboard.type('test/');
  73 |     await expect(search).toHaveValue('test/');
  74 |   });
  75 | });
  76 | 
```