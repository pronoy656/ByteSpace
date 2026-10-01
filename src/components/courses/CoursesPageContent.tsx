'use client';
import React, { useState, useEffect } from 'react';
import { BlueGridBackground } from '@/components/shared/BlueGridBackground';
import { CourseCard, type Course } from '@/components/shared/CourseCard';
import { CourseGridSkeleton } from '@/components/shared/SkeletonLoading';
import { Pagination } from '@/components/shared/Pagination';
import { 
  Filter, 
  BarChart2, 
  Tag, 
  AlignLeft, 
  ChevronDown, 
  Search, 
  X, 
  BookOpen, 
  RotateCcw,
  ArrowRight,
  SlidersHorizontal,
  Check
} from 'lucide-react';

const COURSES_PER_PAGE = 18;

const SORT_OPTIONS = [
  { label: 'Most Relevant', value: 'relevant' },
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Most Lessons', value: 'lessons' },
];

const LEVEL_OPTIONS = ['All Levels', 'Beginner', 'Intermediate', 'Expert'];

export function CoursesPageContent() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [sortBy, setSortBy] = useState('relevant');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Dropdown open states
  const [isLevelDropdownOpen, setIsLevelDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  // Search States
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Close dropdowns on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.filter-dropdown-container')) {
        setIsLevelDropdownOpen(false);
        setIsCategoryDropdownOpen(false);
        setIsSortDropdownOpen(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  // Debounce logic (300ms)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm.trim());
      setCurrentPage(1);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetch('/data/courses.json').then((res) => res.json()),
      fetch('/data/categories.json').then((res) => res.json())
    ])
      .then(([coursesData, categoriesData]) => {
        setCourses(coursesData);
        setCategories(categoriesData);
      })
      .catch((err) => console.error('Failed to load courses data', err))
      .finally(() => setIsLoading(false));
  }, []);

  // Filter & Sort Logic
  const filteredCourses = React.useMemo(() => {
    let result = [...courses];

    // 1. Category filter
    if (activeCategory !== 'Featured') {
      result = result.filter(
        (c) => c.category && c.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    // 2. Level filter
    if (selectedLevel !== 'All Levels') {
      result = result.filter(
        (c) => c.level && c.level.toLowerCase() === selectedLevel.toLowerCase()
      );
    }

    // 3. Search query match
    if (debouncedSearch) {
      const q = debouncedSearch.toLowerCase();
      result = result.filter(
        (c) =>
          c.title?.toLowerCase().includes(q) ||
          c.category?.toLowerCase().includes(q) ||
          c.author?.toLowerCase().includes(q) ||
          c.level?.toLowerCase().includes(q)
      );
    }

    // 4. Sort
    if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'price_asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price_desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'lessons') {
      result.sort((a, b) => b.lessons - a.lessons);
    }

    return result;
  }, [courses, activeCategory, selectedLevel, debouncedSearch, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / COURSES_PER_PAGE));
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * COURSES_PER_PAGE,
    currentPage * COURSES_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setDebouncedSearch('');
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setDebouncedSearch('');
    setActiveCategory('Featured');
    setSelectedLevel('All Levels');
    setSortBy('relevant');
    setCurrentPage(1);
  };

  // 3 Recommended popular courses for empty state
  const recommendedCourses = courses.slice(0, 3);

  const hasActiveFilters = 
    Boolean(debouncedSearch) || 
    activeCategory !== 'Featured' || 
    selectedLevel !== 'All Levels' || 
    sortBy !== 'relevant';

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Hero Header */}
      <BlueGridBackground className="w-full pt-[136px] pb-[69px] flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-[44px] font-bold leading-tight mb-[32px]">
          Find Your Next Course
        </h1>
        <div className="flex items-center gap-3 w-full max-w-[560px] px-4">
          <div className="flex flex-1 items-center bg-white rounded-full px-5 h-[52px] shadow-lg gap-3 relative focus-within:ring-2 focus-within:ring-[#D4FB20] transition-all">
            <Search className="w-5 h-5 text-gray-400 shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setDebouncedSearch(searchTerm.trim());
                  setCurrentPage(1);
                }
              }}
              placeholder="Search by course title, author or category..."
              className="flex-1 bg-transparent outline-none text-[15px] text-gray-700 placeholder-gray-400 pr-2"
            />
            {searchTerm && (
              <button
                onClick={handleClearSearch}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100 cursor-pointer"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <button 
            onClick={() => {
              setDebouncedSearch(searchTerm.trim());
              setCurrentPage(1);
            }}
            className="bg-[#D4FB20] text-black font-semibold rounded-full h-[52px] px-6 text-[15px] flex items-center gap-2 hover:bg-[#c2e61c] transition-colors shrink-0 shadow-lg cursor-pointer"
          >
            Courses <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </BlueGridBackground>

      {/* Filter + Category + Cards */}
      <div className="container mx-auto px-6 sm:px-12 w-full pt-[60px]">

        {/* Filter Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-5 border-b border-[#F1F5F9]">
          <div className="flex flex-wrap items-center gap-3 filter-dropdown-container">
            
            {/* Filter Reset Button */}
            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-1.5 text-[13px] font-semibold text-rose-600 bg-rose-50 border border-rose-200 rounded-full px-3.5 py-2 hover:bg-rose-100 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset all
              </button>
            )}

            {/* Main Filter Icon Button */}
            <button
              onClick={handleResetFilters}
              className="flex items-center gap-2 text-[14px] font-medium text-[#475569] bg-[#F8FAFC] border border-[#E2E8F0] rounded-full px-4 py-2 hover:bg-gray-100 hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              <Filter className="w-4 h-4 text-[#003BE2]" />
              <span>Filter</span>
            </button>

            {/* Level Filter Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLevelDropdownOpen(!isLevelDropdownOpen);
                  setIsCategoryDropdownOpen(false);
                  setIsSortDropdownOpen(false);
                }}
                className={`flex items-center gap-2 text-[14px] font-medium rounded-full px-4 py-2 transition-all cursor-pointer border ${
                  selectedLevel !== 'All Levels'
                    ? 'bg-[#003BE2] text-white border-[#003BE2] shadow-sm'
                    : 'text-[#475569] bg-[#F8FAFC] border-[#E2E8F0] hover:bg-gray-100'
                }`}
              >
                <BarChart2 className="w-4 h-4" />
                <span>Level{selectedLevel !== 'All Levels' ? `: ${selectedLevel}` : ''}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isLevelDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLevelDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    Difficulty Level
                  </div>
                  {LEVEL_OPTIONS.map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => {
                        setSelectedLevel(lvl);
                        setIsLevelDropdownOpen(false);
                        setCurrentPage(1);
                      }}
                      className="w-full text-left px-4 py-2 text-[14px] text-[#0F172A] hover:bg-gray-50 flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <span className={selectedLevel === lvl ? 'font-semibold text-[#003BE2]' : 'font-normal'}>
                        {lvl}
                      </span>
                      {selectedLevel === lvl && <Check className="w-4 h-4 text-[#003BE2]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
                  setIsLevelDropdownOpen(false);
                  setIsSortDropdownOpen(false);
                }}
                className={`flex items-center gap-2 text-[14px] font-medium rounded-full px-4 py-2 transition-all cursor-pointer border ${
                  activeCategory !== 'Featured'
                    ? 'bg-[#003BE2] text-white border-[#003BE2] shadow-sm'
                    : 'text-[#475569] bg-[#F8FAFC] border-[#E2E8F0] hover:bg-gray-100'
                }`}
              >
                <Tag className="w-4 h-4" />
                <span>Category{activeCategory !== 'Featured' ? `: ${activeCategory}` : ''}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCategoryDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-60 max-h-72 overflow-y-auto bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    All Categories
                  </div>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setIsCategoryDropdownOpen(false);
                        setCurrentPage(1);
                      }}
                      className="w-full text-left px-4 py-2 text-[14px] text-[#0F172A] hover:bg-gray-50 flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <span className={activeCategory === cat ? 'font-semibold text-[#003BE2]' : 'font-normal'}>
                        {cat}
                      </span>
                      {activeCategory === cat && <Check className="w-4 h-4 text-[#003BE2]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Sort Dropdown */}
          <div className="relative filter-dropdown-container">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsSortDropdownOpen(!isSortDropdownOpen);
                setIsLevelDropdownOpen(false);
                setIsCategoryDropdownOpen(false);
              }}
              className="flex items-center gap-2 text-[14px] font-medium text-[#475569] hover:text-[#0F172A] bg-[#F8FAFC] border border-[#E2E8F0] rounded-full px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <AlignLeft className="w-4 h-4" />
              <span>{SORT_OPTIONS.find((s) => s.value === sortBy)?.label || 'Most relevant'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isSortDropdownOpen ? 'rotate-180' : ''}`} />
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
                      setCurrentPage(1);
                    }}
                    className="w-full text-left px-4 py-2 text-[14px] text-[#0F172A] hover:bg-gray-50 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <span className={sortBy === opt.value ? 'font-semibold text-[#003BE2]' : 'font-normal'}>
                      {opt.label}
                    </span>
                    {sortBy === opt.value && <Check className="w-4 h-4 text-[#003BE2]" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Category Pill Tabs - Fixed single line, no wrapping */}
        <div className="flex items-center gap-2.5 py-5 border-b border-[#F1F5F9] overflow-hidden whitespace-nowrap">
          {isLoading ? (
            Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="h-10 w-28 bg-slate-100 rounded-full shrink-0 animate-pulse" />
            ))
          ) : (
            // Only show primary categories that fit in a clean single line
            categories.slice(0, 8).map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-4 sm:px-5 py-2 rounded-full text-[13px] sm:text-[14px] font-semibold transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#D4FB20] text-black shadow-xs'
                      : 'bg-[#F5F5F6] text-[#475569] hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })
          )}
        </div>

        {/* Search Results Summary Header */}
        {debouncedSearch && !isLoading && (
          <div className="flex items-center justify-between pt-6 pb-2">
            <p className="text-[16px] text-[#475569]">
              Showing results for <span className="font-semibold text-[#0F172A]">&ldquo;{debouncedSearch}&rdquo;</span>{' '}
              <span className="text-[#94A3B8]">({filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} found)</span>
            </p>
            <button
              onClick={handleClearSearch}
              className="text-[#003BE2] hover:underline text-[14px] font-semibold flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Clear search
            </button>
          </div>
        )}

        {/* Course Grid or Premium Empty State */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] py-10">
            <CourseGridSkeleton count={6} />
          </div>
        ) : paginatedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] py-10">
            {paginatedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          /* ================= ULTRA-PREMIUM USER-FRIENDLY EMPTY STATE ================= */
          <div className="py-12 my-6 w-full">
            <div className="relative max-w-2xl mx-auto rounded-[36px] bg-white border border-[#E2E8F0] shadow-[0_12px_40px_-15px_rgba(0,0,0,0.06)] p-8 sm:p-14 text-center overflow-hidden">
              
              {/* Icon Badge */}
              <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <div className="relative w-20 h-20 rounded-[28px] bg-gradient-to-tr from-[#003BE2] to-[#1E5BF9] text-white flex items-center justify-center">
                  <BookOpen className="w-9 h-9 text-white" strokeWidth={2} />
                </div>
              </div>

              {/* Heading */}
              <h3 
                className="text-[#0F172A] text-[24px] sm:text-[28px] font-medium tracking-tight leading-tight mb-3"
                style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
              >
                No Matching Courses Found
              </h3>

              {/* Friendly Explanation */}
              <p className="text-[#64748B] text-[15px] sm:text-[16px] leading-relaxed max-w-md mx-auto mb-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                We couldn&apos;t find any course matching{' '}
                {debouncedSearch ? (
                  <span className="font-semibold text-[#0F172A]">&ldquo;{debouncedSearch}&rdquo;</span>
                ) : (
                  'the selected filters'
                )}
                {activeCategory !== 'Featured' && (
                  <span> under <span className="font-medium text-[#003BE2]">&ldquo;{activeCategory}&rdquo;</span></span>
                )}
                {selectedLevel !== 'All Levels' && (
                  <span> for <span className="font-medium text-[#003BE2]">&ldquo;{selectedLevel}&rdquo;</span> level</span>
                )}
                . Try resetting your search or exploring other categories.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleResetFilters}
                  className="w-full sm:w-auto bg-[#D4FB20] text-black font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-[#c3e81b] transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" /> Reset Filters
                </button>
                <button
                  onClick={handleResetFilters}
                  className="w-full sm:w-auto bg-[#003BE2] text-white font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-[#0033c4] transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  Explore Courses <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* "You May Also Like" Recommended Fallback Courses Section */}
            {recommendedCourses.length > 0 && (
              <div className="mt-14 pt-10 border-t border-[#F1F5F9]">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h4 
                      className="text-[22px] font-bold text-[#0F172A]"
                      style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                    >
                      Popular Courses You May Like
                    </h4>
                    <p className="text-[14px] text-[#64748B]">
                      Top rated courses chosen by ByteSpace students
                    </p>
                  </div>
                  <button
                    onClick={handleResetFilters}
                    className="text-[#003BE2] font-semibold text-[14px] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Browse catalog <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
                  {recommendedCourses.map((c) => (
                    <CourseCard key={c.id} course={c} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Pagination */}
        {!isLoading && totalPages > 1 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}

      </div>
    </div>
  );
}
