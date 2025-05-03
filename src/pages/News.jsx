import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NewPageHero from "../components/NewPageHero";
import NewsCard from "../components/NewsCard";
import NewsSidebar from "../components/NewsSidebar";
import { newsData } from "../lib/newsData";

const News = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newsData.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    // Reset visible items when page changes
    setVisibleItems([]);

    // Simulate staggered appearance of cards
    const timer = setTimeout(() => {
      setVisibleItems(currentItems.map((item) => item.id));
    }, 100);

    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" });

    return () => clearTimeout(timer);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section>
      <NewPageHero />
      <div className="container mx-auto lg:px-20 md:px-10 px-4 pb-16 pt-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content - news grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentItems.map((news, index) => (
                <NewsCard
                  key={news.id}
                  news={news}
                  index={index}
                  isVisible={visibleItems.includes(news.id)}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <div className="inline-flex rounded-md">
                  <button
                    onClick={() =>
                      currentPage > 1 && handlePageChange(currentPage - 1)
                    }
                    disabled={currentPage === 1}
                    className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                      currentPage === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-yellow-50"
                    } border border-gray-200`}
                  >
                    Previous
                  </button>

                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handlePageChange(i + 1)}
                      className={`px-4 py-2 text-sm font-medium border-t border-b border-r ${
                        currentPage === i + 1
                          ? "bg-yellow-500 text-white"
                          : "bg-white text-gray-700 hover:bg-yellow-50"
                      } ${i === totalPages - 1 ? "rounded-r-lg" : ""}`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    onClick={() =>
                      currentPage < totalPages &&
                      handlePageChange(currentPage + 1)
                    }
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                      currentPage === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-yellow-50"
                    } border border-l-0 border-gray-200`}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <NewsSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
