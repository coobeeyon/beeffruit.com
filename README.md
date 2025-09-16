# BeefFruit 🥩🍉

High-performance content farm parody. Built with Astro 5 + Tailwind, deployed on Vercel.

## Tech Stack

- **Framework:** Astro 5.13.7 (hybrid SSR/SSG)
- **Styling:** Tailwind CSS (minimal, Medium-inspired design)
- **Deployment:** Vercel with @astrojs/vercel adapter  
- **Package Manager:** Yarn (not npm!)
- **Content:** Dynamic article generation (no 404s possible)

## Quick Start

```fish
# Install dependencies
yarn install

# Development server
yarn dev

# Build for production
yarn build

# Deploy to Vercel (preview)
npx vercel

# Deploy to Vercel (production)
npx vercel --prod
```

## Key Features

- **Smart Content Recycling:** Every article URL generates deterministic content
- **Viral Article:** "27 Fruits That Are Secretly Meat" (47.2M views)
- **Interactive Quiz:** "Which Fruit Are You?" personality test
- **Live Engagement:** Counters, polls, trending sections
- **Mobile-First:** Responsive with mobile engagement features

## Project Structure

```
src/pages/
  ├── index.astro              # Homepage with engagement features
  ├── articles/[slug].astro    # Dynamic article generation
  └── quizzes/                 # Interactive quizzes
```

## Deployment Notes

- Currently deployed at: beeffruit-com.vercel.app
- Custom domain: beeffruit.com (to be configured)
- See `.warp.md` for detailed deployment history

