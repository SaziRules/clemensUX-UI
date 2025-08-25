"use client";

import React from "react";
import ContactForm from "@/components/ContactForm";
import { ImOffice } from "react-icons/im";
import { HiMicrophone } from "react-icons/hi";
import { BsEnvelopePaperFill } from "react-icons/bs";

export default function Contact() {
  const contactData = {
    officeTitle: "Head Office",
    officeAddress: "20 Mahatma Gandhi Road,\nDurban 4001",
    carelineTitle: "Careline",
    carelineContent: "0860 546 600\ninfo@lionmatch.co.za",
    writeTitle: "Write to us",
    writeAddress: "PO Box 918, Durban 4000",
  };

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
