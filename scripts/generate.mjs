import fs from 'node:fs';
import path from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const contentDir = path.join(root, 'src/content/articles');
const feedFile = path.join(root, 'public/data/items.json');

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }
function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function titleCase(s) { return s.replace(/\b\w/g, (m) => m.toUpperCase()); }
function randomNum(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

const nouns = ['beef','fruit','mango','steak','tomato','avocado','kiwi','grapefruit','pear','noodle','salad','pudding','banana','watermelon','lasagna','smoothie'];
const vibes = ['chaotic','forbidden','neon','mystic','turbo','quantum','noisy','shiny','sleepy','haunted','glitchy','cursed','blessed','unhinged','feral','zesty'];

const titleTemplates = [
  () => `${randomNum(5,27)} ${titleCase(rand(nouns))}s That ${rand(['Broke The Internet','Went Too Far','Should Not Exist','Changed Everything','Made Scientists Cry'])}`,
  () => `You Won't BELIEVE What This ${titleCase(rand(nouns))} Did (${rand(['SHOCKING','GONE WRONG','3AM CHALLENGE','EMOTIONAL','NOT CLICKBAIT'])})`,
  () => `The ${titleCase(rand(vibes))} Truth About ${titleCase(rand(nouns))}s That Big ${rand(['Fruit','Beef','Grocery','Food'])} Does Not Want You To Know`,
  () => `I Ate Nothing But ${titleCase(rand(nouns))}s For ${randomNum(3,30)} Days And ${rand(['Transcended Reality','Became Immortal','Saw God','Lost My Mind','Gained Superpowers'])}`,
  () => `${titleCase(rand(nouns))} Tier List (${new Date().getFullYear()} DEFINITIVE EDITION) [CONTROVERSIAL]`,
  () => `Breaking: ${titleCase(rand(nouns))}s Are ${rand(['Sentient','Planning Something','Not Real','Actually Aliens','Watching You'])}`,
  () => `${randomNum(1,99)}% of People Can't Tell The Difference Between ${titleCase(rand(nouns))} and ${titleCase(rand(nouns))}`,
  () => `This One ${titleCase(rand(vibes))} ${titleCase(rand(nouns))} Trick Will ${rand(['Change Your Life','Blow Your Mind','Make You Rich','Solve Everything','Break Reality'])}`,
  () => `${titleCase(rand(nouns))} vs ${titleCase(rand(nouns))}: The ${rand(['Ultimate','Final','Definitive','Controversial','Forbidden'])} Showdown`,
  () => `We Need To Talk About The ${titleCase(rand(nouns))} Problem`,
  () => `${titleCase(rand(nouns))} Conspiracy Theories That ${rand(['Might Be True','Are 100% Real','Will Haunt You','Explain Everything','Changed My Life'])}`,
  () => `Rating ${titleCase(rand(nouns))}s Based On Their ${rand(['Vibes','Energy','Chaos Level','Beef Content','Spiritual Alignment'])}`,
  () => `I Let AI Control My ${titleCase(rand(nouns))} Choices For A Week (MISTAKE)`,
  () => `The ${titleCase(rand(vibes))} ${titleCase(rand(nouns))} Iceberg Explained`,
  () => `Why ${titleCase(rand(nouns))}s Are ${rand(['Overrated','Underrated','Cancelled','Making A Comeback','The Future'])} (Hot Take)`,
];

const bodyTemplates = [
  (n1, n2, v) => `URGENT UPDATE: Scientists at the Institute of ${titleCase(v)} Studies have made a shocking discovery about ${n1}s.\n\n"We never expected this," said lead researcher Dr. ${rand(['Smith','Johnson','Williams','Chen','Martinez'])}, visibly shaken. "The implications for ${n2} theory are staggering."\n\nHere's what we know so far:\n- ${titleCase(n1)}s exhibit ${v} behavior when exposed to ${n2}s\n- ${randomNum(70,99)}% of test subjects couldn't tell the difference\n- Big ${titleCase(rand(['Fruit','Beef','Grocery']))} has been hiding this for ${randomNum(10,50)} years\n\nMore updates as this story develops. Stay ${v}.`,
  (n1, n2, v) => `Listen, I need to tell you something about ${n1}s that might change everything.\n\nLast Tuesday at ${randomNum(2,4)}:${randomNum(10,59)}am, I witnessed something ${v}. A ${n1} and a ${n2} were having what I can only describe as a "moment."\n\nThe ${n1}:\n• Was definitely ${v}\n• Knew things it shouldn't know\n• Made direct eye contact\n• Whispered ancient secrets\n\nThe ${n2}:\n• Just sat there\n• Being a ${n2}\n• Pretending nothing happened\n• Gaslighting me probably\n\nI haven't slept since. The ${n1}s know I know. Send help.`,
  (n1, n2, v) => `🚨 LEAKED DOCUMENT REVEALS ${n1.toUpperCase()} TRUTH 🚨\n\nAnonymous sources have provided us with classified ${v} documents that prove:\n\n1. ${titleCase(n1)}s have been ${rand(['sentient','organizing','communicating','evolving'])} since ${randomNum(1970,2020)}\n2. The government has ${randomNum(3,27)} secret ${n1} facilities\n3. ${titleCase(n2)}s are involved somehow (details unclear)\n4. Everything you know is wrong\n\n"This goes all the way to the top," our source claims. "The ${v} ${n1} lobby is more powerful than you think."\n\n[REDACTED]\n[REDACTED]\n[REDACTED]\n\nWake up, people. The ${n1}s are not what they seem.`,
  (n1, n2, v) => `Recipe: ${titleCase(v)} ${titleCase(n1)} Surprise\n\nYou'll need:\n- ${randomNum(3,17)} ${n1}s (the more ${v}, the better)\n- 1 ${n2} (optional but recommended)\n- Your darkest secrets\n- ${randomNum(2,8)} cups of existential dread\n- Salt (to taste)\n\nInstructions:\n1. Contemplate the ${v} nature of ${n1}s for ${randomNum(10,45)} minutes\n2. Whisper apologies to the ${n2}\n3. Combine everything in a state of ${v} panic\n4. Bake at ${randomNum(300,500)}°F until reality breaks\n5. Serve immediately or never\n\nServes: ${randomNum(1,12)} confused people\nPrep time: 3 seconds to 47 years\n\nChef's note: I am not responsible for what happens next.`,
];

function makeArticle() {
  const n1 = rand(nouns), n2 = rand(nouns);
  const v = rand(vibes);
  const title = rand(titleTemplates)();
  const viewCount = randomNum(100, 9999999);
  const description = `${viewCount.toLocaleString()} views • ${randomNum(50,99)}% can't handle this • Sponsored by ${v} energy`;
  const date = new Date().toISOString().slice(0,10);
  const slug = `${date}-${title.substring(0,50).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}`;
  const body = rand(bodyTemplates)(n1, n2, v);
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
  arr.unshift({ title: a.title, blurb: a.description, emoji: '✨', url: `/articles/${a.slug}` });
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

