import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
console.log('Checking internal links...');

let errorsCount = 0;

function checkFileExists(targetPath, referrer) {
  // Skip placeholders in templates
  if (targetPath.includes('...') || targetPath.includes('<') || targetPath.includes('>')) {
    return;
  }

  // If it's a file:/// link, parse it
  let absolutePath = '';
  if (targetPath.startsWith('file:///')) {
    let cleanPath = targetPath.replace('file:///', '');
    // Handle windows path e.g. e:/Code/... -> e:\Code\...
    if (process.platform === 'win32') {
      cleanPath = cleanPath.replace(/\//g, '\\');
    } else {
      cleanPath = '/' + cleanPath;
    }
    absolutePath = cleanPath.split('#')[0]; // Remove hash fragment
  } else if (targetPath.startsWith('http://') || targetPath.startsWith('https://') || targetPath.startsWith('mailto:') || targetPath.startsWith('javascript:')) {
    // Skip remote URLs or email links for local check
    return;
  } else {
    // Relative path
    absolutePath = path.resolve(path.dirname(referrer), targetPath).split('#')[0];
  }

  // Remove trailing slashes if any
  if (absolutePath.endsWith('/') || absolutePath.endsWith('\\')) {
    absolutePath = absolutePath.slice(0, -1);
  }

  // Check if file or directory exists
  if (!fs.existsSync(absolutePath)) {
    console.error(`\x1b[31m[LINK ERROR] Broken link in "${path.relative(rootDir, referrer)}": "${targetPath}" resolves to non-existent "${path.relative(rootDir, absolutePath)}"\x1b[0m`);
    errorsCount++;
  }
}

function processMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Regex to find standard Markdown links: [text](link)
  const mdLinkRegex = /\[([^\]]*?)\]\(([^)]+?)\)/g;
  let match;
  while ((match = mdLinkRegex.exec(content)) !== null) {
    const link = match[2].trim();
    checkFileExists(link, filePath);
  }
}

function processHtmlFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Regex to find href links: href="link" or href='link'
  const htmlLinkRegex = /href=["']([^"']+)["']/g;
  let match;
  while ((match = htmlLinkRegex.exec(content)) !== null) {
    const link = match[1].trim();
    checkFileExists(link, filePath);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip node_modules or .git directories
      if (file !== 'node_modules' && file !== '.git') {
        walkDir(fullPath);
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (ext === '.md') {
        processMarkdownFile(fullPath);
      } else if (ext === '.html') {
        processHtmlFile(fullPath);
      }
    }
  }
}

try {
  walkDir(rootDir);
  if (errorsCount === 0) {
    console.log('\x1b[32m[SUCCESS] No broken links found.\x1b[0m');
    process.exit(0);
  } else {
    console.error(`\x1b[31m[FAILURE] Link check failed with ${errorsCount} errors.\x1b[0m`);
    process.exit(1);
  }
} catch (err) {
  console.error('Link checker encountered an error:', err.message);
  process.exit(1);
}
