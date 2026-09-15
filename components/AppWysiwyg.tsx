"use client";

import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { AppImage } from "@/components/AppImage";

export interface AppWysiwygProps {
  content: string;
}

export const AppWysiwyg = (props: AppWysiwygProps) => {
  const { content } = props;

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, [content]);

  if (!content) return null;

  return (
    <div className="wysiwyg">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
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
