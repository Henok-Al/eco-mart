import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroSection = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay="5000"
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={5000}
        className="rounded-lg shadow-lg"
      >
        <div>
          <img
            src="/bags.jpg"
            alt="Slide 1"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h2 className="text-4xl font-bold text-white">
              Discover Our Latest Collection
            </h2>
          </div>
        </div>
        <div>
          <img
            src="/glasses.jpg"
            alt="Slide 2"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h2 className="text-4xl font-bold text-white">
              Exclusive Deals Just for You
            </h2>
          </div>
        </div>
        <div>
          <img
            src="/jeans.jpg"
            alt="Slide 3"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h2 className="text-4xl font-bold text-white">
              Shop Now and Save Big
            </h2>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
