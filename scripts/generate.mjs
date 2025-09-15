import fs from 'node:fs';
import path from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const contentDir = path.join(root, 'src/content/articles');
const feedFile = path.join(root, 'public/data/items.json');

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }
function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function titleCase(s) { return s.replace(/\b\w/g, (m) => m.toUpperCase()); }

const nouns = ['beef','fruit','mango','steak','tomato','avocado','kiwi','grapefruit','pear','noodle','salad','pudding'];
const vibes = ['chaotic','forbidden','neon','mystic','turbo','quantum','noisy','shiny','sleepy','haunted','glitchy'];
const formats = ['guide','manifesto','list','poem','interview','theory','chart','tutorial'];

function makeArticle() {
  const n1 = rand(nouns), n2 = rand(nouns);
  const v = rand(vibes), f = rand(formats);
  const title = titleCase(`${v} ${n1} ${f}`);
  const description = titleCase(`${n2} energy in ${f} form`);
  const date = new Date().toISOString().slice(0,10);
  const slug = `${date}-${v}-${n1}-${f}`.replace(/[^a-z0-9-]/g,'-');
  const body = `Welcome to the ${v} zone. Today we contemplate ${n1} and ${n2} with reckless curiosity.\n\n- Fact: ${titleCase(n1)} respects you.\n- Fact: ${titleCase(n2)} might be soup.\n\nShare this with a friend who needs ${v} vibes.`;
  return { slug, title, description, date, body };
}

function writeArticle(a) {
  const fm = `---\ntitle: "${a.title}"\ndescription: "${a.description}"\npubDate: ${a.date}\n---\n${a.body}\n`;
  const out = path.join(contentDir, `${a.slug}.md`);
  fs.writeFileSync(out, fm, 'utf8');
}

function updateFeed(a) {
  let arr = [];
  try { arr = JSON.parse(fs.readFileSync(feedFile, 'utf8')); } catch {}
  arr.unshift({ title: a.title, blurb: a.description, emoji: '✨' });
  fs.writeFileSync(feedFile, JSON.stringify(arr.slice(0, 300), null, 2));
}

ensureDir(contentDir);
const count = Number(process.env.BF_GENERATE_COUNT || 5);
for (let i=0;i<count;i++) {
  const a = makeArticle();
  writeArticle(a);
  updateFeed(a);
}

console.log(`Generated ${count} article(s).`);

