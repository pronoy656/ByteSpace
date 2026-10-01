import React from 'react';
import { X } from 'lucide-react';

interface CourseVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export function CourseVideoModal({
  isOpen,
  onClose,
  videoUrl = 'https://www.youtube.com/embed/K6GOMfJo6Ic?autoplay=1&rel=0',
}: CourseVideoModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-black rounded-[24px] overflow-hidden shadow-2xl border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
          aria-label="Close video"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div className="relative aspect-video w-full">
          <iframe
            src={videoUrl}
            title="Course Introduction Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
