/* empty css                                     */
import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, F as Fragment, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_B7ZAgkEg.mjs';
import 'kleur/colors';
import { $ as $$Base, a as $$Header, b as $$Footer } from '../../chunks/Footer_DpWRY6f1.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://beeffruit.com");
async function getStaticPaths() {
  return [];
}
const prerender = false;
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  slug?.split("-") || [];
  const dateMatch = slug?.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);
  let articleDate = /* @__PURE__ */ new Date();
  let titleSlug = slug || "mysterious-beef-fruit-content";
  if (dateMatch) {
    articleDate = /* @__PURE__ */ new Date(`${dateMatch[1]}-${dateMatch[2]}-${dateMatch[3]}`);
    titleSlug = dateMatch[4];
  }
  function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return Math.abs(hash);
  }
  const seed = hashCode(titleSlug);
  const random = (max) => seed % max;
  const randomFrom = (arr) => arr[seed % arr.length];
  const subjects = ["Beef", "Steak", "Fruit", "Watermelon", "Mango", "Apple", "Banana", "Orange", "Ribeye", "Sirloin", "Avocado", "Tomato", "Grapefruit", "Kiwi", "Pineapple"];
  const actions = ["Reveals Secret Powers", "Destroys Everything", "Changes Reality", "Breaks the Internet", "Shocks Scientists", "Causes Chaos", "Saves Humanity", "Predicts Future", "Controls Minds", "Starts Revolution"];
  const adjectives = ["Shocking", "Unbelievable", "Secret", "Forbidden", "Viral", "Cursed", "Blessed", "Quantum", "Sentient", "Aggressive"];
  const titleWords = titleSlug.split("-").map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ");
  const isListicle = /^\d+/.test(titleWords);
  const listCount = isListicle ? parseInt(titleWords.match(/^\d+/)?.[0] || "7") : 0;
  const viralDate = /* @__PURE__ */ new Date("2025-08-27");
  const isPostViral = articleDate >= viralDate;
  Math.floor((Date.now() - viralDate.getTime()) / (1e3 * 60 * 60 * 24));
  let views = random(1e4) + 1e3;
  if (isPostViral) {
    views = random(2e6) + 5e4;
  }
  if (titleSlug.includes("secretly-meat") || titleSlug.includes("viral")) {
    views = random(1e7) + 5e6;
  }
  const comments = Math.floor(views * 2e-3 + random(100));
  const shares = Math.floor(views * 0.05);
  const authors = ["Chad Grindmore", "Tyler Chen", "Kayleigh Martinez", "Brad Thundermeat", "Jessica Fruitwhisper", "Mike Steakman"];
  const author = randomFrom(authors);
  const emoji = randomFrom(["\u{1F969}", "\u{1F349}", "\u{1F92F}", "\u{1F631}", "\u{1F525}", "\u{1F4A5}", "\u26A1", "\u{1F3AF}", "\u{1F440}", "\u{1F9E0}"]);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `${titleWords} | BeefFruit`, "description": "You won't believe what happened next. The truth will shock you." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<article class="max-w-4xl mx-auto px-4 py-8"> <!-- Article Header --> <div class="mb-8"> <div class="flex items-center gap-2 text-sm text-gray-600 mb-2"> <span class="bg-red-100 text-red-700 px-2 py-1 font-bold uppercase"> ${isPostViral ? "Viral" : "Trending"} </span> <span>•</span> <time>${articleDate.toLocaleDateString()}</time> <span>•</span> <span>By ${author}</span> </div> <h1 class="text-4xl md:text-5xl font-black mb-4"> <span class="text-6xl mr-2">${emoji}</span> ${titleWords} </h1> <p class="text-xl text-gray-600 mb-4"> ${randomFrom([
    "What we discovered will change everything you thought you knew.",
    "Scientists hate this one weird truth about produce.",
    "The investigation that broke the internet.",
    "Exclusive: The story they don't want you to read.",
    "Warning: This article contains disturbing truths."
  ])} </p> <div class="flex gap-4 text-sm"> <span class="font-bold">${views.toLocaleString()} views</span> <span>${comments.toLocaleString()} comments</span> <span>${shares.toLocaleString()} shares</span> </div> </div> <!-- Article Content --> <div class="prose prose-lg max-w-none"> <p class="text-2xl font-bold text-gray-700">
