#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Article title templates
const titleTemplates = {
  listicle: [
    "{number} {subject} That {action}",
    "{number} Times {subject} {action}",
    "{number} Reasons Why {subject} {action}",
    "{number} {subject} You Won't Believe Actually Exist",
    "The {number} Most {adjective} {subject} Ever {action}",
    "Top {number} {subject} That Will {action}",
  ],
  versus: [
    "{subject1} vs {subject2}: The {adjective} Battle",
    "{subject1} vs {subject2}: Which Is {comparison}?",
    "{subject1} vs {subject2}: Scientists Weigh In",
    "{subject1} vs {subject2}: The Final Showdown",
    "{subject1} or {subject2}? The Answer Will {action}",
  ],
  conspiracy: [
    "The {adjective} Truth About {subject}",
    "What Big {industry} Doesn't Want You to Know About {subject}",
    "{subject}: The {adjective} Conspiracy",
    "Leaked Documents Reveal {subject} {action}",
    "EXPOSED: {subject} {action}",
  ],
  science: [
    "Scientists Discover {subject} {action}",
    "New Study: {subject} {action}",
    "Research Proves {subject} {action}",
    "Lab Tests Confirm: {subject} {action}",
    "Breaking: {subject} DNA Found in {subject2}",
  ],
  personal: [
    "I {action} for 30 Days. Here's What Happened",
    "My {subject} {action} (Gone Wrong)",
    "Why I'll Never {action} Again",
    "The Day {subject} Changed My Life",
    "Confession: I {action} and {result}",
  ],
  breaking: [
    "BREAKING: {subject} {action}",
    "URGENT: Your {subject} Might Be {adjective}",
    "ALERT: {subject} Recalled for Being {adjective}",
    "This Just In: {subject} {action}",
    "EXCLUSIVE: {subject} Admits to {action}",
  ]
};

const subjects = {
  beef: ['Steak', 'Beef', 'Ribeye', 'Sirloin', 'Brisket', 'Ground Beef', 'Meatball', 'Burger', 'Roast', 'Tenderloin'],
  fruit: ['Apple', 'Banana', 'Orange', 'Watermelon', 'Grape', 'Strawberry', 'Pineapple', 'Mango', 'Peach', 'Kiwi', 'Blueberry', 'Cherry', 'Avocado', 'Tomato', 'Lemon', 'Lime', 'Grapefruit', 'Papaya', 'Dragon Fruit', 'Passion Fruit'],
  other: ['Salad', 'Vegetable', 'Noodle', 'Bread', 'Cheese', 'Milk', 'Egg', 'Chicken', 'Fish', 'Pizza', 'Taco', 'Sandwich', 'Soup', 'Cereal']
};

const adjectives = ['Shocking', 'Unbelievable', 'Secret', 'Hidden', 'Forbidden', 'Illegal', 'Controversial', 'Viral', 'Cursed', 'Blessed', 'Chaotic', 'Mystic', 'Quantum', 'Haunted', 'Sentient', 'Aggressive', 'Peaceful', 'Ancient', 'Futuristic', 'Crispy'];

const actions = [
  'Will Blow Your Mind',
  'Are Actually Sentient',
  'Can Read Your Thoughts',
  'Predict the Future',
  'Control the Weather',
  'Started a Revolution',
  'Broke the Internet',
  'Made Scientists Cry',
  'Changed Everything',
  'Destroyed My Life',
  'Saved Humanity',
  'Cause Time Travel',
  'Emit Radio Signals',
  'Form Secret Societies',
  'Plot Against Humanity'
];

const authors = ['Chad Grindmore', 'Tyler Chen', 'Kayleigh Martinez', 'Brad Thundermeat', 'Jessica Fruitwhisper', 'Mike Steakman', 'Sarah Berryblast', 'Tom Beefington', 'Amy Melonlord', 'Chris Baconator'];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTitle(category) {
  let template;
  
  switch(category) {
    case 'listicle':
      template = getRandomElement(titleTemplates.listicle);
      return template
        .replace('{number}', getRandomNumber(3, 73))
        .replace('{subject}', getRandomElement([...subjects.beef, ...subjects.fruit]))
        .replace('{action}', getRandomElement(actions))
        .replace('{adjective}', getRandomElement(adjectives));
    
    case 'versus':
      template = getRandomElement(titleTemplates.versus);
      const sub1 = getRandomElement(subjects.beef);
      const sub2 = getRandomElement(subjects.fruit);
      return template
        .replace('{subject1}', sub1)
        .replace('{subject2}', sub2)
        .replace('{adjective}', getRandomElement(adjectives))
        .replace('{comparison}', getRandomElement(['Better', 'Stronger', 'More Sentient', 'More Delicious', 'More Powerful']))
        .replace('{action}', getRandomElement(actions));
        
    default:
      template = getRandomElement(Object.values(titleTemplates).flat());
      return template
        .replace('{number}', getRandomNumber(3, 73))
        .replace('{subject}', getRandomElement([...subjects.beef, ...subjects.fruit]))
        .replace('{subject1}', getRandomElement(subjects.beef))
        .replace('{subject2}', getRandomElement(subjects.fruit))
        .replace('{industry}', getRandomElement(['Fruit', 'Meat', 'Agriculture', 'Food']))
        .replace('{action}', getRandomElement(actions))
        .replace('{adjective}', getRandomElement(adjectives))
        .replace('{result}', getRandomElement(['Survived', 'Thrived', 'Cried', 'Won', 'Lost Everything']))
        .replace('{comparison}', getRandomElement(['Better', 'Stronger', 'More Sentient', 'More Delicious', 'More Powerful']));
  }
}

