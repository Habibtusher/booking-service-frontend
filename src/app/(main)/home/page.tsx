"use client";
import React from "react";
import Foods from "@/components/Foods";
import Reviews from "@/components/Reviews";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AboutUs from "@/components/AboutUs";

const Home = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-64 md:h-[500px] lg:h-[600px] xl:[700px] 2xl:h-screen bg-opacity-50 text-white flex items-center justify-center"
        style={{
          backgroundImage: "url('/banner.jpg')",
        }}
      >
      </div>

      <Foods />
      <AboutUs/>
      <Reviews />
    </div>
  );
};

export default Home;
