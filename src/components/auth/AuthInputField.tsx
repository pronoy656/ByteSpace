'use client';

import React from 'react';

interface AuthInputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function AuthInputField({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = true,
  className = '',
  ...props
}: AuthInputFieldProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div>
      <label
        htmlFor={inputId}
        className="block text-[#242528] text-[14px] font-medium leading-[120%] mb-[8px]"
        style={{ fontFamily: 'Satoshi, sans-serif' }}
      >
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full h-[52px] px-5 rounded-[12px] border border-[#E2E8F0] bg-white text-[#242528] text-[15px] placeholder:text-[#94A3B8] outline-none focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/10 transition-all ${className}`}
        style={{ fontFamily: 'Satoshi, sans-serif' }}
        {...props}
      />
    </div>
  );
}
