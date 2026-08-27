import React, { useState } from 'react';
import { BotanicalLogo } from './BotanicalLogo';
import { Leaf, Heart, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer id="main-footer" className="bg-[#354030] text-[#DCE4D8] border-t border-[#293226] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Brand statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-[#475641]">
          
          <div className="lg:col-span-5">
            <BotanicalLogo className="text-[#F1F6EE] mb-5 items-start" size="md" />
            <p className="text-[13.5px] leading-relaxed text-[#BAC7B6] max-w-md mb-6">
              Dedicated to celebrating, nourishing, and uplifting menopausal women with purest Australian botanical remedies for hair, skin, and daily vitality.
            </p>
            <div className="flex items-center gap-4 text-xs tracking-wider text-[#A4B59F] uppercase">
              <span className="flex items-center gap-1.5"><Leaf className="w-3.5 h-3.5 text-[#91AB8A]" /> 100% Plant-Based</span>
              <span className="flex items-center gap-1.5"><Heart className="w-3.5 h-3.5 text-[#91AB8A]" /> Cruelty-Free</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#91AB8A]" /> Clean Tested</span>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-7 lg:pl-10">
            <h3 className="text-xl font-serif text-[#F4F8F1] mb-2 tracking-wide">
              Join the Thrivemind Circle
            </h3>
            <p className="text-xs text-[#BAC7B6] mb-4">
              Receive holistic hormone wellbeing guides, botanical ingredient stories, and 15% off your first order.
            </p>
            {isSubscribed ? (
              <div className="p-3 bg-[#44523E] border border-[#5A6D53] rounded text-xs text-[#E5F0E1]">
                Thank you for joining our sisterhood! Please check your inbox for your welcome guide and botanical coupon.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex max-w-md">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-[#8C9F87] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-[#273023] border border-[#485942] rounded-l-sm pl-10 pr-4 py-2.5 text-xs text-white placeholder-[#879982] focus:outline-none focus:border-[#A2B999]"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#596E52] hover:bg-[#688160] text-white px-5 text-xs uppercase tracking-[0.16em] font-medium rounded-r-sm transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>JOIN</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-[#475641] text-xs text-[#B5C4B1]">
          <div>
            <h4 className="font-serif text-sm tracking-[0.14em] uppercase text-[#E8F0E4] mb-4">Collections</h4>
            <ul className="space-y-2.5">
              <li><a href="#hair" className="hover:text-white transition-colors">Hair Density &amp; Scalp Care</a></li>
              <li><a href="#skin" className="hover:text-white transition-colors">Cellular Face Creams &amp; Oils</a></li>
              <li><a href="#wellbeing" className="hover:text-white transition-colors">Hormone Balance Adaptogens</a></li>
              <li><a href="#foot" className="hover:text-white transition-colors">Reviving Foot Therapy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm tracking-[0.14em] uppercase text-[#E8F0E4] mb-4">About Us</h4>
            <ul className="space-y-2.5">
              <li><a href="#story" className="hover:text-white transition-colors">Our Founding Story</a></li>
              <li><a href="#ingredients" className="hover:text-white transition-colors">Australian Native Botanicals</a></li>
              <li><a href="#sustainability" className="hover:text-white transition-colors">Sustainable Harvesting</a></li>
              <li><a href="#journal" className="hover:text-white transition-colors">The Menopause Journal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm tracking-[0.14em] uppercase text-[#E8F0E4] mb-4">Customer Care</h4>
            <ul className="space-y-2.5">
              <li><a href="#faq" className="hover:text-white transition-colors">Shipping &amp; Delivery</a></li>
              <li><a href="#returns" className="hover:text-white transition-colors">30-Day Happiness Guarantee</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Our Naturopaths</a></li>
              <li><a href="#track" className="hover:text-white transition-colors">Track Your Parcel</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm tracking-[0.14em] uppercase text-[#E8F0E4] mb-4">Australian Crafted</h4>
            <p className="text-[12px] leading-relaxed text-[#A4B5A0] mb-3">
              Crafted in small botanical batches in Byron Bay &amp; Yarra Valley, Australia.
            </p>
            <div className="text-[11px] text-[#8EA28A]">
              ABN 48 920 184 219 • Formulated in accordance with Australian Cosmetic Standards.
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8C9E88] gap-4">
          <div>
            © {new Date().getFullYear()} Thrivemind Botanicals Pty Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#shipping" className="hover:text-white transition-colors">Shipping Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
