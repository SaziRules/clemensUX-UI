"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import tipsData from "@/json/tips";
import HealthTips from "@/components/HealthTips";
import { useCMS, useForm, usePlugin } from "tinacms";

export default function TipsPage({ params }) {
  const cms = useCMS();
  const [slug, setSlug] = useState(null);

  // Handle Next.js 15 async params
  useEffect(() => {
    (async () => {
      const resolved = await params;
      setSlug(resolved.slug);
    })();
  }, [params]);

  const tipIndex = slug ? tipsData.findIndex((tip) => tip.slug === slug) : -1;
  const initialTip =
    tipIndex !== -1
      ? tipsData[tipIndex]
      : {
          id: "",
          image: "",
          mainImage: "",
          title: "",
          slug: "",
          body: "",
          author: "",
          tipTitle: [],
          tips: [],
        };

  // ---- Tina Form Config ----
  const formConfig = {
    id: `tip-${initialTip.id || "empty"}`,
    label: `Edit Tip: ${initialTip.title || "Untitled"}`,
    initialValues: initialTip,
    fields: [
      { name: "title", label: "Title", component: "text" },
      { name: "slug", label: "Slug", component: "text" },
      { name: "body", label: "Body", component: "textarea" },
      { name: "author", label: "Author", component: "text" },
      { name: "image", label: "Image", component: "text" },
      { name: "mainImage", label: "Main Image", component: "text" },
      {
        name: "tipTitle",
        label: "Tip Section Titles",
        component: "list",
        field: { component: "text" },
      },
      {
        name: "tips",
        label: "Tips Content",
        component: "list",
        field: { component: "textarea" },
      },
    ],
    onSubmit: async (values) => {
      if (tipIndex !== -1) {
        const updatedTips = [...tipsData];
        updatedTips[tipIndex] = values;
        await fetch("/api/save-tips", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedTips),
        });
      }
    },
  };

  const [formData, form] = useForm(formConfig);
  usePlugin(form);

  const tip = cms.enabled ? formData : initialTip;

  if (!slug) return <div>Loading...</div>;
  if (tipIndex === -1) return <div>Tip not found</div>;

  return (
    <main className="max-w-7xl mx-auto px-8 pt-[5%] sm:px-16 md:px-0">
      <section className="flex flex-col sm:gap-5 sm:px-5 sm:flex-row pb-[2%] pt-7">
        <div className="flex-1 pb-5 items-center sm:items-start sm:justify-center">
          <Image
            src={tip.mainImage || tip.image}
            alt={tip.title}
            width={500}
            height={500}
            className="w-full sm:w-[500px] object-center object-contain"
          />
        </div>
        <div className="flex-1 sm:items-center sm:justify-start text-left sm:pl-8 lg:ml-[-80px] md:pl-0 sm:pr-8">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl text-[#2C2E74] mb-3">
            {tip.title}
          </h1>
          <p className="text-[#2C2E74] mb-4">{tip.body}</p>
          <p className="text-sm font-bold text-[#2C2E74]">
            Author: <span className="font-normal">{tip.author}</span>
          </p>
        </div>
      </section>

      <hr className="h-px my-8 bg-gray-100 border-[0] dark:bg-gray-100" />

      <section className="pt-[3%] pb-[3%]">
        <div className="grid sm:grid-cols-2 items-center gap-5">
          {tip.tips.map((tipContent, index) => (
            <div
              key={index}
              className="bg-[#E4EDF3] h-full p-5 md:w-full rounded-lg"
            >
              <h2 className="text-[#2C2E74] font-medium text-xl">
                {tip.tipTitle[index] || `Tip ${index + 1}`}
              </h2>
              <p className="text-[#2C2E74] font-light">{tipContent}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="h-px my-8 bg-gray-100 border-[0] dark:bg-gray-100" />

      <section className="pt-[3%]">
        <h3 className="md:pl-10 pl-3 pb-4 md:text-4xl text-2xl text-[#2C2E74] font-bold">
          You may also like
        </h3>
        <HealthTips />
      </section>
    </main>
  );
}
