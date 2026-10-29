import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteLayout } from '@/components/site-layout';
import { InsightsBrowser } from './insights-browser';
import styles from './insights.module.css';

export const metadata: Metadata = {
  title: 'Business AI, Federal Contracting & Technology Insights',
  description: 'Regular perspectives on emerging developments across artificial intelligence, federal acquisition, program delivery, supply chains, workforce capacity, and secure technology, with practical context for business and mission teams.',
  keywords: ['AI for small business', 'federal contracting insights', 'government contractor compliance', 'business data analytics', 'e-commerce logistics', 'FedRAMP cloud modernization'],
};

export default function InsightsPage() {
  return <SiteLayout current="Insights"><main id="main" className={styles.page}>
    <section className="interior-hero">
      <Image className="interior-hero-image" src="/assets/images/company-profile-global-team.webp" alt="PUL Global Partners team collaborating across disciplines" width={1440} height={810} priority sizes="100vw" />
      <div className="interior-hero-shade" />
      <div className="interior-hero-content"><p className="eyebrow light">Perspectives from PUL Global Partners</p><h1 className="animated-headline"><span>Insights for</span><span>complex work.</span></h1><p className="heroLead">Regular updates on developments across the sectors we serve, connecting changes in policy, technology, markets, and delivery to practical considerations for business and mission teams.</p></div>
    </section>
    <InsightsBrowser />
  </main></SiteLayout>;
}
