import { ResultMovies } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { MdThumbsUpDown } from "react-icons/md";

export default function MovieCard({
  theResultMovie,
}: {
  theResultMovie: ResultMovies;
}) {
  return (
    <div className="cursor-pointer group sm:shadow-stone-400 sm:shadow-lg rounded-3xl sm:mx-3 transition-all sm:hover:scale-[1.07] duration-300 my-4">
      <Link href={`/id/${theResultMovie.id}`}>
        <Image
          className="sm:rounded-t-3xl group-hover:opacity-65 transition-all duration-300"
          src={
            //"/1THOJsxIj3fqfYewAgIYZp7BfjG.webp"
            "https://image.tmdb.org/t/p/original" +
              theResultMovie.poster_path || theResultMovie.backdrop_path
          }
          width={1920}
          height={2880}
          alt={`${
            theResultMovie.title ||
            theResultMovie.name ||
            theResultMovie.original_title ||
            theResultMovie.original_title
          } poster`}
        />
        <div className="px-2 py-6 sm:py-3 group-hover:p-8 sm:group-hover:p-2 transition-all duration-300  font-sans">
          <h3 className="font-extrabold text-lg">
            {theResultMovie.title ||
              theResultMovie.name ||
              theResultMovie.original_title ||
              theResultMovie.original_title}
          </h3>
          <p className="line-clamp-3 text-md border-y-2 font-mono">
            {theResultMovie.overview}
          </p>
          <p className="flex items-center pt-2">
            <span className="border-r-2 border-stone-200 pr-2">
              {theResultMovie.release_date || theResultMovie.first_air_date}
            </span>
            <MdThumbsUpDown className="h-6 ml-4 mr-2" />
            <span>{theResultMovie.vote_average.toString().slice(0, 3)}</span>
          </p>
        </div>
      </Link>
    </div>
  );
}
