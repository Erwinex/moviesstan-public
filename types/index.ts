import { type IconType } from "react-icons";

export type MenuItemProp = {
  lable: string;
  address: string;
  variant: string;
};

export type HeaderItemProps = {
  lable: string;
  param: string;
};

export type HomeSearchParams = {
  show: "fetchTopRated" | "fetchTrending";
};

export type HomePageProp = {
  searchParams: HomeSearchParams;
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

export type MoviePageParams = {
  theId: number | string;
};
export type SearchParams = {
  searchParam: number | string;
};
export type MoviePageProp = {
  params: MoviePageParams;
};

export type MovieDetails = {
  first_air_date?: string;
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Belongstocollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Productioncompany[];
  production_countries: Productioncountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Spokenlanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Spokenlanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type Productioncountry = {
  iso_3166_1: string;
  name: string;
};

export type Productioncompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type Belongstocollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

export type SliderProp = {
  suggestions: {
    id: number;
    title: string;
    movieId: string;
    image: string;
  }[];
};
