import React from "react";
import Slick from "react-slick";

import mockData from "../_data/mock";

const Carousel = ({ data = mockData }) => {
  const options = {
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
  };
  return (
    <Slick {...options}>
      {data.map(({ movie, title }) => (
        <article>
          <img src={movie} alt={title} />
        </article>
      ))}
    </Slick>
  );
};

export default Carousel;
