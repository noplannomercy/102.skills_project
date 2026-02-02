import React from 'react';
import Card from '../Card';
import Badge from '../Badge';
import { images } from '@/data/images';

const EventsSection = () => {
  const events = [
    {
      title: 'Friday Night Jazz',
      time: '7:00 PM',
      description: 'Enjoy smooth jazz performances by local artists while you dine. The perfect ambiance for a sophisticated evening.',
      image: images.events.jazzNight,
      badge: 'Every Friday',
    },
    {
      title: 'Sunday Afternoon Acoustic',
      time: '3:00 PM',
      description: 'Unwind with soothing acoustic melodies during your Sunday meal. Family-friendly atmosphere.',
      image: images.events.acoustic,
      badge: 'Every Sunday',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Live Music
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Experience exceptional cuisine accompanied by talented musicians
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <Card key={event.title} hover>
              <div className="relative h-64">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="solid" color="primary">
                    {event.badge}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-primary-600 font-semibold mb-3">
                  {event.time}
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
