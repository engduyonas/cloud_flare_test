---
title: "Understanding Static Site Generation in Next.js"
excerpt: "Explore how Next.js pre-renders pages at build time, the trade-offs between SSG and SSR, and when static generation is the right choice for your project."
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2026-02-20T09:00:00.000Z"
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
tags:
  - Next.js
  - SSG
  - Performance
---

Static Site Generation (SSG) is one of the most powerful features in Next.js. It lets you pre-render pages at build time, producing plain HTML files that can be served from any CDN. But understanding when and how to use it effectively requires looking beyond the basics.

## How SSG Works Under the Hood

When you run `next build`, Next.js analyzes each page in your application. Pages without dynamic data sources are automatically treated as static. For pages that need data, you provide a function that fetches everything needed at build time.

In the App Router, any page that doesn't use dynamic functions like `cookies()`, `headers()`, or `searchParams` is automatically static. The framework detects this at build time and generates plain HTML.

```
Route (app)
├ ○ /                    → Static
├ ○ /_not-found          → Static
└ ● /posts/[slug]        → SSG (uses generateStaticParams)
```

The `○` symbol means fully static. The `●` means static with dynamic parameters -- each variant is pre-rendered at build time.

## The Trade-offs

Static generation isn't always the right choice. Here's a framework for deciding:

**Choose SSG when:**
- Content changes only at deploy time (blogs, docs, marketing pages)
- You can enumerate all possible pages at build time
- You don't need per-request personalization

**Choose SSR when:**
- Content depends on the request (user dashboards, search results)
- You have thousands of pages that change frequently
- You need real-time data that can't be stale

**Choose ISR when:**
- You want the speed of static with periodic updates
- Your content changes on a predictable schedule
- You can tolerate briefly stale content

## Dynamic Routes with Static Generation

The real power of SSG in Next.js shows up with dynamic routes. Consider a blog with hundreds of posts. Rather than manually creating a page for each post, you define a template and tell Next.js which variants to generate:

```typescript
// This runs at build time
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Prevent runtime rendering for unknown slugs
export const dynamicParams = false;
```

Setting `dynamicParams = false` is crucial for edge deployments. Without it, Next.js would attempt to render unknown slugs on-demand, which requires server-side capabilities that may not be available in all environments.

## Performance in Practice

The performance benefits of SSG are substantial. A server-rendered page requires:

1. Receiving the request
2. Executing server-side code
3. Potentially querying databases
4. Rendering React components to HTML
5. Sending the response

A statically generated page skips steps 2-4 entirely. The HTML is already sitting on a CDN, ready to be served. This typically translates to a 5-10x improvement in Time to First Byte.

For content-heavy sites like blogs, documentation, and marketing pages, SSG remains the best default choice. It's simpler to reason about, cheaper to host, and faster for end users.
