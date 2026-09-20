import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Blog, Portfolio } from "@/types";

const contentDir = path.join(process.cwd(), "content");
const blogDir = path.join(contentDir, "blog");
const portfolioDir = path.join(contentDir, "portfolio");

export async function getBlogs(): Promise<Blog[]> {
  if (!fs.existsSync(blogDir)) return [];
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));

  const blogs: Blog[] = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(blogDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      publicationDate: data.publicationDate || new Date().toISOString(),
      categories: data.categories || [],
      previewImage: data.previewImage || undefined,
      content: content.trim(),
    };
  });

  return blogs.sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime());
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const fullPath = path.join(blogDir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    publicationDate: data.publicationDate || new Date().toISOString(),
    categories: data.categories || [],
    previewImage: data.previewImage || undefined,
    content: content.trim(),
  };
}

export async function getPortfolios(): Promise<Portfolio[]> {
  if (!fs.existsSync(portfolioDir)) return [];
  const files = fs.readdirSync(portfolioDir).filter((f) => f.endsWith(".md"));

  const portfolios: Portfolio[] = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(portfolioDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      date: data.date || new Date().toISOString(),
      portfolioItemType: data.portfolioItemType || "past",
      images: Array.isArray(data.images) ? data.images : [],
      content: content.trim(),
    };
  });

  return portfolios.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPortfolioBySlug(slug: string): Promise<Portfolio | null> {
  const fullPath = path.join(portfolioDir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || new Date().toISOString(),
    portfolioItemType: data.portfolioItemType || "past",
    images: Array.isArray(data.images) ? data.images : [],
    content: content.trim(),
  };
}
