import { Product, CollectionItem } from '../types';

import heroImg from '../assets/images/hero_women_botanicals_1787803059263.jpg';
import womanTouchingFaceImg from '../assets/images/woman_touching_face_1787803073332.jpg';
import holdingCreamImg from '../assets/images/holding_cream_tube_1787803085427.jpg';
import womanBeachImg from '../assets/images/woman_beach_arms_1787803099722.jpg';
import catHairCareImg from '../assets/images/cat_hair_care_1787803116774.jpg';
import catSkinCareImg from '../assets/images/cat_skin_care_1787803133051.jpg';
import catWellbeingImg from '../assets/images/cat_wellbeing_1787803146791.jpg';
import catFootCareImg from '../assets/images/cat_foot_care_1787803160849.jpg';

export const IMAGES = {
  hero: heroImg,
  womanTouchingFace: womanTouchingFaceImg,
  holdingCream: holdingCreamImg,
  womanBeach: womanBeachImg,
  hairCareCategory: catHairCareImg,
  skinCareCategory: catSkinCareImg,
  wellbeingCategory: catWellbeingImg,
  footCareCategory: catFootCareImg,
};

export const COLLECTIONS: CollectionItem[] = [
  {
    id: 'hair-care',
    title: 'HAIR CARE',
    subtitle: 'Nourish & strengthen',
    image: catHairCareImg,
    category: 'hair',
  },
  {
    id: 'skin-care',
    title: 'SKIN CARE',
    subtitle: 'Hydrate & restore',
    image: catSkinCareImg,
    category: 'skin',
  },
  {
    id: 'wellbeing',
    title: 'WELLBEING',
    subtitle: 'Mind, body & soul',
    image: catWellbeingImg,
    category: 'wellbeing',
  },
  {
    id: 'foot-care',
    title: 'FOOT CARE',
    subtitle: 'Soothe & revive',
    image: catFootCareImg,
    category: 'foot',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'thrive-foot-cream',
    name: 'Restorative Botanical Foot Cream',
    category: 'foot',
    categoryLabel: 'Foot Care',
    price: 48,
    rating: 4.9,
    reviewsCount: 128,
    size: '120ml / 4.05 fl.oz',
    description: 'Deeply cooling and deeply hydrating foot cream crafted with Australian tea tree, peppermint, and organic shea butter to soothe tired, overheated feet and restore soft skin.',
    subtext: 'Soothe, cool & revive tired soles',
    image: catFootCareImg,
    benefits: [
      'Relieves sensation of hot, restless, or fatigued feet',
      'Intensively softens cracked heels with cold-pressed botanical lipids',
      'Fast-absorbing and non-greasy silky finish',
      'Infused with calming Australian eucalyptus and organic lavender'
    ],
    keyIngredients: ['Australian Tea Tree Oil', 'Organic Shea Butter', 'Peppermint Leaf Oil', 'Tasmanian Blue Gum']
  },
  {
    id: 'thrive-hair-density-serum',
    name: 'Densifying Scalp & Hair Elixir',
    category: 'hair',
    categoryLabel: 'Hair Care',
    price: 64,
    rating: 4.8,
    reviewsCount: 94,
    size: '100ml / 3.38 fl.oz',
    description: 'A nutrient-dense botanical scalp therapy formulated to reduce hair thinning, invigorate follicles, and restore bounce and shine during hormonal transitions.',
    subtext: 'Nourish & strengthen thinning hair',
    image: catHairCareImg,
    benefits: [
      'Promotes thicker, fuller looking hair roots',
      'Calms dry, sensitive, or hormonally fluctuating scalps',
      'Strengthens follicle anchors with rosemary and caffeine extracts'
    ],
    keyIngredients: ['Rosemary Leaf Extract', 'Kakadu Plum', 'Saw Palmetto', 'Cold-Pressed Argan']
  },
  {
    id: 'thrive-skin-cellular-cream',
    name: 'Radiance Cellular Moisture Cream',
    category: 'skin',
    categoryLabel: 'Skin Care',
    price: 72,
    rating: 5.0,
    reviewsCount: 156,
    size: '60ml / 2.02 fl.oz',
    description: 'Rich, barrier-repairing botanical cream packed with phytonutrients and desert fruit extracts to intensely hydrate, diminish fine lines, and replenish collagen loss.',
    subtext: 'Hydrate & restore skin radiance',
    image: catSkinCareImg,
    benefits: [
      'Recharges depleted moisture reserves in mature skin',
      'Supports natural elasticity and barrier resilience',
      'Imparts a dewy, non-comedogenic glow'
    ],
    keyIngredients: ['Quandong Fruit Extract', 'Native Australian Sandalwood', 'Jojoba Ester', 'Ceramide Complex']
  },
  {
    id: 'thrive-wellbeing-calm-tincture',
    name: 'Serenity Botanical Harmony Drops',
    category: 'wellbeing',
    categoryLabel: 'Wellbeing',
    price: 54,
    rating: 4.9,
    reviewsCount: 82,
    size: '50ml / 1.69 fl.oz',
    description: 'An adaptogenic herbal elixir designed to ease stress, soothe hot flashes, and encourage restorative sleep during perimenopause and menopause.',
    subtext: 'Mind, body & soul calming blend',
    image: catWellbeingImg,
    benefits: [
      'Helps balance nervous system and emotional well-being',
      'Supports temperature regulation and evening relaxation',
      '100% natural, alcohol-free artisanal herbal distillation'
    ],
    keyIngredients: ['Black Cohosh Root', 'Ashwagandha', 'Lemon Balm', 'Australian Wildflower Essence']
  }
];
