# Skills Index

This index lists all specialist agent skills available in the repository, grouped by category.

## Strategy and Design

### [Content Hierarchy Optimization (agents/content-hierarchy/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/content-hierarchy/SKILL.md)

- **Purpose:** Reduces repetition and reorganizes content around trust, evidence, understanding, and action.
- **When to use:** Homepage repeats project details, Pages feel long but say little, Critical content is buried
- **Primary inputs:** Page text, User goal brief, Trust evidence, Call to action priority
- **Main outputs:** Reorganize content table, Revised copy outline, CTA placement roadmap, Trust credentials structure
- **Recommended companion skills:** [design-me](file:///e:/Code/models/AgentWorkload/agentSkill/agents/design-me/SKILL.md), [portfolio-ux](file:///e:/Code/models/AgentWorkload/agentSkill/agents/portfolio-ux/SKILL.md), [automotive-ux](file:///e:/Code/models/AgentWorkload/agentSkill/agents/automotive-ux/SKILL.md), [healthcare-ux](file:///e:/Code/models/AgentWorkload/agentSkill/agents/healthcare-ux/SKILL.md)

### [Creative Design Audit (agents/design-me/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/design-me/SKILL.md)

- **Purpose:** Audits and redesigns websites while preserving the strongest parts of their identity.
- **When to use:** The entire page looks generic, The hierarchy feels wrong, The user wants a redesign, Several sections need coordinated improvement
- **Primary inputs:** Live URL, Screenshots, Business goal, Desired personality, Reference websites
- **Main outputs:** Design audit, Prioritized defects, Revised section architecture, Design tokens
- **Recommended companion skills:** [design-system-extractor](file:///e:/Code/models/AgentWorkload/agentSkill/agents/design-system-extractor/SKILL.md), [designer-mobile](file:///e:/Code/models/AgentWorkload/agentSkill/agents/designer-mobile/SKILL.md), [content-hierarchy](file:///e:/Code/models/AgentWorkload/agentSkill/agents/content-hierarchy/SKILL.md)

### [Design System Extraction (agents/design-system-extractor/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/design-system-extractor/SKILL.md)

- **Purpose:** Extracts reusable visual rules from references without blindly cloning them.
- **When to use:** The user likes another website, Exact font or spacing needs inspection, A new website should borrow mechanics, not identity
- **Primary inputs:** Reference URL, Reference screenshots, Target components
- **Main outputs:** Design system tokens, Spacing scales, Typography scales, Originality safeguards
- **Recommended companion skills:** [design-me](file:///e:/Code/models/AgentWorkload/agentSkill/agents/design-me/SKILL.md), [typography-director](file:///e:/Code/models/AgentWorkload/agentSkill/agents/typography-director/SKILL.md), [motion-architect](file:///e:/Code/models/AgentWorkload/agentSkill/agents/motion-architect/SKILL.md)

### [UX Conversion Strategy (agents/ux-conversion-strategist/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/ux-conversion-strategist/SKILL.md)

- **Purpose:** Optimizes trust, evidence, CTA hierarchy, and conversion paths.
- **When to use:** The site looks good but users do not know what to do, Contact is buried, Too many CTAs compete
- **Primary inputs:** Conversion goals, Contact points, User concerns, Evidence assets
- **Main outputs:** CTA layout rules, Trust placement specifications, Friction reduction plan, Mobile actions list
- **Recommended companion skills:** [automotive-ux](file:///e:/Code/models/AgentWorkload/agentSkill/agents/automotive-ux/SKILL.md), [healthcare-ux](file:///e:/Code/models/AgentWorkload/agentSkill/agents/healthcare-ux/SKILL.md), [portfolio-ux](file:///e:/Code/models/AgentWorkload/agentSkill/agents/portfolio-ux/SKILL.md)

## Responsive and Typography

### [Mobile Design Reconstruction (agents/designer-mobile/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/designer-mobile/SKILL.md)

- **Purpose:** Reconstructs desktop experiences for mobile without cropping, shrinking, or deleting core behavior.
- **When to use:** Cards fill the mobile screen, Desktop animations disappear on mobile, Fixed controls overlap content
- **Primary inputs:** Repository, Live URL, Mobile screenshots, Target breakpoints
- **Main outputs:** Mobile layout specification, Responsive type scale, Breakpoint behavior, QA screenshots
- **Recommended companion skills:** [typography-director](file:///e:/Code/models/AgentWorkload/agentSkill/agents/typography-director/SKILL.md), [scroll-systems-engineer](file:///e:/Code/models/AgentWorkload/agentSkill/agents/scroll-systems-engineer/SKILL.md), [visual-qa-agent](file:///e:/Code/models/AgentWorkload/agentSkill/agents/visual-qa-agent/SKILL.md)

### [Media Fit Specialization (agents/media-fit-specialist/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/media-fit-specialist/SKILL.md)

- **Purpose:** Fits mixed-ratio artwork into cards without stretching, severe crop, or exposed artboards.
- **When to use:** Portrait assets are forced into landscape cards, Titles are cropped, Images stretch or blur
- **Primary inputs:** Asset list, Container aspect ratios, Image focal points, Card components
- **Main outputs:** Object-fit properties, Object-position values, Responsive card media configs, Crop guidelines
- **Recommended companion skills:** [asset-optimizer](file:///e:/Code/models/AgentWorkload/agentSkill/agents/asset-optimizer/SKILL.md), [designer-mobile](file:///e:/Code/models/AgentWorkload/agentSkill/agents/designer-mobile/SKILL.md), [visual-qa-agent](file:///e:/Code/models/AgentWorkload/agentSkill/agents/visual-qa-agent/SKILL.md)

### [Typography Direction (agents/typography-director/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/typography-director/SKILL.md)

- **Purpose:** Builds responsive, multilingual typography systems with correct hierarchy and optical balance.
- **When to use:** Fonts feel cheap, Punjabi and English do not match, Headings overflow or wrap awkwardly
- **Primary inputs:** Font names, Screenshots, Multilingual text samples, Target breakpoints
- **Main outputs:** Font pairings, Fluid sizing tokens, Tracking and leading specs, Font fallback overrides
- **Recommended companion skills:** [design-system-extractor](file:///e:/Code/models/AgentWorkload/agentSkill/agents/design-system-extractor/SKILL.md), [designer-mobile](file:///e:/Code/models/AgentWorkload/agentSkill/agents/designer-mobile/SKILL.md), [performance-optimizer](file:///e:/Code/models/AgentWorkload/agentSkill/agents/performance-optimizer/SKILL.md)

## Motion and Interaction

### [Purposeful 3D Animation (agents/3d-animation/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/3d-animation/SKILL.md)

- **Purpose:** Designs restrained, performant 3D interactions with explicit mobile and reduced-motion fallbacks.
- **When to use:** A product needs spatial explanation, A car, object, or interface benefits from depth, A hero requires an interactive 3D reveal
- **Primary inputs:** Brand assets, 3D models, WebGL library configuration, Performance budgets
- **Main outputs:** 3D scene specification, Mobile fallback asset, Reduced-motion stylesheet, Performance metrics
- **Recommended companion skills:** [performance-optimizer](file:///e:/Code/models/AgentWorkload/agentSkill/agents/performance-optimizer/SKILL.md), [asset-optimizer](file:///e:/Code/models/AgentWorkload/agentSkill/agents/asset-optimizer/SKILL.md), [designer-mobile](file:///e:/Code/models/AgentWorkload/agentSkill/agents/designer-mobile/SKILL.md)

### [Motion Architecture (agents/motion-architect/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/motion-architect/SKILL.md)

- **Purpose:** Creates a coherent motion language for entrances, reveals, parallax, hover, and cinematic transitions.
- **When to use:** Animations feel random, Every section uses a different effect, Entrance order lacks hierarchy
- **Primary inputs:** Static designs, Easing tokens, Animation timelines, Responsive requirements
- **Main outputs:** Motion guidelines, Animation duration tokens, Timeline selectors, Reduced-motion fallbacks
- **Recommended companion skills:** [scroll-systems-engineer](file:///e:/Code/models/AgentWorkload/agentSkill/agents/scroll-systems-engineer/SKILL.md), [route-transition-designer](file:///e:/Code/models/AgentWorkload/agentSkill/agents/route-transition-designer/SKILL.md), [visual-qa-agent](file:///e:/Code/models/AgentWorkload/agentSkill/agents/visual-qa-agent/SKILL.md)

### [Route Transition Design (agents/route-transition-designer/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/route-transition-designer/SKILL.md)

- **Purpose:** Creates premium page transitions rooted in persistent navigation and shared elements.
- **When to use:** The transition is only a fade, A generic curtain looks cheap, Navigation unmounts between pages
- **Primary inputs:** Route architecture, Persistent shared element selectors, Source and destination geometry
- **Main outputs:** Route lifecycle config, Page transition styles, Morph geometry values, Back/Forward handler
- **Recommended companion skills:** [motion-architect](file:///e:/Code/models/AgentWorkload/agentSkill/agents/motion-architect/SKILL.md), [interaction-qa-agent](file:///e:/Code/models/AgentWorkload/agentSkill/agents/interaction-qa-agent/SKILL.md), [deployment-verifier](file:///e:/Code/models/AgentWorkload/agentSkill/agents/deployment-verifier/SKILL.md)

### [Scroll Systems Engineering (agents/scroll-systems-engineer/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/scroll-systems-engineer/SKILL.md)

- **Purpose:** Builds and debugs pinned scenes, horizontal tracks, snap states, Lenis integration, and touch scrolling.
- **When to use:** A pinned section skips content, Horizontal movement does not complete, Lenis and ScrollTrigger fight
- **Primary inputs:** Viewport layouts, Scroll track containers, Lenis configuration, Trigger timings
- **Main outputs:** Scroll timeline code, Snap calculations, Breakpoint cleanup rules, Touch scroll fallbacks
- **Recommended companion skills:** [designer-mobile](file:///e:/Code/models/AgentWorkload/agentSkill/agents/designer-mobile/SKILL.md), [motion-architect](file:///e:/Code/models/AgentWorkload/agentSkill/agents/motion-architect/SKILL.md), [performance-optimizer](file:///e:/Code/models/AgentWorkload/agentSkill/agents/performance-optimizer/SKILL.md)

## Architecture

### [Backend & Admin Preservation (agents/backend-admin-preserver/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/backend-admin-preserver/SKILL.md)

- **Purpose:** Protects CMS, Django Admin, database, and editable content flows during redesigns.
- **When to use:** Doctors or timings come from admin, Redesign may hard-code existing data
- **Primary inputs:** Backend schemas, Django settings, API consumption hooks, Form models
- **Main outputs:** Database compatibility report, Model field mapping, Admin test verification, API integrations validation
- **Recommended companion skills:** [healthcare-ux](file:///e:/Code/models/AgentWorkload/agentSkill/agents/healthcare-ux/SKILL.md), [component-refactor](file:///e:/Code/models/AgentWorkload/agentSkill/agents/component-refactor/SKILL.md), [interaction-qa-agent](file:///e:/Code/models/AgentWorkload/agentSkill/agents/interaction-qa-agent/SKILL.md)

### [Codebase Reconnaissance (agents/codebase-recon/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/codebase-recon/SKILL.md)

- **Purpose:** Maps an unfamiliar website codebase before design or implementation begins.
- **When to use:** First time inspecting the codebase, Before beginning major component refactors, Understanding data flows and builds
- **Primary inputs:** Repository path, Live domain, Vercel configuration
- **Main outputs:** Route mapping table, CSS token list, Framework version audit, Risk assessment report
- **Recommended companion skills:** [component-refactor](file:///e:/Code/models/AgentWorkload/agentSkill/agents/component-refactor/SKILL.md), [visual-qa-agent](file:///e:/Code/models/AgentWorkload/agentSkill/agents/visual-qa-agent/SKILL.md), [deployment-verifier](file:///e:/Code/models/AgentWorkload/agentSkill/agents/deployment-verifier/SKILL.md)

### [Component Refactoring (agents/component-refactor/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/component-refactor/SKILL.md)

- **Purpose:** Refactors brittle page code into reusable, testable, data-driven components.
- **When to use:** One component controls the entire homepage, Project-specific CSS is scattered, Magic numbers exist
- **Primary inputs:** Legacy component files, Markup structure, CSS rule locations, Component state data
- **Main outputs:** Refactored component code, Props contract details, Cleaned styles, State separation map
- **Recommended companion skills:** [media-fit-specialist](file:///e:/Code/models/AgentWorkload/agentSkill/agents/media-fit-specialist/SKILL.md), [visual-qa-agent](file:///e:/Code/models/AgentWorkload/agentSkill/agents/visual-qa-agent/SKILL.md), [interaction-qa-agent](file:///e:/Code/models/AgentWorkload/agentSkill/agents/interaction-qa-agent/SKILL.md)

## Domain UX

### [Automotive UX Design (agents/automotive-ux/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/automotive-ux/SKILL.md)

- **Purpose:** Designs premium automotive detailing websites around trust, craftsmanship, proof, and booking intent.
- **When to use:** Designing automotive detailing studios, Structuring ceramic coating or PPF page layouts
- **Primary inputs:** Services list, Package prices, Studio location, Before/after media
- **Main outputs:** Service comparison cards, Before/after gallery configs, WhatsApp booking integrations, Brand colors selection
- **Recommended companion skills:** [ux-conversion-strategist](file:///e:/Code/models/AgentWorkload/agentSkill/agents/ux-conversion-strategist/SKILL.md), [designer-mobile](file:///e:/Code/models/AgentWorkload/agentSkill/agents/designer-mobile/SKILL.md), [seo-local-search](file:///e:/Code/models/AgentWorkload/agentSkill/agents/seo-local-search/SKILL.md)

### [Healthcare UX Design (agents/healthcare-ux/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/healthcare-ux/SKILL.md)

- **Purpose:** Designs trustworthy hospital experiences with clear emergency, doctor, OPD, and appointment flows.
- **When to use:** Designing clinics, hospital websites, or medical directories
- **Primary inputs:** OPD timings, Doctor listings, Departments info, Emergency call numbers
- **Main outputs:** Emergency quick links, OPD schedules layout, Doctor search design, Bilingual Punjabi/English targets
- **Recommended companion skills:** [accessibility-auditor](file:///e:/Code/models/AgentWorkload/agentSkill/agents/accessibility-auditor/SKILL.md), [backend-admin-preserver](file:///e:/Code/models/AgentWorkload/agentSkill/agents/backend-admin-preserver/SKILL.md), [designer-mobile](file:///e:/Code/models/AgentWorkload/agentSkill/agents/designer-mobile/SKILL.md)

### [Portfolio UX Design (agents/portfolio-ux/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/portfolio-ux/SKILL.md)

- **Purpose:** Optimizes portfolios for positioning, work credibility, scanning, and contact conversion.
- **When to use:** A portfolio looks artistic but unclear, Projects repeat, Recruiters cannot identify the role
- **Primary inputs:** Personal bio, Selected works data, Outcomes and case studies, Contact details
- **Main outputs:** Positioning statements, Selected project grids, About page structure, Scannable credentials log
- **Recommended companion skills:** [design-me](file:///e:/Code/models/AgentWorkload/agentSkill/agents/design-me/SKILL.md), [motion-architect](file:///e:/Code/models/AgentWorkload/agentSkill/agents/motion-architect/SKILL.md), [route-transition-designer](file:///e:/Code/models/AgentWorkload/agentSkill/agents/route-transition-designer/SKILL.md)

## Quality and Delivery

### [Accessibility Auditing (agents/accessibility-auditor/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/accessibility-auditor/SKILL.md)

- **Purpose:** Audits keyboard, focus, semantics, contrast, motion, touch, and assistive-technology behavior.
- **When to use:** Before every production release, For hospital websites, After adding drawers, menus, or modals
- **Primary inputs:** Web page routes, Components list, Color codes, Tab index layouts
- **Main outputs:** Keyboard tab matrix, Color contrast overrides, Focus trap code fixes, Reduced motion stylesheet
- **Recommended companion skills:** [interaction-qa-agent](file:///e:/Code/models/AgentWorkload/agentSkill/agents/interaction-qa-agent/SKILL.md), [healthcare-ux](file:///e:/Code/models/AgentWorkload/agentSkill/agents/healthcare-ux/SKILL.md), [deployment-verifier](file:///e:/Code/models/AgentWorkload/agentSkill/agents/deployment-verifier/SKILL.md)

### [Asset Optimization (agents/asset-optimizer/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/asset-optimizer/SKILL.md)

- **Purpose:** Optimizes images, video, fonts, and visual assets for responsive delivery.
- **When to use:** Project images are oversized, Portraits download at desktop sizes on phones, SVG logos are noisy
- **Primary inputs:** Asset folder, Image files, Font files, SVG vector files
- **Main outputs:** Compressed WebP/AVIF files, WOFF2 sub-setted fonts, Optimized clean SVGs, Responsive size set definitions
- **Recommended companion skills:** [media-fit-specialist](file:///e:/Code/models/AgentWorkload/agentSkill/agents/media-fit-specialist/SKILL.md), [performance-optimizer](file:///e:/Code/models/AgentWorkload/agentSkill/agents/performance-optimizer/SKILL.md)

### [Deployment Verification (agents/deployment-verifier/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/deployment-verifier/SKILL.md)

- **Purpose:** Verifies Git branch, production deployment, domain alias, logs, cache, and live-site behavior.
- **When to use:** Live and local differ, Vercel preview and production differ, Build succeeded but behavior is wrong
- **Primary inputs:** Production domain, Expected commit ID, Git branch, Vercel preview link
- **Main outputs:** Build and runtime logs audit, Production status report, Alias configuration check, Cache status check
- **Recommended companion skills:** [accessibility-auditor](file:///e:/Code/models/AgentWorkload/agentSkill/agents/accessibility-auditor/SKILL.md), [interaction-qa-agent](file:///e:/Code/models/AgentWorkload/agentSkill/agents/interaction-qa-agent/SKILL.md), [visual-qa-agent](file:///e:/Code/models/AgentWorkload/agentSkill/agents/visual-qa-agent/SKILL.md)

### [Interaction QA Auditing (agents/interaction-qa-agent/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/interaction-qa-agent/SKILL.md)

- **Purpose:** Tests clicks, taps, keyboard actions, scrolling, drawers, modals, routes, and external links.
- **When to use:** After navigation changes, Route transitions, Bottom nav updates, Forms and lightboxes
- **Primary inputs:** Nav link paths, Interactions list, Keyboard flow targets
- **Main outputs:** Interaction matrix results, Browser back/forward report, Console logs audit
- **Recommended companion skills:** [accessibility-auditor](file:///e:/Code/models/AgentWorkload/agentSkill/agents/accessibility-auditor/SKILL.md), [deployment-verifier](file:///e:/Code/models/AgentWorkload/agentSkill/agents/deployment-verifier/SKILL.md)

### [Performance Optimization (agents/performance-optimizer/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/performance-optimizer/SKILL.md)

- **Purpose:** Improves loading, rendering, animation, and mobile runtime performance without degrading design.
- **When to use:** Scroll stutters, Mobile feels delayed, Images are heavy, WebGL or blur operations are expensive
- **Primary inputs:** Performance baseline metrics, Animation loops, Bundle asset sizes, Mobile target test devices
- **Main outputs:** RAF loop cleanups, Filters and blur optimizations, Loading strategy, Before/after performance comparisons
- **Recommended companion skills:** [asset-optimizer](file:///e:/Code/models/AgentWorkload/agentSkill/agents/asset-optimizer/SKILL.md), [scroll-systems-engineer](file:///e:/Code/models/AgentWorkload/agentSkill/agents/scroll-systems-engineer/SKILL.md), [deployment-verifier](file:///e:/Code/models/AgentWorkload/agentSkill/agents/deployment-verifier/SKILL.md)

### [SEO & Local Search (agents/seo-local-search/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/seo-local-search/SKILL.md)

- **Purpose:** Improves technical SEO, local search, metadata, schema, and social previews.
- **When to use:** Before production, For hospitals and local businesses, Favicon or OG images are missing
- **Primary inputs:** Business location, Services list, Contact numbers, Public routes
- **Main outputs:** Schema markup files, Sitemap configuration, Robots.txt config, Route-specific meta tags
- **Recommended companion skills:** [automotive-ux](file:///e:/Code/models/AgentWorkload/agentSkill/agents/automotive-ux/SKILL.md), [healthcare-ux](file:///e:/Code/models/AgentWorkload/agentSkill/agents/healthcare-ux/SKILL.md), [deployment-verifier](file:///e:/Code/models/AgentWorkload/agentSkill/agents/deployment-verifier/SKILL.md)

### [Visual QA Auditing (agents/visual-qa-agent/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/visual-qa-agent/SKILL.md)

- **Purpose:** Performs screenshot-based visual regression testing across routes, breakpoints, and animation states.
- **When to use:** After any redesign, Mobile changes, Typography changes, Scroll animation updates
- **Primary inputs:** Target breakpoints, Scroll states to capture, Baseline references
- **Main outputs:** Viewport screenshot matrix, Layout regression report, State comparison charts
- **Recommended companion skills:** [designer-mobile](file:///e:/Code/models/AgentWorkload/agentSkill/agents/designer-mobile/SKILL.md), [motion-architect](file:///e:/Code/models/AgentWorkload/agentSkill/agents/motion-architect/SKILL.md), [scroll-systems-engineer](file:///e:/Code/models/AgentWorkload/agentSkill/agents/scroll-systems-engineer/SKILL.md)

