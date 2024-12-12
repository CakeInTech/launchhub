"use client";

import { useEffect, useState } from "react";
import MarkdownIt from "markdown-it";
import dynamic from "next/dynamic";

const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
});

export default function PitchContent({ content }: { content: string }) {
  const [parsedContent, setParsedContent] = useState(content);

  useEffect(() => {
    setParsedContent(md.render(content));
  }, [content]);

  return (
    <article
      className="prose max-w-xl font-work-sans break-all"
      dangerouslySetInnerHTML={{ __html: parsedContent }}
    />
  );
}
