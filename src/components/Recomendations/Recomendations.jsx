import styled from "styled-components"
import { MoviesList } from "./MoviesList"

const Container = styled.div`
  padding: 1rem;
`

export function Recomendations() {
  return (
    <Container>
      <h2>
        Recomendações
      </h2>
      <MoviesList />
    </Container>
  )
}