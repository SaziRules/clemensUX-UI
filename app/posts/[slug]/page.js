import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getPostBySlug, getAllPosts } from "@/sanity/queries/post";
import HardPosts from "@/components/HardPosts";

export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);
  const related = await getAllPosts();

  if (!post) {
    return <div className="p-10">Post not found. Please check the slug.</div>;
  }

  return (
    <main className="max-w-7xl mx-auto px-8 sm:px-16 md:px-0 pt-[5%]">
      <section className="flex flex-col sm:flex-row sm:gap-5 pb-[3%] pt-7">
        <div className="flex-1 pb-5 items-center sm:items-start sm:justify-center">
          {post.mainImage && (
            <Image
              src={post.mainImage}
              alt={post.title}
              width={500}
              height={500}
              className="w-full sm:w-[500px] object-center object-contain rounded-lg"
            />
          )}
        </div>

        <div className="flex-1 sm:pl-8 lg:ml-[-80px] md:pl-0 sm:pr-8 text-[#2C2E74]">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl mb-3">
            {post.title}
          </h1>

          {post.excerpt && <p className="mb-4 italic">{post.excerpt}</p>}

          {post.body && (
            <div className="prose prose-slate max-w-none">
              <PortableText value={post.body} />
            </div>
          )}

          {post.author && (
            <p className="text-sm font-bold mt-4">
              Author: <span className="font-normal">{post.author}</span>
            </p>
          )}

          {post.features?.length > 0 && (
            <ul className="list-disc pl-5 mt-4 space-y-1">
              {post.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <hr className="h-px my-8 bg-gray-200 border-0" />

      <section className="pt-[3%]">
        <h3 className="md:pl-10 pl-3 pb-4 md:text-4xl text-2xl text-[#2C2E74] font-bold">
          You may also like
        </h3>
        <HardPosts
          posts={related.filter((p) => p.slug !== post.slug).slice(0, 4)}
        />
      </section>
    </main>
  );
}
