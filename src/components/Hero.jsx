import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Array of photography images from public directory
const photoSlides = [
  { image: "/images/img1.jpg" },
  { image: "/images/img2.jpg" },
  { image: "/images/img3.jpg" },
  { image: "/images/img4.jpg" },
  { image: "/images/img5.jpg" },
  { image: "/images/img6.jpg" },
  { image: "/images/img7.jpg" },
  { image: "/images/img8.jpg" },
  { image: "/images/img9.jpg" },
  { image: "/images/img10.jpg" },
];

function Hero() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.autoplay.start();
    }
  }, [swiperInstance]);

  return (
    <div className="w-full overflow-x-hidden">
      <style>
        {`
          @media (max-width: 768px) {
            .swiper-button-next,
            .swiper-button-prev {
              display: none !important;
            }
            .hero-container {
              height: 70vh !important;
            }
            .slide-bg {
              height: 100% !important;
              padding-top: 0 !important;
            }
          }
          .swiper-button-next,
          .swiper-button-prev {
            color: white !important;
          }
          .swiper-pagination {
            bottom: 20px !important;
          }
          .swiper-pagination-bullet {
            width: 14px !important;
            height: 14px !important;
            background: white !important;
            opacity: 1 !important;
          }
          .swiper-pagination-bullet-active {
            width: 18px !important;
            height: 18px !important;
            background: #D4AF37 !important;
          }
          .hero-container {
            height: 100vh;
          }
          .slide-bg {
            padding-top: 56.25%;
          }
        `}
      </style>
      <div className="hero-container">
        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Autoplay, Pagination, Navigation]}
          speed={1000}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          className="w-full h-full swiper-pagination-white"
        >
          {photoSlides.map((slide, index) => (
            <SwiperSlide key={index} className="h-full">
              <div
                className="relative w-screen slide-bg"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                role="img"
                aria-label={`Photography work ${index + 1}`}
              ></div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
