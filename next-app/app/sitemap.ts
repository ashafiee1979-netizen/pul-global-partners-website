import type { MetadataRoute } from 'next';
import { insightsArticles } from '@/content/insights/articles';

import { priorityServices, servicePath } from '@/content/priority-services';
const siteUrl = 'https://www.pulglobal.com';
const pagePaths = [
  '/',
  '/about/',
  '/capability/',
  '/solutions/',


  '/insights/',
  '/contact/',
  '/schedule/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const articlePaths = insightsArticles.map(({ slug }) => `/insights/${slug}/`);
  return [...pagePaths, ...priorityServices.map(({ slug }) => servicePath(slug)), ...articlePaths].map(path => ({ url: new URL(path, siteUrl).href }));
}
