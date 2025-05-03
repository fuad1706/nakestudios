import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import { newsData } from "../lib/newsData";
import NewsCard from "../components/NewsCard";

const NewsArchives = () => {
  const { year, month } = useParams();
  const navigate = useNavigate();
  const [filteredNews, setFilteredNews] = useState([]);
  const [archiveDate, setArchiveDate] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [availableArchives, setAvailableArchives] = useState([]);

  // Function to format date for display
  const formatArchiveDate = (year, month) => {
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  // Function to parse date from news item
  const parseNewsDate = (dateString) => {
    // Expected format: "15 Dec, 2024"
    const parts = dateString.split(" ");
    const day = parts[0];
    const month = parts[1].replace(",", "");
    const year = parts[2];

    // Convert month name to month number
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthIndex = monthNames.findIndex((m) => m === month);

    return {
      day: parseInt(day),
      month: monthIndex + 1, // Convert to 1-based index
      year: parseInt(year),
      date: new Date(parseInt(year), monthIndex, parseInt(day)),
    };
  };

  // Generate all available archives from news data
  useEffect(() => {
    const archives = {};

    newsData.forEach((news) => {
      const { year, month } = parseNewsDate(news.date);
      const key = `${year}-${month}`;

      if (!archives[key]) {
        archives[key] = {
          year,
          month,
          count: 1,
          displayDate: new Date(year, month - 1).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          }),
        };
      } else {
        archives[key].count++;
      }
    });

    // Convert to array and sort by date (newest first)
    const archiveArray = Object.values(archives).sort((a, b) => {
      return new Date(b.year, b.month - 1) - new Date(a.year, a.month - 1);
    });

    setAvailableArchives(archiveArray);
  }, []);

  // Filter news by year and month
  useEffect(() => {
    if (year && month) {
      const filtered = newsData.filter((news) => {
        const newsDate = parseNewsDate(news.date);
        return (
          newsDate.year === parseInt(year) && newsDate.month === parseInt(month)
        );
      });

      setFilteredNews(filtered);
      setArchiveDate(formatArchiveDate(year, month));

      // Set visible items with slight delay for animation
      setTimeout(() => {
        setVisibleItems(filtered.map((item) => item.id));
      }, 100);
    }
  }, [year, month]);

  return (
    <div className="container mx-auto px-4 py-16 lg:px-20 md:px-10">
      {/* Header with back button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <button
            onClick={() => navigate("/news")}
            className="flex items-center mb-4 md:mb-0 text-gray-600 hover:text-yellow-500 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to All News
          </button>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold flex items-center">
          <Calendar size={24} className="mr-2 text-yellow-500" />
          Archive: {archiveDate}
        </h1>
      </div>

      {/* News grid */}
      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredNews.map((news, index) => (
            <NewsCard
              key={news.id}
              news={news}
              index={index}
              isVisible={visibleItems.includes(news.id)}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="text-xl text-gray-500">
            No news articles found for this period.
          </p>
          <Link
            to="/news"
            className="mt-4 inline-block px-6 py-2 bg-yellow-500 text-black rounded-full hover:bg-black hover:text-white transition-colors"
          >
            View All News
          </Link>
        </div>
      )}

      {/* Archive sidebar */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Calendar size={20} className="mr-2 text-yellow-500" />
          Archives
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableArchives.map((archive) => (
            <Link
              key={`${archive.year}-${archive.month}`}
              to={`/news/archives/${archive.year}/${archive.month}`}
              className={`flex items-center justify-between p-3 rounded hover:bg-yellow-50 transition-colors
                ${
                  parseInt(year) === archive.year &&
                  parseInt(month) === archive.month
                    ? "bg-yellow-100 font-medium"
                    : "bg-white"
                }`}
            >
              <span>{archive.displayDate}</span>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                {archive.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsArchives;
