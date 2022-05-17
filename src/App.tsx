import React from "react";

import Hero from "./_components/hero";
import NavBar from "./_components/NavBar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./_components/Carousel";

const App = () => {
  return (
    <div className="m-auto antialised font-sans bg-black text-white">
      <Hero />
      <NavBar />
      <Carousel />
    </div>
  );
};

export default App;
