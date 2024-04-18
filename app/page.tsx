import Header from "@/components/Header";
import ResultMovies from "@/components/ResultMovies";
import SwiperSliderHomePage from "@/components/SwiperSliderHomePage";
import { HomePageProp } from "@/types";

const API_KEY = process.env.TMDB_API_KEY;

export default async function Home({ searchParams }: HomePageProp) {
  const show = searchParams.show || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      show === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 43600 } }
  );
  const resSuggestions = await fetch(
    "https://erwinex.github.io/fake-api/db.json",
    { next: { revalidate: 43600 } }
  );

  if (!res.ok || !resSuggestions.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const dataSuggestions = await resSuggestions.json();
  const results = data.results;
  return (
    <div>
      <SwiperSliderHomePage suggestions={dataSuggestions} />
      <Header />
      <ResultMovies results={results} />
    </div>
  );
}
