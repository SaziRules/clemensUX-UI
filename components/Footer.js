"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { getFooterData } from "@/sanity/queries/footer";

export default function Footer() {
  const [footerData, setFooterData] = useState(null);
  const [isStudio, setIsStudio] = useState(false);

  useEffect(() => {
    // detect studio
    if (typeof window !== "undefined" && window.location.pathname.startsWith("/studio")) {
      setIsStudio(true);
      return;
    }

    async function fetchData() {
      const data = await getFooterData();
      setFooterData(data);
    }
    fetchData();
  }, []);

  // Don’t render footer in studio
  if (isStudio) return null;

  if (!footerData) {
    // Skeleton fallback
    return (
      <footer className="w-full bg-gradient-to-l from-sky-500 to-indigo-500 text-white py-10 animate-pulse">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 pb-6">
          <div className="h-8 w-24 bg-white/40 rounded mb-4"></div>
          <div className="h-5 w-32 bg-white/40 rounded"></div>
          <div className="h-5 w-32 bg-white/40 rounded"></div>
          <div className="h-5 w-32 bg-white/40 rounded"></div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full bg-gradient-to-l from-sky-500 to-indigo-500 text-white py-10">
      {/* your normal footer JSX here */}
    </footer>
  );
}
