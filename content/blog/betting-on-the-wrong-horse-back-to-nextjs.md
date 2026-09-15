---
title: 'Betting On The Wrong Horse: Back to NextJS'
description: ''
publicationDate: '2025-12-06T00:00:00.000Z'
categories:
  - learning
  - reflection
  - softwareEngineering
previewImage: /images/blog/betting-on-the-wrong-horse-back-to-nextjs.jpg
---
Part of software engineering involves taking some risks, especially when it comes to new technology. In the workplace, those risks should be calculated and justifiable. However, in personal projects, the calculus changes completely. Using unpopular, unsupported, prerelease, fun software is totally fine when it's a small open-source offering or personal website!

## My Journey

I recently went through this journey. In 2021, amid the pandemic, I was looking for something to learn, and I settled on a new full-stack JS framework called RemixJS. I was a very early adopter, but it was built and championed by some of the biggest names in JavaScript. I loved the simple, standard APIs, built-in support for typical use cases, and the easy learning curve. There's no better way to learn than by doing, so I jumped right in!

Remix was similar to NextJS, but Next was just _too popular._Everybody was using it, leading to conflicting advice, weird stagnation, and lots of strange patterns emerging. I figured I could get ahead of the curve on this new framework that everybody would be using soon.

Now, at the end of 2025, betting on Remix constitutes a minor regret. Version schisms, breaking changes, and general neglect have led all the hype to fade.

![Screenshot 2025-12-07 at 2.29.38 PM.png](/images/content/betting-on-the-wrong-horse-back-to-nextjs-inline-1.jpg "Screenshot 2025-12-07 at 2.29.38 PM.png")

Usage of Remix looks to have peaked in early 2025, but is steadily declining throughout the year. My guess is due to a combination of clumsy choices by the Remix team, and improvement by competitors. Remix introduced a v2 with breaking changes that I could not navigate, became part of React Router v7, and then entered "hibernation", all in the time I was still enduring sleepless nights with an infant. There was no way to keep up, and honestly no compelling reason. Moving from 1.x to 2.x was going to be just as hard as moving to a different framework, so I did just that.

## Back to Next

In early December 2025, I re-released my portfolio on NextJS. It was a pretty massive rewrite (nearly 10,000 lines of code changes), and ultimately, it looks exactly the same. I was able to fix a few bugs and speed things up, but largely, I still have exactly the same web presence that I had in 2021.

Despite my misgivings, NextJS won. Next bills itself as "The React Framework", which previously felt like a bit of hubris to me, but they've gone and proved it. NextJS is more popular than ever, racking up millions of downloads:

![Screenshot 2025-12-07 at 2.34.36 PM.png](/images/content/betting-on-the-wrong-horse-back-to-nextjs-inline-2.jpg "Screenshot 2025-12-07 at 2.34.36 PM.png")

It's also better than ever, with a few great features since I last used it. Turbopack is phenomenally fast, the new static exporting is excellent, and the app router is powerful yet easy to use. Someone could certainly still make a poor site or application using Next, but it's gotten easier than ever to build good full stack React applications.

## Changing Course

I bet on the wrong horse, but that's okay! I learned something new, got more React reps in, and was able to fix my mistake. There are a few choices I made that I would do differently now:

- Choosing Spark for smaller data extraction because "everyone was doing it"
- Betting on Azure over AWS in 2016 thinking that Microsoft would innovate faster than they did
- Choosing [Angular over React](https://kylekarpack.com/blog/moving-from-angular-to-react "https://kylekarpack.com/blog/moving-from-angular-to-react") for a large new web application in 2014

Lest you think I just make poor decisions, a few technologies I adopted early that have become clear winners include:

- Doubling down on GraphQL in 2019 for a large SaaS product
- Using Vega for data visualizations across an entire product
- Data warehousing using Snowflake
- Adopting TypeScript at version 1. Yes, I am that old!

It's always a risk being an early adopter, but those good decisions can make up for the bad many times over. Take a risk and enjoy the ride!
