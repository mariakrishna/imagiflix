import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import eventEmitter from "../_utils/eventEmitter";
import CONST from "../_data/constants";
import Score from "./Score";

const Modal = ({
  poster_path,
  title,
  original_title,
  overview,
  vote_average,
  runtime,
  number_of_seasons,
  name,
  original_name,
  video,
}: any) => {
  const { IMAGEURL } = CONST;

  const handleClick = () => {
    eventEmitter.emit(CONST.EVENTS.ModalClose);
  };

  return (
    <div className="fixed top-0 left-0 p-12 z-10 w-screen h-screen grid place-items-center">
      <article className="grid p-4 grid-flow-col auto-cols-max w-full h-full bg-black opacity-90 shadow-lg ">
        <img
          className="w-4/5 h-full"
          src={`${IMAGEURL}/w500/${poster_path}`}
          alt={title ? title : name}
        />
        <div className="relative">
          <FontAwesomeIcon
            className="cursor-pointer absolute"
            icon={faClose}
            size="2x"
            onClick={handleClick}
          />
          <h2>{title ? title : name}</h2>
          <h6 className="font-bold italic">
            {original_title ? original_name : original_name}
          </h6>
          <p className="my-8">{overview}</p>
          <Score value={vote_average} />
          <span className="bg-red-600 py-2 px-4 ml-2">
            {runtime ? runtime : number_of_seasons}
          </span>
        </div>
      </article>
    </div>
  );
};

export default Modal;
