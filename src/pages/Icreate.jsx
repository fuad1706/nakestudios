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
];
const Icreate = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="grid grid-cols-4 gap-4 ">
        {imgList.map((img, index) => (
          <img
            key={index}
            src={`/images/${img}`}
            alt={`Image ${index}`}
            loading="lazy"
            className="w-full h-auto rounded "
          />
        ))}
      </div>
    </div>
  );
};

export default Icreate;
