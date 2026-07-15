import fs from 'fs';
import path from 'path';
import MarkdownIt from 'markdown-it';

const rootDir = process.cwd();
const agentsDir = path.join(rootDir, 'agents');
const workflowsDir = path.join(rootDir, 'workflows');
const examplesDir = path.join(rootDir, 'examples');
const docsDir = path.join(rootDir, 'docs');
const docsDataDir = path.join(docsDir, 'data');
const docsSkillsDir = path.join(docsDir, 'skills');

// Ensure directories exist
if (!fs.existsSync(docsDataDir)) {
  fs.mkdirSync(docsDataDir, { recursive: true });
}
if (!fs.existsSync(docsSkillsDir)) {
  fs.mkdirSync(docsSkillsDir, { recursive: true });
}

console.log('Generating docs data files...');

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: false
});

// Helper to make external links secure
function makeExternalLinksSecure(html) {
  return html.replace(/<a\s+href="([^"]+)"/g, (match, url) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer"`;
    }
    return match;
  });
}

// Helper to strip the main '# Title' heading from markdown content
function stripMainHeading(markdown) {
  const lines = markdown.split('\n');
  const index = lines.findIndex(line => line.trim().startsWith('# '));
  if (index !== -1) {
    lines.splice(index, 1);
  }
  return lines.join('\n');
}

// Helper to parse markdown section headers manually
function parseSkillMdHeaders(content) {
  const sections = {};
  const lines = content.split('\n');
  let currentHeader = '';
  let currentText = [];

  for (let line of lines) {
    line = line.trim();
    if (line.startsWith('## ')) {
      if (currentHeader) {
        sections[currentHeader] = currentText.join('\n').trim();
      }
      currentHeader = line.substring(3).trim().toLowerCase();
      currentText = [];
    } else if (line.startsWith('# ')) {
      // Ignore main title
    } else {
      if (currentHeader) {
        currentText.push(line);
      }
    }
  }
  if (currentHeader) {
    sections[currentHeader] = currentText.join('\n').trim();
  }
  return sections;
}

// 1. Build skills database
const skills = [];
if (fs.existsSync(agentsDir)) {
  const folders = fs.readdirSync(agentsDir).filter(f => fs.statSync(path.join(agentsDir, f)).isDirectory());
  
  // Deterministic sorting by name
  folders.sort();

  for (const folder of folders) {
    const folderPath = path.join(agentsDir, folder);
    const metadataPath = path.join(folderPath, 'metadata.json');
    const skillMdPath = path.join(folderPath, 'SKILL.md');
    const examplesPath = path.join(folderPath, 'examples.md');

    if (fs.existsSync(metadataPath) && fs.existsSync(skillMdPath)) {
      try {
        const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
        const skillMdContent = fs.readFileSync(skillMdPath, 'utf8');
        const parsedMdHeaders = parseSkillMdHeaders(skillMdContent);

        let examplesContent = '';
        if (fs.existsSync(examplesPath)) {
          examplesContent = fs.readFileSync(examplesPath, 'utf8');
        }

        skills.push({
          ...metadata,
          markdownSections: parsedMdHeaders,
          examplesMarkdown: examplesContent
        });

        // Parse markdown to HTML
        // Strip frontmatter from SKILL.md
        let cleanSkillMd = skillMdContent;
        if (skillMdContent.startsWith('---')) {
          const secondDashIdx = skillMdContent.indexOf('---', 3);
          if (secondDashIdx !== -1) {
            cleanSkillMd = skillMdContent.substring(secondDashIdx + 3).trim();
          }
        }

        // Strip the main "# Title" heading from markdown to enforce single <h1> per page SEO rule
        cleanSkillMd = stripMainHeading(cleanSkillMd);
        const cleanExamplesContent = stripMainHeading(examplesContent);

        let skillHtml = makeExternalLinksSecure(md.render(cleanSkillMd));
        let examplesHtml = makeExternalLinksSecure(md.render(cleanExamplesContent));

        // Generate docs/skills/<skill-name>/index.html
        const skillHtmlPath = path.join(docsSkillsDir, folder);
        if (!fs.existsSync(skillHtmlPath)) {
          fs.mkdirSync(skillHtmlPath, { recursive: true });
        }

        const skillPageContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${metadata.title} — Website Agent Skills</title>
  <link rel="stylesheet" href="../../assets/css/styles.css">
</head>
<body style="background-color: #f3f0e8; color: #11110f; font-family: Inter, Arial, Helvetica, sans-serif; padding: 2rem 0;">
  <main class="container" role="main">
    <div style="margin-bottom: 2rem; border-bottom: 1px solid rgba(17, 17, 15, 0.14); padding-bottom: 1rem;">
      <a href="../../index.html#skill/${metadata.name}" id="back-link" style="color: #78172f; font-weight: 700; text-decoration: underline;">&larr; Back to skill explorer</a>
    </div>
    
    <article>
      <header>
        <span style="font-size: 0.8rem; text-transform: uppercase; color: #78172f; font-weight: 700;" id="skill-name">agents/${metadata.name}</span>
        <h1 style="font-size: 2.5rem; margin-top: 0.5rem; margin-bottom: 1rem;">${metadata.title}</h1>
        <p style="font-size: 1.1rem; color: #66635d; margin-bottom: 2rem;" id="skill-description">${metadata.description}</p>
      </header>

      <section class="skill-markdown" style="margin-bottom: 3rem;">
        ${skillHtml}
      </section>

      <section class="skill-examples" id="examples-section" style="border-top: 1px solid rgba(17, 17, 15, 0.14); padding-top: 2rem; margin-bottom: 3rem;">
        <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem;">Examples</h2>
        ${examplesHtml}
      </section>
    </article>
  </main>
</body>
</html>
`;

        fs.writeFileSync(path.join(skillHtmlPath, 'index.html'), skillPageContent, 'utf8');

      } catch (err) {
        console.error(`Error parsing skill ${folder}:`, err);
        process.exit(1);
      }
    }
  }
}

