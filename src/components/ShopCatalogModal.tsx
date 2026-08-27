import React, { useState, useEffect } from 'react';
import { X, Sparkles, Star } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface ShopCatalogModalProps {
  isOpen: boolean;
  initialCategory: 'all' | 'hair' | 'skin' | 'wellbeing' | 'foot';
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ShopCatalogModal: React.FC<ShopCatalogModalProps> = ({
  isOpen,
  initialCategory,
  onClose,
  onSelectProduct,
  onAddToCart,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'hair' | 'skin' | 'wellbeing' | 'foot'>(
    initialCategory || 'all'
  );

  useEffect(() => {
    if (initialCategory) {
      setSelectedFilter(initialCategory);
    }
  }, [initialCategory]);

  if (!isOpen) return null;

  const filteredProducts =
    selectedFilter === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedFilter);

  return (
    <div id="shop-catalog-modal" className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-[#FAF8F5] border border-[#DDD7CB] rounded-sm max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 p-6 sm:p-10 animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#465440] hover:text-[#182015] bg-[#EFE9DF] hover:bg-[#E2DCCE] rounded-full transition-colors"
          aria-label="Close catalog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#5A6D53] block mb-2">
            BOTANICAL HAIR &amp; SKIN CARE FOR MENOPAUSAL WOMEN
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#293425] font-normal">
            The Thrivemind Collection
          </h2>
          <p className="text-xs text-[#5C6A58] mt-2">
            Handcrafted with nutrient-dense Australian native botanicals to restore balance, cellular hydration, and vibrant confidence.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 border-b border-[#E7E1D6] pb-4">
          {[
            { id: 'all', label: 'All Formulations' },
            { id: 'hair', label: 'Hair & Scalp' },
            { id: 'skin', label: 'Cellular Skin Care' },
            { id: 'wellbeing', label: 'Hormone Wellbeing' },
            { id: 'foot', label: 'Restorative Foot Care' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium rounded-xs transition-all cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-[#42503C] text-white shadow-xs'
                  : 'bg-[#EDE8DE] text-[#42503C] hover:bg-[#DFD9CE]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white/80 border border-[#E6E0D5] rounded-sm p-4 flex flex-col justify-between group hover:shadow-md hover:border-[#4B5C45] transition-all"
            >
              <div
                onClick={() => onSelectProduct(product)}
                className="cursor-pointer"
              >
                <div className="relative aspect-square bg-[#F3EDE3] rounded-sm overflow-hidden mb-3.5">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 bg-[#42503C]/90 text-white text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-xs">
                    {product.categoryLabel}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[#C59B27] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                  <span className="text-[10px] text-[#71806D] ml-1">
                    ({product.reviewsCount})
                  </span>
                </div>

                <h3 className="text-sm font-serif font-semibold text-[#293325] group-hover:text-[#4F6049] transition-colors line-clamp-1 mb-1">
                  {product.name}
                </h3>
                <p className="text-[11px] text-[#6E7E6B] line-clamp-2 mb-2">
                  {product.subtext}
                </p>
              </div>

              <div className="pt-2 border-t border-[#EDE7DC] flex items-center justify-between">
                <span className="text-sm font-serif font-bold text-[#2A3525]">
                  ${product.price}.00 AUD
                </span>
                <button
                  onClick={() => onAddToCart(product, 1)}
                  className="px-3 py-1.5 bg-[#42503C] hover:bg-[#323D2D] text-white text-[10.5px] uppercase tracking-wider font-medium rounded-xs flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>ADD</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
