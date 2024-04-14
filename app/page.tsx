import ResultMovies from "@/components/ResultMovies";
import { HomeSearchParams } from "@/types";
import Image from "next/image";

const API_KEY = process.env.TMDB_API_KEY;

export default async function Home({
  searchParams,
}: {
  searchParams: HomeSearchParams;
}) {
  const show = searchParams.show || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      show === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 43600 } }
  );
  setTimeout(() => {
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  }, 2000);
  const data = await res.json();
  const results = data.results;
  return (
    <div className="px-8">
      <ResultMovies results={results} />
    </div>
  );
}