// Sort skills deterministically by name
skills.sort((a, b) => a.name.localeCompare(b.name));

fs.writeFileSync(path.join(docsDataDir, 'skills.json'), JSON.stringify(skills, null, 2), 'utf8');
console.log(`Generated docs/data/skills.json with ${skills.length} skills`);

// 2. Build workflows database
let workflows = {};
const workflowIndexPatch = path.join(workflowsDir, 'workflow-index.json');
if (fs.existsSync(workflowIndexPatch)) {
  try {
    const rawWorkflows = JSON.parse(fs.readFileSync(workflowIndexPatch, 'utf8'));
    
    // Sort workflows consistently by key name
    const sortedKeys = Object.keys(rawWorkflows).sort();
    for (const key of sortedKeys) {
      workflows[key] = rawWorkflows[key];
      const mdFile = `${key}.md`;
      const mdPath = path.join(workflowsDir, mdFile);
      if (fs.existsSync(mdPath)) {
        workflows[key].markdown = fs.readFileSync(mdPath, 'utf8');
      } else {
        workflows[key].markdown = '';
      }
    }
  } catch (err) {
    console.error('Error parsing workflows index:', err);
    process.exit(1);
  }
}
fs.writeFileSync(path.join(docsDataDir, 'workflows.json'), JSON.stringify(workflows, null, 2), 'utf8');
console.log(`Generated docs/data/workflows.json with ${Object.keys(workflows).length} workflows`);

