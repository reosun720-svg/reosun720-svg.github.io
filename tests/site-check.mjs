import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (path) => readFile(resolve(root, path), 'utf8');

const html = await read('index.html');
const css = await read('styles.css');
const appAds = await read('app-ads.txt');
const robots = await read('robots.txt');
const logo = await stat(resolve(root, 'assets/vavav-logo.png'));

assert.match(html, /<html lang="ko">/);
assert.match(html, /<header[\s>]/);
assert.match(html, /<main[\s>]/);
assert.match(html, /<footer[\s>]/);
assert.match(html, /assets\/vavav-logo\.png/);
assert.match(html, /alt="VAVAV GAME"/);
assert.match(html, /PUZZLOA/);
assert.match(html, /mailto:ov0vavav0vo@gmail\.com/);
assert.match(html, /https:\/\/reosun720-svg\.github\.io\/puzzloa-privacy\/#en/);
assert.doesNotMatch(html, /<script[\s>]/i);
assert.doesNotMatch(html, /https:\/\/fonts\./i);
assert.match(css, /background:\s*#000/);
assert.match(css, /color:\s*#fff/);
assert.doesNotMatch(css, /url\(\s*['"]?https?:/i);
assert.equal(appAds, 'google.com, pub-6869726958424570, DIRECT, f08c47fec0942fa0\n');
assert.match(robots, /User-agent:\s*\*/);
assert.match(robots, /Allow:\s*\//);
assert.ok(logo.size > 0, 'logo must not be empty');

console.log('VAVAV site contract checks passed.');
