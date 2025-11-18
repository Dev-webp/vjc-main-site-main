import { allNews as staticNews } from "../news-data";
import slugify from "../slugify";
import NewsArticleClient from "./NewsArticleClient";

// 🛑 IMPORTANT: Assuming you have a file like this to connect to the database
// We import the database logic directly for use in server functions (generateStaticParams, generateMetadata)
import db from "../../../lib/db"; 


// ✅ Helper: Read all dynamic news from the database (Synchronous server read)
// This replaces the old getDynamicNews that read a local JSON file.
function getDynamicNewsFromDB() {
  try {
    // The database read operation should be synchronous for use in Next.js Server functions
    const news = db.prepare("SELECT * FROM news ORDER BY id DESC").all();
    return news;
  } catch (err) {
    console.error("Error reading news from DB for static generation:", err);
    return [];
  }
}

// ✅ Merge static + dynamic
function getAllNews() {
  // Use the new DB-reading helper
  const dynamicNews = getDynamicNewsFromDB();
  
  // Dynamic news appears first, followed by static news, maintaining the merge logic.
  return [...dynamicNews, ...staticNews]; 
}

// ----------------------------------------------------------------------------------
// ✅ Generate dynamic static paths
export function generateStaticParams() {
  const allNews = getAllNews();
  return allNews.map((item) => ({ slug: slugify(item.title) }));
}

// ✅ Dynamic meta based on slug/title
export function generateMetadata({ params }) {
  const { slug } = params;
  const allNews = getAllNews();
  const story = allNews.find((n) => slugify(n.title) === slug);

  if (!story) {
    return {
      title: "Latest Visa & Immigration News | VJC Overseas",
      description:
        "Stay updated with global immigration and visa policy changes for Indian aspirants.",
    };
  }

  return {
    title: `${story.title} | VJC Overseas`,
    description:
      story.summary || // Use summary or description if title exists
      "Get the latest updates on visa changes, migration routes, and PR policies impacting Indian migrants.",
  };
}

// ✅ Page component
export default function NewsArticlePage({ params }) {
  const { slug } = params;
  const allNews = getAllNews();

  // Find the current story, fallback to the first story if not found
  const story = allNews.find((n) => slugify(n.title) === slug) || allNews[0]; 
  
  // Filter out the current story for the "Other Stories" section
  const otherStories = allNews.filter((n) => slugify(n.title) !== slug);

  return <NewsArticleClient story={story} otherStories={otherStories} />;
}