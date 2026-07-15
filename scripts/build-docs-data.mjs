import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const agentsDir = path.join(rootDir, 'agents');
const workflowsDir = path.join(rootDir, 'workflows');
const examplesDir = path.join(rootDir, 'examples');
const docsDir = path.join(rootDir, 'docs');
const indexPath = path.join(docsDir, 'index.html');

console.log('Building Cybernetic Portal database...');

// 1. Build skills database
const skills = [];
if (fs.existsSync(agentsDir)) {
  const folders = fs.readdirSync(agentsDir).filter(f => fs.statSync(path.join(agentsDir, f)).isDirectory());
  
  // Sort deterministically
  folders.sort();

  for (const folder of folders) {
    const folderPath = path.join(agentsDir, folder);
    const metadataPath = path.join(folderPath, 'metadata.json');
    const skillMdPath = path.join(folderPath, 'SKILL.md');
    const examplesPath = path.join(folderPath, 'examples.md');

    if (fs.existsSync(metadataPath) && fs.existsSync(skillMdPath)) {
      try {
        const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
        let examplesContent = '';
        if (fs.existsSync(examplesPath)) {
          examplesContent = fs.readFileSync(examplesPath, 'utf8');
        }

        skills.push({
          ...metadata,
          examplesMarkdown: examplesContent
        });
      } catch (err) {
        console.error(`Error parsing skill ${folder}:`, err);
        process.exit(1);
      }
    }
  }
}

// Sort skills deterministically by name
skills.sort((a, b) => a.name.localeCompare(b.name));

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
      const mdPath = path.join(workflowsDir, `${key}.md`);
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

// 4. Inject into docs/index.html
if (fs.existsSync(indexPath)) {
  let indexHtml = fs.readFileSync(indexPath, 'utf8');

  // Find placeholder tags
  const startTag = '// --- DATABASE_PLACEHOLDER ---';
  const endTag = '// --- DATABASE_PLACEHOLDER_END ---';

  const startIdx = indexHtml.indexOf(startTag);
  const endIdx = indexHtml.indexOf(endTag);

  if (startIdx !== -1 && endIdx !== -1) {
    // Safe serialization
    const dbPayload = {
      skills,
      workflows,
      examples
    };

    const serializedData = JSON.stringify(dbPayload, null, 2)
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029');

    const injection = `${startTag}\n    window.WEBSITE_AGENT_DATA = ${serializedData};\n    ${endTag}`;
    
    // Replace index content
    indexHtml = indexHtml.substring(0, startIdx) + injection + indexHtml.substring(endIdx + endTag.length);
    fs.writeFileSync(indexPath, indexHtml, 'utf8');
    console.log('Successfully injected database payload directly into docs/index.html.');
  } else {
    console.error('Error: Could not locate database injection placeholders in docs/index.html.');
    process.exit(1);
  }
} else {
  console.error('Error: docs/index.html does not exist.');
  process.exit(1);
}

console.log('Compile database complete.');
