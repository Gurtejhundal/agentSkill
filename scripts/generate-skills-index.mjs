import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const agentsDir = path.join(rootDir, 'agents');
const skillsIndexMdPath = path.join(rootDir, 'SKILLS_INDEX.md');

console.log('Generating SKILLS_INDEX.md...');

const categoryMapping = {
  'strategy': 'Strategy and Design',
  'responsive': 'Responsive and Typography',
  'motion': 'Motion and Interaction',
  'architecture': 'Architecture',
  'quality-delivery': 'Quality and Delivery'
};

const categoryOrder = ['strategy', 'responsive', 'motion', 'architecture', 'quality-delivery'];

try {
  if (!fs.existsSync(agentsDir)) {
    console.error('agents directory does not exist');
    process.exit(1);
  }

  const folders = fs.readdirSync(agentsDir).filter(f => fs.statSync(path.join(agentsDir, f)).isDirectory());
  const skillsByCategory = {};

  for (const folder of folders) {
    const metadataPath = path.join(agentsDir, folder, 'metadata.json');
    if (fs.existsSync(metadataPath)) {
      try {
        const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
        const cat = metadata.category || 'strategy';
        if (!skillsByCategory[cat]) {
          skillsByCategory[cat] = [];
        }
        skillsByCategory[cat].push(metadata);
      } catch (err) {
        console.error(`Error reading metadata for ${folder}:`, err.message);
      }
    }
  }

  let markdown = '# Skills Index\n\nThis index lists all specialist agent skills available in the repository, grouped by category.\n\n';

  for (const cat of categoryOrder) {
    const displayCategory = categoryMapping[cat] || cat;
    const catSkills = skillsByCategory[cat] || [];

    if (catSkills.length === 0) continue;

    markdown += `## ${displayCategory}\n\n`;

    for (const skill of catSkills) {
      markdown += `### [${skill.title} (agents/${skill.name}/SKILL.md)](file:///e:/Code/models/AgentWorkload/agentSkill/agents/${skill.name}/SKILL.md)\n\n`;
      markdown += `- **Purpose:** ${skill.description}\n`;
      markdown += `- **When to use:** ${skill.useWhen.join(', ')}\n`;
      markdown += `- **Primary inputs:** ${skill.inputs.join(', ')}\n`;
      markdown += `- **Main outputs:** ${skill.outputs.join(', ')}\n`;
      markdown += `- **Recommended companion skills:** ${skill.recommendedWith.map(s => `[${s}](file:///e:/Code/models/AgentWorkload/agentSkill/agents/${s}/SKILL.md)`).join(', ')}\n\n`;
    }
  }

  fs.writeFileSync(skillsIndexMdPath, markdown, 'utf8');
  console.log('SKILLS_INDEX.md regenerated successfully.');

} catch (err) {
  console.error('Error generating skills index:', err.message);
  process.exit(1);
}
