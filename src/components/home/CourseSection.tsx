"use client";

import React, { useEffect, useState } from "react";
import { Title } from "@/components/shared/Title";
import { Subtitle } from "@/components/shared/Subtitle";
import { CourseCard, type Course } from "@/components/shared/CourseCard";
import { ChevronDown } from "lucide-react";

export function CourseSection() {
  const [categories, setCategories] = useState<string[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [showMoreCategories, setShowMoreCategories] = useState(false);

  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Failed to load categories", err));

    fetch("/data/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Failed to load courses", err));
  }, []);

  const visibleCategories = showMoreCategories ? categories : categories.slice(0, 10);

  return (
    <section className="py-20 px-12 container mx-auto w-full font-sans">
      <div className="text-center max-w-[1100px] mx-auto mb-10">
        <Title as="h2" className="text-[44px] font-semibold leading-tight mb-4 text-[#0F172A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Discover Your Passion,<br />Build Your Skills
        </Title>
        <Subtitle className="text-center font-normal mx-auto leading-relaxed">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different<br />fields, from technology to the arts, and make a difference in your career and life.
        </Subtitle>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-14 max-w-4xl mx-auto">
        {visibleCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-[14px] font-medium transition-colors ${activeCategory === cat
              ? "bg-[#D4FB20] text-black"
              : "bg-[#F5F5F6] text-[#475569] hover:bg-gray-200"
              }`}
          >
            {cat}
          </button>
        ))}
        {!showMoreCategories && categories.length > 10 && (
          <button
            onClick={() => setShowMoreCategories(true)}
            className="px-5 py-2 rounded-full text-[14px] font-medium text-blue-600 hover:bg-gray-50 transition-colors flex items-center gap-1"
          >
            + More
          </button>
        )}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}