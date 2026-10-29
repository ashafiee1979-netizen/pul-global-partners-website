'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLayoutEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MessageSquareText, FileDown, Menu, X } from 'lucide-react';

const links = [
  ['Home', '/'], ['Solutions', '/solutions/'], ['Who We Are', '/about/'],
  ['Insights', '/insights/'], ['Partner With Us', '/contact/'],
] as const;

export function SiteNav({ current }: { current?: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="shell nav-row">
        <Link className="brand" href="/" aria-label="PUL Global Partners home">
          <Image src="/assets/images/pul-global-partners-horizontal.png" alt="PUL Global Partners" width={2835} height={564} priority />
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav id="primary-nav" className={`primary-nav${open ? ' is-open' : ''}`} aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href} scroll={false} aria-current={current === label ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
        <div className="nav-actions">
          <Link className="button button-small nav-call" href="/schedule/" aria-current={current === 'Schedule' ? 'page' : undefined}><MessageSquareText aria-hidden="true" />Request a Call</Link>
          <Link className="button button-small button-outline nav-action" href="/capability/"><FileDown aria-hidden="true" />Capability Statement</Link>
        </div>
      </div>
    </header>
  );
}
