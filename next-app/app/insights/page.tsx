import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import { SiteLayout } from '@/components/site-layout';
import { PageHero } from '@/components/page-hero';
import { posts } from '@/content/insights/posts';

export const metadata: Metadata = { title: 'Insights', description: 'Practical perspectives on responsible AI adoption, implementation discipline, and locally coordinated mission delivery.' };

export default function InsightsPage() {
  return <SiteLayout current="Insights"><main id="main">
    <PageHero current="Insights" eyebrow="PUL perspectives" title={<>Insights for<br />mission delivery.</>} description="Ideas for leaders who need strategy to hold up in real operating conditions: responsible technology, disciplined implementation, and coordinated local execution." image="/assets/images/platform-technology-v1.webp" imageAlt="Technology professionals reviewing an enterprise digital workflow"><div className="button-row"><a className="button" href="#perspectives">Explore perspectives<ArrowRight /></a><Link className="button button-ghost" href="/contact/">Discuss a challenge</Link></div></PageHero>
    <section className="section insights-intro" id="perspectives"><div className="shell"><div className="section-heading"><div><p className="eyebrow">From the field of implementation</p><h2>Practical thinking.<br /><span>Clear next steps.</span></h2></div><p>These original PUL perspectives translate operating experience into useful prompts for program and business leaders.</p></div>
      {posts.map((post, index) => <article className={`insight-feature${index % 2 ? ' reverse' : ''}`} key={post.slug}><div className="insight-feature-image"><Image src={post.image} alt={post.imageAlt} width={1200} height={800} loading="lazy" /><span>{post.category}</span></div><div className="insight-feature-copy"><p className="eyebrow">{post.category}</p><h2>{post.title}</h2><p>{post.description}</p><Link className="text-link" href={`/insights/${post.slug}/`}>Read perspective<ArrowUpRight /></Link></div></article>)}
    </div></section>
    <section className="contact"><div className="shell contact-inner"><div><p className="eyebrow light">A question worth working through?</p><h2>Let’s connect the objective to execution.</h2></div><div><p>Share the operating challenge and the result you need. We’ll help identify a practical next step.</p><Link className="button button-light" href="/schedule/">Request a Strategy Call<ArrowRight /></Link></div></div></section>
  </main></SiteLayout>;
}