// 3. Build examples database
const examples = [];
if (fs.existsSync(examplesDir)) {
  const folders = fs.readdirSync(examplesDir).filter(f => fs.statSync(path.join(examplesDir, f)).isDirectory());
  
  // Sort examples deterministically
  folders.sort();

  for (const folder of folders) {
    const folderPath = path.join(examplesDir, folder);
    const readmePath = path.join(folderPath, 'README.md');
    const planPath = path.join(folderPath, 'agent-plan.md');
    const promptsPath = path.join(folderPath, 'sample-prompts.md');

    let readme = '';
    let plan = '';
    let prompts = '';

    if (fs.existsSync(readmePath)) readme = fs.readFileSync(readmePath, 'utf8');
    if (fs.existsSync(planPath)) plan = fs.readFileSync(planPath, 'utf8');
    if (fs.existsSync(promptsPath)) prompts = fs.readFileSync(promptsPath, 'utf8');

    examples.push({
      id: folder,
      title: folder.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      readme,
      plan,
      prompts
    });
  }
}
fs.writeFileSync(path.join(docsDataDir, 'examples.json'), JSON.stringify(examples, null, 2), 'utf8');
console.log(`Generated docs/data/examples.json with ${examples.length} examples`);

// 4. Build generated-data.js for offline file:// support
const websiteAgentData = {
  skills: skills,
  workflows: workflows,
  examples: examples
};

// Safe JSON serialization
const serializedData = JSON.stringify(websiteAgentData, null, 2)
  .replace(/\u2028/g, '\\u2028')
  .replace(/\u2029/g, '\\u2029');

const generatedDataJsContent = `window.WEBSITE_AGENT_DATA = ${serializedData};
`;

const jsDir = path.join(docsDir, 'assets', 'js');
if (!fs.existsSync(jsDir)) {
  fs.mkdirSync(jsDir, { recursive: true });
}
fs.writeFileSync(path.join(jsDir, 'generated-data.js'), generatedDataJsContent, 'utf8');
console.log('Generated docs/assets/js/generated-data.js successfully.');

// 5. Post-build Validation of Deployed HTML Pages
console.log('Validating generated HTML pages...');
let validationFailed = false;

for (const skill of skills) {
  const pagePath = path.join(docsSkillsDir, skill.name, 'index.html');
  if (!fs.existsSync(pagePath)) {
    console.error(`[VALIDATION ERROR] Missing generated page for ${skill.name}`);
    validationFailed = true;
    continue;
  }

  const html = fs.readFileSync(pagePath, 'utf8');

  // Checks:
  // Title
  if (!html.includes('<title>') || !html.includes('</title>')) {
    console.error(`[VALIDATION ERROR] ${skill.name} page missing <title> tag`);
    validationFailed = true;
  }
  // Heading 1
  if (!html.includes('<h1') || !html.includes('</h1>')) {
    console.error(`[VALIDATION ERROR] ${skill.name} page missing <h1> tag`);
    validationFailed = true;
  }
  // Main landmark
  if (!html.includes('<main') || !html.includes('</main>')) {
    console.error(`[VALIDATION ERROR] ${skill.name} page missing <main> landmark`);
    validationFailed = true;
  }
  // Back link
  if (!html.includes('id="back-link"') || !html.includes('&larr; Back to skill explorer')) {
    console.error(`[VALIDATION ERROR] ${skill.name} page missing Back Link`);
    validationFailed = true;
  }
  // Skill name
  if (!html.includes('id="skill-name"') || !html.includes(`agents/${skill.name}`)) {
    console.error(`[VALIDATION ERROR] ${skill.name} page missing or incorrect skill name identifier`);
    validationFailed = true;
  }
  // Description
  if (!html.includes('id="skill-description"')) {
    console.error(`[VALIDATION ERROR] ${skill.name} page missing skill description block`);
    validationFailed = true;
  }
  // Examples section
  if (!html.includes('id="examples-section"')) {
    console.error(`[VALIDATION ERROR] ${skill.name} page missing examples-section landmark`);
    validationFailed = true;
  }
  // Stylesheet reference
  if (!html.includes('href="../../assets/css/styles.css"')) {
    console.error(`[VALIDATION ERROR] ${skill.name} page missing stylesheet link`);
    validationFailed = true;
  }
}

if (validationFailed) {
  console.error('\x1b[31m[FAILURE] Output pages validation failed.\x1b[0m');
  process.exit(1);
} else {
  console.log('\x1b[32m[SUCCESS] All generated documentation pages are valid.\x1b[0m');
}

console.log('Docs data build complete.');
