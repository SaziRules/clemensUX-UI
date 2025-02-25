import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Logo from '@/assets/logo-footer.png'; // Update the path based on your file location

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-l from-sky-500 to-indigo-500 text-white py-10">
      {/* 4-Column Layout */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 pb-6 border-b border-white/20">
        
        {/* Column 1: Logo */}
        <div className="flex flex-col items-start">
          <Image src={Logo} alt="Clemens Logo" width={100} height={50} />
          <p className='text-[14px] font-light pt-5'>Made in South Africa for Sylko NSP (Pty) Ltd.
A subsidiary of The Lion Match Company (Pty) Ltd</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:underline font-light text-[14px]">About Us</Link></li>
            <li><Link href="/products" className="hover:underline font-light text-[14px]">Products</Link></li>
            <li><Link href="/healthTips" className="hover:underline font-light text-[14px]">Health Tips</Link></li>
            <li><Link href="/contact" className="hover:underline font-light text-[14px]">Where to buy</Link></li>
          </ul>
        </div>

        {/* Column 3: More Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">More</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline font-light text-[14px]">PAIA Manual</Link></li>
            <li><Link href="#" className="hover:underline font-light text-[14px]">BEE Certificate</Link></li>
            <li><Link href="#" className="hover:underline font-light text-[14px]">Supplier Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:underline font-light text-[14px]">Customer Application Form</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact & Social Media */}
        <div>
          <h3 className="font-bold text-lg mb-3">Contact</h3>
          <p>Email: <a href="mailto:support@clemens.com" className="hover:underline font-light text-[14px]">info@lionmatch.co.za</a></p>
          <p>Phone: <a href="tel:+1234567890" className="hover:underline font-light text-[14px]">0860 546 600</a></p>
          <p className='pt-3 font-light text-[14px]'>20 Mahatma Gandhi Road, Point, Durban, 4000</p>
          <div className="flex space-x-4 mt-3">
            <a href="https://web.facebook.com/ClemensSouthAfrica" className="text-white hover:text-gray-200"><FaFacebookF size={20} /></a>
            <a href="#" className="text-white hover:text-gray-200"><FaTwitter size={20} /></a>
            <a href="#" className="text-white hover:text-gray-200"><FaInstagram size={20} /></a>
            <a href="#" className="text-white hover:text-gray-200"><FaLinkedinIn size={20} /></a>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="text-center text-[14px] font-light pt-10">
        © Copyright - {new Date().getFullYear()} Clemens | All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
