import React from 'react';
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
  isLevelDropdownOpen: boolean;
  setIsLevelDropdownOpen: (open: boolean) => void;
  isCategoryDropdownOpen: boolean;
  setIsCategoryDropdownOpen: (open: boolean) => void;
  isSortDropdownOpen: boolean;
  setIsSortDropdownOpen: (open: boolean) => void;
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
  isLevelDropdownOpen,
  setIsLevelDropdownOpen,
  isCategoryDropdownOpen,
  setIsCategoryDropdownOpen,
  isSortDropdownOpen,
  setIsSortDropdownOpen,
}: CourseFilterBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-5 border-b border-[#F1F5F9]">
      <div className="flex flex-wrap items-center gap-3 filter-dropdown-container">
        {/* Main Filter Icon Button */}
        <button
          onClick={onResetFilters}
          className="flex items-center gap-2 text-[14px] font-[500] text-[#475569] bg-[#F8FAFC] border border-[#E2E8F0] rounded-full px-4 py-2 hover:bg-gray-100 hover:text-[#0F172A] transition-colors cursor-pointer outline-none focus:outline-none focus:ring-0"
        >
          <Filter className="w-4 h-4 text-[#003BE2]" />
          <span>Filter</span>
        </button>

        {/* Level Filter Dropdown */}
        <div className="relative z-50">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLevelDropdownOpen(!isLevelDropdownOpen);
              setIsCategoryDropdownOpen(false);
              setIsSortDropdownOpen(false);
            }}
            className={`flex items-center gap-2 text-[14px] font-[500] rounded-full px-4 py-2 transition-colors cursor-pointer outline-none focus:outline-none focus:ring-0 border ${
              selectedLevel !== 'All Levels'
                ? 'bg-[#D4FB20] text-black border-[#D4FB20] shadow-sm'
                : 'text-[#475569] bg-[#F8FAFC] border-[#E2E8F0] hover:bg-gray-100 hover:text-[#0F172A]'
            }`}
          >
            <BarChart2 className="w-4 h-4" />
            <span>Level{selectedLevel !== 'All Levels' ? `: ${selectedLevel}` : ''}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform ${
                isLevelDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {isLevelDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                Difficulty Level
              </div>
              {LEVEL_OPTIONS.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => {
                    setSelectedLevel(lvl);
                    setIsLevelDropdownOpen(false);
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
            onClick={(e) => {
              e.stopPropagation();
              setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
              setIsLevelDropdownOpen(false);
              setIsSortDropdownOpen(false);
            }}
            className={`flex items-center gap-2 text-[14px] font-[500] rounded-full px-4 py-2 transition-colors cursor-pointer outline-none focus:outline-none focus:ring-0 border ${
              activeCategory !== 'Featured'
                ? 'bg-[#D4FB20] text-black border-[#D4FB20] shadow-sm'
                : 'text-[#475569] bg-[#F8FAFC] border-[#E2E8F0] hover:bg-gray-100 hover:text-[#0F172A]'
            }`}
          >
            <Tag className="w-4 h-4" />
            <span>Category{activeCategory !== 'Featured' ? `: ${activeCategory}` : ''}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform ${
                isCategoryDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {isCategoryDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 max-h-72 overflow-y-auto bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                All Categories
              </div>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setIsCategoryDropdownOpen(false);
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
      <div className="relative z-40 filter-dropdown-container">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsSortDropdownOpen(!isSortDropdownOpen);
            setIsLevelDropdownOpen(false);
            setIsCategoryDropdownOpen(false);
          }}
          className="flex items-center gap-2 text-[14px] font-[500] text-[#475569] hover:text-[#0F172A] bg-[#F8FAFC] border border-[#E2E8F0] rounded-full px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer outline-none focus:outline-none focus:ring-0"
        >
          <AlignLeft className="w-4 h-4" />
          <span>{SORT_OPTIONS.find((s) => s.value === sortBy)?.label || 'Most relevant'}</span>
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform ${
              isSortDropdownOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isSortDropdownOpen && (
          <div className="absolute top-full right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
            <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
              Sort Courses By
            </div>
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  setSortBy(opt.value);
                  setIsSortDropdownOpen(false);
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
