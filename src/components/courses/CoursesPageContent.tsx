'use client';
import React, { useState, useEffect } from 'react';
import { BlueGridBackground } from '@/components/shared/BlueGridBackground';
import { CourseCard, type Course } from '@/components/shared/CourseCard';
import { CourseGridSkeleton } from '@/components/shared/SkeletonLoading';
import { Pagination } from '@/components/shared/Pagination';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Search, X, ChevronDown } from 'lucide-react';

import { CourseFilterBar } from './CourseFilterBar';
import { CourseEmptyState } from './CourseEmptyState';

const COURSES_PER_PAGE = 18;

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

  // Debounce search query (300ms)
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
      fetch('/data/categories.json').then((res) => res.json()),
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

    if (activeCategory !== 'Featured') {
      result = result.filter(
        (c) => c.category && c.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    if (selectedLevel !== 'All Levels') {
      result = result.filter(
        (c) => c.level && c.level.toLowerCase() === selectedLevel.toLowerCase()
      );
    }

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

  const recommendedCourses = React.useMemo(() => {
    return courses.slice(0, 3);
  }, [courses]);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ==================== HERO SEARCH SECTION ==================== */}
      <BlueGridBackground className="w-full pt-[136px] pb-[69px] flex flex-col items-center justify-center text-center overflow-hidden">
        <ScrollReveal variant="fade-up" delayMs={60}>
          <h1 className="text-white text-[44px] font-bold leading-tight mb-[32px] font-poppins">
            Find Your Next Course
          </h1>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delayMs={160} className="w-full max-w-[560px] px-4">
          <div className="flex items-center gap-3 w-full">
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
        </ScrollReveal>
      </BlueGridBackground>

      {/* ==================== COURSES CATALOG & FILTERS ==================== */}
      <div className="container mx-auto px-6 sm:px-12 w-full pt-[60px]">
        {/* Modular Filter Row */}
        <ScrollReveal variant="fade-up" delayMs={50} className="relative z-30">
          <CourseFilterBar
            selectedLevel={selectedLevel}
            setSelectedLevel={(lvl) => {
              setSelectedLevel(lvl);
              setCurrentPage(1);
            }}
            activeCategory={activeCategory}
            setActiveCategory={(cat) => {
              setActiveCategory(cat);
              setCurrentPage(1);
            }}
            categories={categories}
            sortBy={sortBy}
            setSortBy={(sort) => {
              setSortBy(sort);
              setCurrentPage(1);
            }}
            onResetFilters={handleResetFilters}
            isLevelDropdownOpen={isLevelDropdownOpen}
            setIsLevelDropdownOpen={setIsLevelDropdownOpen}
            isCategoryDropdownOpen={isCategoryDropdownOpen}
            setIsCategoryDropdownOpen={setIsCategoryDropdownOpen}
            isSortDropdownOpen={isSortDropdownOpen}
            setIsSortDropdownOpen={setIsSortDropdownOpen}
          />
        </ScrollReveal>

        {/* Category Pills Slider / Bar: Top 10 categories */}
        <ScrollReveal variant="fade-up" delayMs={80}>
          <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
            {categories.slice(0, 10).map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-5 py-2.5 rounded-full text-[16px] font-[500] whitespace-nowrap transition-colors cursor-pointer outline-none focus:outline-none focus:ring-0 select-none border ${
                    isActive
                      ? 'bg-[#D4FB20] text-black border-[#D4FB20] shadow-sm'
                      : 'bg-[#F8FAFC] text-[#475569] border-[#E2E8F0] hover:bg-gray-100 hover:text-[#0F172A]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Course Cards Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] pt-4">
            <CourseGridSkeleton count={6} />
          </div>
        ) : paginatedCourses.length > 0 ? (
          <ScrollReveal variant="fade-up" delayMs={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] pt-4">
              {paginatedCourses.map((course, idx) => (
                <div
                  key={course.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${(idx % 6) * 60}ms` }}
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal variant="fade-up" delayMs={100}>
            <CourseEmptyState
              debouncedSearch={debouncedSearch}
              activeCategory={activeCategory}
              selectedLevel={selectedLevel}
              recommendedCourses={recommendedCourses}
              onResetFilters={handleResetFilters}
            />
          </ScrollReveal>
        )}

        {/* Pagination */}
        {!isLoading && totalPages > 1 && (
          <ScrollReveal variant="fade-up" delayMs={100}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
