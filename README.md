# The Oak & Barrel Restaurant Website

A modern, responsive restaurant website built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Features

- **3-Page Restaurant Website**
  - Home page with hero, popular items, and events
  - Interactive menu with unique page-flip/book design
  - About page with founder story and restaurant features

- **Reservation System**
  - Modal-based table reservation form
  - Date and time selection
  - Party size options (1-12 guests)

- **Live Music Events**
  - Friday Night Jazz (7:00 PM)
  - Sunday Afternoon Acoustic (3:00 PM)

- **Menu Categories**
  - Appetizers
  - Sushi & Sashimi
  - Prime Steaks
  - Burgers & Grills
  - Craft Beverages

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **React**: 19.2.3
- **TypeScript**: 5
- **Styling**: Tailwind CSS 4
- **Design System**: Custom restaurant-themed components (adapted from Vegerly)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navigation and footer
│   ├── page.tsx            # Home page
│   ├── menu/
│   │   └── page.tsx        # Menu page
│   └── about/
│       └── page.tsx        # About page
├── components/
│   ├── Navigation.tsx      # Site navigation
│   ├── Footer.tsx          # Site footer
│   ├── ReservationModal.tsx # Reservation form modal
│   ├── Button.tsx          # Reusable button component
│   ├── Card.tsx            # Card components
│   ├── Input.tsx           # Form input components
│   ├── Modal.tsx           # Modal component
│   ├── Badge.tsx           # Badge component
│   ├── home/               # Home page sections
│   ├── menu/               # Menu page components
│   └── about/              # About page sections
├── contexts/
│   └── ReservationContext.tsx # Reservation state management
├── data/
│   ├── menu.ts             # Menu items data
│   └── images.ts           # Pexels image URLs
└── utils/
    └── menuData.ts         # Menu data utilities
```

## Design System

The website uses a warm, restaurant-appropriate color palette:

- **Primary**: Oak brown (#8B4513, #A0522D)
- **Accent**: Copper/brass (#B87333, #CD7F32)
- **Background**: Warm cream (#FFF8F0)
- **Text**: Deep brown (#2C1810)

## Menu Data

Menu items are stored in `src/data/menu.ts` and parsed from the CSV file in `docs/menu-items.csv`. Each item includes:
- Category
- Name
- Description
- Price
- Optional badge (Chef's Pick, Premium, Popular)
- High-quality Pexels stock image

## Images

All images are sourced from Pexels and optimized for web use. Image URLs are centralized in `src/data/images.ts` for easy management.

## Features Implemented

✅ Responsive design (mobile, tablet, desktop)
✅ Sticky navigation with mobile menu
✅ Reservation modal with form validation
✅ Unique menu book with page-flip navigation
✅ Live music event showcase
✅ Founder story and restaurant values
✅ Product cards with badges
✅ Smooth animations and transitions
✅ SEO-friendly metadata
✅ Accessible components

## Future Enhancements

- Shopping cart for takeout orders
- Real-time table availability checking
- Email confirmation for reservations
- Customer reviews section
- Newsletter signup
- Social media integration
- Interactive menu filtering
- Photo gallery

## Credits

- **Founder**: Leon van Zyl (fictional)
- **Images**: Pexels (royalty-free stock photos)
- **Design Inspiration**: Vegerly design system
- **Built by**: Claude Code

## License

This is a demonstration project. All rights reserved.
