import React from 'react';
import { Leaf, Instagram, Facebook } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div
      id="announcement-bar"
      className="bg-[#42503C] text-[#E8EFE5] text-[10px] sm:text-[11px] font-medium tracking-[0.18em] uppercase py-2 px-4 border-b border-[#364231]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1.5 md:gap-4 text-center">
        {/* Left: Australian Made & Owned */}
        <div className="flex items-center gap-1.5 justify-center md:justify-start">
          <Leaf className="w-3.5 h-3.5 text-[#A2B699] stroke-[1.75]" />
          <span className="hover:text-white transition-colors cursor-default">
            AUSTRALIAN MADE & OWNED
          </span>
        </div>

        {/* Center: Value message */}
        <div className="text-[9.5px] sm:text-[10.5px] tracking-[0.2em] text-[#DCE6D8] font-normal">
          ALL NATURAL INGREDIENTS <span className="text-[#8DA383] px-1">•</span> BOTANICAL{' '}
          <span className="text-[#8DA383] px-1">•</span> HAND CRAFTED
        </div>

        {/* Right: Social follow */}
        <div className="flex items-center gap-2.5 justify-center md:justify-end">
          <span className="text-[10px] tracking-[0.16em] text-[#CAD8C5]">FOLLOW US</span>
          <div className="flex items-center gap-2">
            <a
              href="#facebook"
              aria-label="Facebook"
              className="text-[#DDE7DA] hover:text-white transition-colors"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="#instagram"
              aria-label="Instagram"
              className="text-[#DDE7DA] hover:text-white transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            {/* TikTok custom icon */}
            <a
              href="#tiktok"
              aria-label="TikTok"
              className="text-[#DDE7DA] hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.48 2.71 1.34-.05 2.57-.96 2.93-2.25.13-.5.18-1.02.17-1.54V.02z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
