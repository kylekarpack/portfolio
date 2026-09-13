---
title: Migrating from Looker to PowerBI
description: ''
publicationDate: '2023-04-13T00:00:00.000Z'
categories:
  - dataEngineering
  - dataVisualization
previewImage: /images/blog/migrating-from-looker-to-powerbi.jpg
---
I've really enjoyed using embedded BI tools as a way to provide reporting to users. These tools perform a few important functions, but decoupling business logic, data storage, and charting is key. I have recently used Tableau, Looker, and PowerBI, each of which has an embedded model, each with its own upsides and downsides. Recently, I led a project to move from Looker to PowerBI for embedded reporting, and here's what I learned.

## PowerBI Pricing is Excellent

Many embedded BI tools price per user. In enterprise software, this model often doesn't make very much sense. If your customers rarely log in, or if usage varies significantly from month to month, per-user licensing can lead to unpredictable and sometimes unreasonable costs. PowerBI's capacity-based pricing model is right for many situations, and it allowed us to pay for compute, not people.

For embedded use cases, this is exactly what you want. You control the compute units, you scale capacity deliberately, and you aren't penalized for customer growth. It makes forecasting dramatically easier, and it aligned well with our product's usage patterns.

## PowerBI Embedded is an Afterthought

PowerBI Desktop is an excellent product. It's polished, intuitive, and incredibly powerful for analysts. But once you venture into the embedded world, the experience becomes more complicated.

Embedding PowerBI reports requires stitching together Azure resources, capacity planning, authentication flows, workspace organization, and application permissions. None of these things are particularly difficult on their own, but they feel bolted on rather than intentionally designed.

The API is improving, but the developer experience still lags behind more mature embedded BI ecosystems. Expect to spend time navigating documentation gaps, inconsistent terminology, and mismatched configuration surfaces across PowerBI Desktop, the PowerBI Web UI, and the Azure Portal.

## What I Miss From Looker

### LookML

Looker's LookML semantic layer is excellent. It allows teams to define business logic once and reuse it everywhere, consistently and transparently. Dimensions, measures, and joins all live in version-controlled code that developers can review and evolve safely.

Moving to PowerBI meant losing that level of abstraction. PowerBI has datasets, calculated columns, measures, and transformations, but they live inside a PBIX file rather than a first-class semantic modeling layer. This makes governance harder, collaboration clunkier, and reproducibility less reliable.

While PowerBI's DAX engine is incredibly powerful, it doesn't replace the clarity and maintainability that LookML provides. If you want a strong semantic layer in PowerBI, you’ll likely need to build your own governance patterns, adopt external modeling tools, or enforce conventions at the team level.

### CI / CD for PowerBI

In a multi-tenant environment, PowerBI's CI/CD capabilities leave a lot to be desired. Generally, each tenant will needs its own data set and report. In a system with hundreds or thousands of sandboxed tenants, this means that each report needs to deployed out to each workspace, and data sets published and refreshed. This isn't an efficient deployment model for large numbers of tenants, and we ended up using huge amounts of our PowerBI capacity just to do deployments.

## Overall

Ultimately, PowerBI was a good decision. The migration was difficult and couldn't be easily automated, but the usage-based pricing and product stability of PowerBI are excellent affordances for data teams. Users are familiar with PowerBI paradigms and generally liked the new reports. Despite the caveats, we found this migration to be very successful, and it's still running very reliably in our products.
