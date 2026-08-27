import React from 'react';

interface BotanicalLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BotanicalLogo: React.FC<BotanicalLogoProps> = ({ className = '', size = 'md' }) => {
  return (
    <div className={`flex flex-col items-center justify-center select-none text-[#333C2D] ${className}`}>
      {/* Handcrafted Botanical Leaf Wreath Illustration */}
      <svg
        viewBox="0 0 120 60"
        className={
          size === 'sm' ? 'w-12 h-6' : size === 'lg' ? 'w-24 h-12' : 'w-16 h-8'
        }
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Left arched stem */}
        <path d="M 60 52 C 45 48 30 38 22 22 C 18 14 20 6 22 2" />
        {/* Left leaves */}
        <path d="M 22 2 C 16 6 15 14 22 18 C 28 14 27 6 22 2 Z" fill="#6B7962" fillOpacity="0.25" />
        <path d="M 25 15 C 16 16 12 24 18 30 C 23 28 26 21 25 15 Z" fill="#6B7962" fillOpacity="0.25" />
        <path d="M 32 28 C 22 30 20 38 26 44 C 32 42 34 35 32 28 Z" fill="#6B7962" fillOpacity="0.25" />
        <path d="M 43 40 C 34 44 34 52 42 56 C 46 51 46 45 43 40 Z" fill="#6B7962" fillOpacity="0.25" />

        {/* Right arched stem */}
        <path d="M 60 52 C 75 48 90 38 98 22 C 102 14 100 6 98 2" />
        {/* Right leaves */}
        <path d="M 98 2 C 104 6 105 14 98 18 C 92 14 93 6 98 2 Z" fill="#6B7962" fillOpacity="0.25" />
        <path d="M 95 15 C 104 16 108 24 102 30 C 97 28 94 21 95 15 Z" fill="#6B7962" fillOpacity="0.25" />
        <path d="M 88 28 C 98 30 100 38 94 44 C 88 42 86 35 88 28 Z" fill="#6B7962" fillOpacity="0.25" />
        <path d="M 77 40 C 86 44 86 52 78 56 C 74 51 74 45 77 40 Z" fill="#6B7962" fillOpacity="0.25" />

        {/* Center decorative seed / flower accent */}
        <circle cx="60" cy="50" r="1.8" fill="#4A5844" />
        <circle cx="54" cy="46" r="1.2" fill="#4A5844" />
        <circle cx="66" cy="46" r="1.2" fill="#4A5844" />
      </svg>

      {/* Brand Name Typography matching reference */}
      <div className="text-center mt-1">
        <div
          className="text-[#2F382B] tracking-[0.22em] font-serif font-medium uppercase leading-tight"
          style={{ fontSize: size === 'sm' ? '0.95rem' : size === 'lg' ? '1.75rem' : '1.35rem' }}
        >
          THRIVEMIND
        </div>
        <div
          className="text-[#4E5948] tracking-[0.38em] font-serif text-[0.72rem] md:text-[0.78rem] uppercase font-normal mt-0.5"
        >
          BOTANICALS
        </div>
        <div className="text-[#7A8673] tracking-[0.26em] text-[0.55rem] md:text-[0.62rem] font-sans uppercase mt-0.5">
          NATURALLY YOU
        </div>
      </div>
    </div>
  );
};
