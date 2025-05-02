import { div } from "framer-motion/client";
import React from "react";
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
];
const Icreate = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
        {imgList.map((img, index) => (
          <div
            key={index}
            className="w-full aspect-[4/3] overflow-hidden rounded"
          >
            <img
              src={`/images/${img}`}
              alt={`Image ${index}`}
              loading="lazy"
              className="w-full h-full object-cover "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Icreate;
