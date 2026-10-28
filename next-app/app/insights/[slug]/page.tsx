import { LegacyHomeRedirect } from '@/components/legacy-home-redirect';
import { posts } from '@/content/insights/posts';

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export default function LegacyInsightArticleRedirect() {
  return <LegacyHomeRedirect />;
}
