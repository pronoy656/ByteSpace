import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-8 container mx-auto w-full">
      <div className="flex items-center gap-2">
        <img src="/Vector.png" alt="ByteSpace Logo" className="h-8" />
        <span className="text-white font-bold text-2xl tracking-wide">ByteSpace</span>
      </div>
      <div className="flex items-center gap-10 text-[15px]">
        <Link href="/" className="text-white font-medium">Home</Link>
        <Link href="/courses" className="text-white/70 hover:text-white transition-colors">Courses</Link>
        <Link href="/creators" className="text-white/70 hover:text-white transition-colors">Creators</Link>
      </div>
      <div className="flex items-center gap-8 text-[15px] text-white">
        <Link href="/signin" className="hover:text-white/80 transition-colors">Sign In</Link>
        <Link href="/signup" className="hover:text-white/80 transition-colors">Join Us</Link>
        <button aria-label="Cart">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
