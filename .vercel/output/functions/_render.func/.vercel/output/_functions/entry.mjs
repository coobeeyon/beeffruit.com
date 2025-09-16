import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CuDCMO6D.mjs';
import { manifest } from './manifest_ux9Bmc-3.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/articles/_slug_.astro.mjs');
const _page3 = () => import('./pages/articles.astro.mjs');
const _page4 = () => import('./pages/articles/_---slug_.astro.mjs');
const _page5 = () => import('./pages/quizzes/which-fruit-are-you.astro.mjs');
const _page6 = () => import('./pages/quizzes.astro.mjs');
const _page7 = () => import('./pages/rss.xml.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/articles/[slug].astro", _page2],
    ["src/pages/articles/index.astro", _page3],
    ["src/pages/articles/[...slug].astro", _page4],
    ["src/pages/quizzes/which-fruit-are-you.astro", _page5],
    ["src/pages/quizzes/index.astro", _page6],
    ["src/pages/rss.xml.ts", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "6d379d65-6bb2-4022-b0be-1902727aeb1d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
