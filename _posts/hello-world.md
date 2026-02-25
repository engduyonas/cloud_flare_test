---
title: "Building a Modern Blog with Next.js and Cloudflare Workers"
excerpt: "A deep dive into deploying a Next.js blog to the edge using OpenNext and Cloudflare Workers, achieving blazing-fast load times with static generation and global distribution."
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2026-02-25T09:00:00.000Z"
author:
  name: Tim Neutkens
  picture: "/assets/blog/authors/tim.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
tags:
  - Next.js
  - Cloudflare
  - Edge Computing
---

The web has evolved. Users expect instant page loads, and search engines reward fast sites. But achieving both great developer experience and top-tier performance has traditionally meant choosing between static site generators and full server-side frameworks. Next.js bridges that gap, and with Cloudflare Workers, you can serve your entire application from the edge.

## Why the Edge Matters

Traditional hosting serves your application from a single region. A user in Tokyo requesting a page from a server in Virginia faces roughly 200ms of latency just from the speed of light -- before your server even starts processing the request.

Edge computing flips this model. Your application runs in data centers distributed across the globe, typically within 50ms of any user. For a blog, this means:

- **First Contentful Paint under 1 second** for most visitors
- **Zero cold starts** for static content
- **Global availability** without managing infrastructure

## Static Generation at Build Time

The key insight behind this blog's architecture is that content doesn't change between deployments. Every blog post is a Markdown file that gets transformed into HTML during the build step. At runtime, Cloudflare Workers simply serves the pre-rendered pages -- no database queries, no server-side rendering, no filesystem access.

```typescript
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
```

This function tells Next.js exactly which pages to pre-render. Combined with `dynamicParams = false`, we guarantee that every page a user can visit was already built and cached.

## The OpenNext Adapter

OpenNext is the bridge between Next.js and non-Vercel platforms. The `@opennextjs/cloudflare` adapter takes the output of `next build` and transforms it into a Cloudflare Worker -- a single JavaScript bundle that handles routing, serves static assets, and delivers pre-rendered HTML.

The build pipeline looks like this:

1. `next build` compiles your React components and generates static HTML
2. `opennextjs-cloudflare build` bundles everything into a Worker
3. Static assets go to Cloudflare's CDN with immutable caching headers
4. The Worker handles dynamic routing and serves cached pages

## What We Gained

After deploying this blog to Cloudflare Workers, the results speak for themselves:

- **Time to First Byte**: Under 50ms globally
- **Lighthouse Performance Score**: 100
- **Build time**: Under 10 seconds
- **Monthly cost**: Free tier covers most blogs comfortably

The combination of static generation, edge delivery, and smart caching creates a blog that feels instant, no matter where your readers are.
