import ResultMovies from "@/components/ResultMovies";
import { SearchParams } from "@/types";
import Image from "next/image";

const API_KEY = process.env.TMDB_API_KEY;

// This is the search page
export default async function SearchResult({
  params,
}: {
  params: SearchParams;
}) {
  const searchParam = params.searchParam;
  // fetching data from TMDB API to seach for given key word from the search box
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchParam}&api_key=${API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.results;
  const isResultEmpty = results.length === 0;
  console.log(isResultEmpty);
  return (
    <div className="px-8">
      {isResultEmpty || <ResultMovies results={results} />}
      {isResultEmpty && (
        <div className="flex flex-col items-center mt-14 pb-10">
          <Image
            className="mx-auto motion-safe:animate-bounce"
            src="/broken-film.svg"
            alt="broken icon"
            width={200}
            height={250}
          />
          <h3 className="text-4xl">
            We could not find any movie with this title !
          </h3>{" "}
        </div>
      )}
    </div>
  );
}
