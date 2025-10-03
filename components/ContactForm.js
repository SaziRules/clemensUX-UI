"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { getContactFormContent } from "@/sanity/queries/contactForm";

const ContactForm = () => {
  const [content, setContent] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await getContactFormContent();
      setContent(data);
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await addDoc(collection(db, "contactMessages"), {
        ...formData,
        timestamp: new Date(),
      });

      setSuccessMessage("✅ Your message has been sent successfully!");
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setErrorMessage("❌ Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /** 🔹 Skeleton loader */
  if (!content) {
    return (
      <div className="flex flex-col lg:flex-row h-auto lg:h-[430px] lg:p-5 gap-5 lg:gap-0 animate-pulse">
        {/* Form Section Skeleton */}
        <div className="flex-1 p-5 bg-gradient-to-l from-sky-500 to-indigo-500 mx-[-2rem] sm:mx-[-2rem] lg:mx-0 rounded-md">
          <div className="h-8 bg-white/40 w-2/3 mx-auto rounded mb-6"></div>
          <div className="space-y-3 w-full max-w-[500px] mx-auto">
            <div className="h-10 bg-white/40 rounded"></div>
            <div className="h-10 bg-white/40 rounded"></div>
            <div className="h-10 bg-white/40 rounded"></div>
            <div className="h-10 bg-white/40 rounded"></div>
            <div className="h-24 bg-white/40 rounded"></div>
            <div className="h-10 bg-white/60 rounded"></div>
          </div>
        </div>

        {/* Image Section Skeleton */}
        <div className="hidden lg:block flex-1 bg-gray-200 rounded-md"></div>
      </div>
    );
  }

  /** 🔹 Real Content */
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[430px] lg:p-5 gap-5 lg:gap-0">
      {/* Form Section */}
      <div className="flex-1 items-center justify-center content-center p-5 bg-gradient-to-l from-sky-500 to-indigo-500 mx-[-2rem] sm:mx-[-2rem] lg:mx-0">
        <h1 className="text-center text-white text-xl sm:text-2xl lg:text-[35px] mx-auto font-sans leading-6 pt-4 sm:pt-7 lg:leading-8 lg:w-[550px] pb-4 lg:pb-7 font-medium">
          {content.heading}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="text-center w-full max-w-[500px] space-y-2 items-center mx-auto justify-center pb-7 px-4 sm:px-0 "
        >
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-2 justify-center">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full sm:flex-1 rounded-md bg-white px-5 py-2 font-thin text-sm focus:outline-none"
              placeholder="Enter your name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full sm:flex-1 rounded-md bg-white px-5 py-2 font-thin text-sm focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-2 justify-center">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full sm:flex-1 rounded-md bg-white px-5 py-2 font-thin text-sm focus:outline-none"
              placeholder="Your company name"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full sm:flex-1 rounded-md bg-white px-5 py-2 font-thin text-sm focus:outline-none"
              placeholder="Your contact number"
            />
          </div>

          <div className="mb-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-md bg-white px-5 py-2 font-thin text-sm focus:outline-none resize-none"
              placeholder="Your message"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-white text-sky-500 rounded-md px-5 py-2 text-sm font-medium hover:bg-[#2C2E74] hover:text-white transition duration-300 ease-out w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : content.buttonText}
          </button>

          {successMessage && (
            <p className="text-green-500 text-sm mt-2">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
        </form>
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
