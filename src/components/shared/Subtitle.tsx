import React from 'react';

interface SubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function Subtitle({ children, className = '', style, ...props }: SubtitleProps) {
  const hasColor = /text-\[#?[a-zA-Z0-9]+\]/.test(className);
  const defaultColor = hasColor ? '' : 'text-[#82868E]';

  return (
    <p
      className={`text-[18px] ${defaultColor} ${className.includes('font-') ? className : 'font-medium ' + className}`}
      style={{ fontFamily: 'Satoshi, sans-serif', ...style }}
      {...props}
    >
      {children}
    </p>
  );
}
