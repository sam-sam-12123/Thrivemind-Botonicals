import React, { useState } from 'react';
import { ChevronDown, Search, User, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { BotanicalLogo } from './BotanicalLogo';
import { COLLECTIONS } from '../data/products';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onSelectCategory?: (category: 'hair' | 'skin' | 'wellbeing' | 'foot' | 'all') => void;
  onOpenStory?: () => void;
  onOpenIngredients?: () => void;
  onOpenJournal?: () => void;
  onOpenContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onSelectCategory,
  onOpenStory,
  onOpenIngredients,
  onOpenJournal,
  onOpenContact,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  return (
    <header id="main-header" className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E9E4DC] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 md:py-4">
        <div className="flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -ml-2 text-[#3D4837] hover:text-[#1F261B] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <button
              id="mobile-search-btn"
              onClick={onOpenSearch}
              className="p-2 text-[#3D4837] hover:text-[#1F261B]"
              aria-label="Search products"
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Desktop Left Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[12.5px] font-medium tracking-[0.18em] text-[#3B4636] uppercase">
            {/* Shop Dropdown */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setIsShopDropdownOpen(true)}
              onMouseLeave={() => setIsShopDropdownOpen(false)}
            >
              <button
                id="nav-shop-btn"
                className="flex items-center gap-1 hover:text-[#64745D] transition-colors focus:outline-none"
                onClick={() => onSelectCategory && onSelectCategory('all')}
              >
                <span>SHOP</span>
                <ChevronDown className="w-3.5 h-3.5 stroke-[2] transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              {isShopDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-60 z-50 animate-fade-in">
                  <div className="bg-[#FAF8F5] border border-[#E3DDD2] shadow-lg rounded-sm py-2 px-1">
                    <button
                      onClick={() => {
                        onSelectCategory && onSelectCategory('all');
                        setIsShopDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs uppercase tracking-[0.14em] text-[#333E2F] hover:bg-[#F0ECE3] hover:text-[#222B1E] flex items-center justify-between"
                    >
                      <span>All Products</span>
                      <ArrowRight className="w-3 h-3 opacity-60" />
                    </button>
                    <div className="my-1 border-t border-[#ECE6DB]" />
                    {COLLECTIONS.map((col) => (
                      <button
                        key={col.id}
                        onClick={() => {
                          onSelectCategory && onSelectCategory(col.category);
                          setIsShopDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-xs uppercase tracking-[0.14em] text-[#4E5A49] hover:bg-[#F0ECE3] hover:text-[#222B1E] flex items-center justify-between transition-colors"
                      >
                        <span>{col.title}</span>
                        <span className="text-[10px] text-[#7A8774] lowercase italic font-serif">
                          {col.subtitle}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              id="nav-about-btn"
              onClick={onOpenStory}
              className="hover:text-[#64745D] transition-colors py-2"
            >
              ABOUT
            </button>

            <button
              id="nav-ingredients-btn"
              onClick={onOpenIngredients}
              className="hover:text-[#64745D] transition-colors py-2"
            >
              OUR INGREDIENTS
            </button>
          </nav>

          {/* Centered Brand Logo matching screenshot */}
          <div className="flex-1 lg:flex-initial flex justify-center py-1">
            <a href="#" className="inline-block group focus:outline-none" aria-label="Thrivemind Botanicals Home">
              <BotanicalLogo size="md" />
            </a>
          </div>

          {/* Desktop Right Navigation */}
          <div className="flex items-center gap-6 md:gap-7">
            <nav className="hidden lg:flex items-center gap-8 text-[12.5px] font-medium tracking-[0.18em] text-[#3B4636] uppercase mr-2">
              <button
                id="nav-journal-btn"
                onClick={onOpenJournal}
                className="hover:text-[#64745D] transition-colors py-2"
              >
                JOURNAL
              </button>
              <button
                id="nav-contact-btn"
                onClick={onOpenContact}
                className="hover:text-[#64745D] transition-colors py-2"
              >
                CONTACT
              </button>
            </nav>

            {/* Utility Icons */}
            <div className="flex items-center gap-4 sm:gap-5 text-[#333E2F]">
              <button
                id="header-user-btn"
                className="hidden sm:inline-flex p-1.5 hover:text-[#64745D] transition-colors"
                aria-label="User Account"
                title="Account"
                onClick={() => alert("Sign in to your Thrivemind Botanicals customer account.")}
              >
                <User className="w-5 h-5 stroke-[1.4]" />
              </button>

              <button
                id="header-search-btn"
                onClick={onOpenSearch}
                className="hidden lg:inline-flex p-1.5 hover:text-[#64745D] transition-colors"
                aria-label="Search"
                title="Search"
              >
                <Search className="w-5 h-5 stroke-[1.4]" />
              </button>

              <button
                id="header-cart-btn"
                onClick={onOpenCart}
                className="relative p-1.5 hover:text-[#64745D] transition-colors group"
                aria-label={`Shopping bag with ${cartCount} items`}
                title="Shopping Bag"
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.4] transition-transform group-hover:scale-105" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#4A5844] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-fade-in">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Navigation Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-[#FAF8F5] border-b border-[#E3DDD2] px-6 py-6 animate-fade-in">
          <div className="flex flex-col space-y-4 text-center">
            <div className="border-b border-[#ECE6DB] pb-3">
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#7A8673] font-semibold block mb-2">Shop Categories</span>
              <div className="grid grid-cols-2 gap-2">
                {COLLECTIONS.map((col) => (
                  <button
                    key={col.id}
                    onClick={() => {
                      onSelectCategory && onSelectCategory(col.category);
                      setIsMobileMenuOpen(false);
                    }}
                    className="p-2.5 bg-[#F2EDE4] rounded-sm text-xs uppercase tracking-[0.14em] text-[#333E2F] font-medium"
                  >
                    {col.title}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                onOpenStory && onOpenStory();
                setIsMobileMenuOpen(false);
              }}
              className="text-sm font-medium tracking-[0.18em] text-[#3B4636] uppercase py-2 hover:text-[#5F6E58]"
            >
              ABOUT OUR PHILOSOPHY
            </button>

            <button
              onClick={() => {
                onOpenIngredients && onOpenIngredients();
                setIsMobileMenuOpen(false);
              }}
              className="text-sm font-medium tracking-[0.18em] text-[#3B4636] uppercase py-2 hover:text-[#5F6E58]"
            >
              OUR BOTANICAL INGREDIENTS
            </button>

            <button
              onClick={() => {
                onOpenJournal && onOpenJournal();
                setIsMobileMenuOpen(false);
              }}
              className="text-sm font-medium tracking-[0.18em] text-[#3B4636] uppercase py-2 hover:text-[#5F6E58]"
            >
              WELLNESS JOURNAL
            </button>

            <button
              onClick={() => {
                onOpenContact && onOpenContact();
                setIsMobileMenuOpen(false);
              }}
              className="text-sm font-medium tracking-[0.18em] text-[#3B4636] uppercase py-2 hover:text-[#5F6E58]"
            >
              CONTACT & CARE
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
