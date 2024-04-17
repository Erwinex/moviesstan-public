import { MovieDetails, MoviePageProp } from "@/types";
import Image from "next/image";

const API_KEY = process.env.TMDB_API_KEY;

export default async function MoviePage({ params }: MoviePageProp) {
  const id = params.theId;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
    { next: { revalidate: 43600 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const movie: MovieDetails = await res.json();
  return (
    <div className="w-full">
      <div className="p-6 md:pt-10 flex flex-col lg:flex-row container content-center lg:space-x-10 mx-auto">
        <div className="h-full max-w-full border-8 dark:border-sky-100 border-stone-700  rounded-3xl ">
          <Image
            className=" rounded-xl mx-auto w-full h-full"
            src={
              // "/1THOJsxIj3fqfYewAgIYZp7BfjG.webp"
              "https://image.tmdb.org/t/p/original" + movie.poster_path ||
              movie.backdrop_path
            }
            width={1920}
            height={2880}
            alt={`${
              movie.title || movie.original_title || movie.original_title
            } poster`}
          />
        </div>
        <div className="p-8 max-w-[480px] lg:max-w-full font-sans">
          <h3 className="text-3xl mb-10 font-semibold">
            {movie.title || movie.original_title || movie.original_title}
          </h3>
          <p className="font-mono text-xl mb-5">{movie.overview}</p>
          <p>
            <span className="mr-2 font-medium text-lg ">Release date : </span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="text-lg">
            This movie gets an average score of{" "}
            <span className="font-bold text-lg">
              {movie.vote_average.toString().slice(0, 3)}
              /10
            </span>{" "}
            from <span className="font-bold text-lg">
              {movie.vote_count}
            </span>{" "}
            ratings
          </p>
        </div>
      </div>
    </div>
  );
}
