import { c as createAstro, a as createComponent, r as renderTemplate, e as renderSlot, f as renderHead, b as addAttribute, m as maybeRenderHead } from './astro/server_B7ZAgkEg.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://beeffruit.com");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    title = "BeefFruit \u2014 Maximalist internet oddities",
    description = "An absurdist, high-energy, ever-mutating front-end carnival. New weirdness all the time.",
    canonicalUrl = "https://beeffruit.com",
    image = "/favicon.svg",
    structuredData
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="bg-white text-gray-900"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', '><link rel="canonical"', '><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', `><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="sitemap" type="application/xml" href="/sitemap-index.xml"><script type="application/ld+json">
      {JSON.stringify(structuredData ?? {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'BeefFruit',
        url: 'https://beeffruit.com'
      })}
    <\/script>`, '</head> <body class="font-sans min-h-screen bg-white selection:bg-yellow-200 selection:text-black"> <div> ', ' <main id="main" class="py-10"> ', " </main> ", " </div> </body></html>"])), title, addAttribute(description, "content"), addAttribute(canonicalUrl, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalUrl, "content"), addAttribute(image, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), renderHead(), renderSlot($$result, $$slots["header"]), renderSlot($$result, $$slots["default"]), renderSlot($$result, $$slots["footer"]));
}, "/home/mdaum/repo/beeffruit.com/src/layouts/Base.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const nav = [
    { href: "/", text: "Home" },
    { href: "/articles", text: "Articles" },
    { href: "/quizzes", text: "Quizzes" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200"> <div class="mx-auto max-w-6xl px-4"> <div class="flex h-16 items-center justify-between"> <a href="/" class="flex items-center gap-1 font-black text-2xl"> <span class="text-red-600">BEEF</span><span class="text-green-600">FRUIT</span> </a> <nav class="hidden md:flex items-center gap-6"> ${nav.map((i) => renderTemplate`<a class="text-sm font-semibold text-gray-700 hover:text-black uppercase tracking-wide"${addAttribute(i.href, "href")}>${i.text}</a>`)} </nav> <a href="#main" class="md:hidden text-xs text-gray-600 focus-visible:outline-none">Skip</a> </div> </div> </header>`;
}, "/home/mdaum/repo/beeffruit.com/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="py-12 border-t border-gray-200 text-sm text-gray-600 bg-gray-50"> <div class="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4"> <p>© ${(/* @__PURE__ */ new Date()).getFullYear()} BeefFruit · A Disruptive Media Ventures Company</p> <div class="flex items-center gap-4"> <a href="/rss.xml" class="hover:text-black font-semibold">RSS</a> <a href="/sitemap-index.xml" class="hover:text-black font-semibold">Sitemap</a> </div> </div> </footer>`;
}, "/home/mdaum/repo/beeffruit.com/src/components/Footer.astro", void 0);

export { $$Base as $, $$Header as a, $$Footer as b };
