import React from "react";

const AboutUs = () => {
  return (
    <div
      className="relative min-h-full bg-cover bg-center h-96 bg-opacity-50 grid lg:grid-cols-2 gap-4 text-white items-center justify-center"
      style={{
        backgroundImage:
          "url('https://static.nationalgeographic.co.uk/files/styles/image_3200/public/tryitnow_GettyImages-1127515284_HR.jpg?w=1600&h=900')",
      }}
    >
      <div className="absolute inset-0 bg-slate-300 opacity-50"></div>{" "}
      <div className="text-center opacity-100">
        <h2 className="text-2xl font-bold">Food Fantasy</h2>
        <p className="mt-2">About Us</p>
      </div>
    </div>
  );
};

export default AboutUs;
