import React from 'react';
import { IMAGES } from '../data/products';

interface OurStorySectionProps {
  onOurStoryClick: () => void;
}

export const OurStorySection: React.FC<OurStorySectionProps> = ({ onOurStoryClick }) => {
  return (
    <section
      id="our-story-section"
      className="relative bg-[#FAF8F5] py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      {/* Decorative Botanical Branch Artwork in the bottom left */}
      <div className="absolute -bottom-10 -left-10 w-64 h-64 md:w-80 md:h-80 pointer-events-none opacity-40 z-0">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#6E7E66]">
          {/* Main botanical stem */}
          <path
            d="M 10 190 Q 60 140 120 70 Q 150 35 185 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Detailed leaves along the branch */}
          <path
            d="M 50 150 C 35 130 38 110 60 115 C 75 125 70 145 50 150 Z"
            fill="currentColor"
            fillOpacity="0.3"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M 80 120 C 65 95 72 80 95 88 C 108 96 100 115 80 120 Z"
            fill="currentColor"
            fillOpacity="0.3"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M 115 80 C 105 55 115 42 135 50 C 146 58 138 75 115 80 Z"
            fill="currentColor"
            fillOpacity="0.3"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M 150 45 C 145 25 156 15 170 20 C 180 28 170 42 150 45 Z"
            fill="currentColor"
            fillOpacity="0.3"
            stroke="currentColor"
            strokeWidth="1"
          />
          {/* Sub-branch left */}
          <path
            d="M 60 140 Q 30 130 15 110"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M 30 125 C 15 115 18 100 35 105 C 45 112 40 125 30 125 Z"
            fill="currentColor"
            fillOpacity="0.3"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 pr-0 lg:pr-6">
            
            {/* Naturally You Subtitle Badge */}
            <div className="flex items-center gap-2 mb-3.5">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#5A6C53] fill-none stroke-current stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 4 20 C 6 15 11 8 20 5 C 18 14 11 19 4 20 Z" fill="#71846A" fillOpacity="0.2" />
                <path d="M 4 20 C 9 16 14 11 20 5" />
              </svg>
              <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#54644E]">
                NATURALLY YOU
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif leading-[1.18] text-[#283223] mb-6 font-normal">
              Empowering Women<br />
              to Thrive
            </h2>

            {/* Description */}
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.7] text-[#4F5B4B] mb-8 font-normal">
              At Thrivemind Botanicals, we believe natural care is more than skin deep. Our botanical hair and skin care is designed to nourish, restore and support menopausal women — so you can feel confident, radiant and empowered in your own skin.
            </p>

            {/* Our Story Button */}
            <div>
              <button
                id="our-story-btn"
                onClick={onOurStoryClick}
                className="inline-flex items-center justify-center px-8 py-3 bg-[#42503C] hover:bg-[#323D2D] active:bg-[#273023] text-white text-[12px] font-medium tracking-[0.22em] uppercase rounded-[2px] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                OUR STORY
              </button>
            </div>

          </div>

          {/* Right Image Collage Grid matching screenshot */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5">
              
              {/* Card 1: Woman touching face */}
              <div className="relative overflow-hidden rounded-[2px] aspect-[3/4] shadow-sm group">
                <img
                  src={IMAGES.womanTouchingFace}
                  alt="Radiant mature woman experiencing natural botanical skincare"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#364230]/5 pointer-events-none" />
              </div>

              {/* Card 2: Woman holding foot cream product */}
              <div className="relative overflow-hidden rounded-[2px] aspect-[3/4] shadow-sm group">
                <img
                  src={IMAGES.holdingCream}
                  alt="Thrivemind Botanicals Foot Cream tube held with care"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#364230]/5 pointer-events-none" />
              </div>

              {/* Card 3: Woman on sunny beach with open arms */}
              <div className="relative overflow-hidden rounded-[2px] aspect-[3/4] shadow-sm group">
                <img
                  src={IMAGES.womanBeach}
                  alt="Empowered mature woman walking joyfully on the beach"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#364230]/5 pointer-events-none" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
