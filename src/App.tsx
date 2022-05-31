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
  const [series, setSeries] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetch(
        `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`
      );
      const moviesData = await movies.json();
      setMovies(moviesData);

      const series = await fetch(
        `${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`
      );
      const seriesData = await series.json();
      setSeries(seriesData);
    };

    fetchData();
  }, []);

  //useEffect(() => movies && console.log(movies), [movies]);

  const getFeaturedMovie = () => movies && movies?.results[0];

  const getMovieList = () => {
    if (movies) {
      const [featured, ...movieList] = movies?.results;
      return movieList;
    }
    return [];
  };

  return (
    <div className="m-auto antialised font-sans bg-black text-white">
      <Hero {...getFeaturedMovie()} />
      <NavBar />
      <Carousel title="Filmes populares" data={getMovieList()} />
      <Carousel title="Séries populares" data={series?.results} />
      <Carousel title="Placeholder" />
    </div>
  );
};

export default App;
