import { useState, useEffect } from "react";
import EventEmitter from "./_utils/eventEmitter";
import CONST from "./_data/constants";

import Loading from "./_components/loading";
import Hero from "./_components/Hero";
import NavBar from "./_components/NavBar";
import Carousel from "./_components/Carousel";
import Footer from "./_components/Footer";
import Modal from "./_components/Modal";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export enum TitleType {
  Movie = "movie",
  Serie = "tv",
}

export interface Title {
  type: TitleType;
  id: number | string;
}

const App = () => {
  const { URL, APISTRING } = CONST;

  const [movies, setMovies] = useState();
  const [series, setSeries] = useState();
  const [title, setTitle] = useState();
  const [loading, setLoading] = useState(true);

  const getFeaturedMovie = () => movies && movies?.results[0];

  const getMovieList = () => {
    if (movies) {
      const [featured, ...movieList] = movies?.results;
      return movieList;
    }
    return [];
  };

  const getTitle = async ({ type, id }: Title) => {
    setLoading(true);
    const title = await fetch(`${URL}/${type}/${id}${APISTRING}`);
    const titleData = await title.json();
    setTitle(titleData);
    setLoading(false);
  };

  useEffect(() => {
    EventEmitter.addListener(CONST.EVENTS.PosterClick, getTitle);
    EventEmitter.addListener(CONST.EVENTS.ModalClose, setTitle);

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

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="m-auto antialised font-sans bg-black text-white">
      {loading && (
        <>
          <Loading />
          <NavBar />
        </>
      )}
      {!loading && (
        <>
          <Hero {...getFeaturedMovie()} />
          <NavBar />
          <Carousel title="Filmes populares" data={getMovieList()} />
          <Carousel title="Séries populares" data={series?.results} />
          <Carousel title="Placeholder" />
        </>
      )}
      <Footer />
      {!loading && title && <Modal {...title} />}
    </div>
  );
};

export default App;
