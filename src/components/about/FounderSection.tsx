import React from 'react';
import { images } from '@/data/images';

const FounderSection = () => {
  return (
    <section className="py-20 px-4 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <img
                src={images.about.founder}
                alt="Leon van Zyl, Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-8 rounded-xl shadow-xl max-w-xs">
              <p className="text-xl font-semibold italic">
                "Great food brings people together"
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-6">
              <p className="text-accent-500 font-semibold mb-2">FOUNDER & VISIONARY</p>
              <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                Leon van Zyl
              </h2>
            </div>

            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>
                Born in South Africa and trained in both Tokyo and New York, Leon van Zyl
                brought a unique perspective to American dining when he opened The Oak & Barrel
                in 2004. His vision was ambitious yet simple: create a restaurant that honored
                multiple culinary traditions without compromising on any of them.
              </p>
              <p>
                With over 30 years of experience in the restaurant industry, Leon's approach
                combines technical precision with genuine hospitality. He believes that the
                best dining experiences happen when quality ingredients, skilled preparation,
                and warm service come together seamlessly.
              </p>
              <p>
                Today, Leon continues to oversee The Oak & Barrel's operations, personally
                selecting suppliers, mentoring the culinary team, and greeting guests most
                evenings. His commitment to excellence and community has made The Oak & Barrel
                not just a restaurant, but a New York institution.
              </p>
            </div>

            {/* Achievements */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <p className="text-3xl font-bold text-primary-600 mb-1">20+</p>
                <p className="text-sm text-neutral-600">Years of Excellence</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <p className="text-3xl font-bold text-primary-600 mb-1">30+</p>
                <p className="text-sm text-neutral-600">Industry Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
