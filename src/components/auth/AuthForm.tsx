'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { AuthInputField } from '@/components/auth/AuthInputField';

import { FaFacebookF, FaGoogle } from 'react-icons/fa6';

interface AuthFormProps {
  type: 'signin' | 'signup';
  onSubmit?: (data: { fullName?: string; email: string; password: string }) => void;
}

export function AuthForm({ type, onSubmit }: AuthFormProps) {
  const isSignIn = type === 'signin';
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ fullName, email, password });
    }
  };

  return (
    <div className="w-full max-w-[540px] bg-white rounded-[32px] p-6 sm:p-10 lg:p-[63px] shadow-[0_25px_60px_rgba(0,0,0,0.18)] border border-white/20">
      {/* Form Header: 40px spacing to the first input field */}
      <div className="mb-[40px]">
        <span
          className="text-[#003BE2] text-[18px] font-normal leading-[160%] block mb-1"
          style={{ fontFamily: 'Satoshi, sans-serif' }}
        >
          {isSignIn ? 'Sign In' : 'Create an Account'}
        </span>
        <h2
          className="text-[#242528] text-[34px] sm:text-[40px] md:text-[44px] font-semibold leading-[120%] tracking-[-0.44px]"
          style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
        >
          {isSignIn ? 'Welcome Back' : 'Welcome to ByteSpace'}
        </h2>
      </div>

      {/* Form Fields: 24px between each field group */}
      <form onSubmit={handleSubmit} className="space-y-[24px]">
        {!isSignIn && (
          <AuthInputField
            label="Full Name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Jamie Davis"
            required
          />
        )}

        <AuthInputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="designer@example.com"
          required
        />

        <AuthInputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
          required
        />

        <div className="pt-0 flex justify-end">
          <button
            type="submit"
            className="bg-[#D4FB20] text-[#242528] px-8 py-3.5 rounded-full hover:bg-[#c2e61c] shadow-sm cursor-pointer text-[18px] font-medium leading-[120%]"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            {isSignIn ? 'Sign In' : 'Continue'}
          </button>
        </div>
      </form>

      {/* Social Logins on Sign In Page */}
      {isSignIn && (
        <>
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E2E8F0]" />
            </div>
            <div className="relative flex justify-center text-[13px]">
              <span className="bg-white px-3 text-[#94A3B8] font-normal">or</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-8">
            {/* Facebook Button */}
            <button
              type="button"
              aria-label="Sign in with Facebook"
              className="p-4 rounded-[24px] border border-[#E2E8F0] bg-transparent flex items-center justify-center text-black hover:border-gray-400 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <FaFacebookF className="w-[30px] h-[30px]" />
            </button>

            {/* Google Button */}
            <button
              type="button"
              aria-label="Sign in with Google"
              className="p-4 rounded-[24px] border border-[#E2E8F0] bg-transparent flex items-center justify-center text-black hover:border-gray-400 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <FaGoogle className="w-[30px] h-[30px]" />
            </button>
          </div>
        </>
      )}

      {/* Footer link to switch auth type */}
      <div className={`text-center text-[14px] text-[#64748B] ${!isSignIn ? 'mt-[56px]' : ''}`}>
        {isSignIn ? (
          <>
            New user?{' '}
            <Link
              href="/signup"
              className="text-[#003BE2] hover:underline"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              Create an account
            </Link>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <Link
              href="/signin"
              className="text-[#003BE2] hover:underline"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
