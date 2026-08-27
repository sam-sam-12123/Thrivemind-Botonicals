import React from 'react';

export const ValuePropsBar: React.FC = () => {
  return (
    <section
      id="value-props-bar"
      className="bg-[#F5F2EB] border-y border-[#E6E0D5] py-8 sm:py-10 md:py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-[#DDD7CB]">
          
          {/* Item 1: NATURAL & BOTANICAL */}
          <div className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
            <div className="w-12 h-12 flex items-center justify-center text-[#55654E] mb-3">
              <svg viewBox="0 0 40 40" className="w-8 h-8 stroke-current fill-none stroke-[1.25]" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 8 32 C 12 24 20 12 34 8 C 30 22 18 30 8 32 Z" />
                <path d="M 8 32 C 16 26 24 18 34 8" />
                <path d="M 18 24 Q 24 24 26 27" />
                <path d="M 22 17 Q 28 17 30 20" />
              </svg>
            </div>
            <h2 className="text-[12px] sm:text-[13px] font-semibold tracking-[0.18em] uppercase text-[#2B3527] mb-1.5">
              NATURAL &amp; BOTANICAL
            </h2>
            <p className="text-[12.5px] sm:text-[13px] text-[#596654] font-normal max-w-[210px] leading-relaxed">
              Plant based ingredients that nourish and protect
            </p>
          </div>

          {/* Item 2: MADE FOR MENOPAUSAL WOMEN */}
          <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0">
            <div className="w-12 h-12 flex items-center justify-center text-[#55654E] mb-3">
              {/* Hands holding heart icon */}
              <svg viewBox="0 0 40 40" className="w-8 h-8 stroke-current fill-none stroke-[1.25]" strokeLinecap="round" strokeLinejoin="round">
                {/* Heart in center */}
                <path d="M 20 16 C 18 12 13 12 13 16 C 13 20 20 25 20 25 C 20 25 27 20 27 16 C 27 12 22 12 20 16 Z" fill="#6B7962" fillOpacity="0.15" />
                {/* Left caring hand */}
                <path d="M 10 24 C 10 28 14 34 20 34" />
                <path d="M 7 21 C 9 27 14 31 18 33" />
                <path d="M 10 18 C 11 22 14 26 18 30" />
                {/* Right caring hand */}
                <path d="M 30 24 C 30 28 26 34 20 34" />
                <path d="M 33 21 C 31 27 26 31 22 33" />
                <path d="M 30 18 C 29 22 26 26 22 30" />
              </svg>
            </div>
            <h2 className="text-[12px] sm:text-[13px] font-semibold tracking-[0.18em] uppercase text-[#2B3527] mb-1.5">
              MADE FOR MENOPAUSAL WOMEN
            </h2>
            <p className="text-[12.5px] sm:text-[13px] text-[#596654] font-normal max-w-[220px] leading-relaxed">
              Thoughtfully formulated to support you through every stage
            </p>
          </div>

          {/* Item 3: AUSTRALIAN MADE & OWNED */}
          <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0">
            <div className="w-12 h-12 flex items-center justify-center text-[#55654E] mb-3">
              {/* Australia Map Outline */}
              <svg viewBox="0 0 50 40" className="w-9 h-7 stroke-current fill-none stroke-[1.25]" strokeLinecap="round" strokeLinejoin="round">
                {/* Simplified geographic contour of Australia */}
                <path d="M 16 10 C 18 8 23 8 26 12 C 29 11 33 13 36 17 C 40 18 43 23 41 27 C 39 30 36 31 34 29 C 31 31 27 30 24 32 C 20 34 16 32 12 30 C 9 27 7 22 8 18 C 9 14 13 12 16 10 Z" />
                {/* Tasmania */}
                <path d="M 32 35 C 33 34 35 34 35 36 C 34 37 32 37 32 35 Z" />
              </svg>
            </div>
            <h2 className="text-[12px] sm:text-[13px] font-semibold tracking-[0.18em] uppercase text-[#2B3527] mb-1.5">
              AUSTRALIAN MADE &amp; OWNED
            </h2>
            <p className="text-[12.5px] sm:text-[13px] text-[#596654] font-normal max-w-[210px] leading-relaxed">
              Proudly crafted in small batches with care
            </p>
          </div>

          {/* Item 4: HAND CRAFTED */}
          <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0">
            <div className="w-12 h-12 flex items-center justify-center text-[#55654E] mb-3">
              {/* Botanical flower petal emblem */}
              <svg viewBox="0 0 40 40" className="w-8 h-8 stroke-current fill-none stroke-[1.25]" strokeLinecap="round" strokeLinejoin="round">
                {/* 8 rounded flower petals */}
                <circle cx="20" cy="20" r="3.5" />
                <path d="M 20 16.5 C 20 11 16 11 16 14 C 16 16.5 20 16.5 20 16.5" />
                <path d="M 20 16.5 C 20 11 24 11 24 14 C 24 16.5 20 16.5 20 16.5" />
                <path d="M 23.5 20 C 29 20 29 16 26 16 C 23.5 16 23.5 20 23.5 20" />
                <path d="M 23.5 20 C 29 20 29 24 26 24 C 23.5 24 23.5 20 23.5 20" />
                <path d="M 20 23.5 C 20 29 24 29 24 26 C 24 23.5 20 23.5 20 23.5" />
                <path d="M 20 23.5 C 20 29 16 29 16 26 C 16 23.5 20 23.5 20 23.5" />
                <path d="M 16.5 20 C 11 20 11 24 14 24 C 16.5 24 16.5 20 16.5 20" />
                <path d="M 16.5 20 C 11 20 11 16 14 16 C 16.5 16 16.5 20 16.5 20" />
              </svg>
            </div>
            <h2 className="text-[12px] sm:text-[13px] font-semibold tracking-[0.18em] uppercase text-[#2B3527] mb-1.5">
              HAND CRAFTED
            </h2>
            <p className="text-[12.5px] sm:text-[13px] text-[#596654] font-normal max-w-[210px] leading-relaxed">
              Made in small batches for quality and freshness
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
