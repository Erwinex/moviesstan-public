import { ResultMoviesProps } from "@/types";

export default function ResultMovies({ results }: ResultMoviesProps) {
  return (
    <main>
      {results.map((result) => (
        <div key={result.id}>
          <h3>{result.title}</h3>
        </div>
      ))}
    </main>
  );
}
