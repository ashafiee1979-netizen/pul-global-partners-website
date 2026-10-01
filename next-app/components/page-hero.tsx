import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';

export function PageHero({ eyebrow, title, description, current, image, imageAlt, children }: { eyebrow: string; title: ReactNode; description: string; current: string; image: string; imageAlt: string; children?: ReactNode }) {
  return (
    <section className="page-hero"><div className="shell page-hero-grid">
      <div><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1></div>
      <div><p>{description}</p>{children ?? <div className="button-row"><Link className="button" href="/contact/">Discuss a requirement</Link><Link className="button button-ghost" href="/capability/">Capability Statement</Link></div>}</div>
      <figure className="page-hero-visual"><Image src={image} alt={imageAlt} width={720} height={520} priority /></figure>
    </div></section>
  );
}
