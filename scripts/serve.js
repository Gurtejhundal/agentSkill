import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 4173;
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const rootDocsDir = path.resolve('docs');

const server = http.createServer((req, res) => {
  const reqUrl = req.url.split('?')[0]; // strip query parameters
  let cleanUrl = reqUrl;

  // Handle simulated GitHub Pages subpath
  if (reqUrl.startsWith('/website-agent-skills-repo/')) {
    cleanUrl = reqUrl.replace('/website-agent-skills-repo/', '/');
  }

  // Handle default index page redirection
  if (cleanUrl === '/' || cleanUrl === '') {
    cleanUrl = '/index.html';
  }

  // Construct absolute file path
  let targetPath = path.join(rootDocsDir, cleanUrl);

  // Path Traversal Mitigation: Ensure targetPath resolves inside rootDocsDir
  if (!targetPath.startsWith(rootDocsDir)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden: Path traversal detected.', 'utf-8');
    return;
  }

  // Handle directory requests or files
  if (fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory()) {
    targetPath = path.join(targetPath, 'index.html');
  }

  const ext = path.extname(targetPath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(targetPath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Safe 404 page serving
        const errorPagePath = path.join(rootDocsDir, '404.html');
        if (fs.existsSync(errorPagePath)) {
          fs.readFile(errorPagePath, (err404, content404) => {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(content404 || '404 Page Not Found', 'utf-8');
          });
        } else {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found', 'utf-8');
        }
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Server Error: ' + err.code, 'utf-8');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Verification static server running at http://127.0.0.1:${PORT}/`);
  console.log(`Simulated subpath endpoint active at http://127.0.0.1:${PORT}/website-agent-skills-repo/`);
});
