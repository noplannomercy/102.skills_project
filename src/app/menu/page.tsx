import React from 'react';
import MenuBook from '@/components/menu/MenuBook';

export const metadata = {
  title: 'Our Menu - The Oak & Barrel',
  description: 'Explore our full menu featuring premium steaks, fresh sushi, gourmet burgers, and craft beverages.',
};

export default function MenuPage() {
  return (
    <div className="py-16 px-4 bg-neutral-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-4">
          Our Menu
        </h1>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          Crafted with passion, served with pride
        </p>
      </div>

      {/* Menu Book */}
      <MenuBook />

      {/* Note */}
      <div className="text-center mt-12">
        <p className="text-sm text-neutral-500">
          All prices in USD. Tax not included. Menu items and prices subject to change.
        </p>
        <p className="text-sm text-neutral-500 mt-2">
          Please inform your server of any dietary restrictions or allergies.
        </p>
      </div>
    </div>
  );
}
