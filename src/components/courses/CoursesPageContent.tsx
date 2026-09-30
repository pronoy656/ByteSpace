'use client';
import React, { useState, useEffect } from 'react';
import { BlueGridBackground } from '@/components/shared/BlueGridBackground';
import { CourseCard, type Course } from '@/components/shared/CourseCard';
import { Pagination } from '@/components/shared/Pagination';
import { Filter, BarChart2, Tag, AlignLeft, ChevronDown, ChevronLeft, ChevronRight, Search } from 'lucide-react';

const COURSES_PER_PAGE = 18;
const TOTAL_PAGES = 5;

export function CoursesPageContent() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('/data/courses.json')
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error('Failed to load courses', err));

    fetch('/data/categories.json')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error('Failed to load categories', err));
  }, []);

  const totalPages = Math.ceil(courses.length / COURSES_PER_PAGE);
  const paginatedCourses = courses.slice(
    (currentPage - 1) * COURSES_PER_PAGE,
    currentPage * COURSES_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= TOTAL_PAGES) setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Hero */}
      <BlueGridBackground className="w-full pt-[136px] pb-[69px] flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-[44px] font-bold leading-tight mb-[32px]">
          Find Your Next Course
        </h1>
        <div className="flex items-center gap-3 w-full max-w-[560px] px-4">
          <div className="flex flex-1 items-center bg-white rounded-full px-5 h-[52px] shadow-lg gap-3">
            <Search className="w-5 h-5 text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent outline-none text-[15px] text-gray-700 placeholder-gray-400"
            />
          </div>
          <button className="bg-[#D4FB20] text-black font-semibold rounded-full h-[52px] px-6 text-[15px] flex items-center gap-2 hover:bg-[#c2e61c] transition-colors shrink-0 shadow-lg">
            Courses <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </BlueGridBackground>

      {/* Filter + Category + Cards */}
      <div className="container mx-auto px-12 w-full pt-[72px]">

        {/* Filter Row */}
        <div className="flex items-center justify-between py-6 border-b border-[#F1F5F9]">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 text-[14px] font-medium text-[#475569] bg-[#F8FAFC] border border-[#E2E8F0] rounded-full px-4 py-2 hover:bg-gray-100 transition-colors">
              <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="flex items-center gap-2 text-[14px] font-medium text-[#475569] bg-[#F8FAFC] border border-[#E2E8F0] rounded-full px-4 py-2 hover:bg-gray-100 transition-colors">
              <BarChart2 className="w-4 h-4" /> Level
            </button>
            <button className="flex items-center gap-2 text-[14px] font-medium text-[#475569] bg-[#F8FAFC] border border-[#E2E8F0] rounded-full px-4 py-2 hover:bg-gray-100 transition-colors">
              <Tag className="w-4 h-4" /> Category
            </button>
          </div>
          <button className="flex items-center gap-2 text-[14px] font-medium text-[#475569] hover:text-[#0F172A] transition-colors">
            <AlignLeft className="w-4 h-4" /> Most relevant
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 py-5 border-b border-[#F1F5F9]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
              className={`px-5 py-2 rounded-full text-[14px] font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-[#D4FB20] text-black'
                  : 'bg-[#F5F5F6] text-[#475569] hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] py-10">
          {paginatedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination 
          currentPage={currentPage}
          totalPages={TOTAL_PAGES}
          onPageChange={handlePageChange}
        />

      </div>
    </div>
  );
}
