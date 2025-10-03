"use client";

import { useEffect, useState } from "react";
import Features from "@/components/Features";
import Subscriber from "@/components/Subscriber";
import HardProducts from "@/components/HardProducts";
import { getAboutSections } from "@/sanity/queries/about";
import { PortableText } from "@portabletext/react";
import { ptComponents } from "@/sanity/lib/portableText";

export default function AboutPage() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSections() {
      try {
        const data = await getAboutSections();
        setSections(data);
      } catch (err) {
        console.error("Error fetching About sections:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchSections();
  }, []);

  if (loading) {
    return (
      <main className="max-w-7xl mx-auto px-8 pt-[5%] sm:px-16 md:px-0 animate-pulse">
        <section className="flex flex-col gap-3 md:flex-row">
          <div className="flex-1 h-[250px] bg-gray-300 rounded-md"></div>
          <div className="flex-1 h-[250px] bg-gray-300 rounded-md"></div>
        </section>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-8 pt-[5%] sm:px-16 md:px-0">

      {/* Top Two Sections (About + Promise) */}
      <section className="flex w-full flex-col gap-3 md:flex-row md:items-stretch">
        {sections.slice(0, 2).map((sec, index) => (
          <div
            key={sec._id}
            className={`flex-1 p-10 w-full ${
              index === 0
                ? "bg-gradient-to-r from-indigo-500 to-sky-500 md:pr-10"
                : "bg-gradient-to-r from-sky-500 to-indigo-500 md:pl-10"
            }`}
          >
            <h2 className="md:text-6xl font-bold text-white pb-4">
              {sec.title}
            </h2>
            {sec.subtitle && (
              <h3 className="md:text-3xl font-semibold text-white pb-3">
                {sec.subtitle}
              </h3>
            )}
            {Array.isArray(sec.body) ? (
              <PortableText value={sec.body} components={ptComponents} />
            ) : (
              <p className="font-light text-white">{sec.body}</p>
            )}
          </div>
        ))}
      </section>

      {/* Features Carousel */}
      <section className="mb-[5%]">
        <Features />
      </section>

      {/* Bottom Two Sections (Commitment + Emphasis) */}
      <section className="flex w-full flex-col gap-3 md:flex-row md:items-stretch mb-[8%]">
        {sections.slice(2, 4).map((sec, index) => (
          <div
            key={sec._id}
            className={`flex-1 p-10 w-full ${
              index === 0
                ? "bg-gradient-to-l from-sky-500 to-indigo-500 md:pr-10"
                : "bg-gradient-to-l from-indigo-500 to-sky-500 md:pl-10"
            }`}
          >
            <h2 className="md:text-6xl font-bold text-white pb-4">
              {sec.title}
            </h2>
            {sec.subtitle && (
              <h3 className="md:text-3xl font-semibold text-white pb-3">
                {sec.subtitle}
              </h3>
            )}
            {Array.isArray(sec.body) ? (
              <PortableText value={sec.body} components={ptComponents} />
            ) : (
              <p className="font-light text-white">{sec.body}</p>
            )}
          </div>
        ))}
      </section>

      {/* HardProducts Section */}
      <section className="mb-[8%]">
        <HardProducts />
      </section>

      {/* Subscriber */}
      <section className="mb-[10%]">
        <Subscriber />
      </section>
    </main>
  );
}
