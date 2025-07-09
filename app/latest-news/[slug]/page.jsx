import { allNews } from '../news-data';
import slugify from '../slugify';
import NewsArticleClient from './NewsArticleClient';

export function generateStaticParams() {
  return allNews.map(item => ({ slug: slugify(item.title) }));
}

export default function NewsArticlePage({ params }) {
  const { slug } = params;
  const story = allNews.find(n => slugify(n.title) === slug) || allNews[0];
  const otherStories = allNews.filter(n => slugify(n.title) !== slug);


  return (
    <NewsArticleClient story={story} otherStories={otherStories} />
  );
}