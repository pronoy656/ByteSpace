import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 w-full pt-16 pb-8 border-t border-[#CED0D3]">
      <div className="container mx-auto px-12 w-full">

        <div className="flex flex-col md:flex-row justify-between mb-24 gap-12">


          <div className="flex-1 max-w-[420px]">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-6">
              <img src="/Vector.png" alt="ByteSpace Logo" className="h-[28px] w-auto block object-contain" />
              <span
                className="text-[#242528] text-[24px] font-bold leading-none inline-flex items-center"
                style={{ fontFamily: '"Clash Display", sans-serif' }}
              >
                ByteSpace
              </span>
            </div>

            <p className="text-gray-600 mb-8 text-[15px] font-medium leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <div className="flex items-center gap-4 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border border-gray-200 rounded-full px-6 h-[50px] text-[15px] outline-none focus:border-gray-400 transition-colors placeholder-gray-500"
              />
              <button className="bg-[#D4FB20] text-black font-semibold rounded-full px-8 h-[50px] text-[15px] hover:bg-[#c2e61c] transition-colors shrink-0">
                Search
              </button>
            </div>

            <p className="text-gray-500 text-[12px] leading-relaxed pr-8">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns - Links */}
          <div className="flex-1 grid grid-cols-3 gap-4 pt-4">
            {/* Col 1 */}
            <div className="flex flex-col gap-6 text-[14px] text-gray-600">
              <Link href="#" className="hover:text-black transition-colors">Featured Courses</Link>
              <Link href="#" className="hover:text-black transition-colors">Featured Categories</Link>
              <Link href="#" className="hover:text-black transition-colors">Business</Link>
              <Link href="#" className="hover:text-black transition-colors">IT</Link>
              <Link href="#" className="hover:text-black transition-colors">Design</Link>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col gap-6 text-[14px] text-gray-600">
              <Link href="#" className="hover:text-black transition-colors">Development</Link>
              <Link href="#" className="hover:text-black transition-colors">Marketing</Link>
              <Link href="#" className="hover:text-black transition-colors">Photography</Link>
              <Link href="#" className="hover:text-black transition-colors">Finance</Link>
              <Link href="#" className="hover:text-black transition-colors">Sport</Link>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col gap-6 text-[14px] text-gray-600">
              <Link href="#" className="hover:text-black transition-colors">Become a Creator</Link>
              <Link href="#" className="hover:text-black transition-colors">Affiliate Program</Link>
              <Link href="#" className="hover:text-black transition-colors">Contact</Link>
              <Link href="#" className="hover:text-black transition-colors">Help</Link>
              <Link href="#" className="hover:text-black transition-colors">About</Link>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[13px] text-gray-500 gap-4">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-black transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-black transition-colors">Cookies Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
