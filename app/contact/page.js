"use client";

import React, { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";
import { ImOffice } from "react-icons/im";
import { HiMicrophone } from "react-icons/hi";
import { BsEnvelopePaperFill } from "react-icons/bs";
import { getContact } from "@/sanity/queries/contact";

export default function Contact() {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getContact();
      setContactData(data);
    }
    fetchData();
  }, []);

  if (!contactData) return <div className="p-10">Loading contact info...</div>;

  return (
    <main className="max-w-7xl mx-[auto] px-8 sm:px-16 md:px-0">
      <section className="pt-[5%]">
        <ContactForm />
      </section>

      <section className="pt-[15%] md:pt-[3%] pb-[10%]">
        <div className="flex flex-col sm:flex-row gap-4 mx-[auto] max-w-7xl">
          {/* Office */}
          <div className="p-10 sm:w-[48%] md:w-[100%] text-center bg-gradient-to-b from-sky-500 to-indigo-500">
            <div className="flex items-center justify-center">
              <ImOffice className="text-white h-[40px] w-[40px]" />
            </div>
            <h1 className="font-bold mt-4 text-3xl text-[#fff]">
              {contactData.officeTitle}
            </h1>
            <p className="font-light text-[#fff] text-[16px] pt-2 whitespace-pre-line">
              {contactData.officeAddress}
            </p>
          </div>

          {/* Careline */}
          <div className="p-10 sm:w-[48%] md:w-[100%] text-center bg-gradient-to-b from-sky-500 to-indigo-500">
            <div className="flex items-center justify-center">
              <HiMicrophone className="text-white h-[40px] w-[40px]" />
            </div>
            <h1 className="font-bold mt-4 text-3xl text-[#fff]">
              {contactData.carelineTitle}
            </h1>
            <p className="font-light text-[#fff] text-[16px] pt-2 whitespace-pre-line">
              {contactData.carelineContent}
            </p>
          </div>

          {/* Write */}
          <div className="p-10 sm:w-[48%] md:w-[100%] text-center bg-gradient-to-b from-sky-500 to-indigo-500">
            <div className="flex items-center justify-center">
              <BsEnvelopePaperFill className="text-white h-[40px] w-[40px]" />
            </div>
            <h1 className="font-bold mt-4 text-3xl text-[#fff]">
              {contactData.writeTitle}
            </h1>
            <p className="font-light text-[#fff] text-[16px] pt-2 whitespace-pre-line">
              {contactData.writeAddress}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
