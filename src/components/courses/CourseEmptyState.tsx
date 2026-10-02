import React from 'react';
import { BookOpen, RotateCcw, ArrowRight } from 'lucide-react';
import { CourseCard, type Course } from '@/components/shared/CourseCard';
import { Button } from '@/components/shared/Button';

interface CourseEmptyStateProps {
  debouncedSearch: string;
  activeCategory: string;
  selectedLevel: string;
  recommendedCourses: Course[];
  onResetFilters: () => void;
}

export function CourseEmptyState({
  debouncedSearch,
  activeCategory,
  selectedLevel,
  recommendedCourses,
  onResetFilters,
}: CourseEmptyStateProps) {
  return (
    <div className="py-12 my-6 w-full">
      <div className="relative max-w-2xl mx-auto rounded-[36px] bg-white border border-[#E2E8F0] shadow-[0_12px_40px_-15px_rgba(0,0,0,0.06)] p-8 sm:p-14 text-center overflow-hidden">
        {/* Icon Badge */}
        <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
          <div className="relative w-20 h-20 rounded-[28px] bg-gradient-to-tr from-[#003BE2] to-[#1E5BF9] text-white flex items-center justify-center">
            <BookOpen className="w-9 h-9 text-white" strokeWidth={2} />
          </div>
        </div>

        {/* Heading */}
        <h3 className="text-[#0F172A] text-[24px] sm:text-[28px] font-medium tracking-tight leading-tight mb-3 font-poppins">
          No Matching Courses Found
        </h3>

        {/* Explanation */}
        <p className="text-[#64748B] text-[15px] sm:text-[16px] leading-relaxed max-w-md mx-auto mb-8">
          We couldn&apos;t find any course matching{' '}
          {debouncedSearch ? (
            <span className="font-semibold text-[#0F172A]">&ldquo;{debouncedSearch}&rdquo;</span>
          ) : (
            'the selected filters'
          )}
          {activeCategory !== 'Featured' && (
            <span> under <span className="font-medium text-[#003BE2]">&ldquo;{activeCategory}&rdquo;</span></span>
          )}
          {selectedLevel !== 'All Levels' && (
            <span> for <span className="font-medium text-[#003BE2]">&ldquo;{selectedLevel}&rdquo;</span> level</span>
          )}
          . Try resetting your search or exploring other categories.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="lime"
            size="md"
            onClick={onResetFilters}
            className="w-full sm:w-auto px-7 py-3.5 gap-2"
          >
            <RotateCcw className="w-4 h-4" /> Reset Filters
          </Button>
          <Button
            variant="blue"
            size="md"
            onClick={onResetFilters}
            className="w-full sm:w-auto px-7 py-3.5 gap-2"
          >
            Explore Courses <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Recommended Courses Fallback */}
      {recommendedCourses.length > 0 && (
        <div className="mt-14 pt-10 border-t border-[#F1F5F9]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h4 className="text-[22px] font-bold text-[#0F172A] font-poppins">
                Popular Courses You May Like
              </h4>
              <p className="text-[14px] text-[#64748B]">
                Top rated courses chosen by ByteSpace students
              </p>
            </div>
            <button
              onClick={onResetFilters}
              className="text-[#003BE2] font-semibold text-[14px] hover:underline flex items-center gap-1 cursor-pointer"
            >
              Browse catalog <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
            {recommendedCourses.map((c, i) => (
              <div
                key={c.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <CourseCard course={c} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