function generateSlug(title, date) {
  const dateStr = date.toISOString().split('T')[0];
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 50);
  return `${dateStr}-${slug}`;
}

function getViewCount(date, isViral = false) {
  const now = new Date('2025-09-16');
  const articleDate = new Date(date);
  const daysSince = Math.floor((now - articleDate) / (1000 * 60 * 60 * 24));
  
  // 3 weeks ago = ~21 days
  const viralDate = new Date('2025-08-27');
  const isPostViral = articleDate >= viralDate;
  
  if (isViral) {
    return getRandomNumber(10000000, 50000000);
  }
  
  if (isPostViral) {
    // Post-viral articles get way more views
    return getRandomNumber(50000, 2000000);
  } else {
    // Pre-viral articles have modest views
    return getRandomNumber(100, 50000);
  }
}

function getCommentCount(views) {
  // Roughly 0.1-1% of viewers comment
  return Math.floor(views * (Math.random() * 0.01 + 0.001));
}

function generateArticle(date, category, isViral = false) {
  const title = generateTitle(category);
  const slug = generateSlug(title, date);
  const views = getViewCount(date, isViral);
  const comments = getCommentCount(views);
  
  const frontmatter = {
    title: title,
    description: getRandomElement([
      'You won\'t believe what happened next',
      'The truth will shock you', 
      'Scientists hate this one weird trick',
      'Number ' + getRandomNumber(3, 27) + ' will blow your mind',
      'This changes everything we thought we knew',
      'Exclusive investigation reveals shocking truth',
      'Gone wrong (cops called)',
      'The results will surprise you'
    ]),
    date: date.toISOString().split('T')[0],
    emoji: getRandomElement(['🥩', '🍉', '🤯', '😱', '🔥', '💥', '⚡', '🎯', '👀', '🧠', '💀', '🚨']),
    blurb: getRandomElement([
      'Our investigation reveals the shocking truth',
      'After months of research, we can finally reveal',
      'What we discovered will change how you think about food forever',
      'The evidence is undeniable',
      'Big Agriculture doesn\'t want you to read this',
      'Share before this gets taken down',
      'Our team risked everything to bring you this story'
    ]),
    tags: [category, getRandomElement(['trending', 'viral', 'must-read', 'exclusive', 'breaking'])],
    author: getRandomElement(authors),
    views: views,
    comments: comments,
    shares: Math.floor(views * 0.05)
  };
  
  const content = `---
title: "${frontmatter.title}"
description: "${frontmatter.description}"
date: ${frontmatter.date}
emoji: ${frontmatter.emoji}
blurb: "${frontmatter.blurb}"
tags: ${JSON.stringify(frontmatter.tags)}
author: "${frontmatter.author}"
views: ${frontmatter.views}
comments: ${frontmatter.comments}
shares: ${frontmatter.shares}
---

## The Investigation Begins

Lorem ipsum dolor sit amet, consectetur adipiscing elit. But that's not the real story. The real story is about ${frontmatter.title.toLowerCase()}.

## What We Discovered

Our team of expert investigators spent countless hours researching this topic. What we found will shock you.

## The Evidence

[Content would go here in a real article]

## What This Means For You

The implications are staggering. Your entire worldview may need to be reconsidered.

## Share Before It's Too Late

If you found this article informative, share it with everyone you know. The truth must be spread.
`;
  
  return {
    slug,
    content,
    category,
    views: frontmatter.views
  };
}

// Generate articles
function generateAllArticles() {
  const articles = [];
  const startDate = new Date('2025-02-01'); // 8 months ago
  const endDate = new Date('2025-09-16'); // today
  
  const categories = {
    'listicle': 0.45,  // 45% of content
    'versus': 0.15,    // 15%
    'conspiracy': 0.10, // 10%
    'science': 0.10,   // 10%
    'personal': 0.10,  // 10%
    'breaking': 0.10   // 10%
  };
  
  // Generate ~200 articles per day for first 7 months
  let currentDate = new Date(startDate);
  
  while (currentDate < endDate) {
    const isPostViral = currentDate >= new Date('2025-08-27');
    const articlesPerDay = isPostViral ? getRandomNumber(500, 1000) : getRandomNumber(100, 200);
    
    for (let i = 0; i < articlesPerDay; i++) {
      const rand = Math.random();
      let cumulative = 0;
      let selectedCategory = 'listicle';
      
      for (const [cat, prob] of Object.entries(categories)) {
        cumulative += prob;
        if (rand < cumulative) {
          selectedCategory = cat;
          break;
        }
      }
      
      const article = generateArticle(currentDate, selectedCategory);
      articles.push(article);
    }
    
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return articles;
}

// Main execution
console.log('Generating BeefFruit content archive...');
console.log('This will create ~63,000 articles...');

const articles = generateAllArticles();
console.log(`Generated ${articles.length} articles`);

// Create a sample of articles (we can't actually create 63k files)
// Instead, create a JSON index and generate a representative sample
const contentDir = path.join(__dirname, '..', 'src', 'content', 'articles');

// Create article index
const articleIndex = articles.map(a => ({
  slug: a.slug,
  category: a.category,
  views: a.views
}));

fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'data', 'article-index.json'),
  JSON.stringify(articleIndex, null, 2)
);

console.log('Created article index');

// Generate a sample of actual article files (top 100 by views)
const topArticles = articles
  .sort((a, b) => b.views - a.views)
  .slice(0, 100);

topArticles.forEach(article => {
  const filePath = path.join(contentDir, `${article.slug}.md`);
  // Don't overwrite the viral article we already created
  if (!article.slug.includes('27-fruits-that-are-secretly-meat')) {
    fs.writeFileSync(filePath, article.content);
  }
});

console.log('Generated top 100 articles by views');
console.log('Content generation complete!');