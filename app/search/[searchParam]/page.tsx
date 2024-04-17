import ResultMovies from "@/components/ResultMovies";
import { SearchParams } from "@/types";

const API_KEY = process.env.TMDB_API_KEY;
export default async function SearchResult({
  params,
}: {
  params: SearchParams;
}) {
  const searchParam = params.searchParam;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchParam}&api_key=${API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.results;
  console.log(results);
  return (
    <div className="px-8">
      <ResultMovies results={results} />
    </div>
  );
}
