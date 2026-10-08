// Enforces CLAUDE.md rule 6: no em dashes anywhere in the app.
// A client rule, so it is a build check rather than a convention to remember.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const EM_DASH = '—';
const ROOTS = ['app'];
const EXTENSIONS = /\.(tsx?|jsx?|css|mdx?|json|html)$/;

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const offences = [];
for (const root of ROOTS) {
  for (const file of walk(root)) {
    if (!EXTENSIONS.test(file)) continue;
    readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
      if (line.includes(EM_DASH)) offences.push(`${file}:${i + 1}  ${line.trim()}`);
    });
  }
}

if (offences.length) {
  console.error(`\nEm dashes are not allowed in this project (CLAUDE.md rule 6).`);
  console.error(`Use a comma, a colon, or a second sentence instead.\n`);
  offences.forEach((o) => console.error('  ' + o));
  console.error('');
  process.exit(1);
}
console.log('No em dashes found.');
