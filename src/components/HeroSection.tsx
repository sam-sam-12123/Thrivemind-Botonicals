import React from 'react';
import { IMAGES } from '../data/products';

interface HeroSectionProps {
  onShopClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onShopClick }) => {
  return (
    <section
      id="hero-section"
      className="relative w-full overflow-hidden bg-[#ECE7DE]"
    >
      {/* Background Image Container with proper aspect and focal point */}
      <div className="relative min-h-[520px] sm:min-h-[580px] md:min-h-[640px] lg:min-h-[700px] w-full flex items-center">
        {/* Real Generated Hero Image */}
        <img
          src={IMAGES.hero}
          alt="Thrivemind Botanicals - Three radiant mature women enjoying nature with botanical hair and skincare products"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-[70%_center] md:object-[65%_center] lg:object-center"
        />

        {/* Soft atmospheric gradient overlay on the left to guarantee optimal text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/90 via-[#FAF8F5]/60 to-transparent md:to-transparent w-full md:w-3/5 pointer-events-none" />

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-20 w-full">
          <div className="max-w-xl">
            
            {/* Eyebrow / Tagline */}
            <div className="mb-4">
              <span className="text-[11px] sm:text-[12px] md:text-[12.5px] uppercase tracking-[0.2em] text-[#485642] font-semibold block leading-relaxed">
                BOTANICAL HAIR &amp; SKIN CARE<br className="sm:hidden" /> FOR MENOPAUSAL WOMEN
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-serif leading-[1.05] tracking-[-0.01em] text-[#283224] mb-6 font-normal">
              Nourish.<br />
              Restore.<br />
              Thrive.
            </h1>

            {/* Paragraph Description */}
            <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[1.6] text-[#4A5545] font-normal max-w-md mb-8">
              Natural care for your hair, skin and wellbeing through every chapter of life.
            </p>

            {/* Primary CTA Button */}
            <div>
              <button
                id="hero-shop-cta-btn"
                onClick={onShopClick}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#42503C] hover:bg-[#323D2D] active:bg-[#273023] text-white text-[12px] sm:text-[13px] font-medium tracking-[0.22em] uppercase rounded-[2px] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                SHOP OUR COLLECTION
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
