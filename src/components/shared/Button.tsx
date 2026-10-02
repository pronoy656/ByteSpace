import React from 'react';

export type ButtonVariant = 'lime' | 'blue' | 'pill' | 'white' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'pill';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  isActive?: boolean;
}

export function Button({
  variant = 'lime',
  size = 'md',
  isActive = false,
  className = '',
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  // Base core styles
  const baseStyles =
    'inline-flex items-center justify-center font-[500] font-sans transition-colors cursor-pointer select-none outline-none focus:outline-none focus:ring-0 leading-none';

  // Variant styling
  const variantStyles: Record<ButtonVariant, string> = {
    lime: 'bg-[#D4FB20] text-black hover:bg-[#c2e61c] border border-[#D4FB20] shadow-sm',
    blue: 'bg-[#003BE2] text-white hover:bg-[#0033c4] border border-[#003BE2] shadow-sm',
    pill: isActive
      ? 'bg-[#D4FB20] text-black border-[#D4FB20] shadow-sm'
      : 'bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] hover:bg-gray-100 hover:text-[#0F172A]',
    white: 'bg-white text-[#0F172A] hover:bg-gray-100 border border-transparent shadow-sm',
    outline: 'border border-[#CED0D3] text-[#242528] hover:bg-gray-50 bg-transparent',
  };

  // Size styling
  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'text-[14px] px-4 py-2 rounded-full',
    md: 'text-[15px] px-6 py-2.5 rounded-full',
    lg: 'text-[18px] px-8 py-3.5 rounded-full',
    pill: 'text-[14px] px-[16px] py-[12px] rounded-[24px]',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
