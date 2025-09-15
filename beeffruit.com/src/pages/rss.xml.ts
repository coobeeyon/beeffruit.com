import { getCollection } from 'astro:content';

export async function GET() {
  const posts = (await getCollection('articles')).sort((a,b) => +new Date(b.data.pubDate) - +new Date(a.data.pubDate));
  const site = 'https://beeffruit.com';
  const items = posts.map((p) => `
    <item>
      <title>${escapeXml(p.data.title)}</title>
      <link>${site}/articles/${p.slug}</link>
      <guid>${site}/articles/${p.slug}</guid>
      <pubDate>${new Date(p.data.pubDate).toUTCString()}</pubDate>
      <description>${escapeXml(p.data.description ?? '')}</description>
    </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>BeefFruit</title>
      <link>${site}</link>
      <description>Absurdist internet experiments</description>
      ${items}
    </channel>
  </rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}

function escapeXml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}