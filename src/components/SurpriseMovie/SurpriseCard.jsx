import styled, { keyframes } from "styled-components"
import { useRequestProcessor } from "../../hooks/useRequestProcessor"
import { motion, useAnimate, useAnimation } from "framer-motion"
import { server } from "../../services/api";
import { useContext, useEffect } from "react";
import { BackdropContext } from "./SurpriseMovie";

const blink = (shadowColor) => keyframes`
  0% {
    box-shadow: 0 0 20px 10px ${shadowColor};
  }
  50% {
    box-shadow: 0 0 10px 5px ${shadowColor};
  }
  100% {
    box-shadow: 0 0 20px 10px ${shadowColor};
  }
`;


const Container = styled(motion.div)`
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  padding: 1rem;
  animation: ${props => props.$isLoading && blink(props.theme.secondaryColor)} 2s infinite;
  position: relative;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`

const GenerateButton = styled.button`
  position: relative;
  cursor: pointer;
  padding: 10px 15px;
  width: 100%;
  border-radius: 20px;
  border: none;
  background-color: black;
  color: white;
  overflow: hidden;
  transition: 200ms;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.secondaryColor};
    overflow: hidden;
    transition: 200ms;
  }

  &:hover::before {
    top: 0;
  }

  &:hover {
    color: black;
  }

  &:active {
    transform: scale(0.95);
  }
`

const ButtonText = styled.p`
  position: relative;
  z-index: 10;
  font-size: 14px;
  font-weight: 800;
`

const Movie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MovieImage = styled.img`
  width: 200px;
  border-radius: 25px;
`

const Title = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;
  color: white;
  text-align: center;
  margin-bottom: 1rem;
`

export function SurpriseCard() {
  const ctx = useContext(BackdropContext)
  const { query } = useRequestProcessor()
  const randomPage = Math.floor(Math.random() * 100);
  const randomMovie = Math.floor(Math.random() * 20);
  const { data: movie, isLoading, isError, refetch } = query(
    "suprise_movie",
    () => server
      .get(`https://api.themoviedb.org/3/discover/movie?page=${randomPage}&language=pt-BR&include_adult=false`)
      .then(res => res.data.results[randomMovie]),
    { enabled: false },
  )

  ctx.setBackdropImage(movie?.backdrop_path)

  const getMovie = () => {
    refetch()
  }

  if(isLoading) {
    return (
      <Container $isLoading={isLoading}>
        <GenerateButton>
          <ButtonText disabled>
            Surpreenda-me
          </ButtonText>
        </GenerateButton>
      </Container>
    )  
  }

  if(isError) {
    return (
      <Container $isLoading={isLoading}>
        <GenerateButton>
          <p>
            Ocorreu um erro!
          </p>
          <ButtonText disabled>
            Surpreenda-me
          </ButtonText>
        </GenerateButton>
      </Container>
    )  
  }

  return (
    <Container as={motion.div}>
      {movie && (
        <Movie>
          <MovieImage 
            src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`} 
            alt={`pôster do filme ${movie?.title}`}
            whileHover={{
              scale: 1.05
            }}
            whileTap={{ scale: 0.98 }}
          />
          <Title>
            {movie?.title}
          </Title>
        </Movie>
      )}
      <GenerateButton onClick={getMovie}>
        <ButtonText>
          Surpreenda-me
        </ButtonText>
      </GenerateButton>
    </Container>
  )
}