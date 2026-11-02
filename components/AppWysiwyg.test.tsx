import { renderToStaticMarkup } from "react-dom/server";
import { expect, test } from "vitest";
import { AppWysiwyg } from "./AppWysiwyg";

test("highlights fenced code blocks with TanStack Highlight", async () => {
  const markup = renderToStaticMarkup(
    await AppWysiwyg({ content: "```ts\nconst answer: number = 42;\n```" })
  );

  expect(markup).toContain("th-keyword");
  expect(markup).toContain("answer:");
});

test("does not add highlight markup when there are no code fences", async () => {
  const markup = renderToStaticMarkup(await AppWysiwyg({ content: "Just some markdown." }));

  expect(markup).not.toContain("th-keyword");
  expect(markup).toContain("Just some markdown.");
});
