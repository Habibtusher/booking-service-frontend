import React from 'react';

const Home = () => {
  return (
    <div className='min-h-screen'>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/TTgDJk4/pic1.jpg" alt="pic1" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://right.ly/_next/image/?url=https%3A%2F%2Fd1w6vi3zzsld3s.cloudfront.net%2Fmedia%2Fimages%2FFOODPRIVACY.width-1920.jpg&w=3840&q=75" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;