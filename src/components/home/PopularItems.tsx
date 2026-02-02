import React from 'react';
import Link from 'next/link';
import { ProductCard } from '../Card';
import { popularItems } from '@/data/menu';
import Button from '../Button';

const PopularItems = () => {
  return (
    <section className="py-20 px-4 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Guest Favorites
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover the dishes our guests can't stop talking about
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {popularItems.map((item) => (
            <ProductCard
              key={item.name}
              image={item.image}
              title={item.name}
              description={item.description}
              price={item.price}
              badge={item.badge}
            />
          ))}
        </div>

        <div className="text-center">
          <Link href="/menu">
            <Button variant="primary" size="lg">
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
