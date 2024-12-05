'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Doctors from '@/assets/appointments-bg.png';
import Modal from '@/components/Modal';
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig"; // Import Firestore configuration

const Doctor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    institution: '',
    contact: '',
    phone: '',
    email: '',
    country: '',
    province: '',
    city: '',
    address: '',
    incontinence: '',
    level: '',
    product: '',
    size: '',
    sampleProduct: '',
  });

  const [errors, setErrors] = useState({});

  const provinces = {
    "South Africa": ["Western Cape", "Eastern Cape", "Northern Cape", "North West", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga"],
    Mozambique: ["Maputo", "Sofala", "Zambezia", "Inhambane"],
    Namibia: ["Khomas", "Oshana", "Ohangwena", "Erongo"],
    Botswana: ["Gaborone", "Francistown", "Maun", "Serowe"],
  };

  const updateForm = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: null })); // Clear error for the field
  };

  const validateStep = () => {
    const stepErrors = {};
    if (step === 1) {
      if (!formData.institution) stepErrors.institution = "Institution name is required.";
      if (!formData.contact) stepErrors.contact = "Contact person is required.";
      if (!formData.phone || !/^\d{10,}$/.test(formData.phone)) stepErrors.phone = "Phone must be numeric and at least 10 digits.";
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) stepErrors.email = "A valid email is required.";
    } else if (step === 2) {
      if (!formData.country) stepErrors.country = "Country is required.";
      if (!formData.province) stepErrors.province = "Province is required.";
      if (!formData.city) stepErrors.city = "City is required.";
      if (!formData.address) stepErrors.address = "Address is required.";
    } else if (step === 3) {
      if (!formData.incontinence) stepErrors.incontinence = "This field is required.";
      if (!formData.level) stepErrors.level = "Incontinence level is required.";
      if (!formData.product) stepErrors.product = "Product used is required.";
      if (!formData.size) stepErrors.size = "Waist/Pants size is required.";
    } else if (step === 4) {
      if (!formData.sampleProduct) stepErrors.sampleProduct = "Sample product is required.";
      if (!formData.size) stepErrors.size = "Size is required.";
    }
    return stepErrors;
  };

  const handleNext = (e) => {
    e.preventDefault();
    const stepErrors = validateStep();
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const stepErrors = validateStep();
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    try {
      await addDoc(collection(db, "medicalRequests"), formData);
      alert("Form submitted successfully! We'll keep in touch while processing the request");

      setIsModalOpen(false);
      setStep(1);
      setFormData({
        institution: '',
        contact: '',
        phone: '',
        email: '',
        country: '',
        province: '',
        city: '',
        address: '',
        incontinence: '',
        level: '',
        product: '',
        size: '',
        sampleProduct: '',
      });
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  const renderInput = (label, key, type = "text", options = null) => (
    <div className="mb-4">
      <label className="block text-[#2C2E74] font-medium mb-2">{label}</label>
      {options ? (
        <select
          value={formData[key]}
          onChange={(e) => updateForm(key, e.target.value)}
          className={`w-full border rounded py-2 px-3 text-[#2C2E74] font-thin ${errors[key] ? "border-red-500" : ""}`}
        >
          <option value="">Select an option</option>
          {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      ) : (
        <input
          type={type}
          value={formData[key]}
          onChange={(e) => updateForm(key, e.target.value)}
          className={`w-full border rounded py-2 px-3 text-[#2C2E74] font-thin ${errors[key] ? "border-red-500" : ""}`}
        />
      )}
      {errors[key] && <span className="text-red-500 text-sm">{errors[key]}</span>}
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[390px] lg:p-5 gap-5 lg:gap-0">
      <div className="hidden lg:block relative flex-1 items-center justify-center p-5">
        <Image
          src={Doctors}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          alt="Medical professionals"
        />
      </div>
      <div className="flex-1 content-center p-5 bg-gradient-to-l from-sky-500 to-indigo-500 mx-[-2rem] pb-10 sm:mx-[-2rem] lg:mx-0">
        <div className="max-w-md mx-auto">
          <h1 className="text-center text-white text-xl sm:text-2xl lg:text-[35px] font-sans leading-6 sm:leading-7 lg:leading-8 pt-4 sm:pt-7 pb-4 lg:pb-7 font-medium">
            Are you a medical professional?
          </h1>
          <p className="text-center text-white font-thin leading-5 sm:leading-6 pb-5 sm:pb-7 text-sm sm:text-[14px]">
            If you are an eligible medical professional and not sure which Clemens® product is right for you, your loved one, or your patient, request a FREE sample by clicking the button below to submit a request form.
          </p>
          <div className="text-center">
            <button
              className="text-sky-500 bg-white cursor-pointer rounded-full py-2 px-6 hover:scale-105 transform transition duration-300 ease-out inline-block"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="w-full max-w-3xl mx-auto p-6">
          <div className="relative flex justify-between items-center mb-6">
            {[1, 2, 3, 4].map((num, i) => (
              <React.Fragment key={num}>
                <div className={`w-10 h-10 rounded-full border-2 ${step >= num ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-300 bg-white text-gray-500'} flex items-center justify-center`}>{num}</div>
                {i < 3 && <div className={`flex-1 h-1 ${step > num ? 'bg-blue-500' : 'bg-gray-300'}`} />}
              </React.Fragment>
            ))}
          </div>
          <h2 className="text-lg mb-6 text-[#2C2E74] font-bold">Step {step} of 4</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {step === 1 && (
              <>
                {renderInput("Institution Name", "institution")}
                {renderInput("Contact Person", "contact")}
                {renderInput("Phone", "phone", "tel")}
                {renderInput("Email", "email", "email")}
              </>
            )}
            {step === 2 && (
              <>
                {renderInput("Country", "country", "select", Object.keys(provinces))}
                {renderInput("State/Province", "province", "select", formData.country ? provinces[formData.country] : [])}
                {renderInput("City", "city")}
                {renderInput("Street Address", "address")}
              </>
            )}
            {step === 3 && (
              <>
                {renderInput("Currently experiencing incontinence?", "incontinence", "select", ["Yes", "No", "Not Sure", "Prefer not to say"])}
                {renderInput("Incontinence Level", "level", "select", ["Light", "Moderate", "Heavy", "Severe"])}
                {renderInput("What incontinence product are you using?", "product", "select", ["Pads", "Underwear", "Briefs", "Other"])}
                {renderInput("Waist/Pants Size", "size", "select", ["Small", "Medium", "Large", "Extra Large"])}
              </>
            )}
            {step === 4 && (
              <>
                {renderInput("Which product do you wish to sample?", "sampleProduct", "select", ["Protection Pants", "Feminine Protection", "Ultra Slips", "Unisex Pants"])}
                {renderInput("Size", "size", "select", ["Small", "Medium", "Large", "Extra Large"])}
              </>
            )}
            <div className="col-span-1 md:col-span-2 flex flex-col space-y-4">
              {step > 1 && (
                <button type="button" onClick={handlePrev} className="w-full bg-gray-800 text-white py-2 px-6 rounded-full hover:scale-105 transform transition">Previous</button>
              )}
              {step < 4 ? (
                <button type="button" onClick={handleNext} className="w-full bg-blue-500 text-white py-2 px-6 rounded-full hover:scale-105 transform transition">Next</button>
              ) : (
                <button type="submit" className="w-full bg-green-500 text-white py-2 px-6 rounded-full hover:scale-105 transform transition">Finish</button>
              )}
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Doctor;
