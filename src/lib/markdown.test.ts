import { describe, expect, test } from "vitest";
import { renderMarkdown } from "./markdown";

describe("renderMarkdown", () => {
  test("renders plain markdown to HTML at build time", async () => {
    expect(await renderMarkdown("**bold** and `code`")).toBe(
      "<p><strong>bold</strong> and <code>code</code></p>",
    );
  });

  test("highlight fences_ are tokenized with TanStack Highlight", async () => {
    const html = await renderMarkdown("```ts\nconst answer: number = 42;\n```");

    expect(html).toContain("th-keyword");
    expect(html).toContain("th-code--ts");
  });

  test("images inside markdown get Netlify CDN srcsets and wysiwyg classes", async () => {
    const html = await renderMarkdown("![Alt text](/images/example.jpg)");

    expect(html).toContain('class="mx-auto my-4 rounded-md shadow-xs"');
    expect(html).toContain("srcset=");
    expect(html).toContain("q=50");
  });

  test("empty content renders nothing", async () => {
    expect(await renderMarkdown("")).toBe("");
  });
});
