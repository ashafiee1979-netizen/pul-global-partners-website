import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteLayout } from '@/components/site-layout';
import { priorityServices, servicePath } from '@/content/priority-services';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return priorityServices.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = priorityServices.find(item => item.slug === slug);
  if (!service) notFound();
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: servicePath(slug) },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = priorityServices.find(item => item.slug === slug);
  if (!service) notFound();

  return <SiteLayout current="Solutions"><main id="main">
    <section className="section"><div className="shell">
      <Link className="text-link" href="/solutions/">All solutions</Link>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <p>{service.audience}</p>
      <Link className="button" href="/schedule/">Request a Strategy Call</Link>
    </div></section>
    <section className="section"><div className="shell">
      <h2>How PUL can help</h2>
      <div className="fit-grid">
        {service.deliverables.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}
      </div>
      <h2>Explore related resources</h2>
      <ul>
        <li><Link href={service.related[0]}>{service.related[1]}</Link></li>
        <li><Link href={'/solutions/#' + service.section}>See the related capabilities</Link></li>
        <li><Link href="/capability/">View the Capability Statement</Link></li>
        {service.slug !== 'government-contracting-teaming-virginia' && <li><Link href="/about/#projects">Explore PUL’s institutional project experience</Link></li>}
      </ul>
    </div></section>
  </main></SiteLayout>;
}
