'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { insightsArticles } from '@/content/insights/articles';
import styles from './insights.module.css';

const topics = [
  { label: 'All', slugs: null },
  { label: 'Artificial Intelligence', slugs: ['ai-for-small-business', 'data-analytics-business-growth'] },
  { label: 'Business Growth', slugs: ['ai-for-small-business', 'data-analytics-business-growth'] },
  { label: 'Cloud Migration', slugs: ['cloud-migration-federal-agencies'] },
  { label: 'Cybersecurity', slugs: ['federal-compliance-challenges', 'cloud-migration-federal-agencies', 'federal-technology-readiness', 'it-solutions-risk-management'] },
  { label: 'Digital Marketing', slugs: ['digital-marketing-trust-growth', 'search-visibility-seo-geo'] },
  { label: 'Digital Solutions', slugs: ['digital-solutions-integration', 'it-solutions-risk-management', 'accessible-web-design-wcag-22', 'web-development-performance-core-vitals'] },
  { label: 'Digital Transformation', slugs: ['the-e-commerce-effect', 'data-analytics-business-growth', 'digital-solutions-integration'] },
  { label: 'Federal Compliance', slugs: ['federal-compliance-challenges', 'federal-contract-strategies'] },
  { label: 'Federal Technology', slugs: ['federal-technology-readiness', 'cloud-migration-federal-agencies'] },
  { label: 'Government Contracting', slugs: ['federal-compliance-challenges', 'federal-contract-strategies'] },
  { label: 'IT Solutions', slugs: ['it-solutions-risk-management', 'digital-solutions-integration'] },
  { label: 'SEO/GEO', slugs: ['search-visibility-seo-geo'] },
  { label: 'U.S. Small Business', slugs: ['ai-for-small-business', 'federal-contract-strategies', 'digital-marketing-trust-growth'] },
  { label: 'Web Design', slugs: ['accessible-web-design-wcag-22'] },
  { label: 'Web Development', slugs: ['web-development-performance-core-vitals'] },
];

export function InsightsBrowser() {
  const [activeTopic, setActiveTopic] = useState('All');
  const selectedTopic = topics.find(topic => topic.label === activeTopic) ?? topics[0];
  const visibleArticles = useMemo(() => selectedTopic.slugs === null
    ? insightsArticles
    : insightsArticles.filter(article => selectedTopic.slugs!.includes(article.slug)), [selectedTopic]);

  return <>
    <section className={styles.topics} aria-labelledby="topics-heading">
      <div className="shell">
        <div className={styles.sectionHeading}><div><p className="eyebrow section-kicker">Browse by topic</p><h2 id="topics-heading">Ideas for <span>informed action.</span></h2></div><p>We publish regular updates on new developments across the sectors we serve, connecting changes in policy, technology, markets, and delivery to practical considerations for business and mission teams.</p></div>
        <div className={styles.topicList} aria-label="Filter articles by topic">
          {topics.map(topic => <button key={topic.label} type="button" className={`${styles.topicButton}${activeTopic === topic.label ? ` ${styles.activeTopic}` : ''}`} aria-pressed={activeTopic === topic.label} onClick={() => setActiveTopic(topic.label)}>{topic.label}</button>)}
        </div>
      </div>
    </section>
    <section className={styles.articles} aria-labelledby="articles-heading">
      <div className="shell">
        <div className={styles.articleHeading}><div><p className="eyebrow section-kicker">{activeTopic}</p><h2 id="articles-heading">Current perspectives</h2></div><p>{visibleArticles.length} {visibleArticles.length === 1 ? 'article' : 'articles'}</p></div>
        {visibleArticles.length ? <div className={styles.articleGrid}>{visibleArticles.map(article => <article className={styles.articleCard} key={article.slug}>
          <Link className={styles.articleImage} href={`/insights/${article.slug}/`} aria-label={`Read ${article.title}`}><Image className={styles.articleImageForeground} src={article.image} alt={article.imageAlt} fill sizes="(max-width: 760px) 100vw, 50vw" /></Link>
          <div className={styles.articleCopy}><p className={styles.category}>{article.categories.slice(0, 2).join(' · ')}</p><h3><Link href={`/insights/${article.slug}/`}>{article.title}</Link></h3><p className={styles.description}>{article.summary}</p><p className={styles.articleMeta}>Last reviewed <time dateTime="2026-10-29">{article.reviewedOn}</time></p><Link className="text-link" href={`/insights/${article.slug}/`}>Read article <ArrowRight aria-hidden="true" /></Link></div>
        </article>)}</div> : <p className={styles.emptyState}>No articles are currently filed under {activeTopic}. Choose another topic to continue browsing.</p>}
      </div>
    </section>
    <section className={styles.cta}><div className="shell"><div><p className="eyebrow light">Ready to discuss an opportunity?</p><h2>Bring us the requirement.<br />We’ll help shape the next step.</h2><p>Explore our solutions or schedule a focused strategy conversation with our team.</p></div><div className={styles.ctaActions}><Link className="button button-light" href="/schedule/">Request a Strategy Call<ArrowRight aria-hidden="true" /></Link><Link className="button button-ghost" href="/solutions/">Explore Our Solutions<ArrowRight aria-hidden="true" /></Link></div></div></section>
  </>;
}
