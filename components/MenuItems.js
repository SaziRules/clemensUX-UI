import React from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'Products', href: '/products' },
  { name: 'About us', href: '/about' },
  { name: 'Articles', href: '/articles' },
  { name: 'Health tips', href: '/health-tips' },
  { name: 'Contact us', href: '/contact' },
];

function MobileNavigation({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-[60px] left-0 right-0 z-50 bg-white shadow-lg">
      <nav className="p-4">
        <ul>
          {navLinks.map((link) => (
            <li key={link.name} className="mb-2">
              <Link href={link.href} className="block py-2 px-4 text-gray-800 hover:bg-gray-100 rounded">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MobileNavigation;