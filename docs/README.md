# Interactive Documentation Website

A fast, responsive, vanilla web interface designed to browse, search, and manage specialized agent skills, workflows, and case studies.

## How to Open Locally

Since this site is fully static and offline-capable, you can open it directly in any modern browser without needing to run a local web server:

1. Locate the file: `docs/index.html` in your file explorer.
2. Double-click it or open it with your browser of choice.

Alternatively, if you prefer running a local development server, you can run:
```bash
# Example using python
python -m http.server 8000
```
Then navigate to `http://localhost:8000/docs/index.html`.

## How to Regenerate Data

When skills, metadata, workflows, or examples are added or updated in the repository, you can rebuild the JSON database files that feed this website:

```bash
# Install dependencies (none required, runs on standard Node.js)
npm install

# Run the data aggregator script
npm run build:docs
```

This will read active directories and rewrite:
- `docs/data/skills.json`
- `docs/data/workflows.json`
- `docs/data/examples.json`

## How to Deploy via GitHub Pages

This repository is configured with a GitHub Action that automatically deploys the documentation portal:

1. Push your changes to the `main` branch.
2. The GitHub workflow `.github/workflows/deploy-docs.yml` triggers automatically.
3. It bundles the `docs/` folder and deploys it to your repository's GitHub Pages domain.

## File Structure

```text
docs/
├── index.html            # Main Single Page App structure
├── 404.html              # Custom page not found fallback
├── README.md             # This instructions file
├── assets/
│   ├── css/
│   │   └── styles.css    # Typography, color layout system, drawers, and tabs
│   └── js/
│       └── app.js        # Event listeners, state hashing, copy tasks, and DOM rendering
└── data/
    ├── skills.json       # Generated metadata database
    ├── workflows.json    # Generated multi-agent sequences
    └── examples.json     # Generated case study summaries
```

## Accessibility Notes

The site conforms to modern accessibility guidelines:
- **Landmarks:** Screen readers can navigate via semantic landmarks (header, nav, main, footer).
- **Tab Focus:** Visible focus rings are styled on active interactive items.
- **Escape Close:** Drawers and mobile menus close when pressing `Escape`.
- **Focus Trap:** Drawer dialog locks tabs inside the panel while open, restoring focus to the triggering element upon close.
- **Reduced Motion:** Layout shifts, drawers, and nav transitions respect `prefers-reduced-motion` media queries.

## Browser Support

- Chrome / Chromium
- Safari (iOS / macOS)
- Firefox
- Microsoft Edge

No polyfills or external assets are required.

## How to Add a Workflow

1. Open `workflows/workflow-index.json`.
2. Add a new key for your workflow matching this structure:
   ```json
   "custom-workflow": {
     "name": "Custom Workflow Name",
     "description": "Short description of the workflow goals.",
     "steps": [
       "codebase-recon",
       "designer-mobile",
       "visual-qa-agent"
     ]
   }
   ```
3. Create a corresponding instruction guide in `workflows/custom-workflow.md`.
4. Run `npm run build:docs` to regenerate data files.

## How to Add a Project Example

1. Create a folder in `examples/` named after the project: `examples/custom-project/`.
2. Inside that folder, write:
   - `README.md` (project overview and risks)
   - `agent-plan.md` (sequence step mappings)
   - `sample-prompts.md` (specific request triggers)
3. Update `manifest.json` under `examples` with `"custom-project"`.
4. Run `npm run build:docs` to update data files.
