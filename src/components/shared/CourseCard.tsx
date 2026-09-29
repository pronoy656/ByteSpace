import React from 'react';
import Image from 'next/image';
import { Star, BarChart } from 'lucide-react';

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
}

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="border border-[#E2E8F0] rounded-[24px] overflow-hidden hover:shadow-lg transition-shadow bg-white flex flex-col p-4">
      
      {/* Thumbnail */}
      <div className="relative rounded-[12px] overflow-hidden mb-4 aspect-[4/2.6]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-medium text-[#334155]">
          <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full">{course.lessons} Lessons</span>
          <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full">{course.duration}</span>
          <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full">{course.comments} Comments</span>
        </div>
      </div>

      {/* Info */}
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

        {/* Level + Students */}
        <div className="flex items-center gap-[12px] mt-auto">
          <div className="flex items-center gap-1.5 text-[12px] font-medium text-[#4B4C53] bg-[#F5F5F6] px-[12px] py-[9px] rounded-[24px]">
            <BarChart className="w-3.5 h-3.5 text-[#4B4C53]" />
            {course.level}
          </div>
          <div className="flex items-center">
            <div className="flex -space-x-2 mr-1">
              {[1, 2, 3, 4].map((i) => (
                <Image
                  key={i}
                  width={32}
                  height={32}
                  className="w-[32px] h-[32px] rounded-full border-2 border-white object-cover bg-gray-200"
                  src={`https://i.pravatar.cc/100?img=${i}`}
                  alt="user"
                />
              ))}
            </div>
            <div className="w-[32px] h-[32px] rounded-full border-2 border-white bg-[#D4FB20] text-black text-[12px] font-medium flex items-center justify-center -ml-2 z-10">
              {course.studentsCount}
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
  );
}
