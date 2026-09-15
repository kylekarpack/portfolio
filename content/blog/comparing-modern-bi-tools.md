---
title: Comparing Modern BI Tools
description: ''
publicationDate: '2025-03-01T00:00:00.000Z'
categories:
  - dataVisualization
previewImage: /images/blog/comparing-modern-bi-tools.jpg
---
Late last year, I performed an extensive evaluation of various business intelligence solutions. My team was looking for a product that could replace and augment our homegrown dashboards without unnecessarily constraining our design and development workflows. I ultimately evaluated about 25 tools on the following criteria:

- Multi-tenancy
- Embedding capabilities
- Data modeling capabilities
- Overall feature set
- CI/CD functionality
- Styling flexibility
- Localization capabilities
- Self-service dashboard offerings
- Overall performance and product quality
- Several other criteria

My findings were collected in an Excel sheet that my team colloquially called "The Christmas Tree":

![image-2024-11-15_11-0-21.png](/images/content/comparing-modern-bi-tools-inline-1.jpg "image-2024-11-15_11-0-21.png")

Here were some that best fit our needs.

## The Serious Contenders

### PowerBI

**Pros**

- Finding experienced developers is easy
- Data modeling layer is excellent
- Has a broad feature set

**Cons**

- UI customization is poor and embedded experience is largely an afterthought
- Deployment of binaries is extremely difficult to manage
- Version control and collaboration is nearly impossible
- Only runs in Azure

### Sigma Computing

**Pros**

- Excellent UI and product quality
- Adequate embedding experience
- The only serious multi-cloud solution available

**Cons**

- CI / CD and multi-tenancy feature are average

### AWS QuickSight

**Pros**

- Has an adequate feature set

**Cons**

- Weak embedded experience
- Difficult to manage

### Holistics

**Pros**

- Best-in-class analytics-as-code and CI/CD options

**Cons**

- Weaker embedding and localization options

### GoodData

**Pros**

- Excellent native embedding experience without iframes allows unlimited customization and excellent performance
- Great data modeling and chart creation experience

**Cons**

- Platform instability was higher than others
- Data modeling was weak

## Other Interesting Options

### LightDash

Lightdash requires a dbt project and connection. I didn't have a complete one at the time, so I wasn't able to fully evaluate it. The dbt-based project is definitely an interesting prospect.

### Metabase

Metabase is open source-based with excellent UI out of the box. It was difficult to trial due to unusual licensing structure, and its features and data modeling are rudimentary. Many BI users reported outgrowing it quickly.

### Apache Superset

Superset is an open source BI framework that looks great out of the box. The self-service options require more familiarity with SQL than many competitors, but customization is very strong. It also has some basic analytics-as-code features. Embedding was a weak spot.

## Conclusion

These evaluations are based on my team's needs and may not match your requirements. These products are also constantly evolving, so be sure to check them out for your next BI or dashboarding project!
