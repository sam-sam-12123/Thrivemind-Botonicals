import React from 'react';
import { X, Sparkles, Heart } from 'lucide-react';
import { IMAGES } from '../data/products';

interface OurStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreProducts: () => void;
}

export const OurStoryModal: React.FC<OurStoryModalProps> = ({
  isOpen,
  onClose,
  onExploreProducts,
}) => {
  if (!isOpen) return null;

  return (
    <div id="our-story-modal" className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />
      <div className="relative bg-[#FAF8F5] border border-[#DDD7CB] rounded-sm max-w-3xl w-full overflow-hidden shadow-2xl z-10 p-6 sm:p-10 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#465440] hover:text-[#182015] bg-[#EFE9DF] rounded-full"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <img
              src={IMAGES.womanTouchingFace}
              alt="Thrivemind Botanicals Founder Inspiration"
              referrerPolicy="no-referrer"
              className="w-full aspect-[4/5] object-cover rounded-sm shadow-sm"
            />
          </div>

          <div className="md:col-span-7">
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#54644E] block mb-2">
              OUR FOUNDING PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#293223] mb-4">
              Naturally You: Redefining Menopause Beauty
            </h2>
            <div className="text-xs leading-relaxed text-[#4A5645] space-y-3 mb-6">
              <p>
                Thrivemind Botanicals was founded by Australian women who realized that mainstream beauty treated menopause as an illness to fix rather than a powerful new stage of wisdom, vitality, and grace.
              </p>
              <p>
                As hormone levels fluctuate, the scalp loses sebum, collagen density decreases, and sleep can be disrupted. We formulated clean, small-batch botanical solutions rich in Australian wild-harvested actives like Kakadu Plum, Blue Gum, and adaptogens to restore natural harmony.
              </p>
              <p className="font-serif italic text-sm text-[#354330]">
                "Care that respects your body, honors your journey, and leaves you feeling radiant in your own skin."
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onExploreProducts();
              }}
              className="px-7 py-3 bg-[#42503C] hover:bg-[#323D2D] text-white text-xs font-medium tracking-[0.2em] uppercase rounded-xs transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#CADBCA]" />
              <span>EXPLORE THE FORMULATIONS</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
