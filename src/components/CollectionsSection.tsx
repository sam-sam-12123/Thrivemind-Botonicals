import React from 'react';
import { CollectionItem } from '../types';
import { COLLECTIONS } from '../data/products';

interface CollectionsSectionProps {
  onSelectCollection: (category: 'hair' | 'skin' | 'wellbeing' | 'foot') => void;
  onShopAllClick: () => void;
}

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({
  onSelectCollection,
  onShopAllClick,
}) => {
  return (
    <section
      id="collections-section"
      className="bg-[#F8F6F1] py-16 sm:py-20 md:py-24 border-t border-[#EAE4D9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          {/* Delicate Botanical Leaf Motif */}
          <div className="text-[#5B6D54] mb-2.5">
            <svg viewBox="0 0 32 20" className="w-7 h-5 stroke-current fill-none stroke-[1.4]" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 16 18 C 12 12 6 8 2 6 C 8 4 14 8 16 18 Z" fill="#6B7E63" fillOpacity="0.2" />
              <path d="M 16 18 C 20 12 26 8 30 6 C 24 4 18 8 16 18 Z" fill="#6B7E63" fillOpacity="0.2" />
              <path d="M 16 18 L 16 2" />
            </svg>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-[26px] font-serif font-normal tracking-[0.16em] uppercase text-[#2B3527]">
            EXPLORE OUR COLLECTIONS
          </h2>
        </div>

        {/* 4 Circular Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-14">
          {COLLECTIONS.map((col: CollectionItem) => (
            <div
              key={col.id}
              onClick={() => onSelectCollection(col.category)}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Circular Category Photo */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden mb-5 bg-[#ECE6DC] p-1 border border-[#E0D8CB] transition-all duration-300 group-hover:border-[#52634C] group-hover:shadow-md">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={col.image}
                    alt={`${col.title} - ${col.subtitle}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-[13px] sm:text-[14px] font-bold tracking-[0.16em] uppercase text-[#2B3527] mb-1 group-hover:text-[#4F6049] transition-colors">
                {col.title}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-[#63725E] font-normal">
                {col.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Centered Shop All Button */}
        <div className="flex justify-center">
          <button
            id="shop-all-btn"
            onClick={onShopAllClick}
            className="inline-flex items-center justify-center px-9 py-3 bg-[#42503C] hover:bg-[#323D2D] active:bg-[#273023] text-white text-[12px] font-medium tracking-[0.22em] uppercase rounded-[2px] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            SHOP ALL
          </button>
        </div>

      </div>
    </section>
  );
};
