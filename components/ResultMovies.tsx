import { ResultMoviesProps } from "@/types";
import MovieCard from "./MovieCard";

export default function ResultMovies({ results }: ResultMoviesProps) {
  return (
    <section className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-7xl mx-auto py-6">
      {results.map((result) => (
        <MovieCard key={result.id} theResultMovie={result} />
      ))}
    </section>
  );
}
