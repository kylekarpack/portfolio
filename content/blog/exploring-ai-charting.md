---
title: Exploring AI Charting
description: ''
publicationDate: '2025-05-03T00:00:00.000Z'
categories:
  - dataVisualization
  - learning
previewImage: /images/blog/exploring-ai-charting.jpg
---
Something I've found repeatedly through my career is that people love good data visualizations. From the telemetry I've gathered on several products, they're regularly the most visited pages in SaaS applications. Just as importantly, they're one of the best demos in any given sales pitch. Executives love to see charts, and with good reason. They bring clarity to massive data stores, and can provide insight where there was none.

But creating that clarity is hard. Most charting projects I've built are massive undertakings, consuming months or even years to build. And even when they're done, different users want answers to different questions. A big push recently has been for ad-hoc data visualization. This isn't an easy problem to solve, but it's becoming more attainable with the great progress that LLMs have made in the last couple years. I'm by no means an expert here, but I've done a review of the field over the past year, and here's a little about what I have learned.

## The Foundations: Vega

Vega is a declarative grammar for creating, saving, and sharing data visualizations. Instead of writing imperative chart-drawing code, you describe _what_you want, whether it's a dataset, marks, scales, axes, or interactions. From here, Vega handles _how_ to render it. It’s essentially a JSON specification that defines visual transformations and rules, making visualizations reproducible, consistent, and programmatically generated.

This consistency is key when you're asking for AI-generated charts. In 2025, most LLMs can generate syntatically valid Vega specifications, and they can often do it in a semantically meaninful way. Because Vega has a fully specified JSON structure, results can be validated against the schema before trying to render them. Errors are easy to find, and iterations become painless. If I was building an AI charting product, Vega would be my first choice. It simply eliminates a huge amound of complexity and room for error that comes with programattic charting like d3, Plotly, or other charting libraries. These products are great, but for now, Vega sure looks like the best option.

## VizGPT

![c7b4163b-ad48-4060-97ba-5b2080ee6134.avif](/images/content/exploring-ai-charting-inline-1.jpg "c7b4163b-ad48-4060-97ba-5b2080ee6134.avif")

[VizGPT](https://vizgpt.ai/ "https://vizgpt.ai/") is one of the first compelling offeings I've seen in this field. VizGPT is a highly accessible tool for exploring data and generating visual insights quickly. It's especially great for non-technical users or analysts who want to prototype visualizations on the fly. While it's not a full BI platform replacement, it's a powerful bridge between natural language and visual analytics, making data-driven storytelling more conversational

It's a fairly simple product, but I think it provides a template for companies that want to explore this space further. It's also [open source](https://github.com/ObservedObserver/viz-gpt "https://github.com/ObservedObserver/viz-gpt"), which can let you view the inner workings a little more.

## Microsoft Data Formulator

![heatmap.png](/images/content/exploring-ai-charting-inline-2.jpg "heatmap.png")

Microsoft's [Data Formulator](https://data-formulator.ai/app "https://data-formulator.ai/app") is another very interesting entry in this space. It's open-source and has a nice collection of features for data storytelling. The AI facilities are pretty good, and it was able to suggest charts, summarize data, and produce compelling and appropriate data visualizations automatically.

On the downside, it definitely doesn't feel like a production-ready application. I noticed lots of UI bugs, and the LLM often recommended charts that didn't make much sense. Here's an example of a chart it suggested for me from a pre-defined disasters data set:

![poor_chart.png](/images/content/exploring-ai-charting-inline-3.jpg "poor_chart.png")

This obviously doesn't lend much clarity to the data!

## ThoughtSpot Spotter

I enjoyed a short trial of [ThoughtSpot's Spotter](https://www.thoughtspot.com/product/ai-analyst "https://www.thoughtspot.com/product/ai-analyst") product while researching BI tools earlier this year. It did a nice job of producing insights on a few data sets that I gave it, and had a clean and polished interface. The accuracy of responses depends heavily on data modeling and governance, but when configured well, Spotter can speed up basic analysis and reduce reliance on analysts. Its tagline, "_Think ChatGPT, but for answers to your data questions_" describes it quite well in my opinion.

Ultimately, I found pricing and implementation to be a little convoluted. At a big company, it's also hard to commit to a commercial product like Spotter without substantial buy-in from leadership. I eventually recommended looking elsewhere, but I still think Spotter might be a good solution for many use cases.

## Snowflake Cortex

![sf_Snowflake-Cortex.jpg](/images/content/exploring-ai-charting-inline-4.jpg "sf_Snowflake-Cortex.jpg")

Snowflake's Cortex Analyst just keeps getting better. I've seen teams spend months of work to achieve 80% accuracy on NL-to-SQL operations, but with a simple semantic model, Cortex hit 95%+ for me, out-of-the-box. It was remarkably good at scoping its answers and declining to answer questions it could not confidently provide responses to. I've issued thousands of queries and never seen one hallucination.

The core of Cortex is the semantic model. I'm convinced that, for deriving correct and meaninful insights from data, a semantic model is necessary. It provides the translation layer from meaning to data. Without this, anything that an LLM produces is at best, a guess.

Cortex Analyst also produces Vega specifications nicely. It's up to the user to render them, but that's fairly straightforward once they are returned. Given a data set and a Vega specification, I was almost always able to produce a meaningful visualization from a given query. One caveat is that it only produced bar and line charts for me. Even simple visualizations like donut charts were not yet available.

Pricing seemed reasonable to me given the large number of tokens that these tasks can require. Snowflake has developed [its own NL2SQL model](https://www.snowflake.com/en/engineering-blog/real-time-text-to-sql-snowflake-intelligence/ "https://www.snowflake.com/en/engineering-blog/real-time-text-to-sql-snowflake-intelligence/") that is incredibly effective at answering data questions, and I presume this helps keep costs down. Snowflake is still making money on the processing, storage, and querying of data, so anything that helps customers do more of that is probably good for them!

## What's Next

I'm excited to see what's next in this space. Users need products that can help them produce insights quickly, and software companies need products that can provide dashboards and reports to their users with less engineering effort. The early returns here look great, and I expect we'll see some strong advancements and new contenders in this area soon.
