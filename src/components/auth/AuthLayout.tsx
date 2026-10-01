'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlueGridBackground } from '@/components/shared/BlueGridBackground';
import { AuthIllustration } from '@/components/auth/AuthIllustration';
import { AuthForm } from '@/components/auth/AuthForm';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

interface AuthLayoutProps {
  type: 'signin' | 'signup';
}

export function AuthLayout({ type }: AuthLayoutProps) {
  const isSignIn = type === 'signin';

  const heading = isSignIn ? 'Sign in with ease' : 'Sign up and come in';
  const subtitle = isSignIn
    ? 'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.'
    : 'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost';

  return (
    <BlueGridBackground className="min-h-screen w-full flex flex-col justify-start p-6 sm:p-10 lg:px-14 lg:py-8 overflow-hidden">
      {/* Top Logo */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between mb-4 lg:mb-6">
        <ScrollReveal variant="fade-up" delayMs={40}>
          <Link href="/" className="inline-flex items-center gap-2 group transition-transform active:scale-95">
            <Image
              src="/Vector.png"
              alt="ByteSpace Logo"
              width={34}
              height={34}
              className="object-contain"
              priority
            />
          </Link>
        </ScrollReveal>
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start flex-1 mt-12 lg:mt-[60px]">
        {/* Left Column: Heading, Subtitle & Illustration */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-start">
          <ScrollReveal variant="fade-up" delayMs={100}>
            <div className="max-w-[460px] mb-[58px]">
              <h1 className="text-white text-[20px] font-semibold leading-snug mb-3 tracking-tight">
                {heading}
              </h1>
              <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed font-normal">
                {subtitle}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delayMs={220}>
            <div className="w-full flex items-center justify-start">
              <AuthIllustration />
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Auth Form Card */}
        <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
          <ScrollReveal variant="fade-up" delayMs={150} className="w-full max-w-[540px]">
            <AuthForm type={type} />
          </ScrollReveal>
        </div>
      </div>

      {/* Empty bottom spacer for symmetrical vertical balance */}
      <div className="hidden sm:block h-2" />
    </BlueGridBackground>
  );
}
