import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const NewPageHero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const textVariants = {
    hidden: { opacity: 0, x: -50 }, // Side-rising effect from the left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat bg-gray-900"
      style={{
        backgroundImage: `url('/images/img9.jpg')`,
      }}
    >
      {/* Overlay via pseudo-element */}
      <style>
        {`
          section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6); /* 60% opacity black overlay */
            z-index: 1;
          }
          section > * {
            position: relative;
            z-index: 2;
          }
        `}
      </style>

      {/* Content */}
      <div className="relative h-full flex items-end pb-[140px]">
        <div className="pl-[140px]">
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl text-white"
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            News
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default NewPageHero;
