import { describe, expect, test } from "vitest";
import { getBlogBySlug, getBlogs, getPortfolioBySlug, getPortfolios } from "./content";

describe("Content Data Access Layer (lib/content.ts)", () => {
  test("getBlogs returns array of blogs from markdown", async () => {
    const blogs = await getBlogs();
    expect(Array.isArray(blogs)).toBe(true);
    expect(blogs.length).toBeGreaterThan(0);
    expect(blogs[0]).toHaveProperty("slug");
    expect(blogs[0]).toHaveProperty("title");
    expect(blogs[0]).toHaveProperty("content");
  });

  test("getBlogBySlug fetches a single blog post", async () => {
    const blogs = await getBlogs();
    const firstSlug = blogs[0].slug;
    const blog = await getBlogBySlug(firstSlug);
    expect(blog).not.toBeNull();
    expect(blog?.slug).toBe(firstSlug);
  });

  test("getPortfolios returns array of portfolio items", async () => {
    const portfolios = await getPortfolios();
    expect(Array.isArray(portfolios)).toBe(true);
    expect(portfolios.length).toBeGreaterThan(0);
    expect(portfolios[0]).toHaveProperty("slug");
    expect(portfolios[0]).toHaveProperty("portfolioItemType");
  });

  test("getPortfolioBySlug fetches a single portfolio item", async () => {
    const portfolios = await getPortfolios();
    const firstSlug = portfolios[0].slug;
    const item = await getPortfolioBySlug(firstSlug);
    expect(item).not.toBeNull();
    expect(item?.slug).toBe(firstSlug);
  });
});
