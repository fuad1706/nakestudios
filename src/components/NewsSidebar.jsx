import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Tag, Search } from "lucide-react";
import { newsData } from "../lib/newsData";

// Component for archives sidebar to be used in News and NewsDetail pages
const NewsSidebar = () => {
  const [archives, setArchives] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);

  // Parse date and generate archive data
  useEffect(() => {
    // Generate archives
    const archiveMap = {};
    const categorySet = new Set();

    newsData.forEach((news) => {
      // Extract date parts
      const dateParts = news.date.split(" ");
      const monthShort = dateParts[1].replace(",", "");
      const year = parseInt(dateParts[2]);

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
      const month = monthNames.findIndex((m) => m === monthShort) + 1;

      // Create archive key
      const key = `${year}-${month}`;

      // Add to archive map
      if (!archiveMap[key]) {
        archiveMap[key] = {
          year: year,
          month: month,
          count: 1,
          displayDate: new Date(year, month - 1).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          }),
        };
      } else {
        archiveMap[key].count++;
      }

      // Extract categories (this is just a simulation as your data doesn't have categories)
      // In a real application, you would use actual categories from your data
      if (news.title.toLowerCase().includes("conference")) {
        categorySet.add("Conference");
      }
      if (news.title.toLowerCase().includes("award")) {
        categorySet.add("Awards");
      }
      if (news.title.toLowerCase().includes("creative industry")) {
        categorySet.add("Industry News");
      }
      if (news.title.toLowerCase().includes("icre8")) {
        categorySet.add("Events");
      }
    });

    // Convert to array and sort (newest first)
    const archiveArray = Object.values(archiveMap).sort((a, b) => {
      return new Date(b.year, b.month - 1) - new Date(a.year, a.month - 1);
    });

    setArchives(archiveArray);
    setCategories(Array.from(categorySet));
  }, []);

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // In a real app, you would navigate to search results
      // For now, let's just log it
      console.log("Searching for:", searchTerm);
      // You could implement: navigate(`/news/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="space-y-8">
      {/* Search Box */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-4">Search News</h3>
        <form onSubmit={handleSearchSubmit}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-full py-2 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bg-yellow-500 text-black p-2 rounded-full hover:bg-black hover:text-white transition-colors"
            >
              <Search size={16} />
            </button>
          </div>
        </form>
      </div>

      {/* Archives Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-4 flex items-center">
          <Calendar size={18} className="mr-2 text-yellow-500" />
          Archives
        </h3>
        <ul className="space-y-2">
          {archives.slice(0, 6).map((archive) => (
            <li key={`${archive.year}-${archive.month}`}>
              <Link
                to={`/news/archives/${archive.year}/${archive.month}`}
                className="flex items-center justify-between py-2 px-3 rounded hover:bg-yellow-50 transition-colors"
              >
                <span>{archive.displayDate}</span>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                  {archive.count}
                </span>
              </Link>
            </li>
          ))}
          {archives.length > 6 && (
            <li className="pt-2">
              <Link
                to="/news/archives"
                className="text-yellow-500 hover:text-black transition-colors text-sm font-medium"
              >
                View All Archives →
              </Link>
            </li>
          )}
        </ul>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-4 flex items-center">
          <Tag size={18} className="mr-2 text-yellow-500" />
          Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/news/category/${category
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="bg-white border border-gray-200 rounded-full px-4 py-1 text-sm hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-4">Latest News</h3>
        <ul className="space-y-4">
          {newsData.slice(0, 3).map((news) => (
            <li
              key={news.id}
              className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
            >
              <Link to={`/news/${news.id}`} className="group">
                <h4 className="font-medium group-hover:text-yellow-500 transition-colors">
                  {news.title.length > 60
                    ? news.title.substring(0, 60) + "..."
                    : news.title}
                </h4>
                <div className="text-xs text-gray-500 mt-1">{news.date}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsSidebar;
