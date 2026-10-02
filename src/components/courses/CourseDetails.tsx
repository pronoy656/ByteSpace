'use client';
import React, { useState, useEffect } from 'react';
import { BlueGridBackground } from '@/components/shared/BlueGridBackground';
import { Course } from '@/components/shared/CourseCard';
import { CourseDetailsSkeleton } from '@/components/shared/SkeletonLoading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Button } from '@/components/shared/Button';
import { Share2, BarChart, Star, Users } from 'lucide-react';
import Image from 'next/image';

import defaultReviews from '../../../public/data/course-reviews.json';
import defaultLessonList from '../../../public/data/lesson-list.json';

import { CourseAboutTab } from './CourseAboutTab';
import { CourseLessonsTab, type LessonModule } from './CourseLessonsTab';
import { CourseReviewsTab, type ReviewItem } from './CourseReviewsTab';
import { CourseSidebarCard } from './CourseSidebarCard';
import { CourseVideoModal } from './CourseVideoModal';

export function CourseDetails({ courseId }: { courseId: string }) {
  const [course, setCourse] = useState<Course | null>(null);
  const [activeTab, setActiveTab] = useState<'About' | 'Lessons' | 'Reviews'>('About');
  const [reviews, setReviews] = useState<ReviewItem[]>(defaultReviews);
  const [lessonList, setLessonList] = useState<LessonModule[]>(defaultLessonList);
  const [copied, setCopied] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    fetch('/data/courses.json')
      .then((res) => res.json())
      .then((data: Course[]) => {
        const found = data.find((c) => c.id.toString() === courseId);
        if (found) setCourse(found);
      })
      .catch((err) => console.error('Failed to load course details', err));

    fetch('/data/course-reviews.json')
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error('Failed to load course reviews', err));

    fetch('/data/lesson-list.json')
      .then((res) => res.json())
      .then((data) => setLessonList(data))
      .catch((err) => console.error('Failed to load lesson list', err));
  }, [courseId]);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!course) {
    return <CourseDetailsSkeleton />;
  }

  return (
    <div className="min-h-screen bg-white font-sans pb-24 text-[#242528] relative">
      {/* ==================== HERO SECTION WITH BLUE BACKGROUND ==================== */}
      <BlueGridBackground className="w-full relative z-10 pt-[110px] sm:pt-[125px] pb-[58px]">
        <div className="container mx-auto px-6 sm:px-12 w-full">
          {/* Hero Header Row */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 lg:mb-10">
            <div className="flex-1 min-w-0">
              <ScrollReveal variant="fade-up" delayMs={50}>
                <h1 className="text-white text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[42px] font-semibold leading-[1.2] mb-[8px] tracking-tight whitespace-nowrap overflow-hidden text-ellipsis font-poppins">
                  {course.title}: A Comprehensive Guide
                </h1>
                <p className="text-white/90 text-[15px] sm:text-[17px] mb-[24px] font-normal">
                  Unlock the Power of Digital Creation with Expert Guidance
                </p>

                <div className="text-white text-[15px] mb-[24px]">
                  <span className="font-normal text-white/90">
                    by{' '}
                    <span className="text-[#D4FB20] font-semibold">
                      {course.author || 'purepearl studio'}
                    </span>
                  </span>
                </div>
              </ScrollReveal>

              {/* Badges / Metrics Row */}
              <ScrollReveal variant="fade-up" delayMs={120}>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 bg-white text-[#242528] px-[24px] py-[8px] rounded-full font-[500] text-[16px] leading-tight shadow-sm">
                    <BarChart className="w-[24px] h-[24px] text-[#003BE2] shrink-0" />
                    <span>{course.level || 'Intermediate'}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white text-[#242528] px-[24px] py-[8px] rounded-full font-[500] text-[16px] leading-tight shadow-sm">
                    <Star className="w-[24px] h-[24px] fill-[#003BE2] text-[#003BE2] shrink-0" />
                    <span>
                      {course.rating || '4.8'} ({course.comments ? `${course.comments * 3} reviews` : '172 reviews'})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-white text-[#242528] px-[24px] py-[8px] rounded-full font-[500] text-[16px] leading-tight shadow-sm">
                    <Users className="w-[24px] h-[24px] text-[#003BE2] shrink-0" />
                    <span>
                      {course.studentsCount ? `${course.studentsCount} Students` : '199 Students'}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Share Button (Top Right) */}
            <div className="shrink-0 pt-1">
              <ScrollReveal variant="fade-up" delayMs={80}>
                <Button
                  variant="lime"
                  size="md"
                  onClick={handleShare}
                  className="gap-2"
                >
                  <Share2 className="w-4 h-4 stroke-[2.5]" />
                  <span>{copied ? 'Copied!' : 'Share'}</span>
                </Button>
              </ScrollReveal>
            </div>
          </div>

          {/* Video Preview Card Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-8">
              <ScrollReveal variant="fade-up" delayMs={160}>
                <div
                  onClick={() => setIsVideoOpen(true)}
                  className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-[24px] sm:rounded-[28px] overflow-hidden group cursor-pointer shadow-none"
                >
                  <Image
                    src="/course_video_preview.jpg"
                    alt="Course Video Preview"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] rounded-[24px] bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
                      <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shadow-sm pl-1">
                        <svg
                          className="w-8 h-8 text-black/40 fill-black/40"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="hidden lg:block lg:col-span-4" aria-hidden="true" />
          </div>
        </div>
      </BlueGridBackground>

      {/* ==================== TWO-COLUMN MAIN CONTENT CONTAINER ==================== */}
      <div className="container mx-auto px-6 sm:px-12 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Tabs Navigation & Dynamic Tab Content */}
          <div className="lg:col-span-8 flex flex-col pt-8 sm:pt-10">
            <ScrollReveal variant="fade-up" delayMs={50}>
              <div className="flex items-center gap-3 mb-8">
                {(['About', 'Lessons', 'Reviews'] as const).map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <Button
                      key={tab}
                      variant="pill"
                      size="sm"
                      isActive={isActive}
                      onClick={() => setActiveTab(tab)}
                      className="px-6 py-2"
                    >
                      {tab}
                    </Button>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* Modular Tab Content */}
            {activeTab === 'About' && <CourseAboutTab />}
            {activeTab === 'Lessons' && <CourseLessonsTab lessonList={lessonList} />}
            {activeTab === 'Reviews' && <CourseReviewsTab reviews={reviews} />}
          </div>

          {/* Right Column: Sticky Sidebar Card */}
          <div className="lg:col-span-4 w-full relative z-40 -mt-0 lg:-mt-[calc(min(56.25vw,520px)+58px)] lg:sticky lg:top-[90px]">
            <ScrollReveal variant="fade-up" delayMs={160}>
              <CourseSidebarCard course={course} />
            </ScrollReveal>
          </div>
        </div>
      </div>

      <CourseVideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </div>
  );
}
