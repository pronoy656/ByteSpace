"use client";

import React, { useEffect, useState } from "react";
import { Title } from "@/components/shared/Title";
import { Subtitle } from "@/components/shared/Subtitle";
import Image from "next/image";
import { Star, BarChart, ChevronDown } from "lucide-react";

interface Course {
  id: number;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  title: string;
  rating: number;
  author: string;
  level: string;
  studentsCount: string;
  price: number;
  priceType: string;
}

export function CourseSection() {
  const [categories, setCategories] = useState<string[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [showMoreCategories, setShowMoreCategories] = useState(false);

  useEffect(() => {
    // Fetch categories
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Failed to load categories", err));

    // Fetch courses
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
          <div key={course.id} className="border border-[#E2E8F0] rounded-[24px] overflow-hidden hover:shadow-lg transition-shadow bg-white flex flex-col p-4">

            {/* Image & Overlays */}
            <div className="relative rounded-[12px] overflow-hidden mb-4 aspect-[4/2.6]">
              <Image src={course.image} alt={course.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-medium text-[#334155]">
                <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full">{course.lessons} Lessons</span>
                <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full">{course.duration}</span>
                <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full">{course.comments} Comments</span>
              </div>
            </div>

            {/* Course Info */}
            <div className="flex-1 flex flex-col px-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-[20px] text-[#0F172A] leading-tight line-clamp-1">{course.title}</h3>
                <div className="flex items-center gap-1 text-[18px] font-normal text-[#4F4F4F] shrink-0 ml-2">
                  {course.rating} <Star className="w-[15.88px] h-[15.76px] fill-[#CED0D3] text-[#CED0D3]" />
                </div>
              </div>

              <p className="text-[12px] font-normal mb-5">
                <span className="text-[#4F4F4F]">by </span>
                <span className="text-[#003BE2]">{course.author}</span>
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-[12px]">
                  {/* Beginner Badge */}
                  <div className="flex items-center gap-1.5 text-[12px] font-medium text-[#4B4C53] bg-[#F5F5F6] px-[12px] py-[9px] rounded-[24px]">
                    <BarChart className="w-3.5 h-3.5 text-[#4B4C53]" />
                    {course.level}
                  </div>

                  {/* Users Stack */}
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-1">
                      <Image width={32} height={32} className="w-[32px] h-[32px] rounded-full border-2 border-white object-cover bg-gray-200" src="https://i.pravatar.cc/100?img=1" alt="user" />
                      <Image width={32} height={32} className="w-[32px] h-[32px] rounded-full border-2 border-white object-cover bg-gray-200" src="https://i.pravatar.cc/100?img=2" alt="user" />
                      <Image width={32} height={32} className="w-[32px] h-[32px] rounded-full border-2 border-white object-cover bg-gray-200" src="https://i.pravatar.cc/100?img=3" alt="user" />
                      <Image width={32} height={32} className="w-[32px] h-[32px] rounded-full border-2 border-white object-cover bg-gray-200" src="https://i.pravatar.cc/100?img=4" alt="user" />
                    </div>
                    <div className="w-[32px] h-[32px] rounded-full border-2 border-white bg-[#D4FB20] text-black text-[12px] font-medium flex items-center justify-center -ml-2 z-10">
                      {course.studentsCount}
                    </div>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mt-[16px]">
                <span className="text-[#003BE2] font-semibold text-[20px]">${course.price}</span>
                <span className="text-[12px] text-[#4F4F4F] font-normal">/{course.priceType}</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}







