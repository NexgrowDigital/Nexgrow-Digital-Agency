/**
 * Simple static server for previewing the site locally.
 * Run: node server.js
 * Then open: http://localhost:5500/
 */
const http = require("http");
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const port = Number(process.env.PORT || 5500);
const host = "127.0.0.1";

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".eot": "application/vnd.ms-fontobject",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

function safeJoin(reqUrl) {
  // Remove querystring/hash and map "/" to "/index.html"
  let urlPath = reqUrl.split("?")[0].split("#")[0];
  if (!urlPath || urlPath === "/") urlPath = "/index.html";

  // Decode but keep it safe.
  try {
    urlPath = decodeURIComponent(urlPath);
  } catch {
    // If decoding fails, fall back to raw path.
  }

  // Prevent directory traversal.
  const normalized = path.normalize(path.join(root, urlPath));
  if (!normalized.startsWith(root)) return null;
  return normalized;
}

const server = http.createServer((req, res) => {
  const filePath = safeJoin(req.url || "/");
  if (!filePath) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": mime[ext] || "application/octet-stream" });
    res.end(data);
  });
});

server.listen(port, host, () => {
  console.log(`Preview server running at http://${host}:${port}/`);
});

