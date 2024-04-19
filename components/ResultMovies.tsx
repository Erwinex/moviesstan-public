import { type ResultMoviesProps } from "@/types";
import MovieCard from "./MovieCard";

// This component gets results value from it's parent and make a MovieCard component for each of the results
export default function ResultMovies({ results }: ResultMoviesProps) {
  return (
    <main className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-7xl mx-auto py-6">
      {results.map((result) => (
        <MovieCard key={result.id} theResultMovie={result} />
      ))}
    </main>
  );
}
