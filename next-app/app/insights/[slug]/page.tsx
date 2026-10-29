import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { insightsArticles } from '@/content/insights/articles';
import styles from '../insights.module.css';

export const dynamicParams = false;

export function generateStaticParams() {
  return insightsArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = insightsArticles.find(item => item.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
    keywords: [...article.keywords],
    openGraph: { type: 'article', title: article.title, description: article.summary, images: [article.image] },
  };
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insightsArticles.find(item => item.slug === slug);
  if (!article) notFound();
  const structuredArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.summary,
    image: `https://www.pulglobal.com${article.image}`,
    dateModified: '2026-10-29',
    ...(article.slug === 'ai-for-small-business' ? { datePublished: '2026-10-29' } : {}),
    author: { '@type': 'Organization', name: 'PUL Global Partners LLC' },
    publisher: { '@type': 'Organization', name: 'PUL Global Partners LLC', logo: { '@type': 'ImageObject', url: 'https://www.pulglobal.com/assets/images/pul-global-partners-horizontal.png' } },
    mainEntityOfPage: `https://www.pulglobal.com/insights/${article.slug}/`,
  };

  return <SiteLayout current="Insights"><main id="main" className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredArticle).replace(/</g, '\\u003c') }} />
    <div className={styles.articleHero}><div className="shell"><Link className={styles.backLink} href="/insights/"><ArrowLeft aria-hidden="true" /> Back to Insights</Link><p className={styles.category}>{article.categories.join(' · ')}</p><h1>{article.title}</h1><p className={styles.articleByline}>PUL Global Partners <span aria-hidden="true">·</span> Last reviewed <time dateTime="2026-10-29">{article.reviewedOn}</time></p></div></div>
    <article className={styles.articleBody}>
      <div className={styles.articleHeroFrame}><Image className={styles.articleHeroImage} src={article.image} alt={article.imageAlt} width={article.imageWidth} height={article.imageHeight} priority sizes="(max-width: 900px) 100vw, 1100px" /></div>
      <p className={styles.articleIntro}>{article.summary}</p>
      {article.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</section>)}
      {article.faqs.length > 0 && <section className={styles.faqs}><h2>Frequently asked questions</h2>{article.faqs.map(faq => <div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</section>}
      <section className={styles.sources}><h2>Sources and further reading</h2><ul>{article.sources.map(source => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul></section>
      {article.relatedLinks.length > 0 && <section className={styles.relatedLinks}><h2>Related PUL services</h2><ul>{article.relatedLinks.map(item => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></section>}
      <div className={styles.articleEnd}><p>Explore how PUL Global Partners can support a requirement shaped around your operating context.</p><Link className="button" href="/schedule/">Request a Strategy Call<ArrowRight aria-hidden="true" /></Link></div>
    </article>
  </main></SiteLayout>;
}
