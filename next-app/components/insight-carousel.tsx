'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Pause, Play, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { insightsArticles } from '@/content/insights/articles';
import styles from '@/app/home.module.css';

const articles = insightsArticles.slice(0, 6);

function InsightCards({ duplicate = false }: { duplicate?: boolean }) {
  return <ul className={`${styles.insightGroup}${duplicate ? ` ${styles.insightGroupDuplicate}` : ''}`} aria-hidden={duplicate || undefined} inert={duplicate || undefined}>
    {articles.map(article => <li className={styles.insightItem} key={article.slug}>
      <Link className={styles.insightCard} href={`/insights/${article.slug}/`} tabIndex={duplicate ? -1 : undefined}>
        <span className={styles.insightImage}><Image src={article.image} alt={duplicate ? '' : article.imageAlt} aria-hidden={duplicate || undefined} width={article.imageWidth} height={article.imageHeight} sizes="(max-width: 700px) 82vw, (max-width: 1100px) 45vw, 360px" /></span>
        <span className={styles.insightCardBody}><span className={styles.insightCategory}>{article.categories[0]}</span><span className={styles.insightTitle}>{article.title}</span><span className={styles.insightSummary}>{article.summary}</span><span className={styles.insightRead}>Read perspective<ArrowRight aria-hidden="true" /></span></span>
      </Link>
    </li>)}
  </ul>;
}

export function InsightCarousel() {
  const [paused, setPaused] = useState(false);

  return <section className={styles.insightSection} aria-labelledby="home-insights-heading">
    <div className={`shell ${styles.insightShell}`}>
      <div className={styles.insightHeader}>
        <div><p className="eyebrow section-kicker">PUL Insights</p><h2 id="home-insights-heading">Perspectives for <span>informed action.</span></h2></div>
        <div className={styles.insightControls}>
          <button className={styles.insightPause} type="button" aria-label={paused ? 'Play insight cards' : 'Pause insight cards'} aria-pressed={paused} title={paused ? 'Play insight cards' : 'Pause insight cards'} onClick={() => setPaused(value => !value)}>
            {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
          </button>
          <Link className={styles.insightAll} href="/insights/">Explore all insights<ArrowRight aria-hidden="true" /></Link>
        </div>
      </div>
      <p className={styles.insightLead}>Practical perspectives on technology, business growth, federal readiness, and the systems that help organizations deliver.</p>
      <div className={styles.insightViewport}>
        <div className={`${styles.insightTrack}${paused ? ` ${styles.paused}` : ''}`}>
          <InsightCards />
          <InsightCards duplicate />
        </div>
      </div>
    </div>
  </section>;
}
