import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { AppImage } from "@/components/AppImage";

export interface AppWysiwygProps {
  content: string;
}

const CODE_FENCE_PATTERN = /(?:^|\n) {0,3}(?:`{3,}|~{3,})/;

const loadHighlightPlugin = async () => {
  const [core, ts, tsx, js, jsx, json, shell, html, css, yaml, remark] = await Promise.all([
    import("@tanstack/highlight/core"),
    import("@tanstack/highlight/languages/ts"),
    import("@tanstack/highlight/languages/tsx"),
    import("@tanstack/highlight/languages/js"),
    import("@tanstack/highlight/languages/jsx"),
    import("@tanstack/highlight/languages/json"),
    import("@tanstack/highlight/languages/shell"),
    import("@tanstack/highlight/languages/html"),
    import("@tanstack/highlight/languages/css"),
    import("@tanstack/highlight/languages/yaml"),
    import("@tanstack/highlight/remark"),
  ]);

  const highlighter = core.createHighlighter({
    languages: [ts.ts, tsx.tsx, js.js, jsx.jsx, json.json, shell.shell, html.html, css.css, yaml.yaml],
  });

  return remark.remarkHighlightCodeBlocks({ highlighter });
};

let highlightPluginPromise: ReturnType<typeof loadHighlightPlugin> | undefined;

const getHighlightPlugin = () => {
  highlightPluginPromise ??= loadHighlightPlugin();
  return highlightPluginPromise;
};

export const AppWysiwyg = async ({ content }: AppWysiwygProps) => {

  if (!content) return null;

  const highlightPlugin = CODE_FENCE_PATTERN.test(content) ? await getHighlightPlugin() : undefined;

  return (
    <div className="wysiwyg">
      <ReactMarkdown
        remarkPlugins={highlightPlugin ? [remarkGfm, highlightPlugin] : [remarkGfm]}
        components={{
          img: ({ src, alt, width, height }) => {
            const parsedWidth = width ? Number(width) : 800;
            const parsedHeight = height ? Number(height) : 500;
            return (
              <AppImage
                src={typeof src === "string" ? src : ""}
                alt={alt || ""}
                width={isNaN(parsedWidth) ? 800 : parsedWidth}
                height={isNaN(parsedHeight) ? 500 : parsedHeight}
                layout="constrained"
                background="auto"
                className="mx-auto my-4 rounded-md shadow-sm"
              />
            );
          },
        }}>
        {content}
      </ReactMarkdown>
    </div>
  );
};
