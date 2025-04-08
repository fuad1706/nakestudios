import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 p-2">
      <div className="md:w-1/2">
        <h3 className="mb-6 uppercase text-gray-500">About Us</h3>
        <h2 className="mb-6 text-3xl md:text-5xl font-bold leading-tight">
          NAKESTUDiOS is a creative outfit <br /> that specializes in the
          intricate crafts <br /> of cinematography, focusing on both <br />
          motion and still.
        </h2>
        <h3 className="mb-6 text-lg text-gray-600">
          Our mission is to capture the essence of moments and <br /> transform
          them into captivating narratives that resonate <br /> deeply and
          create unforgettable memories.
        </h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>WHO WE ARE:</strong> We are a team of passionate visual
          artists, directors, and storytellers dedicated to pushing the
          boundaries of creativity. Our expertise spans various genres and
          styles, ensuring each project we undertake is a unique masterpiece.
          From high-impact motions to breathtaking visuals, we bring a wealth of
          experience and innovation to every frame.
        </p>
      </div>

      <div className="md:w-1/2 flex flex-col gap-2 items-center">
        <img src="/Bolu_nake.jpg" alt="Bolu" className="shadow-lg" />
        <img src="/bolu_sign.png" alt="Sign" className="h-20 object-contain" />
      </div>
    </div>
  );
};

export default About;
