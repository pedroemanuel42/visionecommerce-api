import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const port = Number(process.env.PORT) || 3000;
const pagePath = join(__dirname, '..', 'public', 'index.html');

const server = createServer(async (_request, response) => {
  try {
    const page = await readFile(pagePath);
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(page);
  } catch {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Unable to load the dashboard.');
  }
});

server.listen(port, () => {
  console.log(`Dashboard local: http://localhost:${port}`);
});