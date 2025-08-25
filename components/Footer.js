"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "@/assets/logo-footer.png";

export default function Footer() {
  const footerData = {
    logoAlt: "Clemens Logo",
    companyText:
      "Made in South Africa for Sylko NSP (Pty) Ltd.\nA subsidiary of The Lion Match Company (Pty) Ltd",
    quickLinks: [
      { name: "About Us", url: "/about" },
      { name: "Products", url: "/products" },
      { name: "Health Tips", url: "/healthTips" },
      { name: "Where to buy", url: "/contact" },
    ],
    moreLinks: [
      { name: "BEE Certificate", url: "BEE-CERT.pdf" },
      { name: "Customer Application Form", url: "#" },
    ],
    email: "info@lionmatch.co.za",
    phone: "0860 546 600",
    address: "20 Mahatma Gandhi Road, Point, Durban, 4000",
    social: {
      facebook: "https://web.facebook.com/ClemensSouthAfrica",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  };

  return (
    <footer className="w-full bg-gradient-to-l from-sky-500 to-indigo-500 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 pb-6 border-b border-white/20">
        {/* Logo & Company Info */}
        <div className="flex flex-col items-start">
          <Image src={Logo} alt={footerData.logoAlt} width={100} height={50} />
          <p className="text-[14px] font-light pt-5 whitespace-pre-line">
            {footerData.companyText}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {footerData.quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className="hover:underline font-light text-[14px]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* More Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">More</h3>
          <ul className="space-y-2">
            {footerData.moreLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  target="_blank"
                  className="hover:underline font-light text-[14px]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="font-bold text-lg mb-3">Contact</h3>
          <p>
            Email:{" "}
            <a
              href={`mailto:${footerData.email}`}
              className="hover:underline font-light text-[14px]"
            >
              {footerData.email}
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href={`tel:${footerData.phone}`}
              className="hover:underline font-light text-[14px]"
            >
              {footerData.phone}
            </a>
          </p>
          <p className="pt-3 font-light text-[14px] whitespace-pre-line">
            {footerData.address}
          </p>
          <div className="flex space-x-4 mt-3">
            <a
              href={footerData.social.facebook}
              className="text-white hover:text-gray-200"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href={footerData.social.twitter}
              className="text-white hover:text-gray-200"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href={footerData.social.instagram}
              className="text-white hover:text-gray-200"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href={footerData.social.linkedin}
              className="text-white hover:text-gray-200"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-[14px] font-light pt-10">
        © Copyright - {new Date().getFullYear()} Clemens | All rights reserved.
      </div>
    </footer>
  );
}
