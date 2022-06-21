import CONST from "../_data/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";

import Score from "./Score";

import placeholder from "../_assets/bg_avengers.jpg";

const Hero = ({
  backdrop_path = null,
  title = "Avengers Endgame",
  vote_average = 10,
}) => {
  const { IMAGEURL } = CONST;

  return (
    <header className="box-border relative min-h-screen -mb-32">
      <img
        className="object-cover object-center h-auto w-full"
        src={
          backdrop_path ? `${IMAGEURL}/original/${backdrop_path}` : placeholder
        }
        alt="Filme em destaque"
      />
      <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
      <article className="absolute bottom-0 mb-64 px-8">
        <p className="text-2xl">Assista agora:</p>
        <h2 className="text-5xl font-black pb-2">{title}</h2>
        <p className="text-base">
          Nota <Score value={vote_average} />
        </p>
        <button className="text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:bg-opacity-75">
          <FontAwesomeIcon className="mr-2" icon={faPlay} /> Assistir
        </button>
        <button className="text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:bg-opacity-75">
          <FontAwesomeIcon className="mr-2" icon={faPlus} /> Minha Lista
        </button>
      </article>
    </header>
  );
};

export default Hero;
