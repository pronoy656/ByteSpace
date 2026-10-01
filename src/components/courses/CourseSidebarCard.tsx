import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Course } from '@/components/shared/CourseCard';
import { FileText, Monitor, Award, MessageCircle } from 'lucide-react';

interface CourseSidebarCardProps {
  course: Course;
}

const sampleLessons = [
  { num: '01', title: 'Introduction to Digital Assets', time: '12 mins' },
  { num: '02', title: 'Design Principles for Impacts', time: '21 mins' },
  { num: '03', title: 'Advanced Techniques in Digital Creation', time: '16 mins' },
];

const courseFeatures = [
  { label: 'Learning Resources', icon: FileText },
  { label: 'Quality Lesson Videos', icon: Monitor },
  { label: 'Certificate of Completion', icon: Award },
  { label: 'Private Consultation', icon: MessageCircle },
];

export function CourseSidebarCard({ course }: CourseSidebarCardProps) {
  return (
    <div className="bg-white rounded-[24px] p-[40px] border border-[#CED0D3]">
      {/* 1. Header: Lessons and Hours */}
      <h3 className="text-[20px] font-[600] text-[#242528] mb-[24px] tracking-tight leading-snug font-poppins">
        112 Lessons (24 hours)
      </h3>

      {/* 2. Lessons Sample List */}
      <div className="mb-[24px]">
        <div className="space-y-3.5 mb-3">
          {sampleLessons.map((lesson, idx) => (
            <div key={idx} className="flex items-center justify-between text-[16px] gap-2">
              <div className="flex items-center gap-3">
                <span className="text-[#64748B] font-[400] text-[16px]">{lesson.num}</span>
                <span className="text-[#242528] font-[500] text-[16px] leading-snug">{lesson.title}</span>
              </div>
              <span className="text-[#003BE2] font-[400] shrink-0 text-[16px]">
                {lesson.time}
              </span>
            </div>
          ))}
        </div>

        {/* 99 more videos */}
        <p className="text-[#64748B] text-[16px] cursor-pointer hover:text-[#003BE2] font-[400] transition-colors">
          99 more videos
        </p>
      </div>

      {/* 3. Promo Text */}
      <div className="mb-[24px]">
        <p className="text-[#4F4F4F] text-[16px] font-[400] leading-relaxed">
          <span className="block">Ready to Dive In? Enroll Now and Start</span>
          <span className="block">Building Your Digital Future!</span>
        </p>
      </div>

      {/* 4. Price Section */}
      <div className="mb-[24px]">
        <div className="flex items-baseline gap-1">
          <span className="text-[#003BE2] font-[600] text-[36px] leading-none font-poppins">
            ${course.price || 25}
          </span>
          <span className="text-[#64748B] text-[16px] font-[400]">
            /{course.priceType || 'lifetime'}
          </span>
        </div>
      </div>

      {/* 5. Enroll Now Button */}
      <div className="mb-[24px]">
        <button
          type="button"
          className="w-full bg-[#D4FB20] text-black font-[500] py-3.5 rounded-full text-[18px] hover:bg-[#c3e81b] transition-all active:scale-[0.98] shadow-sm cursor-pointer"
        >
          Enroll Now
        </button>
      </div>

      {/* 6. Course Includes Heading */}
      <h4 className="font-semibold text-[#242528] text-[16px] mb-[24px] font-poppins">
        This course include
      </h4>

      {/* 7. Features List */}
      <ul className="space-y-3 mb-[24px]">
        {courseFeatures.map(({ label, icon: Icon }) => (
          <li key={label} className="flex items-center gap-3 text-[#4F4F4F] text-[16px] font-[400]">
            <Icon className="w-4 h-4 text-[#003BE2]" />
            <span>{label}</span>
          </li>
        ))}
      </ul>

      {/* 8. Border Divider */}
      <hr className="border-[#CED0D3]/70 mb-[24px]" />

      {/* 9. Creator Profile Header */}
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
          <h5 className="font-semibold text-[#242528] text-[15px] leading-tight font-poppins">
            PurePearl Studio
          </h5>
          <p className="text-[#64748B] text-[12.5px]">
            Professional Creator
          </p>
        </div>
      </div>

      {/* 10. Promo Text in Creator Section */}
      <p className="text-[#4F4F4F] text-[13px] leading-relaxed mb-[24px]">
        <span className="block">Ready to Dive In? Enroll Now and Start</span>
        <span className="block">Building Your Digital Future!</span>
      </p>

      {/* 11. See Full Profile Button */}
      <div>
        <Link
          href="/creators"
          className="inline-block border border-[#CED0D3] text-[#242528] font-medium px-5 py-2 rounded-full text-[13px] hover:bg-gray-50 transition-colors cursor-pointer"
        >
          See Full Profile
        </Link>
      </div>
    </div>
  );
}
