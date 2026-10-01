import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteLayout } from '@/components/site-layout';
import { posts } from '@/content/insights/posts';

type RouteParams = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  return post ? { title: post.cardTitle, description: post.description, openGraph: { title: post.cardTitle, description: post.description, images: [post.image] } } : {};
}

export default async function InsightArticle({ params }: RouteParams) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  const Article = post.Body;

  return <SiteLayout current="Insights"><main id="main">
    <article className="insight-article"><header className="page-hero"><div className="shell page-hero-grid"><div><p className="eyebrow light">{post.category}</p><h1>{post.title}</h1></div><div><p>{post.description}</p><Link className="text-link light-link" href="/insights/"><ArrowLeft />All perspectives</Link></div><figure className="page-hero-visual"><Image src={post.image} alt={post.imageAlt} width={720} height={520} priority /></figure></div></header>
      <div className="shell insight-article-layout"><div className="insight-article-copy"><Article /></div><aside><p className="eyebrow">Related capability</p><h2>Turn perspective into a practical next step.</h2><p>Explore the PUL capabilities connected to this topic.</p><Link className="text-link" href="/solutions/">Explore our solutions<ArrowUpRight /></Link></aside></div>
    </article>
    <section className="contact"><div className="shell contact-inner"><div><p className="eyebrow light">Continue the conversation</p><h2>Bring us the operating challenge.</h2></div><div><p>Share your objective, context, and timeframe. We’ll identify a focused way to engage.</p><Link className="button button-light" href="/contact/">Start a conversation</Link></div></div></section>
  </main></SiteLayout>;
}
