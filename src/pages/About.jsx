import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col gap-10  md:gap-16 mx-48">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[65%]">
          <h3 className="mb-6 uppercase text-gray-500 font-bold">About Us</h3>
          <h2 className="mb-6 text-3xl md:text-5xl font-bold leading-tight">
            NAKESTUDiOS is a creative outfit <br /> that specializes in the
            intricate crafts <br /> of cinematography, focusing on both <br />
            motion and still.
          </h2>
          <h3 className="mb-6 text-3xl text-gray-600">
            Our mission is to capture the essence of moments and <br />
            transform them into captivating narratives that resonate <br />
            deeply and create unforgettable memories.
          </h3>
          <p className="text-gray-700 leading-relaxed">
            <strong>WHO WE ARE:</strong> We are a team of passionate visual
            artists, directors, and storytellers dedicated to pushing the
            boundaries
            <br /> of creativity. Our expertise spans various genres and styles,
            ensuring each project we undertake is a unique
            <br /> masterpiece. From high-impact motions to breathtaking
            visuals, we bring a wealth of experience and innovation to every
            <br />
            frame.
          </p>
        </div>

        <div className="md:w-[35%] flex flex-col gap-2 items-start mt-8 md:mt-0">
          <img src="/Bolu_nake.jpg" alt="Bolu" className="shadow-lg" />
          <img
            src="/bolu_sign.png"
            alt="Sign"
            className="h-20 object-contain"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="md:w-[60%] flex flex-row gap-2.5 ">
        <div>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-10">
              Cinematography & Photography
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We excel in both motion and still directing, using
              state-of-the-art equipment and cutting-edge techniques to deliver
              stunning visuals. Our work is defined by its emotional depth,
              technical excellence, and creative brilliance.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-10">
              Visual Storytelling
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Every project at NAKESTUDiOS begins with a story. We believe that
              the most powerful visuals are those that tell a story and evoke
              emotion. Our team works closely with clients to understand their
              vision and bring it to life through compelling narratives.
            </p>
          </div>
        </div>
        <div className="mb-12">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-10">Creating Memories</h3>
            <p className="text-gray-700 leading-relaxed">
              Whether it’s a commercial project, a special event, or a personal
              milestone, we are committed to capturing and creating memories
              that last a lifetime. Our approach is personalized and meticulous,
              ensuring that each moment is preserved in its most beautiful and
              authentic form.
            </p>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold mb-10">Our Commitment</h3>
            <p className="text-gray-700 leading-relaxed">
              For those who live and breathe visual arts, NAKESTUDiOS offers
              advanced resources, exclusive workshops, and masterclasses led by
              industry pioneers. We foster a community of elite professionals
              who share a passion for innovation and excellence, providing the
              tools and inspiration needed to elevate your craft.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
