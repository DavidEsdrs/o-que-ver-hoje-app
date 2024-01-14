import { useRequestProcessor } from "../../hooks/useRequestProcessor";
import { server } from "../../services/api";

export function MoviesList() {
  const { query } = useRequestProcessor()

  const { data: movies, isLoading, isError } = query(
    "recomendations",
    () => server
      .get("https://api.themoviedb.org/3/discover/movie?language=pt-BR")
      .then((res) => res.data.results),
    { enabled: true },
  )

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}