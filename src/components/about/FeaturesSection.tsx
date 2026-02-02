import React from 'react';
import { FeatureCard } from '../Card';
import { images } from '@/data/images';

const FeaturesSection = () => {
  const features = [
    {
      icon: '🥩',
      title: 'Prime Cuts',
      description: 'Our steaks are hand-selected, aged to perfection, and expertly prepared. Each cut is a testament to quality and craftsmanship.',
      image: images.features.primeCuts,
    },
    {
      icon: '🍣',
      title: 'Fresh Sushi',
      description: 'Daily deliveries of the finest seafood ensure that every piece of sushi and sashimi meets our exacting standards.',
      image: images.features.freshSushi,
    },
    {
      icon: '🍺',
      title: 'Craft Beer',
      description: 'Our rotating selection of local and regional craft beers perfectly complements any dish on our menu.',
      image: images.features.craftBeer,
    },
    {
      icon: '🎵',
      title: 'Live Music',
      description: 'Enjoy exceptional live performances every Friday evening and Sunday afternoon, adding ambiance to your dining experience.',
      image: images.features.liveMusic,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            What Makes Us Special
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Four pillars of excellence that define The Oak & Barrel experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="group">
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-4xl">{feature.icon}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
