import { ResultMoviesProps } from "@/types";

export default function ResultMovies({ results }: ResultMoviesProps) {
  return (
    <main>
      {results.map((result) => (
        <div key={result.id}>
          <h3>{result.original_title}</h3>
        </div>
      ))}
    </main>
  );
}
