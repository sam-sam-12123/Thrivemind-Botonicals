import React from 'react';
import { X, Leaf, Sparkles } from 'lucide-react';

interface IngredientsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IngredientsModal: React.FC<IngredientsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const botanicalActives = [
    {
      name: 'Kakadu Plum',
      origin: 'Northern Territory, Australia',
      action: 'World’s richest natural source of Vitamin C. Boosts collagen synthesis and restores radiant skin glow.',
    },
    {
      name: 'Tasmanian Blue Gum & Tea Tree',
      origin: 'Tasmania & Byron Hinterland',
      action: 'Natural antimicrobials and cooling terpenes that calm overheated skin and soothe sensitive scalps.',
    },
    {
      name: 'Quandong & Mountain Pepper Berry',
      origin: 'South Australia & Alpine Region',
      action: 'Potent phenolic antioxidants that protect against cellular moisture loss and strengthen microcirculation.',
    },
    {
      name: 'Organic Shea & Cold-Pressed Argan',
      origin: 'Sustainable Ethical Cooperatives',
      action: 'Essential fatty acids that replenish lipid barriers in mature skin and restore hair tensile strength.',
    },
    {
      name: 'Adaptogenic Wildflower Essences',
      origin: 'Western Australian Bushlands',
      action: 'Subtle vibrational botanicals that promote emotional grounding, peaceful sleep, and nervous system ease.',
    },
  ];

  return (
    <div id="ingredients-modal" className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />
      <div className="relative bg-[#FAF8F5] border border-[#DDD7CB] rounded-sm max-w-2xl w-full overflow-hidden shadow-2xl z-10 p-6 sm:p-8 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#465440] hover:text-[#182015] bg-[#EFE9DF] rounded-full"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#566850] mb-2">
          <Leaf className="w-4 h-4" />
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase">BOTANICAL PURITY PLEDGE</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif text-[#293223] mb-4">
          Wild-Harvested Australian Actives
        </h2>

        <p className="text-xs text-[#51614C] mb-6">
          Every ingredient in Thrivemind Botanicals is 100% plant-derived, non-toxic, and free from parabens, synthetic fragrances, sulfates, petrochemicals, and artificial preservatives.
        </p>

        <div className="space-y-4 mb-8">
          {botanicalActives.map((item, i) => (
            <div key={i} className="p-3.5 bg-[#F2EDE3] rounded-sm border border-[#E4DDD0]">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#2A3425] flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#64795E]" />
                  {item.name}
                </h3>
                <span className="text-[10px] text-[#71826D] italic">{item.origin}</span>
              </div>
              <p className="text-[11.5px] text-[#4F5E4B] leading-relaxed">
                {item.action}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#42503C] hover:bg-[#323D2D] text-white text-xs font-medium tracking-[0.2em] uppercase rounded-xs"
          >
            CLOSE INGREDIENT GLOSSARY
          </button>
        </div>
      </div>
    </div>
  );
};
