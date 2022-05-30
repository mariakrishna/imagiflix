import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { mockMovie } from "../_data/mock";
import "./Poster.css";

import Score from "./Score";

const Poster = ({ movie, title, score }: mockMovie, index: number) => (
  <article
    className="relative transition-all duration-500 ease-in-out transform hover:scale-110 hover:z-10"
    key={index}
  >
    <img src={movie} alt={title} />
    <div className="poster z-10 absolute inset-0 w-full h-full grid place-items-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0">
      <FontAwesomeIcon icon={faPlayCircle} size="5x" />
      <h2>{title}</h2>
      <Score value={score} />
    </div>
  </article>
);

export default Poster;
