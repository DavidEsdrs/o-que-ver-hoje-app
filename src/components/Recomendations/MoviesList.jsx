import { useRequestProcessor } from "../../hooks/useRequestProcessor";
import { server } from "../../services/api";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from "styled-components";
import { Movie } from "../Movie/Movie";

export function MoviesList() {
  const { query } = useRequestProcessor()

  const { data: movies, isLoading, isError } = query(
    "recomendations",
    () => server
      .get("https://api.themoviedb.org/3/discover/movie?language=pt-BR")
      .then((res) => res.data.results),
    { enabled: true },
  )

  if (isLoading) return <p>Carregando recomendações...</p>;
  if (isError) return <p>Ocorreu um erro ao carregar as recomendações :(</p>;

  return (
    <Swiper spaceBetween={200} slidesPerView={3} loop>
      <ul>
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Movie title={movie.title} poster_path={movie.poster_path} />
          </SwiperSlide>
        ))}
      </ul>
    </Swiper>
  );
}