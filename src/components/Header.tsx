"use client";

import Link from 'next/link';
import { useState } from 'react';

interface NavItem {
  href: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/about', label: 'About' },
];

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold text-gray-900 transition-colors hover:text-black" onClick={closeMenu}>
          Max Neuwinger Blog
        </Link>
        <nav className="hidden gap-8 md:flex">
          {NAV_ITEMS.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              {label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
        >
          {isMenuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>
      <nav className={`${isMenuOpen ? 'grid' : 'hidden'} gap-3 border-t border-gray-200 bg-white px-4 py-4 md:hidden`}>
        {NAV_ITEMS.map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            className="rounded-md px-2 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
            onClick={closeMenu}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
