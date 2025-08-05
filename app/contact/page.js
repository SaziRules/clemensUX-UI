"use client";

import React from "react";
import ContactForm from "@/components/ContactForm";
import { ImOffice } from "react-icons/im";
import { HiMicrophone } from "react-icons/hi";
import { BsEnvelopePaperFill } from "react-icons/bs";
import { useCMS, useForm, usePlugin } from "tinacms";

export default function Contact() {
  const cms = useCMS();

  const formConfig = {
    id: "contact-page",
    label: "Edit Contact Page",
    initialValues: {
      officeTitle: "Head Office",
      officeAddress: "20 Mahatma Gandhi Road,\nDurban 4001",
      carelineTitle: "Careline",
      carelineContent: "0860 546 600\ninfo@lionmatch.co.za",
      writeTitle: "Write to us",
      writeAddress: "PO Box 918, Durban 4000",
    },
    fields: [
      { name: "officeTitle", label: "Office Title", component: "text" },
      { name: "officeAddress", label: "Office Address", component: "textarea" },
      { name: "carelineTitle", label: "Careline Title", component: "text" },
      { name: "carelineContent", label: "Careline Content", component: "textarea" },
      { name: "writeTitle", label: "Write Section Title", component: "text" },
      { name: "writeAddress", label: "Write Address", component: "textarea" },
    ],
    onSubmit: async (values) => {
      console.log("Updated Contact Page:", values);
      // Optionally persist changes to an API or file
    },
  };

  const [formData, form] = useForm(formConfig);
  usePlugin(form);

  return (
    <main className="max-w-7xl mx-[auto] px-8 sm:px-16 md:px-0">
      <section className="pt-[5%]">
        <ContactForm />
      </section>

      <section className="pt-[15%] md:pt-[3%] pb-[10%]">
        <div className="flex flex-col sm:flex-row gap-4 mx-[auto] max-w-7xl">
          <div className="p-10 sm:w-[48%] md:w-[100%] items-center justify-center text-center bg-gradient-to-b from-sky-500 to-indigo-500">
            <div className="flex items-center justify-center">
              <ImOffice className="text-white h-[40px] w-[40px]" />
            </div>
            <h1 className="font-bold mt-4 text-3xl text-[#fff]">{formData.officeTitle}</h1>
            <p className="font-light text-[#fff] text-[16px] pt-2 whitespace-pre-line">
              {formData.officeAddress}
            </p>
          </div>

          <div className="p-10 sm:w-[48%] md:w-[100%] items-center justify-center text-center bg-gradient-to-b from-sky-500 to-indigo-500">
            <div className="flex items-center justify-center">
              <HiMicrophone className="text-white h-[40px] w-[40px]" />
            </div>
            <h1 className="font-bold mt-4 text-3xl text-[#fff]">{formData.carelineTitle}</h1>
            <p className="font-light text-[#fff] text-[16px] pt-2 whitespace-pre-line">
              {formData.carelineContent}
            </p>
          </div>

          <div className="p-10 sm:w-[48%] md:w-[100%] items-center justify-center text-center bg-gradient-to-b from-sky-500 to-indigo-500">
            <div className="flex items-center justify-center">
              <BsEnvelopePaperFill className="text-white h-[40px] w-[40px]" />
            </div>
            <h1 className="font-bold mt-4 text-3xl text-[#fff]">{formData.writeTitle}</h1>
            <p className="font-light text-[#fff] text-[16px] pt-2 whitespace-pre-line">
              {formData.writeAddress}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
