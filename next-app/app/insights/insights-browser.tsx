'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { legacyArticles } from '@/content/insights/legacy-articles';
import styles from './insights.module.css';

const topics = [
  'All', 'Artificial Intelligence', 'Business Growth', 'Cloud Migration', 'Cybersecurity',
  'Digital Marketing', 'Digital Solutions', 'Digital Transformation', 'Federal Compliance',
  'Federal Technology', 'Government Contracting', 'IT Solutions', 'SEO/GEO',
  'U.S. Small Business', 'Web Design', 'Web Development',
];

export function InsightsBrowser() {
  const [activeTopic, setActiveTopic] = useState('All');
  const visibleArticles = useMemo(() => activeTopic === 'All'
    ? legacyArticles
    : legacyArticles.filter(article => (article.categories as readonly string[]).includes(activeTopic)), [activeTopic]);

  return <>
    <section className={styles.topics} aria-labelledby="topics-heading">
      <div className="shell">
        <div className={styles.sectionHeading}><div><p className="eyebrow section-kicker">Browse by topic</p><h2 id="topics-heading">Ideas for <span>informed action.</span></h2></div><p>Explore perspectives on federal readiness, technology, compliance, and delivery.</p></div>
        <div className={styles.topicList} aria-label="Filter articles by topic">
          {topics.map(topic => <button key={topic} type="button" className={`${styles.topicButton}${activeTopic === topic ? ` ${styles.activeTopic}` : ''}`} aria-pressed={activeTopic === topic} onClick={() => setActiveTopic(topic)}>{topic}</button>)}
        </div>
      </div>
    </section>
    <section className={styles.articles} aria-labelledby="articles-heading">
      <div className="shell">
        <div className={styles.articleHeading}><div><p className="eyebrow section-kicker">Perspectives</p><h2 id="articles-heading">Insights for mission delivery</h2></div><p>{visibleArticles.length} {visibleArticles.length === 1 ? 'article' : 'articles'}</p></div>
        {visibleArticles.length ? <div className={styles.articleGrid}>{visibleArticles.map((article, index) => <article className={`${styles.articleCard}${index === 0 && activeTopic === 'All' ? ` ${styles.featuredCard}` : ''}`} key={article.slug}>
          <Link className={styles.articleImage} href={`/insights/${article.slug}/`} aria-label={`Read ${article.title}`}><Image src={article.image} alt={article.imageAlt} width={960} height={640} sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 40vw" /></Link>
          <div className={styles.articleCopy}><p className={styles.category}>{article.categories.slice(0, 2).join(' · ')}</p><h3><Link href={`/insights/${article.slug}/`}>{article.title}</Link></h3><p className={styles.description}>{article.summary}</p><p className={styles.articleMeta}>Last reviewed <time dateTime="2026-10-29">{article.reviewedOn}</time></p><Link className="text-link" href={`/insights/${article.slug}/`}>Read article <ArrowRight aria-hidden="true" /></Link></div>
        </article>)}</div> : <p className={styles.emptyState}>No articles are currently filed under {activeTopic}. Choose another topic to continue browsing.</p>}
      </div>
    </section>
    <section className={styles.cta}><div className="shell"><div><p className="eyebrow light">Ready to discuss an opportunity?</p><h2>Bring us the requirement.<br />We’ll help shape the next step.</h2><p>Explore our solutions or schedule a focused strategy conversation with our team.</p></div><div className={styles.ctaActions}><Link className="button button-light" href="/schedule/">Request a Strategy Call<ArrowRight aria-hidden="true" /></Link><Link className="button button-ghost" href="/solutions/">Explore Our Solutions<ArrowRight aria-hidden="true" /></Link></div></div></section>
  </>;
}
