"use client";

import DOMPurify from "isomorphic-dompurify";
import React from "react";

type Props = {
  html?: string | null;
  className?: string;
  // Optional allowlist config; by default we use DOMPurify defaults
  sanitizeOptions?: Parameters<typeof DOMPurify.sanitize>[1];
};

/**
 * HtmlRenderer safely renders arbitrary HTML strings using DOMPurify.
 * Use this when the API returns preformatted HTML like `<p>...</p>`.
 */
export default function HtmlRenderer({
  html,
  className,
  sanitizeOptions,
}: Props) {
  if (!html) return null;
  let clean = DOMPurify.sanitize(html, sanitizeOptions);
  // Ensure empty paragraphs still render visual spacing by inserting a non-breaking space
  // Handles <p></p>, <p>\n</p>, <p><br></p>, and variants with whitespace
  clean = clean.replace(
    /<p>(?:\s|&nbsp;|<br\s*\/?\s*>)*<\/p>/gi,
    "<p>&nbsp;</p>"
  );
  return (
    <div
      className={className}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}
