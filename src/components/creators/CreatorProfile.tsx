'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BlueGridBackground } from '@/components/shared/BlueGridBackground';
import { CourseCard, type Course } from '@/components/shared/CourseCard';
import { CourseGridSkeleton } from '@/components/shared/SkeletonLoading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Filter, BarChart2, Tag, AlignLeft } from 'lucide-react';

export function CreatorProfile() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('/data/courses.json')
      .then((res) => res.json())
      .then((data: Course[]) => {
        // First 6 courses by creator as shown in the design image
        setCourses(data.slice(0, 6));
      })
      .catch((err) => console.error('Failed to load courses', err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans pb-24">
      {/* Creator Profile Hero Section with Staggered Fade Up */}
      <BlueGridBackground className="w-full pt-[130px] pb-[70px] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Creator Info Row */}
          <ScrollReveal variant="fade-up" delayMs={60}>
            <div className="flex items-start gap-6 mb-6">
              <div className="relative w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] rounded-[24px] overflow-hidden border-2 border-white/40 shadow-xl shrink-0 bg-[#E2E8F0] transition-transform duration-300 hover:scale-105">
                <Image
                  src="https://i.pravatar.cc/300?img=12"
                  alt="PurePearl Studio"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="pt-1">
                <div className="flex items-center gap-3 mb-1.5">
                  <h1 className="text-white text-[28px] sm:text-[34px] font-bold tracking-tight">
                    PurePearl Studio
                  </h1>
                  <span className="bg-[#D4FB20] text-black text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Creator
                  </span>
                </div>
                <p className="text-white/80 text-[14px] sm:text-[15px] font-normal">
                  Passionate UI/UX, Web designer
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Bio Text */}
          <ScrollReveal variant="fade-up" delayMs={140}>
            <div className="max-w-[880px] text-white/90 text-[14px] sm:text-[15px] leading-relaxed space-y-2 mb-8 font-normal">
              <p>
                Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!
              </p>
              <p>
                Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
              </p>
            </div>
          </ScrollReveal>

          {/* Stats & Follow Button Row */}
          <ScrollReveal variant="fade-up" delayMs={220}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white text-[#0F172A] px-5 py-2.5 rounded-full font-medium text-[14px] shadow-sm flex items-center gap-1.5 transition-transform duration-200 hover:scale-105">
                  <span className="font-bold">3</span> Products
                </div>
                <div className="bg-white text-[#0F172A] px-5 py-2.5 rounded-full font-medium text-[14px] shadow-sm flex items-center gap-1.5 transition-transform duration-200 hover:scale-105">
                  <span className="font-bold">12</span> Followers
                </div>
              </div>

              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`px-8 py-2.5 rounded-full text-[14px] font-bold transition-all shadow-md active:scale-95 cursor-pointer ${
                  isFollowing
                    ? 'bg-white text-[#0F172A] hover:bg-gray-100'
                    : 'bg-[#D4FB20] text-black hover:bg-[#c2e61c] hover:scale-105'
                }`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
          </ScrollReveal>
        </div>
      </BlueGridBackground>

      {/* Course List Section */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-8">
        {/* Filter Row with Fade Up */}
        <ScrollReveal variant="fade-up" delayMs={50}>
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 text-[14px] font-medium text-[#475569] bg-[#F8FAFC] border border-[#E2E8F0] rounded-full px-5 py-2 hover:bg-gray-100 transition-colors cursor-pointer">
                <Filter className="w-4 h-4 text-[#475569]" /> Filter
              </button>
              <button className="flex items-center gap-2 text-[14px] font-medium text-[#475569] bg-[#F8FAFC] border border-[#E2E8F0] rounded-full px-5 py-2 hover:bg-gray-100 transition-colors cursor-pointer">
                <BarChart2 className="w-4 h-4 text-[#475569]" /> Level
              </button>
              <button className="flex items-center gap-2 text-[14px] font-medium text-[#475569] bg-[#F8FAFC] border border-[#E2E8F0] rounded-full px-5 py-2 hover:bg-gray-100 transition-colors cursor-pointer">
                <Tag className="w-4 h-4 text-[#475569]" /> Category
              </button>
            </div>
            <button className="flex items-center gap-2 text-[14px] font-medium text-[#475569] bg-[#F8FAFC] border border-[#E2E8F0] rounded-full px-5 py-2 hover:text-[#0F172A] hover:bg-gray-100 transition-colors cursor-pointer">
              <AlignLeft className="w-4 h-4 text-[#475569]" /> Most relevant
            </button>
          </div>
        </ScrollReveal>

        {/* 6 Course Cards Grid with Staggered Fade Up */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-2">
            <CourseGridSkeleton count={6} />
          </div>
        ) : (
          <ScrollReveal variant="fade-up" delayMs={120}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-2">
              {courses.map((course, idx) => (
                <div
                  key={course.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${idx * 70}ms` }}
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
