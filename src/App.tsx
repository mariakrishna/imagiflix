import React, { useState, useEffect } from "react";

import CONST from "./_data/constants";

import Hero from "./_components/Hero";
import NavBar from "./_components/NavBar";
import Carousel from "./_components/Carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const { URL, APISTRING } = CONST;

  const [movies, setMovies] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`
      );

      const data = await response.json();

      setMovies(data);

      console.log(movies);
    };

    fetchData();
  }, []);

  useEffect(() => movies && console.log(movies), [movies]);

  return (
    <div className="m-auto antialised font-sans bg-black text-white">
      <Hero {...movies?.results[0]} />
      <NavBar />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
};

export default App;
