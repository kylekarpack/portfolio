import { transformProps } from "@unpic/core";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import type { Element } from "hast";
import { visit } from "unist-util-visit";

export interface RenderMarkdownOptions {
  /** Fenced code blocks are highlighted at build time with TanStack Highlight. */
  highlight?: boolean;
}

/** Same detection the old AppWysiwyg used — only load highlighter languages when needed. */
const CODE_FENCE_PATTERN = /(?:^|\n) {0,3}(?:`{3,}|~{3,})/;

/**
 * Netlify CDN image transforms for `![]()` images inside Markdown content,
 * replacing the old ReactMarkdown `<AppImage>` component override.
 */
function rehypeUnpicImages() {
  return (tree: any) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "img") return;
      const { src, alt, width, height } = node.properties;
      const numeric = (value: unknown, fallback: number) => {
        const parsed = Number(value);
        return Number.isNaN(parsed) || !value ? fallback : parsed;
      };
      const attrs = transformProps({
        src: String(src ?? ""),
        alt: String(alt ?? ""),
        width: numeric(width, 800),
        height: numeric(height, 500),
        layout: "constrained",
        cdn: "netlify",
        operations: { netlify: { quality: 50 } },
      });

      const { className: _className, style, ...htmlAttrs } = attrs as Record<string, unknown>;
      const styleString =
        style !== undefined && style !== null
          ? typeof style === "string"
            ? style
            : Object.entries(style as Record<string, unknown>)
                .map(([key, value]) => `${key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}:${value}`)
                .join(";")
          : undefined;

      node.properties = {
        ...htmlAttrs,
        ...(styleString ? { style: styleString } : {}),
        class: "mx-auto my-4 rounded-md shadow-xs",
      };
    });
  };
}

/** Create the unified pipeline; highlighting only joins when requested. */
async function createProcessor(options: RenderMarkdownOptions = {}) {
  let highlightPlugin: any;
  if (options.highlight) {
    const [core, remark, ts, tsx, js, jsx, json, shell, html, css, yaml] = await Promise.all([
      import("@tanstack/highlight/core"),
      import("@tanstack/highlight/remark"),
      import("@tanstack/highlight/languages/ts"),
      import("@tanstack/highlight/languages/tsx"),
      import("@tanstack/highlight/languages/js"),
      import("@tanstack/highlight/languages/jsx"),
      import("@tanstack/highlight/languages/json"),
      import("@tanstack/highlight/languages/shell"),
      import("@tanstack/highlight/languages/html"),
      import("@tanstack/highlight/languages/css"),
      import("@tanstack/highlight/languages/yaml"),
    ]);

    const highlighter = core.createHighlighter({
      languages: [ts.ts, tsx.tsx, js.js, jsx.jsx, json.json, shell.shell, html.html, css.css, yaml.yaml],
    });
    highlightPlugin = () => remark.remarkHighlightCodeBlocks({ highlighter });
  }

  const pipeline = unified()
    .use(remarkParse)
    .use(remarkGfm);

  if (highlightPlugin) {
    pipeline.use(highlightPlugin);
  }

  return pipeline
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeUnpicImages)
    .use(rehypeStringify);
}

/**
 * Render a Markdown string to raw HTML at build time.
 * Output mirrors what the previous `AppWysiwyg` (ReactMarkdown) produced.
 */
export async function renderMarkdown(content: string, options: RenderMarkdownOptions = {}): Promise<string> {
  if (!content) return "";
  const processor = await createProcessor({
    highlight: options.highlight ?? CODE_FENCE_PATTERN.test(content),
  });
  return String(await processor.process(content));
}
