import React, { useState } from 'react';
import { X, Star, Check, ShieldCheck, Heart, Sparkles, Plus, Minus } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 800);
  };

  return (
    <div id="product-detail-modal" className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-[#FAF8F5] border border-[#DDD7CC] rounded-sm max-w-3xl w-full overflow-hidden shadow-2xl z-10 animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#44503E] hover:text-[#182015] bg-[#FAF8F5]/80 hover:bg-[#EAE4D8] rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Product Image Column */}
          <div className="bg-[#F2ECE1] relative aspect-square md:aspect-auto flex items-center justify-center p-8">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="max-h-[380px] w-full object-cover rounded-sm shadow-md"
            />
            <div className="absolute top-4 left-4 bg-[#42503C] text-white text-[10px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 rounded-xs">
              {product.categoryLabel}
            </div>
          </div>

          {/* Details Column */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-[#C59B27]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-[#6F7D6B]">
                  {product.rating} ({product.reviewsCount} verified reviews)
                </span>
              </div>

              {/* Title & Size */}
              <h2 className="text-xl sm:text-2xl font-serif text-[#293325] leading-snug mb-1">
                {product.name}
              </h2>
              <p className="text-xs uppercase tracking-widest text-[#72836E] mb-3">
                {product.size} • Australian Botanical Formulation
              </p>

              {/* Price */}
              <div className="text-xl font-serif font-bold text-[#323E2E] mb-4">
                ${product.price}.00 AUD
              </div>

              {/* Description */}
              <p className="text-xs leading-relaxed text-[#4A5745] mb-5">
                {product.description}
              </p>

              {/* Benefits checklist */}
              <div className="space-y-1.5 mb-5 bg-[#F3EFE7] p-3.5 rounded-xs border border-[#E6DFD4]">
                <span className="text-[10.5px] uppercase tracking-widest font-semibold text-[#3C4A37] block mb-1.5">
                  Key Botanical Benefits:
                </span>
                {product.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#4F5E4B]">
                    <Check className="w-3.5 h-3.5 text-[#596E52] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Key Ingredients */}
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-widest text-[#758471] block mb-1.5">
                  Hero Actives:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.keyIngredients.map((ing, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-[#E8E2D6] text-[#344030] px-2.5 py-0.5 rounded-full font-medium"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                {/* Quantity */}
                <div className="flex items-center border border-[#CEC6B7] bg-[#FAF8F5] rounded-xs">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2.5 hover:bg-[#EDE7DC] text-[#42503C]"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-sm font-semibold text-[#293225]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2.5 hover:bg-[#EDE7DC] text-[#42503C]"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Bag Button */}
                <button
                  onClick={handleAdd}
                  disabled={addedAnimation}
                  className={`flex-1 py-3 px-6 text-xs font-medium tracking-[0.2em] uppercase rounded-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    addedAnimation
                      ? 'bg-[#316E34] text-white'
                      : 'bg-[#42503C] hover:bg-[#313C2D] text-white'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>ADDED TO BAG!</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-[#C4D8BF]" />
                      <span>ADD TO BAG • ${(product.price * quantity).toFixed(2)} AUD</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-[10.5px] text-[#71806D] pt-2 border-t border-[#ECE5DA]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#5A6E53]" /> Handcrafted in Australia
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-3 h-3 text-[#5A6E53]" /> 100% Purity Guarantee
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
