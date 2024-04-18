import Header from "@/components/Header";
import ResultMovies from "@/components/ResultMovies";
import { HomePageProp } from "@/types";
import Image from "next/image";

const API_KEY = process.env.TMDB_API_KEY;

export default async function Home({ searchParams }: HomePageProp) {
  const show = searchParams.show || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      show === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 43600 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.results;
  return (
    <>
      <Header />
      <ResultMovies results={results} />
    </>
  );
}
