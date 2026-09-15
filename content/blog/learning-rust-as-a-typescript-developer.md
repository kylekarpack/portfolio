---
title: Learning Rust as a TypeScript Developer
description: ''
publicationDate: '2022-02-02T00:00:00.000Z'
categories:
  - softwareEngineering
  - learning
previewImage: /images/blog/learning-rust-as-a-typescript-developer.jpg
---
As someone who has spent years writing TypeScript, learning Rust has been challenging, but a lot of fun. TypeScript gives you some safety without getting in your way, while Rust gives you safety by making you work much harder. Here are a few things I learned during my journey.

## The First Shock: The Borrow Checker

TypeScript lets you get pretty far by just thinking of your work as "JavaScript, but with types". Rust, on the other hand, introduces ownership, borrowing, and lifetimes right away. At first, I felt like I was fighting the borrow checker, which is a common sentiment for beginners. But over time, I realized Rust was letting me to think about memory in a way I never had to before. Once things clicked, the borrow checker felt less like a gatekeeper and more like a guardrail. This became especially important when writing memory-intensive applications.

## Types Feel Familiar, but Much Stricter

Coming from TypeScript, Rust's type system felt familiar, with enums, generics, pattern matching, union-like behavior through enums, and powerful inference. But Rust takes things further. There are no "any" types or implicit coercions. If the compiler accepts what you've written, you're usually in great shape. Runtime bugs are almost a thing of the past.

That strictness can be frustrating at first, but the payoff is real. The code I produced felt solid, performant, and bug-free in a way JavaScript and TypeScript rarely do.

## Tooling That Feels Like Home

If you're used to npm, Rust gives you Cargo, and it's fantastic. Formatting, linting, building, testing, dependency management are all built in to one tool. It reminded me of the best parts of the TypeScript ecosystem but with fewer moving parts and less configuration overhead. It was also amazing to be able to drop into any Rust project and run it right away.

## Performance in Rust

In the TypeScript world, performance is often a late-stage concern. With Rust, performance is part of the design process. You have to think about allocations, ownership, references, and copy behavior from the beginning. That mindset shift has even improved how I write TypeScript. I find myself structuring data more intentionally and thinking more about mutability, and just memory usage in general.

I picked Rust for some performance-critical applications, and it absolutely delivered on those promises. Some data processing work I was doing was 50-100 times faster in Rust than in TypeScript. NodeJS and TypeScript can handle concurrency and small workloads well, but when processing data or an abstract syntax tree, a bare metal language like Rust is absolutely necessary.

## What I Miss From TypeScript

Rust is a cool tool, but not everything is easier:

- Iteration speed is slower than a hot-reload web app. I certainly wouldn't use Rust for prototyping
- Rust's async landscape is powerful but complex, and it still feels like some patterns and best practices here aren't fully settled
- Compiling for multiple targets can be a challenge. JavaScript runtimes or the JVM sort of serve as a buffer to having to think about this, which I still sometimes appreciate
- The learning curve is real, especially for lifetimes and advanced traits

I still don't write tons of Rust code on a daily basis, so I also forget some of the syntax and quirks every time I come back.

## WASM

A big benefit for us UI folks is the ability to compile Rust to WASM. I've done a few small projects here, and they're pretty neat. Running Rust as WASM in Cloudflare workers or for heavy image processing tasks is very cool. I'm excited to explore this further.

## Final Thoughts

Learning Rust as a TypeScript developer has been like switching from sketching with pencils to carving in stone. It's slower, more deliberate, and far less forgiving. But the end result feels strong, precise, and trustworthy. It's been amazing to ship binaries that can be as small as a few kilobytes and that run immediately when invoked. Coming from the NodeJS world, this is unheard of.

If you're a TypeScript developer considering Rust, I highly recommend giving it a try. It can make you a better programmer, help you think about memory, and it might just become a new tool in your toolkit. It's also much easier to get started with than C++!
