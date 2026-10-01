'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { CalendarDays, FileDown, Menu, X } from 'lucide-react';

const links = [
  ['Home', '/'], ['Solutions', '/solutions/'], ['About Us', '/about/'],
  ['Projects', '/projects/'], ['Insights', '/insights/'], ['Contact', '/contact/'],
] as const;

export function SiteNav({ current }: { current?: string }) {
  const [open, setOpen] = useState(false);

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
          {links.map(([label, href]) => <Link key={href} href={href} aria-current={current === label ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
        <div className="nav-actions">
          <Link className="button button-small nav-call" href="/schedule/"><CalendarDays aria-hidden="true" />Schedule Call</Link>
          <Link className="button button-small button-outline nav-action" href="/capability/"><FileDown aria-hidden="true" />Capability Statement</Link>
        </div>
      </div>
    </header>
  );
}
