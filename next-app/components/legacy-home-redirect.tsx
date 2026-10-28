'use client';

import { useEffect } from 'react';

export function LegacyHomeRedirect() {
  useEffect(() => {
    window.location.replace('/');
  }, []);

  return <main className="legacy-redirect"><p>This section is no longer available. <a href="/">Return to Home</a>.</p></main>;
}
