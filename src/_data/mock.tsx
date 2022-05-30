import movie1 from "../_assets/movie1.jpg";
import movie2 from "../_assets/movie2.jpg";
import movie3 from "../_assets/movie3.jpg";
import movie4 from "../_assets/movie4.jpg";
import movie5 from "../_assets/movie5.jpg";
import movie6 from "../_assets/movie6.jpg";
import movie7 from "../_assets/movie7.jpg";

export interface mockMovie {
  title: string;
  poster_path: string;
  vote_average?: number | string;
}

const mockData: mockMovie[] = [
  {
    title: "Detective Conan",
    poster_path: movie1,
  },

  {
    title: "Homem-Formiga x Vespa",
    poster_path: movie2,
  },

  {
    title: "Avengers: Endgame",
    poster_path: movie3,
  },

  {
    title: "Missão Impossível",
    poster_path: movie4,
  },

  {
    title: "Mega Tubarão",
    poster_path: movie5,
  },

  {
    title: "Deadpool 2",
    poster_path: movie6,
  },

  {
    title: "Arranha-Céu",
    poster_path: movie7,
  },

  {
    title: "Detective Conan",
    poster_path: movie1,
  },

  {
    title: "Homem-Formiga x Vespa",
    poster_path: movie2,
  },

  {
    title: "Avengers: Endgame",
    poster_path: movie3,
  },

  {
    title: "Missão Impossível",
    poster_path: movie4,
  },

  {
    title: "Mega Tubarão",
    poster_path: movie5,
  },

  {
    title: "Deadpool 2",
    poster_path: movie6,
  },

  {
    title: "Arranha-Céu",
    poster_path: movie7,
  },
];

export default mockData;
