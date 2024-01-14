import styled from "styled-components"
import { MoviesList } from "./MoviesList"

const Container = styled.div`
  padding: 1rem;
`

export function Recomendations() {
  return (
    <Container>
      Recomendações
      <MoviesList />
    </Container>
  )
}