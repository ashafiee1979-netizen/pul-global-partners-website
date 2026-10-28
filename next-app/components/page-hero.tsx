import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';

export function PageHero({ eyebrow, title, description, current, image, imageAlt, children }: { eyebrow: string; title: ReactNode; description: string; current: string; image: string; imageAlt: string; children?: ReactNode }) {
  return (
    <section className="page-hero">
      <Image className="page-hero-image" src={image} alt={imageAlt} width={1440} height={810} priority sizes="100vw" />
      <div className="page-hero-shade" aria-hidden="true" />
      <div className="shell page-hero-grid">
        <div><p className="eyebrow light">{eyebrow}</p><h1 className="animated-headline">{title}</h1></div>
        <div><p>{description}</p>{children ?? <div className="button-row"><Link className="button" href="/contact/">Discuss a requirement</Link><Link className="button button-ghost" href="/capability/">Capability Statement</Link></div>}</div>
      </div>
    </section>
  );
}
