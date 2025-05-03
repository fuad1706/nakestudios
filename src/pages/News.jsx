import React, { useState, useEffect } from "react";

import NewPageHero from "../components/NewPageHero";
import NewsCard from "../components/NewsCard";

const newsData = [
  {
    id: 1,
    title:
      "Boluwaji Apanisile Wins Most Creative Photographer at ACE Awards...",
    excerpt:
      "Visual storyteller, Boluwaji Apanisile has been honored with the Most Creative Photographer award at the recently concluded ACE Awards in the UK.",
    date: "15 Dec, 2024",
    author: "Ihesiulo Grace",
    image: "/images/news2Img.jpg",
  },
  {
    id: 2,
    title:
      "Redefining Nigeria’s Creative Industry through Innovation, Storytelling",
    excerpt:
      "Boluwaji Apanisile is a visionary creative entrepreneur passionate about storytelling through visual media.",
    date: "14 Sep, 2024",
    author: "Tosin Clegg",
    image: "/images/b.png",
  },
  {
    id: 3,
    title: "ICre8 Conference unveils viable future for creative industries",
    excerpt:
      "NAKESTUDIOS held its inaugural iCre8 conference, recently, with the theme: “Exploring the transformative power of creativity in shaping the future of industries.”",
    date: "31 Aug, 2024",
    author: "Sunday Aikulola",
    image: "/images/news1img.jpg",
  },
  {
    id: 4,
    title: "Over ride the digital divide with additional",
    excerpt: "Lorem ipsum dolor sit amet, conect sectetur notte elit sed do.",
    date: "20 Dec, 2022",
    author: "Admin",
    image: "/api/placeholder/400/320",
  },
  {
    id: 5,
    title: "Over ride the digital divide with additional",
    excerpt: "Lorem ipsum dolor sit amet, conect sectetur notte elit sed do.",
    date: "20 Dec, 2022",
    author: "Admin",
    image: "/api/placeholder/400/320",
  },
  {
    id: 6,
    title: "Over ride the digital divide with additional",
    excerpt: "Lorem ipsum dolor sit amet, conect sectetur notte elit sed do.",
    date: "20 Dec, 2022",
    author: "Admin",
    image: "/api/placeholder/400/320",
  },
];

const News = ({ news, index, isVisible }) => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    // Simulate staggered appearance of cards
    const timer = setTimeout(() => {
      setVisibleItems(newsData.map((item) => item.id));
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section>
      <NewPageHero />
      <div className="container mx-auto lg:px-20 md:px-10 px-4 pb-16 pt-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <NewsCard
              key={news.id}
              news={news}
              index={index}
              isVisible={visibleItems.includes(news.id)}
            />
          ))}
        </div>

        {/* Pagination */}
      </div>
    </section>
  );
};

export default News;
