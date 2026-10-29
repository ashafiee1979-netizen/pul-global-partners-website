import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { legacyArticles } from '@/content/insights/legacy-articles';
import styles from '../insights.module.css';

export const dynamicParams = false;

export function generateStaticParams() {
  return legacyArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = legacyArticles.find(item => item.slug === slug);
  return article ? { title: article.title, description: article.summary } : {};
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = legacyArticles.find(item => item.slug === slug);
  if (!article) notFound();

  return <SiteLayout current="Insights"><main id="main" className={styles.page}>
    <div className={styles.articleHero}><div className="shell"><Link className={styles.backLink} href="/insights/"><ArrowLeft aria-hidden="true" /> Back to Insights</Link><p className={styles.category}>{article.categories.join(' · ')}</p><h1>{article.title}</h1><p className={styles.articleByline}>PUL Global Partners <span aria-hidden="true">·</span> Last reviewed <time dateTime="2026-10-29">{article.reviewedOn}</time></p></div></div>
    <article className={styles.articleBody}>
      <Image className={styles.articleHeroImage} src={article.image} alt={article.imageAlt} width={1400} height={800} priority sizes="(max-width: 900px) 100vw, 1100px" />
      <p className={styles.articleIntro}>{article.summary}</p>
      {article.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</section>)}
      <section className={styles.sources}><h2>Sources and further reading</h2><ul>{article.sources.map(source => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul></section>
      <div className={styles.articleEnd}><p>Explore how PUL Global Partners can support a requirement shaped around your operating context.</p><Link className="button" href="/schedule/">Request a Strategy Call<ArrowRight aria-hidden="true" /></Link></div>
    </article>
  </main></SiteLayout>;
}
