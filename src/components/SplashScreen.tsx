'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setVisible(true);
    setFading(false);

    const timers = [
      setTimeout(() => setFading(true), 850),
      setTimeout(() => setVisible(false), 1720)
    ];

    return () => timers.forEach(clearTimeout);
  }, [pathName]);

  // First Loading
  useEffect(() => {
    const timers = [
      setTimeout(() => setFading(true), 1000),
      setTimeout(() => setVisible(false), 1900)
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  if (!visible) return null;

  return (
    <div className={`splash-screen ${fading ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <div className="logo-spin">
          <span className="splash-logo">Skelvric</span>
        </div>
        <div className="splash-spinner" />
      </div>
    </div>
  );
}
