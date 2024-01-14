import styled from "styled-components"
import { SurpriseCard } from "./SurpriseCard"

const Container = styled.section`
  padding: 1rem;
  width: 100%;
  background-color: ${props => props.theme.mainColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SessionTitle = styled.h3`
  margin: 0 auto;
  color: white;
  margin-bottom: 1rem;
`

export function SurpriseMovie() {
  return (
    <Container>
      <SessionTitle>
        Descubra um filme aleatório
      </SessionTitle>
      <SurpriseCard />
    </Container>
  )
}