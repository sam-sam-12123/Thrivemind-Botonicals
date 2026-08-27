import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const freeShippingThreshold = 80;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div id="cart-drawer-container" className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#E3DDD2] shadow-2xl flex flex-col animate-fade-in">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#E7E1D6] flex items-center justify-between bg-[#F4EFE6]">
            <div>
              <h2 className="text-base font-serif font-medium uppercase tracking-[0.16em] text-[#2B3527]">
                YOUR BOTANICAL BAG
              </h2>
              <p className="text-[11px] text-[#697864] mt-0.5">
                {items.length === 0 ? 'Your bag is currently empty' : `${items.reduce((s, i) => s + i.quantity, 0)} items in bag`}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#465342] hover:text-[#1F261B] rounded-full hover:bg-[#EAE4D9]"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-[#EAE5DA] px-6 py-3 border-b border-[#DFD8CC]">
            <div className="flex items-center gap-2 text-xs text-[#3D4B39] mb-1.5 font-medium">
              <Truck className="w-4 h-4 text-[#596B52]" />
              {amountToFreeShipping > 0 ? (
                <span>
                  Add <strong className="text-[#2B3527]">${amountToFreeShipping.toFixed(2)}</strong> more for <strong>FREE Australian shipping</strong>
                </span>
              ) : (
                <span className="text-[#3A5B30] font-semibold flex items-center gap-1">
                  🎉 You qualify for FREE Australian Express Delivery!
                </span>
              )}
            </div>
            <div className="w-full bg-[#D6CEBF] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#4E6148] h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {items.length === 0 ? (
              <div className="h-64 flex flex-col items-center justify-center text-center px-4">
                <div className="w-14 h-14 rounded-full bg-[#EFE9DE] flex items-center justify-center text-[#7A8A73] mb-4">
                  <Truck className="w-6 h-6" />
                </div>
                <p className="text-sm font-serif text-[#394534] mb-2">Your botanical bag is empty</p>
                <p className="text-xs text-[#6F7F6A] max-w-xs mb-6">
                  Explore our handcrafted natural formulations designed specifically to restore, nourish, and revive.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#42503C] text-white text-xs uppercase tracking-[0.16em] rounded-sm hover:bg-[#323D2D]"
                >
                  START EXPLORING
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 bg-white/70 border border-[#E7E2D7] rounded-sm relative"
                >
                  <div className="w-20 h-20 bg-[#F2EDE3] rounded-sm overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-semibold text-[#273123] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[#96A491] hover:text-[#B43B3B] transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[10px] text-[#71816C] block uppercase tracking-wider mt-0.5">
                        {item.product.size}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-[#D5CDBC] bg-[#FAF8F5] rounded-sm">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))
                          }
                          className="p-1 hover:bg-[#EAE4D8] text-[#4F5D4A]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold text-[#2C3627]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="p-1 hover:bg-[#EAE4D8] text-[#4F5D4A]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-xs font-bold text-[#2A3425]">
                        ${(item.product.price * item.quantity).toFixed(2)} AUD
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-6 bg-[#F4EFE6] border-t border-[#E3DDD2] space-y-4">
              <div className="space-y-1.5 text-xs text-[#52604D]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#273124]">${subtotal.toFixed(2)} AUD</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span>{amountToFreeShipping === 0 ? 'FREE' : '$9.50 AUD'}</span>
                </div>
                <div className="border-t border-[#DFD8CC] pt-2 flex justify-between text-sm font-bold text-[#222B1E]">
                  <span>Total</span>
                  <span>
                    $
                    {(
                      subtotal + (amountToFreeShipping === 0 ? 0 : 9.5)
                    ).toFixed(2)}{' '}
                    AUD
                  </span>
                </div>
              </div>

              <button
                onClick={onCheckout}
                className="w-full py-3.5 bg-[#42503C] hover:bg-[#323D2D] text-white text-xs font-medium tracking-[0.2em] uppercase rounded-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-md cursor-pointer transition-colors"
              >
                <span>PROCEED TO SECURE CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10.5px] text-[#71826D]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#52634C]" />
                <span>30-Day Money-Back Guarantee • 100% Secure Checkout</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
