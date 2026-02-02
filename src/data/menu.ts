/**
 * Menu Data for The Oak & Barrel
 * Parsed from menu-items.csv with Pexels images
 */

import { images } from './images';

export interface MenuItem {
  category: string;
  name: string;
  description: string;
  price: number;
  badge?: string;
  image: string;
}

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    category: 'Appetizers',
    name: 'Truffle Burrata',
    description: 'Creamy burrata, black truffle, arugula, aged balsamic drizzle',
    price: 22,
    badge: 'Chef\'s Pick',
    image: images.menuItems['Truffle Burrata'],
  },
  {
    category: 'Appetizers',
    name: 'Wagyu Beef Tartare',
    description: 'Hand-cut wagyu, quail egg, capers, cornichons, crostini',
    price: 28,
    badge: 'Premium',
    image: images.menuItems['Wagyu Beef Tartare'],
  },
  {
    category: 'Appetizers',
    name: 'Crispy Calamari',
    description: 'Lightly battered, served with marinara and lemon aioli',
    price: 16,
    image: images.menuItems['Crispy Calamari'],
  },
  {
    category: 'Appetizers',
    name: 'Soup of the Day',
    description: 'Chef\'s daily creation, served with artisan bread',
    price: 12,
    image: images.menuItems['Soup of the Day'],
  },

  // Sushi & Sashimi
  {
    category: 'Sushi & Sashimi',
    name: 'Chef\'s Omakase',
    description: 'A curated selection of the freshest seasonal fish',
    price: 65,
    badge: 'Chef\'s Pick',
    image: images.menuItems['Chef\'s Omakase'],
  },
  {
    category: 'Sushi & Sashimi',
    name: 'Dragon Roll',
    description: 'Shrimp tempura, eel, avocado, spicy mayo, tobiko',
    price: 22,
    badge: 'Popular',
    image: images.menuItems['Dragon Roll'],
  },
  {
    category: 'Sushi & Sashimi',
    name: 'Salmon Sashimi',
    description: '8 pieces of premium Norwegian salmon',
    price: 26,
    image: images.menuItems['Salmon Sashimi'],
  },
  {
    category: 'Sushi & Sashimi',
    name: 'Spicy Tuna Roll',
    description: 'Fresh tuna, spicy mayo, cucumber, sesame seeds',
    price: 18,
    image: images.menuItems['Spicy Tuna Roll'],
  },
  {
    category: 'Sushi & Sashimi',
    name: 'Rainbow Roll',
    description: 'California roll topped with assorted sashimi',
    price: 24,
    image: images.menuItems['Rainbow Roll'],
  },

  // Prime Steaks
  {
    category: 'Prime Steaks',
    name: 'Prime Ribeye',
    description: '16oz aged ribeye, herb butter, roasted garlic, seasonal vegetables',
    price: 58,
    badge: 'Premium',
    image: images.menuItems['Prime Ribeye'],
  },
  {
    category: 'Prime Steaks',
    name: 'Filet Mignon',
    description: '8oz center-cut tenderloin, red wine reduction, truffle mash',
    price: 52,
    badge: 'Popular',
    image: images.menuItems['Filet Mignon'],
  },
  {
    category: 'Prime Steaks',
    name: 'NY Strip',
    description: '14oz bone-in strip, peppercorn sauce, crispy onion rings',
    price: 48,
    image: images.menuItems['NY Strip'],
  },
  {
    category: 'Prime Steaks',
    name: 'Bone Marrow Steak',
    description: '12oz tomahawk, roasted bone marrow, chimichurri',
    price: 62,
    badge: 'Chef\'s Pick',
    image: images.menuItems['Bone Marrow Steak'],
  },

  // Burgers & Grills
  {
    category: 'Burgers & Grills',
    name: 'The Classic Oak',
    description: 'Prime beef patty, aged cheddar, lettuce, tomato, Oak & Bar sauce',
    price: 18,
    badge: 'Popular',
    image: images.menuItems['The Classic Oak'],
  },
  {
    category: 'Burgers & Grills',
    name: 'Wagyu Smash Burger',
    description: 'Double wagyu patties, American cheese, caramelized onions, pickles',
    price: 24,
    badge: 'Premium',
    image: images.menuItems['Wagyu Smash Burger'],
  },
  {
    category: 'Burgers & Grills',
    name: 'Truffle Mushroom Burger',
    description: 'Beef patty, swiss cheese, sautéed mushrooms, truffle aioli',
    price: 22,
    image: images.menuItems['Truffle Mushroom Burger'],
  },
  {
    category: 'Burgers & Grills',
    name: 'BBQ Bacon Burger',
    description: 'Beef patty, smoked bacon, cheddar, crispy onions, house BBQ sauce',
    price: 20,
    image: images.menuItems['BBQ Bacon Burger'],
  },

  // Craft Beverages
  {
    category: 'Craft Beverages',
    name: 'Local IPA',
    description: 'Hoppy and citrus-forward, from our local craft brewery',
    price: 8,
    image: images.menuItems['Local IPA'],
  },
  {
    category: 'Craft Beverages',
    name: 'Belgian Wheat',
    description: 'Light and refreshing with hints of orange and coriander',
    price: 9,
    image: images.menuItems['Belgian Wheat'],
  },
  {
    category: 'Craft Beverages',
    name: 'Stout',
    description: 'Rich and creamy with coffee and chocolate notes',
    price: 9,
    image: images.menuItems['Stout'],
  },
];

// Group menu items by category
export const menuByCategory = menuItems.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = [];
  }
  acc[item.category].push(item);
  return acc;
}, {} as Record<string, MenuItem[]>);

// Get all unique categories
export const categories = Object.keys(menuByCategory);

// Get popular items for homepage
export const popularItems = menuItems.filter(item =>
  ['Popular', 'Premium', 'Chef\'s Pick'].includes(item.badge || '')
).slice(0, 6);
