'use client';
import React, { useState, useEffect } from 'react';
import { BlueGridBackground } from '@/components/shared/BlueGridBackground';
import { Course } from '@/components/shared/CourseCard';
import { Share2, Play, FileText, Monitor, Award, MessageCircle, Star, Users, BarChart } from 'lucide-react';
import Image from 'next/image';

export function CourseDetails({ courseId }: { courseId: string }) {
  const [course, setCourse] = useState<Course | null>(null);
  const [activeTab, setActiveTab] = useState('About');
  const [reviews, setReviews] = useState<any[]>([]);

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
  }, [courseId]);

  if (!course) {
    return <div className="min-h-screen flex items-center justify-center font-sans">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white font-sans pb-20">
      {/* Hero */}
      <BlueGridBackground className="w-full pt-[136px] pb-[100px] flex flex-col">
        <div className="container mx-auto px-12 relative w-full">
          {/* Top Info */}
          <div className="flex justify-between items-start mb-10 w-[60%]">
            <div>
              <h1 className="text-white text-[44px] font-bold leading-tight mb-3">
                {course.title}: A Comprehensive Guide
              </h1>
              <p className="text-white text-[18px] mb-6">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              
              <div className="flex items-center gap-4 text-white text-[14px]">
                <span>by <span className="text-[#D4FB20] font-medium">{course.author}</span></span>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-white text-[#0F172A] px-4 py-1.5 rounded-full font-medium">
                    <BarChart className="w-4 h-4 text-[#003BE2]" /> {course.level}
                  </div>
                  <div className="flex items-center gap-1.5 bg-white text-[#0F172A] px-4 py-1.5 rounded-full font-medium">
                    <Star className="w-4 h-4 fill-[#003BE2] text-[#003BE2]" /> 4.8 (172 reviews)
                  </div>
                  <div className="flex items-center gap-1.5 bg-white text-[#0F172A] px-4 py-1.5 rounded-full font-medium">
                    <Users className="w-4 h-4 text-[#003BE2]" /> 199 Students
                  </div>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-[#D4FB20] text-black font-semibold px-6 py-2.5 rounded-full hover:bg-[#c2e61c] transition-colors absolute right-12 top-0">
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>

          <div className="flex gap-8 items-start relative">
            {/* Left Content - Video */}
            <div className="w-[60%] shrink-0">
              <div className="relative aspect-video rounded-[24px] overflow-hidden bg-black shadow-2xl group cursor-pointer border-4 border-white">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center pl-1 group-hover:bg-white/40 transition-colors">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Overlaps Hero and White BG */}
            <div className="w-[40%] bg-white rounded-[24px] p-8 shadow-xl relative top-[-60px] border border-[#E2E8F0]">
              <h3 className="text-[20px] font-bold text-[#0F172A] mb-6">112 Lessons (24 hours)</h3>
              
              <div className="space-y-4 mb-4">
                {[
                  { num: '01', title: 'Introduction to Digital Assets', time: '12 mins' },
                  { num: '02', title: 'Design Principles for Impacts', time: '21 mins' },
                  { num: '03', title: 'Advanced Techniques in Digital Creation', time: '16 mins' }
                ].map((lesson, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex gap-3 text-[14px]">
                      <span className="text-[#64748B]">{lesson.num}</span>
                      <span className="text-[#0F172A] font-medium">{lesson.title}</span>
                    </div>
                    <span className="text-[#003BE2] text-[13px]">{lesson.time}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#64748B] text-[13px] mb-8 cursor-pointer hover:text-[#003BE2]">99 more videos</p>

              <div className="mb-6">
                <p className="text-[#475569] text-[14px] mb-4">Ready to Dive in? Enroll Now and Start Building Your Digital Future!</p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-[#003BE2] font-bold text-[32px]">${course.price}</span>
                  <span className="text-[#475569] text-[14px]">/{course.priceType}</span>
                </div>
                <button className="w-full bg-[#D4FB20] text-black font-semibold py-4 rounded-full text-[16px] hover:bg-[#c2e61c] transition-colors">
                  Enroll Now
                </button>
              </div>

              <hr className="border-[#E2E8F0] mb-6" />

              <div className="mb-6">
                <h4 className="font-bold text-[#0F172A] text-[16px] mb-4">This course include</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[#475569] text-[14px]">
                    <FileText className="w-5 h-5 text-[#003BE2]" /> Learning Resources
                  </li>
                  <li className="flex items-center gap-3 text-[#475569] text-[14px]">
                    <Monitor className="w-5 h-5 text-[#003BE2]" /> Quality Lesson Videos
                  </li>
                  <li className="flex items-center gap-3 text-[#475569] text-[14px]">
                    <Award className="w-5 h-5 text-[#003BE2]" /> Certificate of Completion
                  </li>
                  <li className="flex items-center gap-3 text-[#475569] text-[14px]">
                    <MessageCircle className="w-5 h-5 text-[#003BE2]" /> Private Consultation
                  </li>
                </ul>
              </div>

              <hr className="border-[#E2E8F0] mb-6" />

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Image src="https://i.pravatar.cc/150?img=11" alt="Instructor" width={48} height={48} className="rounded-full bg-gray-200" />
                  <div>
                    <h5 className="font-bold text-[#0F172A] text-[15px]">{course.author}</h5>
                    <p className="text-[#64748B] text-[13px]">Professional Creator</p>
                  </div>
                </div>
                <p className="text-[#475569] text-[14px] mb-4">Ready to Dive in? Enroll Now and Start Building Your Digital Future!</p>
                <button className="border border-[#E2E8F0] text-[#0F172A] font-medium px-6 py-2 rounded-full text-[14px] hover:bg-gray-50 transition-colors">
                  See Full Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </BlueGridBackground>

      {/* Main Content (Tabs and Details) */}
      <div className="container mx-auto px-12 -mt-[30px] relative z-10 w-[60%]">
        
        {/* Tabs */}
        <div className="flex gap-2 mb-10">
          {['About', 'Lesson', 'Reviews'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-[15px] font-medium transition-colors ${
                activeTab === tab ? 'bg-[#D4FB20] text-black' : 'bg-[#F8FAFC] text-[#475569] hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'About' && (
          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Description</h2>
            <div className="space-y-4 text-[#475569] text-[15px] leading-relaxed mb-10">
              <p>Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.</p>
              <p>In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.</p>
              <p>As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.</p>
            </div>

            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Sneak Peak</h2>
            <div className="flex gap-4 overflow-x-auto mb-10 pb-4">
              <div className="w-[180px] h-[120px] relative rounded-[16px] overflow-hidden shrink-0 border border-[#E2E8F0]">
                <Image src="/4f3bdea5688b1a654db7a29b0bc5dd3563059d11 (1).jpg" alt="Sneak Peak 1" fill className="object-cover" />
              </div>
              <div className="w-[180px] h-[120px] relative rounded-[16px] overflow-hidden shrink-0 border border-[#E2E8F0]">
                <Image src="/72e18d90fb9ddac1944e3483a501f3cdae505f57.jpg" alt="Sneak Peak 2" fill className="object-cover" />
              </div>
              <div className="w-[180px] h-[120px] relative rounded-[16px] overflow-hidden shrink-0 border border-[#E2E8F0]">
                <Image src="/93ad9f9e6bdb3c7f3c478820624ee19ad7320072.jpg" alt="Sneak Peak 3" fill className="object-cover" />
              </div>
              <div className="w-[180px] h-[120px] relative rounded-[16px] overflow-hidden shrink-0 border border-[#E2E8F0]">
                <Image src="/69362b026219ac3eb8b4e77e8bbe4e18c4464b44.jpg" alt="Sneak Peak 4" fill className="object-cover" />
              </div>
            </div>

            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Key Points</h2>
            <ul className="space-y-3 mb-10">
              {[
                "Foundational Concepts",
                "Design Principles Mastery",
                "Advanced Techniques in Digital Creation",
                "Project Showcase and Critique",
                "Optimizing for Various Platforms",
                "Digital Asset Management Best Practices",
                "Monetization Strategies",
                "Capstone Project: Building Your Portfolio"
              ].map((point, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[#475569] text-[15px]">
                  <div className="w-5 h-5 bg-[#003BE2] rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'Lesson' && (
          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Explore the Modules</h2>
            <p className="text-[#475569] text-[15px] leading-relaxed mb-8">
              Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
            </p>

            <h2 className="text-[24px] font-bold text-[#0F172A] mb-6">Lesson List</h2>
            <div className="space-y-6 mb-10">
              {[
                {
                  title: "Module 1: Introduction to Digital Assets",
                  desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation."
                },
                {
                  title: "Module 2: Design Principles for Impact",
                  desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills."
                },
                {
                  title: "Module 3: User-Centric Design Strategies",
                  desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design."
                },
                {
                  title: "Module 4: Interactive Media and Engagement",
                  desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences."
                },
                {
                  title: "Module 5: Project Showcase and Critique",
                  desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence."
                },
                {
                  title: "Module 6: Optimizing Digital Assets for Various Platforms",
                  desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes."
                }
              ].map((module, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="w-[56px] h-[56px] shrink-0 bg-[#D4FB20] rounded-[16px] flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-[#0F172A] mb-1.5">{module.title}</h4>
                    <p className="text-[#475569] text-[14px] leading-relaxed">{module.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Lesson Content</h2>
            <p className="text-[#475569] text-[15px] leading-relaxed mb-8">
              Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
            </p>

            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Lesson Progress Tracking</h2>
            <p className="text-[#475569] text-[15px] leading-relaxed mb-6">
              Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
            </p>

            <div className="border border-[#E2E8F0] rounded-[16px] p-6 mb-10 shadow-sm">
              <p className="text-[#0F172A] text-[13px] font-medium mb-1">Learning Progress</p>
              <p className="text-[32px] font-bold text-[#0F172A] mb-4">55%</p>
              <div className="w-full h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                <div className="h-full bg-[#D4FB20] rounded-full" style={{ width: '55%' }}></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Reviews' && (
          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">What Learners Are Saying</h2>
            <p className="text-[#475569] text-[15px] leading-relaxed mb-8">
              Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
            </p>

            {/* Ratings Summary Box */}
            <div className="border border-[#E2E8F0] rounded-[16px] p-6 mb-10 flex gap-8 items-center">
              <div className="w-[120px] h-[120px] bg-[#D4FB20] rounded-[16px] flex flex-col items-center justify-center shrink-0">
                <span className="text-[#0F172A] text-[14px] font-medium mb-1">Ratings</span>
                <span className="text-[#0F172A] text-[40px] font-bold leading-none">4.7</span>
              </div>
              <div className="flex-1 space-y-3">
                {[
                  { stars: 5, percent: 90, count: 720 },
                  { stars: 4, percent: 30, count: 120 },
                  { stars: 3, percent: 10, count: 21 },
                  { stars: 2, percent: 5, count: 12 },
                  { stars: 1, percent: 8, count: 16 }
                ].map((row, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="flex-1 h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                      <div className="h-full bg-[#D4FB20] rounded-full" style={{ width: `${row.percent}%` }}></div>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className={`w-4 h-4 ${star <= row.stars ? 'fill-[#475569] text-[#475569]' : 'fill-[#CBD5E1] text-[#CBD5E1]'}`} />
                      ))}
                    </div>
                    <span className="w-8 text-right text-[13px] text-[#64748B]">{row.count}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-[20px] font-bold text-[#0F172A] mb-4">Individual Reviews:</h2>
            <div className="flex gap-2 mb-8">
              <button className="bg-[#D4FB20] text-black px-4 py-1.5 rounded-full text-[14px] font-medium">All rating</button>
              {[5, 4, 3, 2, 1].map((rating) => (
                <button key={rating} className="bg-[#F8FAFC] text-[#475569] px-4 py-1.5 rounded-full text-[14px] font-medium flex items-center gap-1 hover:bg-gray-100">
                  <Star className="w-3.5 h-3.5 fill-current" /> {rating}
                </button>
              ))}
            </div>

            <div className="space-y-6 mb-10">
              {reviews.map((review, idx) => (
                <div key={idx} className="border border-[#E2E8F0] rounded-[16px] p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <Image src={`https://i.pravatar.cc/150?img=${review.img}`} alt={review.name} width={48} height={48} className="rounded-full bg-gray-200" />
                      <div>
                        <h4 className="font-bold text-[#0F172A] text-[15px]">{review.name}</h4>
                        <p className="text-[#64748B] text-[13px]">{review.role}</p>
                      </div>
                    </div>
                    <span className="text-[#64748B] text-[13px]">{review.time}</span>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-[#475569] text-[#475569]" />
                    ))}
                  </div>
                  <p className="text-[#475569] text-[14px] leading-relaxed">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
