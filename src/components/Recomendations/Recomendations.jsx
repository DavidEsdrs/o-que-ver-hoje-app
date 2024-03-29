import styled from "styled-components"
import { MoviesList } from "./MoviesList"

const Container = styled.section`
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`

const Title = styled.h2`
  margin-bottom: 1rem;
`

export function Recomendations() {
  return (
    <Container>
      <Title>
        Recomendações
      </Title>
      <MoviesList />
    </Container>
  )
}