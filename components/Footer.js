"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { getFooterData } from "@/sanity/queries/footer";

export default function Footer() {
  const [footerData, setFooterData] = useState(null);
  const pathname = usePathname();

  // 🔹 Hide Footer inside Sanity Studio
  if (pathname?.startsWith("/studio")) return null;

  useEffect(() => {
    async function fetchData() {
      const data = await getFooterData();
      setFooterData(data);
    }
    fetchData();
  }, []);

  // 🔹 Skeleton Loader
  if (!footerData) {
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

  // 🔹 Actual Footer
  return (
    <footer className="w-full bg-gradient-to-l from-sky-500 to-indigo-500 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 pb-6 border-b border-white/20">
        
        {/* Logo & Company Info */}
        <div className="flex flex-col items-start">
          {footerData.logoUrl && (
            <Image
              src={footerData.logoUrl}
              alt={footerData.logoAlt || "Footer Logo"}
              width={100}
              height={50}
            />
          )}
          <p className="text-[14px] font-light pt-5 whitespace-pre-line">
            {footerData.companyText}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {footerData.quickLinks?.map((link, index) => (
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
            {footerData.moreLinks?.map((link, index) => {
              const href = link.fileUrl || link.url || "#";
              return (
                <li key={index}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline font-light text-[14px]"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact & Social */}
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
            {footerData.social?.facebook && (
              <a
                href={footerData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <FaFacebookF size={20} />
                <span className="sr-only">Facebook</span>
              </a>
            )}
            {footerData.social?.twitter && (
              <a
                href={footerData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <FaTwitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            )}
            {footerData.social?.instagram && (
              <a
                href={footerData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <FaInstagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            )}
            {footerData.social?.linkedin && (
              <a
                href={footerData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <FaLinkedinIn size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-[14px] font-light pt-10">
        {footerData.copyright ||
          `© ${new Date().getFullYear()} Clemens | All rights reserved. Built to thrive, by `}
        <a
          href="https://thepitchdot.co.za"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Move Digital
        </a>
      </div>
    </footer>
  );
}
