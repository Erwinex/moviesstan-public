import { type IconType } from "react-icons";

export type MenuItemProp = {
  lable: string;
  address: string;
  Icon: IconType;
};

export type HeaderItemProps = {
  lable: string;
  param: string;
};

export type HomeSearchParams = {
  show: "fetchTopRated" | "fetchTrending";
};

export type ResultMoviesProps = {
  results: ResultMovies[];
};

export type ResultMovies = {
  backdrop_path: string;
  id: number;
  original_name?: string;
  overview: string;
  poster_path: string;
  media_type?: string;
  adult: boolean;
  name?: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  first_air_date?: string;
  vote_average: number;
  vote_count: number;
  origin_country?: string[];
  original_title: string;
  title?: string;
  release_date?: string;
  video?: boolean;
};
