"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems: NavItem[] = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/writing', label: 'Writing' },
    { href: '/meditation', label: 'Meditation' },
    { href: '/about', label: 'About' },
  ];

  const renderNavItems = (items: NavItem[], isMobile: boolean = false) => (
    items.map((item) => (
      <Link
        key={item.label}
        href={item.href}
        className={`text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium ${
          isMobile ? 'block' : ''
        }`}
        onClick={isMobile ? () => setIsMenuOpen(false) : undefined}
      >
        {item.label}
      </Link>
    ))
  );

  // Initial render with no client-side functionality
  if (!mounted) {
    return (
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Max Neuwinger Blog
            </Link>
            <nav className="hidden md:flex space-x-8">
              {renderNavItems(navItems)}
            </nav>
            <button className="md:hidden p-2 rounded-lg">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link 
            href="/" 
            className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-colors"
          >
            Max Neuwinger Blog
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {renderNavItems(navItems)}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-3">
            {renderNavItems(navItems, true)}
          </nav>
        )}
      </div>
    </header>
  );
}