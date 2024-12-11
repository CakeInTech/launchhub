"use client";

import { useEffect, useState } from "react";
import MarkdownIt from "markdown-it";

export default function MarkdownContent({ content }: { content: string }) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const md = new MarkdownIt();
    setHtml(md.render(content));
  }, [content]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
