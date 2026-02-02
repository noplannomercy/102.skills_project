import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ReservationModal from "@/components/ReservationModal";
import { ReservationProvider } from "@/contexts/ReservationContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Oak & Barrel - Premium Steaks, Fresh Sushi & Craft Beer",
  description: "Experience culinary excellence at The Oak & Barrel. Premium steaks, fresh sushi, and craft beer in the heart of New York. Live music every Friday and Sunday.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReservationProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <ReservationModal />
        </ReservationProvider>
      </body>
    </html>
  );
}
