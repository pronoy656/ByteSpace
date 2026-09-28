import Image from "next/image";

export default function BrandSection() {
  return (
    <section className="w-full py-[80px] bg-[#F6F8FB] shrink-0">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-8 opacity-90">
        
        <div className="flex items-center gap-3">
          <img src="/Vector (8).jpg" alt="Logo" className="w-[40px] h-[40px] mix-blend-multiply object-contain" />
          <span className="text-[#82868E] font-bold text-[22px] tracking-tight">Logoipsum</span>
        </div>

        {/* Custom SVG for 2nd logo (circle with spokes/cuts) */}
        <div className="flex items-center gap-3">
          <svg className="w-[40px] h-[40px] text-[#82868E]" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="5" />
            <g transform="translate(12, 12)">
              <rect x="-1.5" y="-11" width="3" height="4.5" rx="0.5" />
              <rect x="-1.5" y="6.5" width="3" height="4.5" rx="0.5" />
              <rect x="-11" y="-1.5" width="4.5" height="3" rx="0.5" />
              <rect x="6.5" y="-1.5" width="4.5" height="3" rx="0.5" />
              
              <rect x="-1.5" y="-11" width="3" height="4.5" rx="0.5" transform="rotate(45)" />
              <rect x="-1.5" y="6.5" width="3" height="4.5" rx="0.5" transform="rotate(45)" />
              <rect x="-11" y="-1.5" width="4.5" height="3" rx="0.5" transform="rotate(45)" />
              <rect x="6.5" y="-1.5" width="4.5" height="3" rx="0.5" transform="rotate(45)" />
            </g>
          </svg>
          <span className="text-[#82868E] font-bold text-[22px] tracking-tight">Logoipsum</span>
        </div>

        <div className="flex items-center gap-3">
          <img src="/Vector (2).jpg" alt="Logo" className="w-[40px] h-[40px] mix-blend-multiply object-contain" />
          <span className="text-[#82868E] font-bold text-[22px] tracking-tight">Logoipsum</span>
        </div>

        <div className="flex items-center gap-3">
          <img src="/Vector (1).jpg" alt="Logo" className="w-[40px] h-[40px] mix-blend-multiply object-contain" />
          <span className="text-[#82868E] font-bold text-[22px] tracking-tight">Logoipsum</span>
        </div>

        <div className="flex items-center gap-3">
          <img src="/Vector.jpg" alt="Logo" className="w-[40px] h-[40px] mix-blend-multiply object-contain" />
          <span className="text-[#82868E] font-bold text-[22px] tracking-tight">Logoipsum</span>
        </div>

      </div>
    </section>
  );
}
