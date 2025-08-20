import fs from "fs";
import path from "path";
import { allNews as staticNews } from "../news-data";
import slugify from "../slugify";
import NewsArticleClient from "./NewsArticleClient";

// ✅ Helper: read dynamic news-data.json
function getDynamicNews() {
  try {
    const filePath = path.join(process.cwd(), "news-data.json");
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(fileData);
    }
  } catch (err) {
    console.error("Error reading news-data.json:", err);
  }
  return [];
}

// ✅ Merge static + dynamic
export function getAllNews() {
  const dynamicNews = getDynamicNews();
  return [...dynamicNews, ...staticNews];
}

// ✅ Generate dynamic static paths (pre-render slugs)
export function generateStaticParams() {
  const allNews = getAllNews();
  return allNews.map((item) => ({
    slug: slugify(item.title),
  }));
}

// ✅ Dynamic meta based on slug/title
export async function generateMetadata({ params }) {
  const { slug } = await params; // 👈 FIX: await params

  if (!slug) {
    return {
      title: "Visa & Immigration News | VJC Overseas",
      description:
        "Stay updated with global immigration and visa policy changes for Indian aspirants.",
    };
  }

  const allNews = getAllNews();
  const story = allNews.find((n) => slugify(n.title) === slug);

  if (!story) {
    return {
      title: "Visa & Immigration News | VJC Overseas",
      description:
        "Stay updated with global immigration and visa policy changes for Indian aspirants.",
    };
  }

  return {
    title: `${story.title} | VJC Overseas`,
    description:
      story.summary ||
      story.description ||
      "Get the latest updates on visa changes, migration routes, and PR policies impacting Indian migrants.",
    openGraph: {
      title: `${story.title} | VJC Overseas`,
      description: story.summary || story.description || "",
      images: story.image ? [{ url: story.image }] : [],
    },
  };
}

// ✅ Page component
export default async function NewsArticlePage({ params }) {
  const { slug } = await params; // 👈 FIX: await params
  const allNews = getAllNews();

  if (!slug) {
    return <div className="p-6">❌ Invalid news slug.</div>;
  }

  const story = allNews.find((n) => slugify(n.title) === slug);
  const otherStories = allNews.filter((n) => slugify(n.title) !== slug);

  if (!story) {
    return <div className="p-6">❌ News article not found.</div>;
  }

  return <NewsArticleClient story={story} otherStories={otherStories} />;
}
