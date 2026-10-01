import type { ReactNode } from 'react';
import { SiteNav } from './site-nav';
import { SiteFooter } from './site-footer';

export function SiteLayout({ children, current }: { children: ReactNode; current?: string }) {
  return <><a className="skip-link" href="#main">Skip to content</a><SiteNav current={current} />{children}<SiteFooter /></>;
}
