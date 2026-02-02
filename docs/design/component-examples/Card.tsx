/**
 * Card Component
 *
 * Flexible card component for content grouping.
 * Includes product card and feature card variants.
 */

import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

const Card = ({ children, hover = false, className = '', onClick }: CardProps) => {
  const hoverStyles = hover
    ? 'hover:shadow-md hover:scale-[1.02] cursor-pointer'
    : '';

  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-xl shadow-sm overflow-hidden
        transition-all duration-200
        ${hoverStyles}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {children}
    </div>
  );
};

// ============================================================
// PRODUCT CARD
// ============================================================

export interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  badge?: string;
  onClick?: () => void;
}

export const ProductCard = ({
  image,
  title,
  description,
  price,
  originalPrice,
  rating,
  badge,
  onClick,
}: ProductCardProps) => {
  return (
    <Card hover onClick={onClick}>
      {/* Image */}
      <div className="relative aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {badge && (
          <span className="absolute top-3 right-3 px-3 py-1 rounded-full
            bg-primary-400 text-white text-sm font-medium shadow-sm">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-h4 font-semibold text-neutral-900 mb-2">
          {title}
        </h3>
        <p className="text-body-sm text-neutral-600 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Price and Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-h4 font-bold text-primary-600">
              ${price.toFixed(2)}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-body-sm text-neutral-400 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {rating && (
            <div className="flex items-center gap-1">
              <span className="text-warning-500">★</span>
              <span className="text-body-sm text-neutral-600">
                {rating.toFixed(1)}
              </span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

// ============================================================
// FEATURE CARD
// ============================================================

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: {
    text: string;
    href: string;
  };
}

export const FeatureCard = ({ icon, title, description, link }: FeatureCardProps) => {
  return (
    <Card hover={!!link} className="p-8 text-center">
      {/* Icon */}
      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-100
        flex items-center justify-center text-primary-600">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-h3 font-semibold text-neutral-900 mb-3">
        {title}
      </h3>
      <p className="text-body-md text-neutral-600 mb-4">
        {description}
      </p>

      {/* Link */}
      {link && (
        <a
          href={link.href}
          className="inline-flex items-center gap-2 text-primary-600
            font-medium hover:text-primary-700 transition-colors"
        >
          {link.text}
          <span>→</span>
        </a>
      )}
    </Card>
  );
};

// ============================================================
// TESTIMONIAL CARD
// ============================================================

export interface TestimonialCardProps {
  avatar: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const TestimonialCard = ({
  avatar,
  name,
  role,
  content,
  rating,
}: TestimonialCardProps) => {
  return (
    <Card className="p-6">
      {/* Rating */}
      <div className="flex text-warning-500 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < rating ? '' : 'text-neutral-300'}>
            ★
          </span>
        ))}
      </div>

      {/* Content */}
      <p className="text-body-md text-neutral-700 mb-6 leading-relaxed">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-neutral-900">{name}</div>
          <div className="text-body-sm text-neutral-600">{role}</div>
        </div>
      </div>
    </Card>
  );
};

// ============================================================
// USAGE EXAMPLES
// ============================================================

export function CardExamples() {
  return (
    <div className="space-y-12 p-8 bg-neutral-50">
      {/* Product Cards Grid */}
      <section>
        <h3 className="text-h3 font-semibold mb-6">Product Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            image="/api/placeholder/400/400"
            title="Green Salad"
            description="A refreshing blend of mixed greens, cherry tomatoes, and grilled chicken tossed in a tangy vinaigrette"
            price={10.50}
            rating={4.5}
            badge="Popular"
          />
          <ProductCard
            image="/api/placeholder/400/400"
            title="Beef Salad"
            description="Premium cuts of grilled beef served over crisp lettuce with herbs and zesty dressing"
            price={13.00}
            originalPrice={15.99}
            rating={4.8}
          />
          <ProductCard
            image="/api/placeholder/400/400"
            title="Nut Salad"
            description="Crunchy nuts combined with fresh vegetables and a unique honey mustard dressing"
            price={12.80}
            rating={4.6}
          />
        </div>
      </section>

      {/* Feature Cards */}
      <section>
        <h3 className="text-h3 font-semibold mb-6">Feature Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<span className="text-3xl">🥗</span>}
            title="Fresh Ingredients"
            description="We source only the freshest, locally-grown produce for maximum flavor and nutrition"
            link={{ text: "Learn more", href: "#" }}
          />
          <FeatureCard
            icon={<span className="text-3xl">🚚</span>}
            title="Fast Delivery"
            description="Get your healthy meals delivered to your door in 30 minutes or less"
            link={{ text: "View areas", href: "#" }}
          />
          <FeatureCard
            icon={<span className="text-3xl">⭐</span>}
            title="Quality Guaranteed"
            description="100% satisfaction guaranteed or your money back, no questions asked"
          />
        </div>
      </section>

      {/* Testimonial Cards */}
      <section>
        <h3 className="text-h3 font-semibold mb-6">Customer Reviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TestimonialCard
            avatar="/api/placeholder/100/100"
            name="Sarah Johnson"
            role="Regular Customer"
            content="The quality of ingredients is outstanding! I've been ordering from Vegerly for 3 months and couldn't be happier with the freshness and taste."
            rating={5}
          />
          <TestimonialCard
            avatar="/api/placeholder/100/100"
            name="Mike Chen"
            role="Fitness Enthusiast"
            content="Perfect for my meal prep routine. The portions are generous and the nutritional balance is exactly what I need for my fitness goals."
            rating={5}
          />
        </div>
      </section>

      {/* Basic Card */}
      <section>
        <h3 className="text-h3 font-semibold mb-6">Basic Card</h3>
        <Card className="p-8">
          <h4 className="text-h4 font-semibold mb-3">Custom Content</h4>
          <p className="text-body-md text-neutral-600">
            The base Card component is flexible and can contain any content you need.
            It provides consistent styling with optional hover effects.
          </p>
        </Card>
      </section>
    </div>
  );
}

export default Card;
