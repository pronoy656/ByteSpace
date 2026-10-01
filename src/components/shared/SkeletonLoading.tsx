import React from 'react';

export function CourseCardSkeleton() {
  return (
    <div className="border border-[#E2E8F0] rounded-[24px] overflow-hidden bg-white flex flex-col p-4 animate-pulse">
      {/* Thumbnail Skeleton */}
      <div className="relative rounded-[12px] bg-slate-200 aspect-[4/2.6] mb-4 overflow-hidden">
        {/* Pills skeleton */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div className="h-5 w-16 bg-white/80 rounded-full" />
          <div className="h-5 w-20 bg-white/80 rounded-full" />
          <div className="h-5 w-18 bg-white/80 rounded-full" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="flex-1 flex flex-col px-1">
        <div className="flex justify-between items-start mb-3">
          <div className="h-6 bg-slate-200 rounded-md w-3/4" />
          <div className="h-5 bg-slate-200 rounded-md w-10 ml-2" />
        </div>

        <div className="h-4 bg-slate-200 rounded-md w-1/3 mb-4" />

        <div className="flex items-center gap-2 mb-4">
          <div className="h-6 w-24 bg-slate-100 rounded-full" />
          <div className="h-6 w-20 bg-slate-100 rounded-full" />
        </div>

        <div className="flex items-center justify-between mt-auto border-t border-[#F1F5F9] pt-3">
          <div className="h-5 w-24 bg-slate-200 rounded-md" />
          <div className="h-7 w-16 bg-slate-200 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export function CourseGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <CourseCardSkeleton key={i} />
      ))}
    </>
  );
}

export function CreatorProfileSkeleton() {
  return (
    <div className="min-h-screen bg-white font-sans pb-24 animate-pulse">
      <div className="w-full bg-[#003BE2] pt-[130px] pb-[70px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] rounded-[24px] bg-white/20 shrink-0" />
            <div className="pt-2 flex-1">
              <div className="h-8 bg-white/30 rounded-lg w-56 mb-3" />
              <div className="h-4 bg-white/20 rounded-md w-44" />
            </div>
          </div>
          <div className="max-w-[880px] space-y-2 mb-8">
            <div className="h-4 bg-white/20 rounded w-full" />
            <div className="h-4 bg-white/20 rounded w-5/6" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <div className="h-10 w-28 bg-white/20 rounded-full" />
              <div className="h-10 w-32 bg-white/20 rounded-full" />
            </div>
            <div className="h-10 w-28 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
          <CourseGridSkeleton count={6} />
        </div>
      </div>
    </div>
  );
}

export function CourseDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-white font-sans pb-24 text-[#242528] relative animate-pulse">
      {/* Hero Blue Banner Skeleton */}
      <div className="w-full bg-[#003BE2] pt-[110px] sm:pt-[125px] pb-[58px]">
        <div className="container mx-auto px-6 sm:px-12 w-full">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div className="flex-1 min-w-0">
              <div className="h-10 bg-white/20 rounded-lg w-3/4 mb-4" />
              <div className="h-5 bg-white/15 rounded-md w-1/2 mb-6" />
              <div className="h-4 bg-white/15 rounded-md w-1/4 mb-6" />
              <div className="flex flex-wrap gap-3">
                <div className="h-10 w-36 bg-white/20 rounded-full" />
                <div className="h-10 w-28 bg-white/20 rounded-full" />
                <div className="h-10 w-44 bg-white/20 rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-32 bg-white/20 rounded-full" />
              <div className="h-12 w-12 bg-white/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout Skeleton */}
      <div className="container mx-auto px-6 sm:px-12 w-full pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column Skeleton */}
          <div className="lg:col-span-8 space-y-6">
            <div className="h-12 bg-slate-100 rounded-full w-80" />
            <div className="h-72 bg-slate-200 rounded-[24px]" />
            <div className="space-y-3 pt-4">
              <div className="h-5 bg-slate-200 rounded w-full" />
              <div className="h-5 bg-slate-200 rounded w-5/6" />
              <div className="h-5 bg-slate-200 rounded w-4/6" />
            </div>
          </div>

          {/* Right Column (Sidebar Card) Skeleton */}
          <div className="lg:col-span-4">
            <div className="border border-[#E2E8F0] rounded-[24px] p-6 bg-white space-y-5">
              <div className="h-8 bg-slate-200 rounded-md w-1/3" />
              <div className="h-12 bg-[#D4FB20]/40 rounded-full w-full" />
              <div className="h-12 bg-slate-100 rounded-full w-full" />
              <div className="border-t border-slate-100 pt-4 space-y-3">
                <div className="h-4 bg-slate-100 rounded w-full" />
                <div className="h-4 bg-slate-100 rounded w-full" />
                <div className="h-4 bg-slate-100 rounded w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
