// Zero-dependency static server for the offline manual.
// Usage: node serve.mjs [port]   (opens http://127.0.0.1:<port>/ in your browser)

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { exec } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const START_PORT = Number(process.argv[2]) || 8080;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.htm': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  let rel;
  try {
    rel = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  } catch {
    res.writeHead(400).end();
    return;
  }
  let file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT)) {
    res.writeHead(403).end();
    return;
  }
  if (rel.endsWith('/')) file = path.join(file, 'index.html');
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) {
      res.writeHead(404, { 'content-type': 'text/plain' }).end('Not found');
      return;
    }
    const type = TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream';
    const headers = { 'content-type': type, 'content-length': st.size, 'cache-control': 'no-cache' };
    res.writeHead(200, headers);
    if (req.method === 'HEAD') return res.end();
    fs.createReadStream(file).pipe(res);
  });
});

// Ports can be busy (EADDRINUSE) or reserved by Windows (EACCES); try the next
// few, then let the OS pick any free port (0).
let port = START_PORT;
server.on('error', (e) => {
  if (e.code !== 'EADDRINUSE' && e.code !== 'EACCES') throw e;
  port = port && port < START_PORT + 20 ? port + 1 : 0;
  server.listen(port, '127.0.0.1');
});
server.once('listening', () => {
  const url = `http://127.0.0.1:${server.address().port}/`;
  console.log(`Mazda 2 service manual running at ${url}\nPress Ctrl+C to stop.`);
  if (!process.env.NO_OPEN) {
    const cmd = process.platform === 'win32' ? `start "" "${url}"` : process.platform === 'darwin' ? `open "${url}"` : `xdg-open "${url}"`;
    exec(cmd);
  }
});
server.listen(port, '127.0.0.1');
