import React from 'react';
import Image from 'next/image';

interface StudentAvatarsProps {
  count?: number;
  size?: number;
  className?: string;
}

const LOCAL_AVATARS = [
  '/Avater 1.png',
  '/Avater 2.png',
  '/Avater 3.png',
  '/Avater 4.png',
];

export function StudentAvatars({ count = 4, size = 32, className = '' }: StudentAvatarsProps) {
  const avatars = LOCAL_AVATARS.slice(0, count);

  return (
    <div className={`flex -space-x-2 ${className}`}>
      {avatars.map((src, idx) => (
        <Image
          key={idx}
          src={src}
          alt={`Student avatar ${idx + 1}`}
          width={size}
          height={size}
          style={{ width: `${size}px`, height: `${size}px` }}
          className="rounded-full border-2 border-white object-cover bg-gray-100 shadow-xs shrink-0"
        />
      ))}
    </div>
  );
}
