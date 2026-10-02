import React, { useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

export interface ReviewItem {
  name: string;
  role: string;
  time: string;
  text: string;
  img?: number;
}

interface CourseReviewsTabProps {
  reviews: ReviewItem[];
}

export function CourseReviewsTab({ reviews }: CourseReviewsTabProps) {
  const [selectedFilter, setSelectedFilter] = useState<number | 'all'>('all');

  return (
    <div className="flex flex-col animate-fade-in-up">
      <section className="mb-8">
        <h2 className="text-[24px] font-semibold text-[#242528] mb-3 font-poppins">
          What Learners Are Saying
        </h2>
        <p className="text-[#4F4F4F] text-[16px] leading-[160%] mb-8">
          Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
        </p>

        {/* Ratings Summary Box */}
        <div className="border border-[#CED0D3] rounded-[20px] p-6 mb-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center bg-white shadow-sm">
          <div className="w-[120px] h-[120px] bg-[#D4FB20] rounded-[18px] flex flex-col items-center justify-center shrink-0">
            <span className="text-[#242528] text-[14px] font-[500] mb-1">
              Ratings
            </span>
            <span className="text-[#242528] text-[36px] font-[600] leading-none font-poppins">
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
                      className={`w-5 h-5 ${
                        star <= row.stars
                          ? 'fill-[#4B4C53] text-[#4B4C53]'
                          : 'fill-[#CBD5E1] text-[#CBD5E1]'
                      }`}
                    />
                  ))}
                </div>
                <span className="w-8 text-right text-[13px] text-[#64748B]">
                  {row.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-[20px] font-semibold text-[#242528] mb-4 font-poppins">
          Individual Reviews:
        </h3>
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-1.5 rounded-full text-[16px] font-[500] cursor-pointer transition-colors ${
              selectedFilter === 'all'
                ? 'bg-[#D4FB20] text-black'
                : 'bg-[#F5F5F6] text-[#4B4C53] hover:bg-gray-200'
            }`}
          >
            All rating
          </button>
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => setSelectedFilter(rating)}
              className={`px-4 py-1.5 rounded-full text-[16px] font-[500] flex items-center gap-1.5 cursor-pointer transition-colors ${
                selectedFilter === rating
                  ? 'bg-[#D4FB20] text-black'
                  : 'bg-[#F5F5F6] text-[#4B4C53] hover:bg-gray-200'
              }`}
            >
              <Star
                className={`w-5 h-5 ${
                  selectedFilter === rating
                    ? 'fill-black text-black'
                    : 'fill-[#4B4C53] text-[#4B4C53]'
                }`}
              />
              {rating}
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
                    src={`/Avater ${(idx % 4) + 1}.png`}
                    alt={review.name}
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-full object-cover border border-gray-100 shadow-xs shrink-0"
                  />
                  <div>
                    <h4 className="font-[500] text-[#242528] text-[18px] font-poppins">
                      {review.name}
                    </h4>
                    <p className="text-[#64748B] text-[16px] font-[400]">
                      {review.role}
                    </p>
                  </div>
                </div>
                <span className="text-[#64748B] text-[12.5px]">
                  {review.time}
                </span>
              </div>
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-[#4B4C53] text-[#4B4C53]"
                  />
                ))}
              </div>
              <p className="text-[#4F4F4F] text-[14.5px] leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
