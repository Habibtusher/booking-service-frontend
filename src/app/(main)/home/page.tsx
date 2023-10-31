"use client";
import React, { useEffect, useState } from "react";
import Foods from "@/components/Foods";
import Reviews from "@/components/Reviews";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AboutUs from "@/components/AboutUs";
import { getBaseUrl } from "@/helpers/config/envConfig";
import axios from "axios";

const Home = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-64 md:h-[500px] lg:h-[600px] xl:[700px] 2xl:h-screen bg-opacity-50 text-white flex items-center justify-center"
        style={{
          backgroundImage: "url('/bb.png')",
        }}
      >
        <div className="absolute inset-0 bg-slate-300 opacity-10"></div>{" "}
        <div className="text-center opacity-100">
          <h2 className="text-2xl font-bold">Food Fantasy</h2>
          <p className="mt-2">Best Restaurants In Town.</p>
        </div>
      </div>

      <Foods />
      <Reviews />
    </div>
  );
};

export default Home;
