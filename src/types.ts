export interface Product {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'wellbeing' | 'foot';
  categoryLabel: string;
  price: number;
  rating: number;
  reviewsCount: number;
  description: string;
  subtext: string;
  image: string;
  benefits: string[];
  keyIngredients: string[];
  size: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: 'hair' | 'skin' | 'wellbeing' | 'foot';
}
