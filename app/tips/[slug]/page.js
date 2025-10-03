// app/tips/[slug]/page.js (adjust the folder to your route)
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTipBySlug, getAllTips } from "@/sanity/queries/tip";
import HealthTips from "@/components/HealthTips";

export async function generateStaticParams() {
  const tips = await getAllTips();
  return tips.map((tip) => ({ slug: tip.slug }));
}

export default async function TipPage({ params }) {
  const { slug } = await params;                // ✅ await params
  const tip = await getTipBySlug(slug);
  if (!tip) return notFound();

  // If your Sanity field can be an object, ensure we pass a string URL to <Image/>
  const imgSrc =
    typeof tip.mainImage === "string"
      ? tip.mainImage
      : typeof tip.image === "string"
      ? tip.image
      : undefined;

  return (
    <main className="max-w-7xl mx-auto px-8 pt-[5%] sm:px-16 md:px-0">
      {/* Main Image + Intro */}
      <section className="flex flex-col sm:flex-row sm:gap-5 pb-[2%] pt-7">
        <div className="flex-1 pb-5 flex items-center justify-center">
          {imgSrc && (
            <Image
              src={imgSrc}
              alt={tip.title}
              width={800}
              height={500}
              className="w-full sm:w-[800px] object-center object-contain rounded-lg"
              priority
            />
          )}
        </div>
        <div className="flex-1 text-left sm:pl-2 lg:ml-[10px] sm:pr-8 text-[#2C2E74]">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl mb-3">
            {tip.title}
          </h1>
          <Image src="/tick.png" alt="tick" width={100} height={25} className="inline-block mr-2 mb-1" />
          {tip.excerpt && <p className=" mb-3">{tip.excerpt}</p>}
          {tip.author && (
            <p className="text-sm font-bold">
              Author: <span className="font-normal">{tip.author}</span>
            </p>
          )}
        </div>
      </section>

      {/* Body */}
      {tip.body && (
        <section className="pb-[3%]">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2C2E74] mb-4">
            Overview
          </h2>
          <div className="space-y-4">
            {tip.body
              .split(/\n\s*\n/)
              .map((para, index) => (
                <p key={index} className="text-[#2C2E74] leading-relaxed text-base">
                  {para.trim()}
                </p>
              ))}
          </div>
        </section>
      )}

      {/* Individual Tips */}
      {tip.tips?.length > 0 && (
        <section className="pt-[3%] pb-[3%] grid sm:grid-cols-2 gap-5">
          {tip.tips.map((tipContent, index) => (
            <div key={index} className="bg-[#E4EDF3] p-5 rounded-lg">
              <h2 className="text-[#2C2E74] font-medium text-xl mb-2">
                {tip.tipTitle?.[index] || `Tip ${index + 1}`}
              </h2>
              <p className="text-[#2C2E74] font-light">{tipContent}</p>
            </div>
          ))}
        </section>
      )}

      <hr className="h-px my-8 bg-gray-200 border-0" />

      {/* Related */}
      <section className="pt-[3%]">
        <h3 className="md:pl-10 pl-3 pb-4 md:text-4xl text-2xl text-[#2C2E74] font-bold">
          You may also like
        </h3>
        <HealthTips />
      </section>
    </main>
  );
}
