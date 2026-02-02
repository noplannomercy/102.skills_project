import React from 'react';
import { images } from '@/data/images';

const StorySection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
          <img
            src={images.about.restaurant}
            alt="The Oak & Barrel Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <h1 className="text-5xl font-bold text-white mb-2">Our Story</h1>
          </div>
        </div>

        {/* Story Content */}
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Founded in 2004 by restaurateur Leon van Zyl, The Oak & Barrel has been
              a cornerstone of New York's culinary scene for nearly two decades. What
              began as a dream to create a space where premium steaks, fresh sushi, and
              craft beer could coexist has blossomed into a beloved dining destination.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Our philosophy is simple: source the finest ingredients, prepare them with
              care and creativity, and serve them in an atmosphere that feels like home.
              From our aged prime cuts to our daily-fresh sushi, every dish tells a story
              of quality and craftsmanship.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-12">
              The Oak & Barrel isn't just a restaurant—it's a gathering place for families,
              friends, and food lovers. Whether you're celebrating a special occasion or
              simply enjoying a night out, we're honored to be part of your story.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-3xl">🥩</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Quality</h3>
              <p className="text-neutral-600">
                Only the finest ingredients make it to your plate
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Community</h3>
              <p className="text-neutral-600">
                Building connections one meal at a time
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Tradition</h3>
              <p className="text-neutral-600">
                Honoring culinary excellence since 2004
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
