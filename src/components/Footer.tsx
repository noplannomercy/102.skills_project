import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">The Oak & Barrel</h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Premium steaks, fresh sushi, and craft beer in the heart of New York.
              Experience culinary excellence since 2004.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Hours</h4>
            <div className="space-y-2 text-sm text-neutral-300">
              <p>Monday - Thursday<br />5:00 PM - 10:00 PM</p>
              <p>Friday - Saturday<br />5:00 PM - 11:00 PM</p>
              <p>Sunday<br />4:00 PM - 9:00 PM</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-neutral-300">
              <p>123 Oak Street<br />New York, NY 10001</p>
              <p>(212) 555-0100</p>
              <p>info@oakandbarrel.com</p>
            </div>
          </div>

          {/* Live Music */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Live Music</h4>
            <div className="space-y-2 text-sm text-neutral-300">
              <p className="flex items-center gap-2">
                <span className="text-accent-500">♪</span>
                Friday Nights<br />7:00 PM - Jazz
              </p>
              <p className="flex items-center gap-2">
                <span className="text-accent-500">♪</span>
                Sunday Afternoons<br />3:00 PM - Acoustic
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} The Oak & Barrel. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-neutral-400 hover:text-accent-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-neutral-400 hover:text-accent-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
