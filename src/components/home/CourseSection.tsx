"use client";

import React, { useEffect, useState } from "react";
import { Title } from "@/components/shared/Title";
import { Subtitle } from "@/components/shared/Subtitle";
import { CourseCard, type Course } from "@/components/shared/CourseCard";
import { ChevronDown } from "lucide-react";

const CATEGORY_ROWS = [
  // Row 1
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  // Row 2
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  // Row 3
  [
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
  ],
];

const EXTRA_CATEGORIES = ["Architecture", "Creative Writing", "Fitness & Health"];

export function CourseSection() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetch("/data/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Failed to load courses", err));
  }, []);

  // Filter courses based on activeCategory
  const filteredCourses = activeCategory === "Featured"
    ? courses
    : courses.filter((c) => c.category === activeCategory);

  return (
    <section className="py-20 px-12 container mx-auto w-full font-sans">
      <div className="text-center max-w-[1100px] mx-auto mb-10">
        <Title as="h2" className="text-[44px] font-semibold leading-tight mb-4 text-[#0F172A]">
          Discover Your Passion,<br />Build Your Skills
        </Title>
        <Subtitle className="text-center font-normal mx-auto leading-relaxed">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different<br />fields, from technology to the arts, and make a difference in your career and life.
        </Subtitle>
      </div>

      {/* Filter Categories in 3 Rows */}
      <div className="flex flex-col items-center gap-3.5 mb-14 w-full">
        {/* Row 1 */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {CATEGORY_ROWS[0].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#D4FB20] text-black"
                  : "bg-[#F5F5F6] text-[#475569] hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {CATEGORY_ROWS[1].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#D4FB20] text-black"
                  : "bg-[#F5F5F6] text-[#475569] hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {CATEGORY_ROWS[2].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#D4FB20] text-black"
                  : "bg-[#F5F5F6] text-[#475569] hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="px-4 py-2.5 rounded-full text-[14px] font-semibold text-[#003BE2] hover:bg-blue-50 transition-colors cursor-pointer"
            >
              + More
            </button>
          )}
        </div>

        {/* Row 4: Extra Categories + Less button (Appears on a separate row when expanded) */}
        {showMore && (
          <div className="flex flex-wrap items-center justify-center gap-2.5 animate-fadeIn">
            {EXTRA_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#D4FB20] text-black"
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

      {/* Course Grid: 6 cards total (3 cards per row across 2 rows) */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
          {filteredCourses.slice(0, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-500 text-[16px]">
          No courses found in "{activeCategory}".
        </div>
      )}
    </section>
  );
}