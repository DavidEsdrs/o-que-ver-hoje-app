import styled from "styled-components"
import { SurpriseCard } from "./SurpriseCard"
import { createContext, useContext, useState } from "react"

const Container = styled.section`
  padding: 1rem;
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
  background: url(${props => props.$backdrop}) no-repeat center center fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SessionTitle = styled.h3`
  margin: 0 auto;
  color: white;
  margin-bottom: 1rem;
`

export const BackdropContext = createContext(null)

export function SurpriseMovie() {
  const [backdrop, setBackdrop] = useState("")

  const setBackdropImage = (bd) => {
    setBackdrop(bd)
  }

  return (
    <BackdropContext.Provider value={{ setBackdropImage }}>
      <Container $backdrop={`https://image.tmdb.org/t/p/original${backdrop}`}>
        <SessionTitle>
          Descubra um filme aleatório
        </SessionTitle>
        <SurpriseCard />
      </Container>
    </BackdropContext.Provider>
  )
}