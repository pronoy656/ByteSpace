import React from 'react';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function Title({ children, className = '', as: Component = 'h2', ...props }: TitleProps) {
  return (
    <Component
      className={`tracking-tight ${className.includes('font-') ? className : 'font-bold ' + className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
