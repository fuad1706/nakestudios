import React from "react";
import { ChevronRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

// Single news card component
const NewsCard = ({ news, index, isVisible }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-700 transform 
       ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Link to={`/news/${news.id}`} className="block">
        <div className="relative overflow-hidden group cursor-pointer">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </Link>

      <div className="p-5">
        <div className="flex items-center mb-3 text-sm text-gray-500">
          <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-medium flex items-center">
            <Calendar size={14} className="mr-1" />
            {news.date}
          </span>
          <span className="ml-3 flex items-center">
            <User size={14} className="mr-1" />
            By {news.author}
          </span>
        </div>

        <Link to={`/news/${news.id}`} className="block">
          <h3 className="text-lg font-bold mb-2 hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
            {news.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 text-sm">{news.excerpt}</p>

        <Link
          to={`/news/${news.id}`}
          className="flex items-center text-yellow-500 font-medium text-sm hover:text-black transition-colors duration-300 group"
        >
          READ MORE
          <ChevronRight
            size={16}
            className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
