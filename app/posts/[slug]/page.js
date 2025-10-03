// app/posts/[slug]/page.js
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getPostBySlug, getAllPosts } from "@/sanity/queries/post";
import HardPosts from "@/components/HardPosts";

export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

// (optional) if you also define metadata, remember to await params there too
// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const post = await getPostBySlug(slug);
//   return { title: post?.title ?? "Post" };
// }

export default async function PostPage({ params }) {
  const { slug } = await params;                // 👈 await params
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const related = (await getAllPosts()).filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <main className="max-w-7xl mx-auto px-8 sm:px-16 md:px-0 pt-[5%]">
      {/* Hero */}
      <section className="flex flex-col sm:flex-row sm:gap-5 pb-[3%] pt-7">
        <div className="flex-1 pb-5 items-center sm:items-start sm:justify-center">
          {post.mainImage && (
            <Image
              src={post.mainImage}
              alt={post.title}
              width={800}
              height={500}
              className="w-full sm:w-[800px] object-center object-contain rounded-lg"
              priority
            />
          )}
        </div>

        <div className="flex-1 sm:pl-2 lg:ml-[25px] md:pl-0 sm:pr-8 text-[#2C2E74]">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl mb-3">
            {post.title}
          </h1>
          <Image src="/tick.png" alt="tick" width={100} height={25} className="inline-block mr-2 mb-1" />

          {post.excerpt && <p className="mb-4">{post.excerpt}</p>}

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

      {/* Related */}
      <section className="pt-[3%]">
        <h3 className="md:pl-10 pl-3 pb-4 md:text-4xl text-2xl text-[#2C2E74] font-bold">
          You may also like
        </h3>
        <HardPosts posts={related} />
      </section>
    </main>
  );
}
