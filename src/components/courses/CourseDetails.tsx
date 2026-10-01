'use client';
import React, { useState, useEffect } from 'react';
import { BlueGridBackground } from '@/components/shared/BlueGridBackground';
import { Course } from '@/components/shared/CourseCard';
import {
  Share2,
  Play,
  FileText,
  Monitor,
  Award,
  MessageCircle,
  Star,
  Users,
  BarChart,
  Check,
  X,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import defaultReviews from '../../../public/data/course-reviews.json';
import defaultLessonList from '../../../public/data/lesson-list.json';
import { CourseDetailsSkeleton } from '@/components/shared/SkeletonLoading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

interface LessonModule {
  title: string;
  desc: string;
}

export function CourseDetails({ courseId }: { courseId: string }) {
  const [course, setCourse] = useState<Course | null>(null);
  const [activeTab, setActiveTab] = useState<'About' | 'Lessons' | 'Reviews'>('About');
  const [reviews, setReviews] = useState<any[]>(defaultReviews);
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
      <BlueGridBackground className="w-full relative z-10 pt-[110px] sm:pt-[125px] pb-[58px]">
        <div className="container mx-auto px-6 sm:px-12 w-full">
          {/* Hero Header Row */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 lg:mb-10">
            <div className="flex-1 min-w-0">
              <ScrollReveal variant="fade-up" delayMs={50}>
                <h1
                  className="text-white text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[42px] font-semibold leading-[1.2] mb-[8px] tracking-tight whitespace-nowrap overflow-hidden text-ellipsis"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                >
                  {course.title}: A Comprehensive Guide
                </h1>
                <p
                  className="text-white/90 text-[15px] sm:text-[17px] mb-[24px] font-normal"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  Unlock the Power of Digital Creation with Expert Guidance
                </p>

                <div
                  className="text-white text-[15px] mb-[24px]"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
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
                <div
                  className="flex flex-wrap items-center gap-3"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
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
                <button
                  type="button"
                  onClick={handleShare}
                  className="flex items-center gap-2 bg-[#D4FB20] text-black font-semibold px-6 py-2.5 rounded-full hover:bg-[#c3e81b] transition-all active:scale-95 shadow-sm text-[14.5px] cursor-pointer"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  <Share2 className="w-4 h-4 stroke-[2.5]" />
                  <span>{copied ? 'Copied!' : 'Share'}</span>
                </button>
              </ScrollReveal>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-8">
              {/* Video Player Card */}
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
                  {/* Play Button Overlay - Same to same design */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] rounded-[24px] bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
                      {/* Inner White Circle: height and width 60px with enlarged play icon */}
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

            {/* Placeholder column to align with right sidebar card */}
            <div className="hidden lg:block lg:col-span-4" aria-hidden="true" />
          </div>
        </div>
      </BlueGridBackground>

      {/* 
        ========================================================================
        TWO-COLUMN MAIN CONTAINER (White section aligned with Navbar)
        Left: Tabs + Content (About, Sneak Peak, Key Points)
        Right: Sticky Floating Sidebar Card (overlaps top by negative margin to top-align with video)
        ========================================================================
      */}
      <div className="container mx-auto px-6 sm:px-12 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* ==================== LEFT COLUMN (col-span-8) ==================== */}
          <div className="lg:col-span-8 flex flex-col pt-8 sm:pt-10">
            {/* Navigation Tabs (About, Lessons, Reviews) */}
            <ScrollReveal variant="fade-up" delayMs={50}>
              <div
                className="flex items-center gap-3 mb-8"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                {(['About', 'Lessons', 'Reviews'] as const).map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-2 rounded-full text-[14px] transition-all cursor-pointer ${isActive
                        ? 'bg-[#D4FB20] text-black font-semibold shadow-sm'
                        : 'bg-[#F5F5F6] text-[#64748B] hover:text-black hover:bg-gray-200 font-medium'
                        }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* TAB CONTENT: ABOUT */}
            {activeTab === 'About' && (
              <div className="flex flex-col animate-fade-in-up">
                {/* Description Section */}
                <section className="mb-10">
                  <h2
                    className="text-[24px] font-semibold text-[#242528] mb-4"
                    style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                  >
                    Description
                  </h2>
                  <div
                    className="space-y-4 text-[#4F4F4F] text-[16px] leading-[160%]"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    <p>
                      Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &quot;Build Digital Assets: A Comprehensive Guide.&quot; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                    </p>
                    <p>
                      In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                    </p>
                    <p>
                      As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
                    </p>
                  </div>
                </section>

                {/* Sneak Peak Section */}
                <section className="mb-10">
                  <h2
                    className="text-[24px] font-semibold text-[#242528] mb-4"
                    style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                  >
                    Sneak Peak
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden border border-[#CED0D3]/60 shadow-sm group">
                      <Image
                        src="/sneak_sketch_wireframe.jpg"
                        alt="Wireframe Sketch"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden border border-[#CED0D3]/60 shadow-sm group">
                      <Image
                        src="/sneak_laptop_code.jpg"
                        alt="UI Software & Coding"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden border border-[#CED0D3]/60 shadow-sm group">
                      <Image
                        src="/sneak_desk_workspace.jpg"
                        alt="Desk Workspace Design"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden border border-[#CED0D3]/60 shadow-sm group">
                      <Image
                        src="/sneak_phone_mockup.jpg"
                        alt="Mobile App Interface"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </section>

                {/* Key Points Section */}
                <section className="mb-8">
                  <h2
                    className="text-[24px] font-semibold text-[#242528] mb-4"
                    style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                  >
                    Key Points
                  </h2>
                  <ul
                    className="space-y-3"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    {[
                      'Foundational Concepts',
                      'Design Principles Mastery',
                      'Advanced Techniques in Digital Creation',
                      'Project Showcase and Critique',
                      'Optimizing for Various Platforms',
                      'Digital Asset Management Best Practices',
                      'Monetization Strategies',
                      'Capstone Project: Building Your Portfolio',
                    ].map((point, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[#4F4F4F] text-[15px]">
                        <div className="w-[20px] h-[20px] rounded-full bg-[#003BE2] flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-white stroke-[3]" />
                        </div>
                        <span className="font-medium text-[#242528]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            )}

            {/* TAB CONTENT: LESSONS */}
            {activeTab === 'Lessons' && (
              <div className="flex flex-col animate-fade-in-up">
                <section className="mb-8">
                  <h2
                    className="text-[24px] font-semibold text-[#242528] mb-3"
                    style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                  >
                    Explore the Modules
                  </h2>
                  <p
                    className="text-[#4F4F4F] text-[16px] leading-[160%] mb-8"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                  </p>

                  <h3
                    className="text-[20px] font-semibold text-[#242528] mb-5"
                    style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                  >
                    Lesson List
                  </h3>
                  <div className="space-y-4 mb-10">
                    {lessonList.map((module, idx) => (
                      <div
                        key={idx}
                        className="flex gap-4 p-4 rounded-[18px] border border-[#CED0D3]/60 hover:border-[#003BE2]/40 transition-colors bg-white shadow-sm"
                      >
                        <div className="w-[52px] h-[52px] shrink-0 bg-[#D4FB20] rounded-[14px] flex items-center justify-center">
                          <Monitor className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h4
                            className="text-[16px] font-semibold text-[#242528] mb-1"
                            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                          >
                            {module.title}
                          </h4>
                          <p
                            className="text-[#4F4F4F] text-[14px] leading-relaxed"
                            style={{ fontFamily: 'Satoshi, sans-serif' }}
                          >
                            {module.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3
                    className="text-[20px] font-semibold text-[#242528] mb-3"
                    style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                  >
                    Lesson Content
                  </h3>
                  <p
                    className="text-[#4F4F4F] text-[16px] leading-[160%] mb-8"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
                  </p>

                  <h3
                    className="text-[20px] font-semibold text-[#242528] mb-3"
                    style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                  >
                    Lesson Progress Tracking
                  </h3>
                  <p
                    className="text-[#4F4F4F] text-[16px] leading-[160%] mb-5"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
                  </p>

                  <div className="border border-[#CED0D3] rounded-[20px] p-6 shadow-sm bg-white">
                    <p
                      className="text-[#64748B] text-[13px] font-medium mb-1"
                      style={{ fontFamily: 'Satoshi, sans-serif' }}
                    >
                      Learning Progress
                    </p>
                    <p
                      className="text-[32px] font-bold text-[#242528] mb-4"
                      style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                    >
                      55%
                    </p>
                    <div className="w-full h-2.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                      <div className="h-full bg-[#D4FB20] rounded-full" style={{ width: '55%' }} />
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* TAB CONTENT: REVIEWS */}
            {activeTab === 'Reviews' && (
              <div className="flex flex-col animate-fade-in-up">
                <section className="mb-8">
                  <h2
                    className="text-[24px] font-semibold text-[#242528] mb-3"
                    style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                  >
                    What Learners Are Saying
                  </h2>
                  <p
                    className="text-[#4F4F4F] text-[16px] leading-[160%] mb-8"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                  </p>

                  {/* Ratings Summary Box */}
                  <div className="border border-[#CED0D3] rounded-[20px] p-6 mb-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center bg-white shadow-sm">
                    <div className="w-[120px] h-[120px] bg-[#D4FB20] rounded-[18px] flex flex-col items-center justify-center shrink-0">
                      <span
                        className="text-[#242528] text-[14px] font-semibold mb-1"
                        style={{ fontFamily: 'Satoshi, sans-serif' }}
                      >
                        Ratings
                      </span>
                      <span
                        className="text-[#242528] text-[40px] font-bold leading-none"
                        style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                      >
                        4.7
                      </span>
                    </div>

                    <div className="flex-1 w-full space-y-2.5">
                      {[
                        { stars: 5, percent: 90, count: 720 },
                        { stars: 4, percent: 30, count: 120 },
                        { stars: 3, percent: 10, count: 21 },
                        { stars: 2, percent: 5, count: 12 },
                        { stars: 1, percent: 8, count: 16 },
                      ].map((row, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#D4FB20] rounded-full"
                              style={{ width: `${row.percent}%` }}
                            />
                          </div>
                          <div className="flex gap-1 shrink-0">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-3.5 h-3.5 ${star <= row.stars
                                  ? 'fill-[#003BE2] text-[#003BE2]'
                                  : 'fill-[#CBD5E1] text-[#CBD5E1]'
                                  }`}
                              />
                            ))}
                          </div>
                          <span
                            className="w-8 text-right text-[13px] text-[#64748B]"
                            style={{ fontFamily: 'Satoshi, sans-serif' }}
                          >
                            {row.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h3
                    className="text-[20px] font-semibold text-[#242528] mb-4"
                    style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                  >
                    Individual Reviews:
                  </h3>
                  <div
                    className="flex flex-wrap gap-2 mb-6"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    <button className="bg-[#D4FB20] text-black px-4 py-1.5 rounded-full text-[13.5px] font-semibold">
                      All rating
                    </button>
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <button
                        key={rating}
                        className="bg-[#F5F5F6] text-[#64748B] px-4 py-1.5 rounded-full text-[13.5px] font-medium flex items-center gap-1 hover:bg-gray-200 hover:text-black transition-colors"
                      >
                        <Star className="w-3.5 h-3.5 fill-current" /> {rating}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-4">
                    {reviews.map((review, idx) => (
                      <div
                        key={idx}
                        className="border border-[#CED0D3] rounded-[18px] p-6 bg-white shadow-sm"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center gap-3">
                            <Image
                              src={`https://i.pravatar.cc/150?img=${review.img || 12}`}
                              alt={review.name}
                              width={44}
                              height={44}
                              className="rounded-full bg-gray-200"
                            />
                            <div>
                              <h4
                                className="font-semibold text-[#242528] text-[15px]"
                                style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                              >
                                {review.name}
                              </h4>
                              <p
                                className="text-[#64748B] text-[13px]"
                                style={{ fontFamily: 'Satoshi, sans-serif' }}
                              >
                                {review.role}
                              </p>
                            </div>
                          </div>
                          <span
                            className="text-[#64748B] text-[12.5px]"
                            style={{ fontFamily: 'Satoshi, sans-serif' }}
                          >
                            {review.time}
                          </span>
                        </div>
                        <div className="flex gap-1 mb-3">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="w-3.5 h-3.5 fill-[#003BE2] text-[#003BE2]"
                            />
                          ))}
                        </div>
                        <p
                          className="text-[#4F4F4F] text-[14.5px] leading-relaxed"
                          style={{ fontFamily: 'Satoshi, sans-serif' }}
                        >
                          {review.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}
          </div>

          <div className="lg:col-span-4 w-full relative z-40 -mt-0 lg:-mt-[calc(min(56.25vw,520px)+58px)] lg:sticky lg:top-[90px]">
            <ScrollReveal variant="fade-up" delayMs={160}>
              <div className="bg-white rounded-[24px] p-[40px] border border-[#CED0D3]">
                {/* 1. Header: 20px font size, 600 weight, 24px bottom space */}
                <h3
                  className="text-[20px] font-[600] text-[#242528] mb-[24px] tracking-tight leading-snug"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                >
                  112 Lessons (24 hours)
                </h3>

                {/* 2. Lessons List Section: 24px bottom space to promo section */}
                <div className="mb-[24px]">
                  <div
                    className="space-y-3.5 mb-3"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    {[
                      { num: '01', title: 'Introduction to Digital Assets', time: '12 mins' },
                      { num: '02', title: 'Design Principles for Impacts', time: '21 mins' },
                      { num: '03', title: 'Advanced Techniques in Digital Creation', time: '16 mins' },
                    ].map((lesson, idx) => (
                      <div key={idx} className="flex items-center justify-between text-[13.5px] gap-2">
                        <div className="flex items-center gap-3">
                          <span className="text-[#64748B] font-medium">{lesson.num}</span>
                          <span className="text-[#242528] font-medium leading-snug">{lesson.title}</span>
                        </div>
                        <span className="text-[#003BE2] font-semibold shrink-0 text-[13px]">
                          {lesson.time}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* 99 more videos */}
                  <p
                    className="text-[#64748B] text-[13px] cursor-pointer hover:text-[#003BE2] font-medium transition-colors"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    99 more videos
                  </p>
                </div>

                {/* 3. Promo Text: Line 1 'Ready to Dive In? Enroll Now and Start', Line 2 'Building Your Digital Future!', 24px bottom space to price */}
                <div className="mb-[24px]">
                  <p
                    className="text-[#4F4F4F] text-[13.5px] leading-relaxed"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    <span className="block">Ready to Dive In? Enroll Now and Start</span>
                    <span className="block">Building Your Digital Future!</span>
                  </p>
                </div>

                {/* 4. Price Section: 24px bottom space to button */}
                <div className="mb-[24px]">
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-[#003BE2] font-semibold text-[36px] sm:text-[40px] leading-none"
                      style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                    >
                      ${course.price || 25}
                    </span>
                    <span
                      className="text-[#64748B] text-[14px] font-medium"
                      style={{ fontFamily: 'Satoshi, sans-serif' }}
                    >
                      /{course.priceType || 'lifetime'}
                    </span>
                  </div>
                </div>

                {/* 5. Enroll Now Button: 24px bottom space to 'This course include' */}
                <div className="mb-[24px]">
                  <button
                    type="button"
                    className="w-full bg-[#D4FB20] text-black font-semibold py-3.5 rounded-full text-[15px] hover:bg-[#c3e81b] transition-all active:scale-[0.98] shadow-sm cursor-pointer"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    Enroll Now
                  </button>
                </div>

                {/* 6. Course Includes Heading: 24px bottom space to the 4 features */}
                <h4
                  className="font-semibold text-[#242528] text-[15px] mb-[24px]"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                >
                  This course include
                </h4>

                {/* 7. The 4 Features List: 24px bottom space to the border */}
                <ul
                  className="space-y-3 mb-[24px]"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  <li className="flex items-center gap-3 text-[#4F4F4F] text-[13.5px] font-medium">
                    <FileText className="w-4 h-4 text-[#003BE2]" />
                    <span>Learning Resources</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#4F4F4F] text-[13.5px] font-medium">
                    <Monitor className="w-4 h-4 text-[#003BE2]" />
                    <span>Quality Lesson Videos</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#4F4F4F] text-[13.5px] font-medium">
                    <Award className="w-4 h-4 text-[#003BE2]" />
                    <span>Certificate of Completion</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#4F4F4F] text-[13.5px] font-medium">
                    <MessageCircle className="w-4 h-4 text-[#003BE2]" />
                    <span>Private Consultation</span>
                  </li>
                </ul>

                {/* 8. Border Divider: 24px bottom space to creator profile section */}
                <hr className="border-[#CED0D3]/70 mb-[24px]" />

                {/* 9. Creator Profile Header: Avatar + Name/Role, 24px bottom space to promo text */}
                <div className="flex items-center gap-3 mb-[24px]">
                  <div className="relative w-[48px] h-[48px] rounded-full overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                    <Image
                      src="/purepearl_avatar.jpg"
                      alt="PurePearl Studio"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5
                      className="font-semibold text-[#242528] text-[15px] leading-tight"
                      style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                    >
                      PurePearl Studio
                    </h5>
                    <p
                      className="text-[#64748B] text-[12.5px]"
                      style={{ fontFamily: 'Satoshi, sans-serif' }}
                    >
                      Professional Creator
                    </p>
                  </div>
                </div>

                {/* 10. Promo Text in Creator Section: 24px bottom space to button */}
                <p
                  className="text-[#4F4F4F] text-[13px] leading-relaxed mb-[24px]"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  <span className="block">Ready to Dive In? Enroll Now and Start</span>
                  <span className="block">Building Your Digital Future!</span>
                </p>

                {/* 11. See Full Profile Button */}
                <div>
                  <Link
                    href="/creators"
                    className="inline-block border border-[#CED0D3] text-[#242528] font-medium px-5 py-2 rounded-full text-[13px] hover:bg-gray-50 transition-colors cursor-pointer"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    See Full Profile
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* ==================== VIDEO POPUP MODAL ==================== */}
      {isVideoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsVideoOpen(false)}
        >
          {/* Modal Content Box */}
          <div
            className="relative w-full max-w-4xl bg-black rounded-[24px] overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
              aria-label="Close video"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* 16:9 Responsive Video Frame */}
            <div className="relative aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/K6GOMfJo6Ic?autoplay=1&rel=0"
                title="Course Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
