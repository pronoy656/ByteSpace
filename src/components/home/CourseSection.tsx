"use client";

import React, { useEffect, useState } from "react";
import { Title } from "@/components/shared/Title";
import { Subtitle } from "@/components/shared/Subtitle";
import { CourseCard, type Course } from "@/components/shared/CourseCard";
import { CourseGridSkeleton } from "@/components/shared/SkeletonLoading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ChevronDown } from "lucide-react";

const EXTRA_CATEGORIES = ["Architecture", "Creative Writing", "Fitness & Health"];

export function CourseSection() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categoryRows, setCategoryRows] = useState<string[][]>([[], [], []]);
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch Categories
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data: string[]) => {
        setCategoryRows([
          data.slice(0, 8),
          data.slice(8, 14),
          data.slice(14)
        ]);
      })
      .catch((err) => console.error("Failed to load categories", err));

    // Fetch Courses
    setIsLoading(true);
    fetch("/data/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Failed to load courses", err))
      .finally(() => setIsLoading(false));
  }, []);

  // Filter courses based on activeCategory
  const filteredCourses = activeCategory === "Featured"
    ? courses
    : courses.filter((c) => c.category === activeCategory);

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-8 lg:px-12 w-full max-w-7xl mx-auto font-sans">
      <ScrollReveal variant="fade-up" delayMs={0}>
        <div className="text-center max-w-[1100px] mx-auto mb-8 sm:mb-10">
          <Title as="h2" className="text-2xl sm:text-3xl md:text-[40px] lg:text-[44px] font-semibold leading-tight mb-3 sm:mb-4 text-[#0F172A]">
            Discover Your Passion,<br />Build Your Skills
          </Title>
          <Subtitle className="text-center font-normal mx-auto leading-relaxed text-sm sm:text-base text-[#82868E] max-w-2xl px-2">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </Subtitle>
        </div>
      </ScrollReveal>

      {/* Filter Categories: Unified compact wrap on mobile (<sm), 3 exact rows on desktop (sm+) */}
      <ScrollReveal variant="fade-up" delayMs={120}>
        {/* Mobile View: Single continuous flex-wrap for minimal vertical height and zero orphan lines */}
        <div className="flex sm:hidden flex-wrap items-center justify-center gap-1.5 mb-6 w-full px-1">
          {[...(categoryRows[0] || []), ...(categoryRows[1] || []), ...(categoryRows[2] || []), ...(showMore ? EXTRA_CATEGORIES : [])].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#D4FB20] text-black shadow-xs font-semibold"
                  : "bg-[#F5F5F6] text-[#475569] hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#003BE2] hover:bg-blue-50 transition-colors cursor-pointer"
          >
            {showMore ? "- Less" : "+ More"}
          </button>
        </div>

        {/* Desktop View: Preserved exact 3-row structure */}
        <div className="hidden sm:flex flex-col items-center gap-3.5 mb-14 w-full">
          {categoryRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap items-center justify-center gap-2.5">
              {row.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#D4FB20] text-black shadow-xs font-semibold"
                      : "bg-[#F5F5F6] text-[#475569] hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
              {/* + More button on the last row */}
              {rowIndex === 2 && !showMore && (
                <button
                  onClick={() => setShowMore(true)}
                  className="px-4 py-2.5 rounded-full text-[14px] font-semibold text-[#003BE2] hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  + More
                </button>
              )}
            </div>
          ))}

          {/* Row 4: Extra Categories + Less button */}
          {showMore && (
            <div className="flex flex-wrap items-center justify-center gap-2.5 animate-fadeIn">
              {EXTRA_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#D4FB20] text-black shadow-xs font-semibold"
                      : "bg-[#F5F5F6] text-[#475569] hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
              <button
                onClick={() => setShowMore(false)}
                className="px-4 py-2.5 rounded-full text-[14px] font-semibold text-[#003BE2] hover:bg-blue-50 transition-colors cursor-pointer"
              >
                - Less
              </button>
            </div>
          )}
        </div>
      </ScrollReveal>

      {/* Course Grid: 6 cards total (3 cards per row across 2 rows) with staggered reveal */}
      <ScrollReveal variant="fade-up" delayMs={200}>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <CourseGridSkeleton count={6} />
          </div>
        ) : filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {filteredCourses.slice(0, 6).map((course, idx) => (
              <div
                key={`${activeCategory}-${course.id}`}
                className="animate-fade-in-up"
                style={{ animationDelay: `${idx * 70}ms` }}
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-500 text-[16px]">
            No courses found in &quot;{activeCategory}&quot;.
          </div>
        )}
      </ScrollReveal>
    </section>
  );
}