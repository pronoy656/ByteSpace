import React, { useState, useRef, useEffect } from 'react';
import { Filter, BarChart2, Tag, AlignLeft, ChevronDown, Check } from 'lucide-react';

interface CourseFilterBarProps {
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  categories: string[];
  sortBy: string;
  setSortBy: (sort: string) => void;
  onResetFilters: () => void;
}

export const SORT_OPTIONS = [
  { label: 'Most Relevant', value: 'relevant' },
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Most Lessons', value: 'lessons' },
];

export const LEVEL_OPTIONS = ['All Levels', 'Beginner', 'Intermediate', 'Expert'];

export function CourseFilterBar({
  selectedLevel,
  setSelectedLevel,
  activeCategory,
  setActiveCategory,
  categories,
  sortBy,
  setSortBy,
  onResetFilters,
}: CourseFilterBarProps) {
  const [openDropdown, setOpenDropdown] = useState<'level' | 'category' | 'sort' | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);
  return (
    <div ref={containerRef} className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-4 py-3 sm:py-5 border-b border-[#F1F5F9]">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        {/* Main Filter Icon Button */}
        <button
          onClick={onResetFilters}
          className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-[14px] font-[500] text-[#475569] bg-[#F8FAFC] border border-[#E2E8F0] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-gray-100 hover:text-[#0F172A] transition-colors cursor-pointer outline-none focus:outline-none focus:ring-0"
        >
          <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#003BE2]" />
          <span>Filter</span>
        </button>

        {/* Level Filter Dropdown */}
        <div className="relative z-50">
          <button
            onClick={() => setOpenDropdown((prev) => (prev === 'level' ? null : 'level'))}
            className={`flex items-center gap-1.5 sm:gap-2 text-xs sm:text-[14px] font-[500] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors cursor-pointer outline-none focus:outline-none focus:ring-0 border ${
              selectedLevel !== 'All Levels'
                ? 'bg-[#D4FB20] text-black border-[#D4FB20] shadow-sm'
                : 'text-[#475569] bg-[#F8FAFC] border-[#E2E8F0] hover:bg-gray-100 hover:text-[#0F172A]'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Level{selectedLevel !== 'All Levels' ? `: ${selectedLevel}` : ''}</span>
            <ChevronDown
              className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform ${
                openDropdown === 'level' ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openDropdown === 'level' && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                Difficulty Level
              </div>
              {LEVEL_OPTIONS.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => {
                    setSelectedLevel(lvl);
                    setOpenDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 text-[14px] text-[#0F172A] hover:bg-gray-50 flex items-center justify-between cursor-pointer transition-colors"
                >
                  <span
                    className={
                      selectedLevel === lvl
                        ? 'font-[500] text-black bg-[#D4FB20] px-2 py-0.5 rounded-md'
                        : 'font-normal'
                    }
                  >
                    {lvl}
                  </span>
                  {selectedLevel === lvl && <Check className="w-4 h-4 text-black" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Category Dropdown */}
        <div className="relative z-50">
          <button
            onClick={() => setOpenDropdown((prev) => (prev === 'category' ? null : 'category'))}
            className={`flex items-center gap-1.5 sm:gap-2 text-xs sm:text-[14px] font-[500] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors cursor-pointer outline-none focus:outline-none focus:ring-0 border ${
              activeCategory !== 'Featured'
                ? 'bg-[#D4FB20] text-black border-[#D4FB20] shadow-sm'
                : 'text-[#475569] bg-[#F8FAFC] border-[#E2E8F0] hover:bg-gray-100 hover:text-[#0F172A]'
            }`}
          >
            <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Category{activeCategory !== 'Featured' ? `: ${activeCategory}` : ''}</span>
            <ChevronDown
              className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform ${
                openDropdown === 'category' ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openDropdown === 'category' && (
            <div className="absolute top-full left-0 mt-2 w-64 max-h-72 overflow-y-auto bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                All Categories
              </div>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenDropdown(null);
                  }}
                  className="w-full text-left px-4 py-2 text-[14px] text-[#0F172A] hover:bg-gray-50 flex items-center justify-between cursor-pointer transition-colors"
                >
                  <span
                    className={
                      activeCategory === cat
                        ? 'font-semibold text-black bg-[#D4FB20] px-2 py-0.5 rounded-md'
                        : 'font-normal'
                    }
                  >
                    {cat}
                  </span>
                  {activeCategory === cat && <Check className="w-4 h-4 text-black" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sort Dropdown */}
      <div className="relative z-40">
        <button
          onClick={() => setOpenDropdown((prev) => (prev === 'sort' ? null : 'sort'))}
          className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-[14px] font-[500] text-[#475569] hover:text-[#0F172A] bg-[#F8FAFC] border border-[#E2E8F0] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-gray-100 transition-colors cursor-pointer outline-none focus:outline-none focus:ring-0"
        >
          <AlignLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>{SORT_OPTIONS.find((s) => s.value === sortBy)?.label || 'Most relevant'}</span>
          <ChevronDown
            className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform ${
              openDropdown === 'sort' ? 'rotate-180' : ''
            }`}
          />
        </button>

        {openDropdown === 'sort' && (
          <div className="absolute top-full right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
            <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
              Sort Courses By
            </div>
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  setSortBy(opt.value);
                  setOpenDropdown(null);
                }}
                className="w-full text-left px-4 py-2 text-[14px] text-[#0F172A] hover:bg-gray-50 flex items-center justify-between cursor-pointer transition-colors"
              >
                <span
                  className={
                    sortBy === opt.value
                      ? 'font-semibold text-[#003BE2]'
                      : 'font-normal'
                  }
                >
                  {opt.label}
                </span>
                {sortBy === opt.value && <Check className="w-4 h-4 text-[#003BE2]" />}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
