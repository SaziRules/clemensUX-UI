"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getContactFormContent } from "@/sanity/queries/contactForm";

const ContactForm = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getContactFormContent();
      setContent(data);
    }
    fetchData();
  }, []);

  if (!content) return <div>Loading...</div>;

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[430px] lg:p-5 gap-5 lg:gap-0">
      {/* Form Section */}
      <div className="flex-1 items-center justify-center content-center p-5 bg-gradient-to-l from-sky-500 to-indigo-500 mx-[-2rem] sm:mx-[-2rem] lg:mx-0">
        <h1 className="text-center text-white text-xl sm:text-2xl lg:text-[35px] mx-auto font-sans leading-6 pt-4 sm:pt-7 lg:leading-8 lg:w-[550px] pb-4 lg:pb-7 font-medium">
          {content.heading}
        </h1>
        <div className="text-center w-full max-w-[500px] space-y-2 items-center mx-auto justify-center pb-7 px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-2 justify-center">
            <input
              type="text"
              className="w-full sm:flex-1 rounded-md bg-white px-5 py-2 font-thin text-sm focus:outline-none"
              placeholder="Enter your name"
            />
            <input
              type="email"
              className="w-full sm:flex-1 rounded-md bg-white px-5 py-2 font-thin text-sm focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-2 justify-center">
            <input
              type="text"
              className="w-full sm:flex-1 rounded-md bg-white px-5 py-2 font-thin text-sm focus:outline-none"
              placeholder="Your company name"
            />
            <input
              type="tel"
              className="w-full sm:flex-1 rounded-md bg-white px-5 py-2 font-thin text-sm focus:outline-none"
              placeholder="Your contact number"
            />
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-2 justify-center">
            <textarea
              className="w-full sm:flex-1 rounded-md bg-white px-5 py-2 font-thin text-sm focus:outline-none resize-none"
              placeholder="Your message"
            />
          </div>
          <button className="bg-white text-sky-500 rounded-md px-5 py-2 text-sm font-medium hover:bg-[#2C2E74] hover:text-white transition duration-300 ease-out w-full">
            {content.buttonText}
          </button>
        </div>
      </div>

      {/* Image Section */}
      {content.imageUrl && (
        <div className="hidden lg:block relative flex-1 items-center justify-center p-5">
          <Image
            src={content.imageUrl}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            alt="Contact Promo"
          />
        </div>
      )}
    </div>
  );
};

export default ContactForm;
