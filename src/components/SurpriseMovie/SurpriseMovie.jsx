import styled from "styled-components"
import { SurpriseCard } from "./SurpriseCard"
import { useState } from "react"

const Container = styled.section`
  padding: 1rem;
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 25px;
  background: url(${props => props.$backdrop}) no-repeat;
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
  const [backdrop, setBackdrop] = useState("")

  const setBackdropImage = (bd) => {
    setBackdrop(bd)
  }

  return (
    <Container $backdrop={`https://image.tmdb.org/t/p/original${backdrop}`}>
      <SessionTitle>
        Descubra um filme aleatório
      </SessionTitle>
      <SurpriseCard updateBackdrop={setBackdropImage} />
    </Container>
  )
}