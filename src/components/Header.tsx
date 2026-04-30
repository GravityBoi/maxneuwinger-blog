"use client";

import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 lg:h-16 max-w-6xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="text-sm lg:text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors">
          Max Neuwinger
        </Link>
        <div className="flex items-center gap-2 lg:gap-3">
          <a
            href="https://github.com/GravityBoi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:text-gray-900 transition-colors"
          >
            <Github className="h-4 w-4 lg:h-5 lg:w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/max-neuwinger/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Linkedin className="h-4 w-4 lg:h-5 lg:w-5" />
          </a>
          <a
            href="https://orcid.org/0009-0003-3930-700X"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ORCID"
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:text-green-600 transition-colors"
          >
            <Image src="/orcid.svg" alt="ORCID" width={18} height={18} />
          </a>
          <a
            href="https://substack.com/@maximusssssssss"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 rounded-full border border-blue-600 px-4 py-1.5 text-xs lg:text-sm font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
          >
            Substack
          </a>
        </div>
      </div>
    </header>
  );
}
