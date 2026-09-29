import React from 'react';

interface SubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function Subtitle({ children, className = '', ...props }: SubtitleProps) {
  return (
    <p
      className={`text-[18px] text-[#82868E] ${className.includes('font-') ? className : 'font-medium ' + className}`}
      {...props}
    >
      {children}
    </p>
  );
}
