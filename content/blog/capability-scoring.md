---
title: Capability Scoring
description: ''
publicationDate: '2015-11-18T00:00:00.000Z'
categories:
  - dataVisualization
previewImage: /images/blog/capability-scoring.jpg
---
I recently helped apply for and received a patent ([US9182758](https://patents.google.com/patent/US9182758 "https://patents.google.com/patent/US9182758")) for "C_omputer-implemented system and method for capability zone-based manufacturing quality control_". I'm very proud of this work, and I'd like to briefly explain it.

## Overview

This patent is for a computer system for improving manufacturing quality control by analyzing how **close** measured features are to their **nominal (target)** values. This means it looks at not just whether they fall within tolerance. It assigns each measurement to a “capability zone” and computes capability scores for suppliers, machines, operators, etc.

## Problem It Solves

Conventional SPC methods often fail when:

- Parts are within tolerance but cluster near a tolerance limit.
- Multiple suppliers manufacture parts intended to mate or interact.
- Small deviations from nominal reduce assembly yield or cause fit issues.

The invention provides a more nuanced view of quality by examining _distance from nominal_.

## How It Works

### 1. **Inputs**

- Feature specification: nominal value and tolerance
- A dataset of actual measured values
- Optional attributes: manufacturer, machine, operator, shift, etc.

### 2. **Measurement Processing**

For each measurement, we:

- Compute deviation from nominal
- Convert deviation to a fraction (or percentage) of the tolerance
- Assign the measurement to a **capability zone** based on this distance

### 3. **Capability Zones**

Zones typically correspond to regions like:

- **6-sigma zone:** closest to nominal
- **5-sigma, 4-sigma, …**
- **Out of tolerance zone:** this is the worst and has significant impact on score

Zones are defined as ranges of percent-of-tolerance from nominal.

### 4. **Capability Scoring**

- Each zone has a weight (higher is worse)
- Weighted counts are aggregated to produce a **0–100 capability score** for a supplier, operator, feature, machine, etc.
- Scores compare performance across any combination of attributes

### 5. **Visualization & UI**

The system produces:

- Bar charts showing measurement distribution across zones
- Color-coded displays
- Ranked lists of suppliers/operators by capability
- Dashboards highlighting where processes drift toward tolerance limits

## Benefits

- Provides insight beyond simple pass/fail metrics
- Helps choose suppliers whose output clusters closer to nominal
- Detects subtle but important process drift
- Reduces risk of assembly issues caused by asymmetric or biased measurements
- Works well in high-precision industries (for example, aerospace, where we focus)

## Example

If tolerance is ±0.010 cm and a measurement is 0.002 cm from nominal, it is 20% of tolerance. This places it in a specific zone (e.g., 5-sigma). Many such measurements form a distribution that determines a capability score.

## Implementation Notes

- The system may run on servers or cloud platforms
- Measurements exactly equal to nominal may be excluded to avoid skewing results. In manufacturing and high-precision industries, these are rarely valuable pieces of data since they are often fabricated or put is as defaults
- The system can map attributes to causes to recommended corrective actions.
