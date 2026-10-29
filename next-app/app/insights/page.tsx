import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteLayout } from '@/components/site-layout';
import { InsightsBrowser } from './insights-browser';
import styles from './insights.module.css';

export const metadata: Metadata = {
  title: 'Insights | Federal Contracting, Technology & Delivery',
  description: 'Perspectives from PUL Global Partners on government contracting, federal compliance, technology, business growth, and implementation.',
};

export default function InsightsPage() {
  return <SiteLayout current="Insights"><main id="main" className={styles.page}>
    <section className={styles.hero}>
      <Image className={styles.heroImage} src="/assets/images/company-profile-global-team.webp" alt="PUL Global Partners team collaborating across disciplines" width={1600} height={900} priority sizes="100vw" />
      <div className={styles.heroShade} />
      <div className={`shell ${styles.heroContent}`}><p className="eyebrow light">Perspectives from PUL Global Partners</p><h1>Insights for complex work.</h1><p className={styles.heroLead}>Practical perspectives on federal contracting, compliance, technology, business growth, and the systems that turn strategy into delivery.</p></div>
    </section>
    <InsightsBrowser />
  </main></SiteLayout>;
}
