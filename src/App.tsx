import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ValuePropsBar } from './components/ValuePropsBar';
import { OurStorySection } from './components/OurStorySection';
import { CollectionsSection } from './components/CollectionsSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ShopCatalogModal } from './components/ShopCatalogModal';
import { OurStoryModal } from './components/OurStoryModal';
import { IngredientsModal } from './components/IngredientsModal';
import { SearchModal } from './components/SearchModal';
import { CartItem, Product } from './types';
import { PRODUCTS } from './data/products';

export default function App() {
  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // Pre-loaded with the iconic Restorative Foot Cream
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isShopModalOpen, setIsShopModalOpen] = useState(false);
  const [shopCategory, setShopCategory] = useState<'all' | 'hair' | 'skin' | 'wellbeing' | 'foot'>('all');
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [isIngredientsModalOpen, setIsIngredientsModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Cart operations
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });

    setToastMessage(`Added "${product.name}" to your bag`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleCheckout = () => {
    alert("Thank you for choosing Thrivemind Botanicals! Secure checkout order initialized.");
    setIsCartOpen(false);
  };

  const openShopWithCategory = (category: 'all' | 'hair' | 'skin' | 'wellbeing' | 'foot') => {
    setShopCategory(category);
    setIsShopModalOpen(true);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C3527] font-sans antialiased selection:bg-[#4A5844] selection:text-white">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Main Navigation Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onSelectCategory={(category) => openShopWithCategory(category)}
        onOpenStory={() => setIsStoryModalOpen(true)}
        onOpenIngredients={() => setIsIngredientsModalOpen(true)}
        onOpenJournal={() => {
          alert("The Menopause & Botanical Wellness Journal: Articles on natural hormone harmony, Australian native botanicals, and scalp density.");
        }}
        onOpenContact={() => {
          alert("Reach our Byron Bay botanical naturopaths & customer care: hello@thrivemindbotanicals.com.au");
        }}
      />

      {/* 3. Hero Section */}
      <main className="flex-1">
        <HeroSection
          onShopClick={() => openShopWithCategory('all')}
        />

        {/* 4. Value Proposition Badges */}
        <ValuePropsBar />

        {/* 5. Empowering Women to Thrive / Our Story Section */}
        <OurStorySection
          onOurStoryClick={() => setIsStoryModalOpen(true)}
        />

        {/* 6. Explore Our Collections Grid */}
        <CollectionsSection
          onSelectCollection={(category) => openShopWithCategory(category)}
          onShopAllClick={() => openShopWithCategory('all')}
        />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Shop Catalog Modal */}
      <ShopCatalogModal
        isOpen={isShopModalOpen}
        initialCategory={shopCategory}
        onClose={() => setIsShopModalOpen(false)}
        onSelectProduct={(product) => setSelectedProduct(product)}
        onAddToCart={handleAddToCart}
      />

      {/* Our Story Modal */}
      <OurStoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
        onExploreProducts={() => openShopWithCategory('all')}
      />

      {/* Ingredients Modal */}
      <IngredientsModal
        isOpen={isIngredientsModalOpen}
        onClose={() => setIsIngredientsModalOpen(false)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />

      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#323D2D] text-white px-5 py-3 rounded-sm shadow-xl flex items-center gap-3 text-xs tracking-wider animate-fade-in border border-[#4F5F49]">
          <span className="w-2 h-2 rounded-full bg-[#85D478]" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="underline font-bold hover:text-[#C5DCBF] ml-2 cursor-pointer"
          >
            View Bag
          </button>
        </div>
      )}
    </div>
  );
}
