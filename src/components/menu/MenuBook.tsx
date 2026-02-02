'use client';

import React, { useState } from 'react';
import { menuByCategory, categories } from '@/data/menu';
import { images } from '@/data/images';
import MenuItem from './MenuItem';

const MenuBook = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < categories.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentCategory = categories[currentPage];
  const currentItems = menuByCategory[currentCategory];
  const categoryImage = images.categories[currentCategory as keyof typeof images.categories];

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Book Container */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Book Pages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left Page - Category Image & Intro */}
          <div className="relative bg-gradient-to-br from-primary-50 to-accent-50 p-8 flex flex-col justify-center">
            <div className="relative h-48 rounded-xl overflow-hidden mb-6">
              <img
                src={categoryImage}
                alt={currentCategory}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              {currentCategory}
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              {getCategoryDescription(currentCategory)}
            </p>
            <div className="mt-6 pt-6 border-t border-neutral-200">
              <p className="text-sm text-neutral-500">
                Page {currentPage + 1} of {categories.length}
              </p>
            </div>
          </div>

          {/* Right Page - Menu Items */}
          <div className="bg-neutral-50 p-8 overflow-y-auto max-h-[600px]">
            <div className="space-y-3">
              {currentItems.map((item) => (
                <MenuItem key={item.name} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="bg-neutral-100 px-8 py-6 flex items-center justify-between border-t border-neutral-200">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all
              ${currentPage === 0
                ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                : 'bg-primary-500 text-white hover:bg-primary-600'
              }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>

          <div className="flex gap-2">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentPage
                    ? 'bg-primary-600 w-8'
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === categories.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all
              ${currentPage === categories.length - 1
                ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                : 'bg-primary-500 text-white hover:bg-primary-600'
              }`}
          >
            Next
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function for category descriptions
function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    'Appetizers': 'Start your culinary journey with our carefully crafted starters. Each dish is designed to awaken your palate and set the stage for the exceptional meal to come.',
    'Sushi & Sashimi': 'Experience the art of Japanese cuisine with our fresh, hand-selected seafood. Our skilled chefs bring you the finest flavors from the ocean.',
    'Prime Steaks': 'Indulge in our premium, hand-cut steaks aged to perfection. Each cut is carefully selected and prepared to deliver an unforgettable dining experience.',
    'Burgers & Grills': 'Savor our gourmet burgers and grilled specialties. Made with premium ingredients and our signature sauces, these dishes offer comfort with a sophisticated twist.',
    'Craft Beverages': 'Complement your meal with our selection of craft beers. Sourced from local breweries, each beverage is chosen to enhance your dining experience.',
  };
  return descriptions[category] || '';
}

export default MenuBook;
