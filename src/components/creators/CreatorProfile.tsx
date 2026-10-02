'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BlueGridBackground } from '@/components/shared/BlueGridBackground';
import { CourseCard, type Course } from '@/components/shared/CourseCard';
import { CourseGridSkeleton } from '@/components/shared/SkeletonLoading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Button } from '@/components/shared/Button';
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
        setCourses(data.slice(0, 6));
      })
      .catch((err) => console.error('Failed to load courses', err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans pb-24">
      <BlueGridBackground className="w-full pt-[130px] pb-[70px] overflow-hidden">
        <div className="container mx-auto px-6 sm:px-12 w-full">
          <ScrollReveal variant="fade-up" delayMs={60}>
            <div className="flex items-start gap-6 mb-6">
              <div className="relative w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] shrink-0">
                <Image
                  src="/Image (8).png"
                  alt="PurePearl Studio"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="pt-1">
                <div className="flex items-center gap-3 mb-1.5">
                  <h1 className="text-white text-[36px] font-[600] tracking-tight drop-shadow-sm font-poppins">
                    PurePearl Studio
                  </h1>
                  <span className="bg-[#D4FB20] text-black text-[16px] font-[500] px-[24px] py-[8px] rounded-[24px] leading-none">
                    Creator
                  </span>
                </div>
                <p className="text-white/90 text-[18px] font-normal">
                  Passionate UI/UX, Web designer
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delayMs={140}>
            <div className="max-w-[880px] text-white/90 text-[18px] font-normal leading-relaxed space-y-2 mb-8">
              <p>
                Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!
              </p>
              <p>
                Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delayMs={220}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white text-[#0F172A] px-[24px] py-[8px] rounded-full font-[500] text-[18px] shadow-sm flex items-center gap-1.5 leading-tight">
                  <span className="font-bold text-[#003BE2]">3</span> Products
                </div>
                <div className="bg-white text-[#0F172A] px-[24px] py-[8px] rounded-full font-[500] text-[18px] shadow-sm flex items-center gap-1.5 leading-tight">
                  <span className="font-bold text-[#003BE2]">12</span> Followers
                </div>
              </div>

              <Button
                variant={isFollowing ? 'white' : 'lime'}
                size="md"
                onClick={() => setIsFollowing(!isFollowing)}
                className="px-8"
              >
                {isFollowing ? 'Following' : 'Follow'}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </BlueGridBackground>

      <div className="container mx-auto px-6 sm:px-12 w-full pt-8">
        <ScrollReveal variant="fade-up" delayMs={50}>
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-3">
              {[
                { label: 'Filter', icon: Filter },
                { label: 'Level', icon: BarChart2 },
                { label: 'Category', icon: Tag },
              ].map(({ label, icon: Icon }) => (
                <Button
                  key={label}
                  variant="pill"
                  size="pill"
                  className="gap-2"
                >
                  <Icon className="w-4 h-4 text-[#475569]" /> {label}
                </Button>
              ))}
            </div>
            <Button
              variant="pill"
              size="pill"
              className="gap-2"
            >
              <AlignLeft className="w-4 h-4 text-[#475569]" /> Most relevant
            </Button>
          </div>
        </ScrollReveal>

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
