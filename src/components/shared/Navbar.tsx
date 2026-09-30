'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'Creators', href: '/creators' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#003BE2]/80 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.12)] py-4'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="container mx-auto px-6 sm:px-12 flex justify-between items-center w-full">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group transition-transform active:scale-95">
          <img src="/Vector.png" alt="ByteSpace Logo" className="h-[28px] w-auto block object-contain" />
          <span
            className="text-[#F5F5F6] text-[24px] font-bold leading-none inline-flex items-center tracking-tight"
            style={{ fontFamily: '"Clash Display", sans-serif' }}
          >
            ByteSpace
          </span>
        </Link>

        {/* Main Nav Links with Animated Lime Underline on Hover & Active */}
        <nav className="flex items-center gap-8 sm:gap-10 text-[15px]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 font-medium transition-colors duration-200 group ${
                  isActive ? 'text-white' : 'text-white/75 hover:text-white'
                }`}
              >
                <span>{link.label}</span>

                {/* Animated Lime Underline */}
                <span
                  className={`absolute left-0 bottom-[-4px] h-[2.5px] bg-[#D4FB20] rounded-full transition-all duration-300 origin-left ${
                    isActive
                      ? 'w-full scale-x-100'
                      : 'w-full scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Links */}
        <div className="flex items-center gap-6 sm:gap-8 text-[15px] text-white" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          <Link href="/signin" className="hover:text-white/80 transition-colors">
            Sign In
          </Link>
          <Link
            href="/signup"
            className="hover:text-white/80 transition-colors hidden sm:inline-block"
          >
            Join Us
          </Link>
          <button aria-label="Cart" className="cursor-pointer hover:scale-105 active:scale-95 transition-transform">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
