'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-zinc-200 shadow-2xl p-4 sm:p-6">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-zinc-700 leading-relaxed">
            🍪 We use cookies to enhance your browsing experience. 
            Read our{' '}
            <Link href="/privacy" className="text-indigo-600 hover:text-indigo-700 font-medium underline">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href="/cookies" className="text-indigo-600 hover:text-indigo-700 font-medium underline">
              Cookie Policy
            </Link>.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto flex-shrink-0">
          <button
            onClick={handleDecline}
            className="px-5 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-sm font-medium rounded-lg transition-colors border border-zinc-300"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}