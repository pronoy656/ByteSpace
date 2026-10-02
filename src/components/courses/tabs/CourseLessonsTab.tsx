import React from 'react';
import { Monitor } from 'lucide-react';

export interface LessonModule {
  title: string;
  desc: string;
}

interface CourseLessonsTabProps {
  lessonList: LessonModule[];
}

export function CourseLessonsTab({ lessonList }: CourseLessonsTabProps) {
  return (
    <div className="flex flex-col animate-fade-in-up">
      <section className="mb-8">
        <h2 className="text-[24px] font-semibold text-[#242528] mb-3 font-poppins">
          Explore the Modules
        </h2>
        <p className="text-[#4F4F4F] text-[16px] leading-[160%] mb-8">
          Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
        </p>

        <h3 className="text-[20px] font-semibold text-[#242528] mb-5 font-poppins">
          Lesson List
        </h3>
        <div className="space-y-6 mb-10">
          {lessonList.map((module, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="w-[52px] h-[52px] shrink-0 bg-[#D4FB20] rounded-[14px] flex items-center justify-center">
                <Monitor className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="text-[16px] font-semibold text-[#242528] mb-1 font-poppins">
                  {module.title}
                </h4>
                <p className="text-[#4F4F4F] text-[16px] font-[400] leading-relaxed">
                  {module.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-[20px] font-semibold text-[#242528] mb-3 font-poppins">
          Lesson Content
        </h3>
        <p className="text-[#4F4F4F] text-[16px] leading-[160%] mb-8">
          Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
        </p>

        <h3 className="text-[20px] font-semibold text-[#242528] mb-3 font-poppins">
          Lesson Progress Tracking
        </h3>
        <p className="text-[#4F4F4F] text-[16px] leading-[160%] mb-5">
          Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
        </p>

        <div className="border border-[#CED0D3] rounded-[20px] p-6 shadow-sm bg-white">
          <p className="text-[#64748B] text-[13px] font-medium mb-1">
            Learning Progress
          </p>
          <p className="text-[32px] font-bold text-[#242528] mb-4 font-poppins">
            55%
          </p>
          <div className="w-full h-2.5 bg-[#F1F5F9] rounded-full overflow-hidden">
            <div className="h-full bg-[#D4FB20] rounded-full" style={{ width: '55%' }} />
          </div>
        </div>
      </section>
    </div>
  );
}
