import Image from "next/image";

const BRANDS = [
  {
    type: 'img',
    src: '/Vector (8).jpg',
    name: 'Logoipsum',
  },
  {
    type: 'svg',
    name: 'Logoipsum',
  },
  {
    type: 'img',
    src: '/Vector (2).jpg',
    name: 'Logoipsum',
  },
  {
    type: 'img',
    src: '/Vector (1).jpg',
    name: 'Logoipsum',
  },
  {
    type: 'img',
    src: '/Vector.jpg',
    name: 'Logoipsum',
  },
];

export default function BrandSection() {
  const brandList = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className="w-full py-[60px] sm:py-[72px] bg-[#F6F8FB] shrink-0 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#F6F8FB] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#F6F8FB] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-12 sm:gap-16">
        {brandList.map((brand, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3.5 opacity-70 hover:opacity-100 transition-opacity duration-300 shrink-0 cursor-pointer select-none"
          >
            {brand.type === 'img' ? (
              <img
                src={brand.src}
                alt={brand.name}
                className="w-[36px] sm:w-[42px] h-[36px] sm:h-[42px] mix-blend-multiply object-contain"
              />
            ) : (
              <svg className="w-[36px] sm:w-[42px] h-[36px] sm:h-[42px] text-[#82868E]" viewBox="0 0 24 24" fill="currentColor">
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
            )}
            <span className="text-[#82868E] font-bold text-[20px] sm:text-[22px] tracking-tight">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
