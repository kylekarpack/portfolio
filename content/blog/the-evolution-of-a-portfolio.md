---
title: The Evolution of a Portfolio
description: ''
publicationDate: '2024-09-09T00:00:00.000Z'
categories:
  - reflection
previewImage: /images/blog/the-evolution-of-a-portfolio.jpg
---
One thing I really appreciated about my undergraduate program, Human-Centered Design & Engineering at the University of Washington, was the emphasis on building a portfolio. Building a portfolio helped me reflect on my work and learn how to craft a story. The ultimate artifact has helped me land jobs and given me something useful to talk about during interviews with prospective employers. Here's the story of my portfolio creation process and some of the milestones in my journey.

## Assembling the Artifacts

The most important part of building a portfolio is assembling the items that you're going to put in the portfolio. I spent an entire quarter gathering photography, UX projects, data visualizations, and code samples. I classified them, evaluated them, and wrote a document for each one reflecting on its impact. This exercise was incredibly important as it helped me catalog my work and remember what I had done.

## First Iteration: Hand-Built Site

Once I had the physical artifacts, it was time to start building. My first portfolio was built on the University of Washington's web servers with static HTML, CSS, and a little JavaScript. It was intensive work, but a lot of fun, and I learned a lot in the process.

## Second Iteration: Wordpress

Around this same time, Wordpress was eating the web publishing world alive, and for good reason. It was fast, modular, extensible, and easy to host anywhere. I built and hosted a Wordpress site with a MySQL database on those same UW servers. In the process, I built my own Wordpress theme and plugins, both to learn the system, and to have something that was uniquely mine.

## Third Iteration: Gatsby

When I rebuilt my portfolio this time, there were two great new JS static site generators on the market: Gatsby and NextJS. I went with Gatsby due to its fine-grained control over art direction and performance. Building a Gatsby site was slow, and build times were astronomical, but once it had generated all the pages, load times were 2-3x faster than my Wordpress site. I was able to hit 100 across the board in Lighthouse for my portfolio.

To do this migration, I created my [wp-to-md](https://kylekarpack.com/portfolio/wp-to-md "https://kylekarpack.com/portfolio/wp-to-md") tool. It's not perfect for every migration, but it definitely saved me a lot of time as I moved dozens of portfolio items and blog entries from Wordpress to a static site generator. Markdown was a fairly nice way to manage content in version control as well.

## Fourth Iteration: NextJS

In 2019, I chose Gatsby over NextJS. This probably wasn't the right move ultimately, but it gave me a chance to rebuild again! This rebuild wasn't too difficult. I already knew NextJS pretty well from using it a lot, and it shared some concepts with Gatsby. This rebuild was fun, and I spent a lot of time getting the styles exactly to my liking.

Headless content management systems were really taking over at this point as well. I tried a few and settled on GraphCMS. The GraphQL interface helped smooth the migration from Gatsby, and the free tier was good enough for my purposes.

## Fifth Iteration: Remix JS

The promise of Remix was too compelling to ignore. It was developed by some of the biggest names in the JavaScript world, it used all kinds of web standards, and it was easy to learn and deploy anywhere. In 2021, as the pandemic dragged on, I spent a few weeks moving from NextJS to Remix. Remix was great, and I built a few other things with it over the years.

## Next Iteration: Back to NextJS?

[Remix is sleeping](https://remix.run/blog/wake-up-remix "https://remix.run/blog/wake-up-remix"). Despite some great experiences, I wouldn't build a portfolio on this platform anymore. NextJS has clearly estabilished maintained dominance with Vercel backing it. Sometimes, it's just best to go with the popular tools, so this might be my next move. Or maybe I'll switch to SvelteKit instead!
