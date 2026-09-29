import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-8 pb-16 pt-4">
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-[56px] h-[56px] flex items-center justify-center text-[#0F172A] hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        style={{ borderRadius: '24px', border: '1px solid #CED0D3' }}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`transition-colors ${
            currentPage === page
              ? 'text-[#C4C4C4]'
              : 'text-[#0F172A] hover:text-[#003BE2]'
          }`}
          style={{ fontSize: '20px', fontWeight: 600 }}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-[56px] h-[56px] flex items-center justify-center text-[#0F172A] hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        style={{ borderRadius: '24px', border: '1px solid #CED0D3' }}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
