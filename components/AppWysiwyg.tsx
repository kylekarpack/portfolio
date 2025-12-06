"use client";

import { NodeRendererType, RichText } from "@graphcms/rich-text-react-renderer";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import * as React from "react";

export interface AppWysiwygProps {
  content: any;
  renderers?: NodeRendererType;
}

export const AppWysiwyg = (props: AppWysiwygProps) => {
  const { content } = props;

  // Life Cycle
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="wysiwyg">
      <RichText
        content={content}
        renderers={{
          code_block: ({ children }) => (
            <pre className="line-numbers language-js">
              <code className="language-js">{children}</code>
            </pre>
          ),
          ...(props.renderers ?? {}),
        }}
      />
    </div>
  );
};
