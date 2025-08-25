"use client";

import React, { useState } from "react";
import Subscription from "@/assets/subscriber.png";
import Image from "next/image";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig"; // your Firestore config

const Subscriber = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Static editable text (replace with JSON later if you want easy editing)
  const heading = "Join our mailing list and live every moment with confidence!";
  const buttonText = "Subscribe";

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    return newErrors;
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrors({});
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "subscribers"), {
        name,
        email,
        timestamp: new Date(),
      });
      setSuccessMessage("Thank you for subscribing!");
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error adding subscriber: ", error);
      setErrors({ general: "Failed to subscribe. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[360px] lg:gap-0">
      {/* Form Section */}
      <div className="flex-1 content-center p-5 bg-gradient-to-l from-sky-500 to-indigo-500 mx-[-2rem] sm:mx-[-2rem] lg:mx-0">
        <h1 className="text-center text-white text-xl sm:text-2xl lg:text-[35px] mx-auto font-sans leading-6 pt-4 sm:pt-7 lg:leading-8 lg:w-[550px] pb-4 lg:pb-7 font-medium m-0">
          {heading}
        </h1>
        <form
          onSubmit={handleSubscribe}
          className="text-center w-full max-w-[500px] space-y-2 items-center mx-auto justify-center pb-7 px-4 sm:px-0"
        >
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-2 justify-center">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full sm:flex-1 rounded-full bg-white px-5 py-2 font-thin text-sm focus:outline-none ${
                errors.name ? "border border-red-500" : ""
              }`}
              placeholder="Enter your name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full sm:flex-1 rounded-full bg-white px-5 py-2 font-thin text-sm focus:outline-none ${
                errors.email ? "border border-red-500" : ""
              }`}
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-sky-500 rounded-full px-5 py-2 text-sm font-medium hover:bg-[#2C2E74] hover:text-white transition duration-300 ease-out w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : buttonText}
          </button>
          {errors.general && (
            <p className="text-red-500 text-sm mt-2">{errors.general}</p>
          )}
          {successMessage && (
            <p className="text-green-500 text-sm mt-2">{successMessage}</p>
          )}
        </form>
      </div>

      {/* Image Section */}
      <div className="hidden lg:block relative flex-1 items-center justify-center p-5 h-full">
        <Image
          src={Subscription}
          fill
          style={{ objectFit: "cover" }}
          alt="Promo image"
        />
      </div>
    </div>
  );
};

export default Subscriber;
