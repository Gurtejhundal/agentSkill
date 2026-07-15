import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const agentsDir = path.join(rootDir, 'agents');
const manifestPath = path.join(rootDir, 'manifest.json');

console.log('Starting skills validation...');

let exitCode = 0;

function error(msg) {
  console.error(`\x1b[31m[ERROR] ${msg}\x1b[0m`);
  exitCode = 1;
}

function log(msg) {
  console.log(`[INFO] ${msg}`);
}

try {
  // Read manifest.json
  if (!fs.existsSync(manifestPath)) {
    error('manifest.json does not exist');
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const manifestSkills = manifest.skills || [];

  // Read actual folders in agents/
  if (!fs.existsSync(agentsDir)) {
    error('agents directory does not exist');
    process.exit(1);
  }

  const agentDirs = fs.readdirSync(agentsDir).filter(f => {
    return fs.statSync(path.join(agentsDir, f)).isDirectory();
  });

  log(`Found ${agentDirs.length} skill folders in agents/`);

  // Check manifest skill count matches
  if (manifest.skillsCount !== agentDirs.length) {
    error(`manifest.skillsCount (${manifest.skillsCount}) does not match actual folders count (${agentDirs.length})`);
  }

  if (manifestSkills.length !== agentDirs.length) {
    error(`manifest.skills list length (${manifestSkills.length}) does not match actual folders count (${agentDirs.length})`);
  }

  const skillNames = new Set();

  for (const folder of agentDirs) {
    const folderPath = path.join(agentsDir, folder);

    // Kebab case check
    if (!/^[a-z0-9-]+$/.test(folder)) {
      error(`Skill folder name "${folder}" is not valid kebab-case`);
    }

    const skillMdPath = path.join(folderPath, 'SKILL.md');
    const metadataPath = path.join(folderPath, 'metadata.json');
    const examplesPath = path.join(folderPath, 'examples.md');

    // File existence check
    if (!fs.existsSync(skillMdPath)) {
      error(`SKILL.md missing in agents/${folder}`);
    }
    if (!fs.existsSync(metadataPath)) {
      error(`metadata.json missing in agents/${folder}`);
    }
    if (!fs.existsSync(examplesPath)) {
      error(`examples.md missing in agents/${folder}`);
    }

    if (fs.existsSync(metadataPath)) {
      try {
        const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));

        // Name mismatch check
        if (metadata.name !== folder) {
          error(`Skill name in metadata.json ("${metadata.name}") does not match directory name ("${folder}")`);
        }

        if (skillNames.has(metadata.name)) {
          error(`Duplicate skill name found: "${metadata.name}"`);
        }
        skillNames.add(metadata.name);

        // Required fields check
        const required = [
          'name', 'title', 'description', 'version', 'category', 'tags',
          'useWhen', 'avoidWhen', 'inputs', 'outputs', 'recommendedWith',
          'skillPath', 'examplesPath'
        ];

        for (const field of required) {
          if (metadata[field] === undefined) {
            error(`Missing required metadata field "${field}" in agents/${folder}/metadata.json`);
          }
        }

        // Relative path validation
        if (metadata.skillPath) {
          const absoluteSkillPath = path.resolve(folderPath, metadata.skillPath);
          if (!fs.existsSync(absoluteSkillPath)) {
            error(`skillPath "${metadata.skillPath}" in agents/${folder}/metadata.json points to non-existent file`);
          }
        }

        if (metadata.examplesPath) {
          const absoluteExamplesPath = path.resolve(folderPath, metadata.examplesPath);
          if (!fs.existsSync(absoluteExamplesPath)) {
            error(`examplesPath "${metadata.examplesPath}" in agents/${folder}/metadata.json points to non-existent file`);
          }
        }

      } catch (err) {
        error(`Failed to parse agents/${folder}/metadata.json: ${err.message}`);
      }
    }
  }

  // Cross-reference recommended skills check
  for (const folder of agentDirs) {
    const metadataPath = path.join(agentsDir, folder, 'metadata.json');
    if (fs.existsSync(metadataPath)) {
      try {
        const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
        const recommended = metadata.recommendedWith || [];
        for (const rec of recommended) {
          if (!skillNames.has(rec)) {
            error(`Skill "${folder}" recommends non-existent skill "${rec}"`);
          }
        }
      } catch (err) {
        // Handled in previous loop
      }
    }
  }

  if (exitCode === 0) {
    console.log('\x1b[32m[SUCCESS] All skills validated successfully.\x1b[0m');
  } else {
    console.error('\x1b[31m[FAILURE] Skills validation failed.\x1b[0m');
  }
  process.exit(exitCode);

} catch (err) {
  error(`Validation script error: ${err.message}`);
  process.exit(1);
}
