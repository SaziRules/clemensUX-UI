"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useCMS, useForm, usePlugin } from "tinacms";

// Import images (static, not editable)
import consumer from "@/assets/consumer.png";
import pro from "@/assets/pro.png";
import extras from "@/assets/extras.png";
import buy from "@/assets/buy.png";
import tips from "@/assets/tips.png";

const defaultRanges = [
  { src: consumer, title: "Consumer Range", description: "Comfort and protection for consumer incontinence.", link: "/products" },
  { src: pro, title: "Professional Range", description: "Professional incontinence product range, your partner for over 18 years.", link: "/products" },
  { src: extras, title: "Accessories", description: "The latest absorbency technology to keep you dry, day and night.", link: "/accessories" },
  { src: buy, title: "Where to buy", description: "You can find Clemens® products in pharmacies and popular retail stores.", link: "/stores" },
  { src: tips, title: "What to buy", description: "Practical advice, support, and resources to manage incontinence.", link: "/healthTips" },
  { src: pro, title: "Knowledge Hub", description: "Connect with others who understand and share your experiences.", link: "/articles" },
];

export default function RanjeCard() {
  const scrollRef = useRef(null);
  const cms = useCMS();

  // TinaCMS form (editable text only, images stay static)
  const formConfig = {
    id: "rangeCards",
    label: "Edit Range Cards",
    initialValues: { ranges: defaultRanges.map(({ title, description, link }) => ({ title, description, link })) },
    fields: [
      {
        name: "ranges",
        label: "Ranges",
        component: "group-list",
        itemProps: (item) => ({ label: item?.title }),
        defaultItem: () => ({ title: "New Card", description: "Card description...", link: "#" }),
        fields: [
          { name: "title", label: "Title", component: "text" },
          { name: "description", label: "Description", component: "textarea" },
          { name: "link", label: "Link", component: "text" },
        ],
      },
    ],
    onSubmit: (values) => console.log("Updated Ranges", values),
  };

  const [formData, form] = useForm(formConfig);
  usePlugin(form);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Arrows Container (Hidden on Mobile) */}
      <div className="hidden md:flex justify-end mb-3 pr-4">
        <button
          className="bg-white border-[2px] border-[#2C2E74] shadow-md p-2 rounded-full hover:bg-gray-100 transition mx-1"
          onClick={() => scroll("left")}
          aria-label="Scroll Left"
        >
          <FaChevronLeft className="text-[#2C2E74]" size={20} />
        </button>
        <button
          className="bg-white border-[2px] border-[#2C2E74] shadow-md p-2 rounded-full hover:bg-gray-100 transition"
          onClick={() => scroll("right")}
          aria-label="Scroll Right"
        >
          <FaChevronRight className="text-[#2C2E74]" size={20} />
        </button>
      </div>

      {/* Scrollable Content */}
      <div ref={scrollRef} className="flex space-x-6 overflow-x-auto md:pl-5 scrollbar-hide py-4 px-4 scroll-smooth">
        {defaultRanges.map((range, index) => {
          const editable = formData.ranges[index];
          return (
            <Link key={index} href={editable.link} className="cursor-pointer flex-shrink-0 w-[300px]">
              <div className="hover:scale-105 transition transform duration-300 ease-out">
                {/* Image stays from import, not editable */}
                <div className="relative h-[310px] w-full mb-4">
                  <Image
                    src={range.src}
                    alt={editable.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-3xl object-cover"
                  />
                </div>
                <h3 className="text-[#2C2E74] text-[24px] font-normal">{editable.title}</h3>
                <p className="text-[#2C2E74] text-[14px] font-thin w-[295px] leading-5">{editable.description}</p>
                <button className="mt-3">
                  <Image src="/tick.png" alt="Tick" width={20} height={20} />
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
