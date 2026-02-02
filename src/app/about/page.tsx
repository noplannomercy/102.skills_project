'use client';

import React from 'react';
import StorySection from '@/components/about/StorySection';
import FounderSection from '@/components/about/FounderSection';
import FeaturesSection from '@/components/about/FeaturesSection';
import Button from '@/components/Button';
import { useReservation } from '@/contexts/ReservationContext';

export default function AboutPage() {
  const { openModal } = useReservation();

  return (
    <>
      <StorySection />
      <FounderSection />
      <FeaturesSection />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience It Yourself
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Join us for an unforgettable dining experience
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={openModal}
          >
            Reserve Your Table
          </Button>
        </div>
      </section>
    </>
  );
}
