import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const results = searchTerm.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.keyIngredients.some((ing) =>
            ing.toLowerCase().includes(searchTerm.toLowerCase())
          )
      )
    : [];

  return (
    <div id="search-modal" className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center p-4 sm:p-10 pt-20">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />
      <div className="relative bg-[#FAF8F5] border border-[#DDD7CB] rounded-sm max-w-xl w-full overflow-hidden shadow-2xl z-10 p-6 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#465440] hover:text-[#182015] bg-[#EFE9DF] rounded-full"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 border-b border-[#D6CDBC] pb-3 mb-6 pr-10">
          <Search className="w-5 h-5 text-[#5A6E53]" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search hair care, skin care, foot cream, or ingredients..."
            className="w-full bg-transparent text-sm text-[#273224] placeholder-[#80907D] focus:outline-none"
          />
        </div>

        {searchTerm.trim() ? (
          <div>
            <div className="text-[11px] uppercase tracking-widest text-[#72836E] mb-3">
              {results.length} results found for "{searchTerm}"
            </div>
            {results.length === 0 ? (
              <p className="text-xs text-[#7B8B77] py-6 text-center">
                No formulations matched your query. Try searching "foot", "hair", "skin", or "tea tree".
              </p>
            ) : (
              <div className="space-y-3 max-h-72 overflow-y-auto">
                {results.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="flex items-center justify-between p-2.5 bg-white/70 hover:bg-[#F2ECE2] rounded border border-[#E7E2D6] cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 object-cover rounded-xs"
                      />
                      <div>
                        <h4 className="text-xs font-semibold text-[#273224]">
                          {product.name}
                        </h4>
                        <span className="text-[10px] text-[#6E7E6B]">
                          {product.categoryLabel} • ${product.price}.00 AUD
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#5A6F54]" />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="text-[10.5px] uppercase tracking-widest text-[#72836E] mb-2 font-semibold">
              Popular Searches:
            </div>
            <div className="flex flex-wrap gap-2">
              {['Foot Cream', 'Hair Density Serum', 'Kakadu Plum', 'Menopause Wellbeing', 'Scalp Care'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchTerm(tag)}
                  className="text-xs bg-[#EFE9DF] text-[#3E4E3A] px-3 py-1.5 rounded-full hover:bg-[#E2DCCE] transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
