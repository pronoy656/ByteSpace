import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function BlueGridBackground({ children, className = '' }: Props) {
  const hasOverflowClass = className.includes('overflow-');
  return (
    <div className={`bg-[#003BE2] relative ${hasOverflowClass ? '' : 'overflow-hidden'} ${className}`}>
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 2px, transparent 2px)
          `,
          backgroundSize: '150px 150px',
          backgroundPosition: 'center top'
        }}
      />
      {children}
    </div>
  );
}
