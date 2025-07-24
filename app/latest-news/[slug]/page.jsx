import { allNews } from '../news-data';
import slugify from '../slugify';
import NewsArticleClient from './NewsArticleClient';

// ✅ Generate dynamic static paths
export function generateStaticParams() {
  return allNews.map(item => ({ slug: slugify(item.title) }));
}

// ✅ Dynamic meta based on slug/title
export function generateMetadata({ params }) {
  const { slug } = params;
  const story = allNews.find(n => slugify(n.title) === slug);

  if (!story) {
    return {
      title: 'Latest Visa & Immigration News | VJC Overseas',
      description: 'Stay updated with global immigration and visa policy changes for Indian aspirants.'
    };
  }

  return {
    title: `${story.title} | VJC Overseas`,
    description: story.description || 'Get the latest updates on visa changes, migration routes, and PR policies impacting Indian migrants.'
  };
}

// ✅ Page component
export default function NewsArticlePage({ params }) {
  const { slug } = params;
  const story = allNews.find(n => slugify(n.title) === slug) || allNews[0];
  const otherStories = allNews.filter(n => slugify(n.title) !== slug);

  return (
    <NewsArticleClient story={story} otherStories={otherStories} />
  );
}
