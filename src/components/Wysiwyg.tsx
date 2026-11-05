/** Markdown HTML wrapper, mirroring the old `wysiwyg` container. */
export const Wysiwyg = ({ html }: { html: string }) =>
  html ? <div className="wysiwyg" dangerouslySetInnerHTML={{ __html: html }} /> : null;
