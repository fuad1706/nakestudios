import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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
  "d.png",
  "e.png",
  "f.png",
  "g.png",
  "h.png",
  "i.png",
  "j.png",
  "k.png",
  "l.png",
  "m.png",
  "n.png",
  "o.png",
  "p.png",
  "q.png",
  "r.png",
  "s.png",
  "t.png",
  "u.png",
  "v.png",
  "w.png",
  "x.png",
];

const Icreate = () => {
  const [index, setIndex] = useState(-1); // -1 means closed

  const slides = imgList.map((img) => ({
    src: `/images/${img}`,
  }));

  return (
    <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={`Image ${i}`}
          onClick={() => setIndex(i)}
          loading="lazy"
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

export default Icreate;
