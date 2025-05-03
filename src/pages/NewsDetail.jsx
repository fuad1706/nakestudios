import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { newsData } from "../lib/newsData";
import NewsSidebar from "../components/NewsSidebar";

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);

  useEffect(() => {
    if (id) {
      // Find the news article by ID
      const newsId = parseInt(id);
      const foundNews = newsData.find((item) => item.id === newsId);

      if (foundNews) {
        setNews(foundNews);

        // Get related news (excluding current news)
        const related = newsData
          .filter((item) => item.id !== newsId)
          .sort(() => 0.5 - Math.random()) // Randomly shuffle
          .slice(0, 2); // Get top 2

        setRelatedNews(related);

        // Scroll to top when loading a new article
        window.scrollTo(0, 0);
      } else {
        // If news not found, redirect to news list
        navigate("/news");
      }
    }
  }, [id, navigate]);

  if (!news) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 lg:px-20 md:px-10">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center mb-8 text-gray-600 hover:text-yellow-500 transition-colors"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to News
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content - 2/3 width on large screens */}
        <div className="lg:col-span-2">
          {/* News header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-medium flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {news.date}
                </span>
                <span className="ml-3 flex items-center">
                  <User size={14} className="mr-1" />
                  By {news.author}
                </span>
              </div>

              {/* Share button */}
              <button className="flex items-center text-gray-500 hover:text-yellow-500 transition-colors">
                <Share2 size={18} />
                <span className="ml-2 text-sm hidden md:inline">Share</span>
              </button>
            </div>
          </div>

          {/* Feature image */}
          <div className="mb-8">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* News content */}
          <div className="prose max-w-none mb-16">
            <p className="text-lg mb-4">{news.excerpt}</p>

            {/* Display the news content - split paragraphs on line breaks */}
            {news.content
              .split("\n")
              .filter((para) => para.trim() !== "")
              .map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph.trim()}
                </p>
              ))}
          </div>

          {/* Related news */}
          {relatedNews.length > 0 && (
            <div className="mb-8 lg:mb-0">
              <h2 className="text-2xl font-bold mb-6">Related News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedNews.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
                    onClick={() => navigate(`/news/${item.id}`)}
                  >
                    <div className="relative overflow-hidden group">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-2 hover:text-yellow-500 transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-xs text-gray-500">
                        {item.date} • {item.author}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar - 1/3 width on large screens */}
        <div className="lg:col-span-1">
          <NewsSidebar />
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
