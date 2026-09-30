import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-[#242528] w-full pt-[60px] pb-8 border-t border-[#CED0D3]">
      <div className="container mx-auto px-6 sm:px-12 w-full">
        {/* Main Content Row: Left Newsletter + Right 3 Link Columns */}
        <div className="flex flex-col lg:flex-row justify-between mb-[130px] gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT SECTION: NEWSLETTER ================= */}
          <div className="shrink-0 w-full lg:w-auto">
            {/* 1. Logo & Brand: 16px bottom space to subtitle */}
            <div className="flex items-center gap-2.5 mb-[16px]">
              <img
                src="/Vector.png"
                alt="ByteSpace Logo"
                className="h-[28px] w-auto block object-contain"
              />
              <span
                className="text-[#242528] text-[24px] font-[700] leading-none inline-flex items-center tracking-tight"
                style={{ fontFamily: '"Clash Display", sans-serif' }}
              >
                ByteSpace
              </span>
            </div>

            {/* 2. Subtitle: Single line, 45px bottom space to input field */}
            <p
              className="text-[#242528] text-[15px] font-[400] leading-relaxed whitespace-nowrap mb-[45px]"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* 3. Input & Subscribe Button: gap/space 24px, 24px bottom space to disclaimer */}
            <div className="flex items-center gap-[24px] mb-[24px] w-full max-w-[620px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-[420px] md:w-[460px] border border-[#CED0D3] rounded-full px-6 h-[50px] text-[15px] text-[#242528] outline-none focus:border-[#242528] transition-colors placeholder:text-[#94A3B8]"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              />
              <button
                type="button"
                className="bg-[#D4FB20] text-black font-[600] rounded-full px-8 h-[50px] text-[15px] hover:bg-[#c3e81b] transition-all active:scale-95 shrink-0 cursor-pointer"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                Subscribe
              </button>
            </div>

            {/* 4. Disclaimer: Line 1 up to 'from our', Line 2 'company.' */}
            <p
              className="text-[#242528] text-[12px] leading-[150%]"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              <span className="block">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our
              </span>
              <span className="block">company.</span>
            </p>
          </div>

          {/* ================= RIGHT SECTION: 3 LINK COLUMNS ================= */}
          {/* Spaced 92px from the newsletter block on large screens */}
          <div className="w-full lg:flex-1 lg:max-w-[620px] lg:ml-[92px] grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-[40px] pt-1">
            {/* Column 1: Featured Courses */}
            <div className="flex flex-col gap-[16px] text-[14px] font-[400] text-[#242528]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              <Link href="#" className="hover:opacity-75 transition-opacity">Featured Courses</Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">Featured Categories</Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">Business</Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">IT</Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">Design</Link>
            </div>

            {/* Column 2: Development */}
            <div className="flex flex-col gap-[16px] text-[14px] font-[400] text-[#242528]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              <Link href="#" className="hover:opacity-75 transition-opacity">Development</Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">Marketing</Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">Photography</Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">Finance</Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">Sport</Link>
            </div>

            {/* Column 3: Become a Creator */}
            <div className="flex flex-col gap-[16px] text-[14px] font-[400] text-[#242528]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              <Link href="#" className="hover:opacity-75 transition-opacity">Become a Creator</Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">Affiliate Program</Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">Contact</Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">Help</Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">About</Link>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-[#CED0D3] mb-8" />

        {/* Bottom Copyright Section */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center text-[13px] text-[#242528] gap-4"
          style={{ fontFamily: 'Satoshi, sans-serif' }}
        >
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:opacity-75 transition-opacity">Privacy Policy</Link>
            <Link href="#" className="hover:opacity-75 transition-opacity">Terms of Service</Link>
            <Link href="#" className="hover:opacity-75 transition-opacity">Cookies Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
