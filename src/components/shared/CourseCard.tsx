import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, BarChart } from 'lucide-react';
import { StudentAvatars } from './StudentAvatars';

export interface Course {
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
  category?: string;
}

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="border border-[#CED0D3] rounded-3xl overflow-hidden hover:shadow-lg transition-shadow bg-white flex flex-col p-4 group"
    >
      {/* Thumbnail Banner */}
      <div className="relative rounded-xl overflow-hidden mb-4 aspect-[4/2.6]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-102 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-medium text-[#334155]">
          <span className="bg-white/95 shadow-xs px-2.5 py-1 rounded-full">{course.lessons} Lessons</span>
          <span className="bg-white/95 shadow-xs px-2.5 py-1 rounded-full">{course.duration}</span>
          <span className="bg-white/95 shadow-xs px-2.5 py-1 rounded-full">{course.comments} Comments</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col px-1">
        {/* Title & Rating */}
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-semibold text-xl text-[#0F172A] leading-tight line-clamp-1 font-poppins">
            {course.title}
          </h3>
          <div className="flex items-center gap-1 text-lg font-normal text-[#4F4F4F] shrink-0 ml-2">
            {course.rating} <Star className="w-4 h-4 fill-[#CED0D3] text-[#CED0D3]" />
          </div>
        </div>

        {/* Author */}
        <p className="text-xs font-normal mb-5">
          <span className="text-[#4F4F4F]">by </span>
          <span className="text-[#003BE2] font-medium">{course.author}</span>
        </p>

        {/* Level & Enrolled Avatars */}
        <div className="flex items-center gap-3 mt-auto">
          <div className="flex items-center gap-1.5 text-xs font-medium text-[#4B4C53] bg-[#F5F5F6] px-3 py-1.5 rounded-full">
            <BarChart className="w-3.5 h-3.5 text-[#4B4C53]" />
            {course.level}
          </div>
          <div className="flex items-center">
            <StudentAvatars count={4} size={32} className="mr-1" />
            <div className="w-8 h-8 rounded-full border-2 border-white bg-[#D4FB20] text-black text-xs font-medium flex items-center justify-center -ml-2 z-10 shadow-xs">
              {course.studentsCount}
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-1 mt-4">
          <span className="text-[#003BE2] font-semibold text-xl font-poppins">
            ${course.price}
          </span>
          <span className="text-xs text-[#4F4F4F] font-normal">
            /{course.priceType}
          </span>
        </div>
      </div>
    </Link>
  );
}
