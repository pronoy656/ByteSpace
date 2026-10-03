'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          if (window.scrollY > 50) {
            setMobileMenuOpen((prev) => (prev ? false : prev));
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'Creators', href: '/creators' },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-[#003BE2]/90 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.12)] py-3 sm:py-4'
          : 'bg-transparent py-5 sm:py-7'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 flex justify-between items-center w-full">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group transition-transform active:scale-95 shrink-0">
          <Image
            src="/Vector.png"
            alt="ByteSpace Logo"
            width={28}
            height={28}
            className="h-6 sm:h-7 w-auto block object-contain"
            style={{ width: 'auto', height: 'auto' }}
            priority
          />
          <span
            className="text-[#F5F5F6] text-xl sm:text-2xl font-bold leading-none inline-flex items-center tracking-tight"
            style={{ fontFamily: '"Clash Display", sans-serif' }}
          >
            ByteSpace
          </span>
        </Link>

        {/* Main Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[15px]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
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

        {/* Right CTA Links & Mobile Hamburger */}
        <div className="flex items-center gap-4 sm:gap-6 text-[15px] text-white" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          <Link href="/signin" className="hidden sm:inline-block hover:text-white/80 transition-colors">
            Sign In
          </Link>
          <Link
            href="/signup"
            className="hidden sm:inline-block bg-white text-[#003BE2] hover:bg-[#D4FB20] hover:text-black font-semibold px-4 py-2 rounded-full transition-all duration-200 text-sm shadow-sm"
          >
            Join Us
          </Link>
          <button
            aria-label="Cart"
            className="cursor-pointer hover:scale-105 active:scale-95 transition-transform p-1.5 text-white/90 hover:text-white"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>

          {/* Mobile Menu Toggle Button: Smooth Animated Morphing Hamburger */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-1 text-white/90 hover:text-white transition-colors cursor-pointer w-8 h-8 flex items-center justify-center focus:outline-none"
          >
            <div className="relative w-5 h-3.5 flex flex-col justify-between items-center">
              <span
                className={`h-[2px] w-full bg-white rounded-full transition-all duration-300 ease-in-out origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
                }`}
              />
              <span
                className={`h-[2px] w-full bg-white rounded-full transition-all duration-200 ease-in-out ${
                  mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                }`}
              />
              <span
                className={`h-[2px] w-full bg-white rounded-full transition-all duration-300 ease-in-out origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation: Buttery smooth slide & fade accordion with staggered links */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#0034C7] shadow-2xl ${
          mobileMenuOpen
            ? 'max-h-[380px] opacity-100 border-t border-white/10 py-5 px-6'
            : 'max-h-0 opacity-0 border-t-0 py-0 px-6 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-2 font-medium text-base">
          {navLinks.map((link, idx) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 px-3 rounded-lg transition-all duration-300 transform ${
                  mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
                } ${
                  isActive
                    ? 'bg-white/10 text-[#D4FB20] font-semibold'
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${idx * 50 + 60}ms` : '0ms',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div
          className={`h-[1px] bg-white/10 my-3 transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          className={`flex flex-col gap-2.5 transition-all duration-300 transform ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
          }`}
          style={{
            transitionDelay: mobileMenuOpen ? '220ms' : '0ms',
          }}
        >
          <Link
            href="/signin"
            className="w-full text-center py-2.5 rounded-xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors text-sm"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="w-full text-center py-2.5 rounded-xl bg-[#D4FB20] text-black font-semibold hover:bg-lime-400 transition-colors text-sm shadow-sm"
          >
            Join Us
          </Link>
        </div>
      </div>
    </header>
  );
}
