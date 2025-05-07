import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

const imgList = [
  "1copy.jpg",
  "01copy.jpg",
  "2copy.jpg",
  "3acopy.jpg",
  "3bcopy.jpg",
  "3copy.jpg",
  "3ocopy.jpg",
  "4copy.jpg",
  "a.png",
  "b.png",
  "c.png",
  "e.png",
  "f.png",
  "g.png",
  "h.png",
  "i.png",
  "j.png",
  "k.png",
  "m.png",
  "p.png",
  "q.png",
  "r.png",
  "s.png",
  "t.png",
  "u.png",
  "v.png",
  "w.png",
  "x.png",
  "01.png",
  "02.png",
  "03.png",
  "04.png",
  "05.png",
  "06.png",
  "07.png",
  "08.png",
  "09.png",
  "10.png",
  "11.png",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png",
  "21.png",
  "22.png",
  "23.png",
  "24.png",
  "25.png",
  "26.png",
  "27.png",
  "28.png",
  "29.png",
  "30.png",
  "31.png",
];

const Icre8 = () => {
  const [index, setIndex] = useState(-1); // -1 means closed

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      once: true, // Only animate once when scrolled into view
      easing: "ease-in-out",
    });
  }, []);

  const slides = imgList.map((img) => ({
    src: `/images/${img}`,
  }));

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={`Image ${i}`}
          onClick={() => setIndex(i)}
          loading="lazy"
          data-aos="fade-up" // 👈 AOS scroll animation
          className="cursor-pointer w-full h-full aspect-[3/4] object-cover rounded hover:scale-105 transition-transform duration-300"
        />
      ))}

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
      />
    </div>
  );
};

export default Icre8;
