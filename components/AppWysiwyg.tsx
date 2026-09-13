"use client";

import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};
