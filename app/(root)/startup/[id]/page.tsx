import { client } from "@/sanity/lib/client";
import React from "react";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import MarkdownContent from "@/components/MarkdownContent";

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) {
    return notFound();
  }

  const pitchContent = post?.pitch || "";

  return (
    <>
      {/* Hero Section */}
      <section className="teal_container !min-h-[260px]">
        <p className="tag">{formatDate(post?._createdAt)}</p>
        <h1 className="heading">{post.title}</h1>
        <p className="sub-heading !max-w-5xl">{post.description}</p>
      </section>

      {/* Content Section */}
      <section className="section_container">
        <img
          src={post.image}
          alt={`${post.title} thumbnail`}
          className="w-full h-auto rounded-xl"
        />

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          {/* Author Info */}
          <div className="flex-between gab-5">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={post.author.image}
                alt={`${post.author.name}'s avatar`}
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />
              <div>
                <p className="text-20-medium">{post.author.name}</p>
                <p className="text-16-medium">@{post.author.username}</p>
              </div>
            </Link>
            <p className="category-tag">{post.category}</p>
          </div>

          <h3 className="text-30-bold">Pitch Details</h3>

          <MarkdownContent content={pitchContent} />
        </div>
      </section>
    </>
  );
};

export default page;