'use client';
import React, { useState, useEffect } from 'react';
import { BlueGridBackground } from '@/components/shared/BlueGridBackground';
import { CourseCard, type Course } from '@/components/shared/CourseCard';
import { CourseGridSkeleton } from '@/components/shared/SkeletonLoading';
import { Pagination } from '@/components/shared/Pagination';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Button } from '@/components/shared/Button';
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


  // Search States
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');


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
      <BlueGridBackground className="w-full pt-20 pb-10 sm:pt-[136px] sm:pb-[69px] flex flex-col items-center justify-center text-center overflow-hidden">
        <ScrollReveal variant="fade-up" delayMs={60}>
          <h1 className="text-white text-2xl sm:text-3xl md:text-[44px] font-bold leading-tight mb-4 sm:mb-[32px] font-poppins px-4">
            Find Your Next Course
          </h1>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delayMs={160} className="w-full max-w-[560px] px-4">
          <div className="flex items-center gap-2 sm:gap-3 w-full">
            <div className="flex flex-1 items-center bg-white rounded-xl sm:rounded-full px-3.5 sm:px-5 h-11 sm:h-[52px] shadow-lg gap-2 sm:gap-3 relative focus-within:ring-2 focus-within:ring-[#D4FB20] transition-all min-w-0">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 shrink-0" />
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
                placeholder="Search courses, creator..."
                className="flex-1 bg-transparent outline-none text-xs sm:text-[15px] text-gray-700 placeholder-gray-400 min-w-0 pr-1"
              />
              {searchTerm && (
                <button
                  onClick={handleClearSearch}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100 cursor-pointer shrink-0"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              )}
            </div>
            <Button
              variant="lime"
              size="md"
              onClick={() => {
                setDebouncedSearch(searchTerm.trim());
                setCurrentPage(1);
              }}
              className="!rounded-xl sm:!rounded-full h-11 sm:h-[52px] px-3.5 sm:px-6 text-xs sm:text-[15px] gap-1.5 sm:gap-2 shrink-0 shadow-lg"
            >
              Courses <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Button>
          </div>
        </ScrollReveal>
      </BlueGridBackground>

      {/* ==================== COURSES CATALOG & FILTERS ==================== */}
      <div className="container mx-auto px-4 sm:px-8 md:px-12 w-full pt-6 sm:pt-[60px]">
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
          />
        </ScrollReveal>

        {/* Category Pills Slider / Bar: Top 10 categories */}
        <ScrollReveal variant="fade-up" delayMs={80}>
          <div className="flex items-center gap-2 overflow-x-auto py-4 sm:py-6 no-scrollbar">
            {categories.slice(0, 10).map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <Button
                  key={cat}
                  variant="pill"
                  size="md"
                  isActive={isActive}
                  onClick={() => {
                    setActiveCategory(cat);
                    setCurrentPage(1);
                  }}
                  className="px-3.5 sm:px-5 py-1.5 sm:py-2.5 text-xs sm:text-[16px] whitespace-nowrap"
                >
                  {cat}
                </Button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Course Cards Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 pt-4">
            <CourseGridSkeleton count={6} />
          </div>
        ) : paginatedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 pt-4">
            {paginatedCourses.map((course, idx) => (
              <div
                key={course.id}
                className={idx < 6 ? "animate-fade-in-up" : ""}
                style={{ animationDelay: idx < 6 ? `${(idx % 6) * 50}ms` : undefined }}
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
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