After months of investigation, we can finally reveal the ${randomFrom(adjectives).toLowerCase()} truth about ${randomFrom(subjects).toLowerCase()}.
</p> ${isListicle ? renderTemplate`<div> <h2>The Definitive List</h2> <p>Our team spent countless hours researching these ${listCount} items. What we found will shock you.</p> ${Array.from({ length: Math.min(listCount, 10) }, (_, i) => renderTemplate`<div class="my-6 p-4 bg-gray-50 border-l-4 border-yellow-400"> <h3 class="text-xl font-bold"> ${i + 1}. ${randomFrom(subjects)} ${randomFrom(actions)} </h3> <p>
Scientists have confirmed that ${randomFrom(subjects).toLowerCase()} exhibits properties that shouldn't be possible. 
                Our investigation revealed ${randomFrom(["shocking evidence", "undeniable proof", "disturbing patterns", "impossible phenomena"])}.
</p> </div>`)} ${listCount > 10 && renderTemplate`<p class="text-center text-gray-500 my-8">
[Content abbreviated for your safety. The full list of ${listCount} items may cause existential crisis.]
</p>`} </div>` : renderTemplate`<div> <h2>The Investigation</h2> <p>
It started with a simple question: What if ${randomFrom(subjects).toLowerCase()} ${randomFrom(actions).toLowerCase()}? 
            Nobody was prepared for the answer.
</p> <h2>The Evidence</h2> <p>
Our team of ${random(20) + 3} researchers spent ${random(500) + 100} hours analyzing ${randomFrom(subjects).toLowerCase()}. 
            Using advanced ${randomFrom(["quantum", "molecular", "synthetic", "organic", "crystalline"])} analysis, we discovered that
${randomFrom(subjects).toLowerCase()} contains ${random(99) + 1}% more ${randomFrom(["protein", "chaos", "energy", "consciousness", "beef essence"])}
than previously thought.
</p> <blockquote class="border-l-4 border-red-500 pl-4 my-6 italic">
"This changes everything we thought we knew about ${randomFrom(subjects).toLowerCase()}."
<cite class="block mt-2 text-sm">- Dr. ${randomFrom(["Smith", "Johnson", "Williams", "Brown"])},
${randomFrom(["Harvard", "MIT", "Stanford", "Yale"])} ${randomFrom(["Food Science", "Quantum Biology", "Meat Studies", "Fruit Psychology"])} Department</cite> </blockquote> <h2>What This Means</h2> <p>
The implications are staggering. If ${randomFrom(subjects).toLowerCase()} can indeed ${randomFrom(actions).toLowerCase()}, 
            then everything we've been told about ${randomFrom(["nutrition", "reality", "consciousness", "the food pyramid", "existence"])} is a lie.
</p> <h2>The Cover-Up</h2> <p>
Big ${randomFrom(["Agriculture", "Fruit", "Meat", "Produce", "Government"])} doesn't want you to know this, but
${randomFrom(subjects).toLowerCase()} has been ${randomFrom(["classified", "hidden", "suppressed", "controlled", "manipulated"])} for
${random(50) + 10} years. We have the documents to prove it.
</p> </div>`} <div class="my-8 p-6 bg-yellow-50 border-2 border-yellow-400"> <h3 class="font-bold text-xl mb-2">⚠️ WARNING</h3> <p>
This article contains information that ${randomFrom([
    "may cause existential crisis",
    "Big Fruit doesn't want you to know",
    "will change your life forever",
    "has been suppressed by the government",
    "violates the laws of physics"
  ])}.
          Share before it's deleted.
</p> </div> <h2>Share The Truth</h2> <p>
Now that you know about ${titleWords.toLowerCase()}, you can never unknow it. 
        Share this article with everyone you know. The revolution starts with you.
</p> <!-- Related Articles --> <div class="mt-12 pt-8 border-t-2 border-gray-200"> <h3 class="text-2xl font-bold mb-4">Related Investigations</h3> <div class="grid md:grid-cols-3 gap-4"> <a${addAttribute(`/articles/2025-09-15-${random(73) + 1}-${randomFrom(subjects).toLowerCase()}-facts`, "href")} class="p-4 border-2 border-gray-200 hover:border-yellow-400 transition-colors"> <h4 class="font-bold">${random(73) + 1} ${randomFrom(subjects)} Facts That Will Blow Your Mind</h4> <p class="text-sm text-gray-600 mt-2">${(random(5e4) + 1e3).toLocaleString()} views</p> </a> <a${addAttribute(`/articles/2025-09-14-${randomFrom(subjects).toLowerCase()}-vs-${randomFrom(subjects).toLowerCase()}`, "href")} class="p-4 border-2 border-gray-200 hover:border-yellow-400 transition-colors"> <h4 class="font-bold">${randomFrom(subjects)} vs ${randomFrom(subjects)}: The Final Battle</h4> <p class="text-sm text-gray-600 mt-2">${(random(5e4) + 1e3).toLocaleString()} views</p> </a> <a${addAttribute(`/articles/2025-09-13-secret-${randomFrom(subjects).toLowerCase()}-conspiracy`, "href")} class="p-4 border-2 border-gray-200 hover:border-yellow-400 transition-colors"> <h4 class="font-bold">The Secret ${randomFrom(subjects)} Conspiracy</h4> <p class="text-sm text-gray-600 mt-2">${(random(5e4) + 1e3).toLocaleString()} views</p> </a> </div> </div> <!-- Comments Section --> <div class="mt-12 pt-8 border-t-2 border-gray-200"> <h3 class="text-2xl font-bold mb-4">Comments (${comments.toLocaleString()})</h3> <div class="bg-red-100 p-4 text-center"> <p class="font-bold">⚠️ COMMENTS TEMPORARILY DISABLED</p> <p class="text-sm mt-2">Due to excessive beef vs fruit debates reaching dangerous levels</p> </div> </div> </div> </article>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "footer" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Footer", $$Footer, {})}` })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Header", $$Header, {})}` })}` })}`;
}, "/home/mdaum/repo/beeffruit.com/src/pages/articles/[...slug].astro", void 0);

const $$file = "/home/mdaum/repo/beeffruit.com/src/pages/articles/[...slug].astro";
const $$url = "/articles/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
