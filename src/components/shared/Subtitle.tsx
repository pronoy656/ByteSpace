import React from 'react';

interface SubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function Subtitle({ children, className = '', style, ...props }: SubtitleProps) {
  return (
    <p
      className={`text-[18px] text-[#82868E] ${className.includes('font-') ? className : 'font-medium ' + className}`}
      style={{ fontFamily: 'Satoshi, sans-serif', ...style }}
      {...props}
    >
      {children}
    </p>
  );
}
