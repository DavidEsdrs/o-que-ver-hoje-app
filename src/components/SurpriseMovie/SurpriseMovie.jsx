import styled from "styled-components"
import { SurpriseCard } from "./SurpriseCard"
import { createContext, useContext, useState } from "react"

const Container = styled.section`
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
  height: 80vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  overflow: hidden;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    bottom: 0;
    left: 0;
    height: 100%;
    z-index: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 1) 70%);
    pointer-events: none;
  }
`

const BackdropImage = styled.img`
  position: absolute;
  width: 100%;

  filter: blur(8px);
  -webkit-filter: blur(8px);

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
        {backdrop && <BackdropImage src={`https://image.tmdb.org/t/p/original${backdrop}`} />}
        <SurpriseCard />
      </Container>
    </BackdropContext.Provider>
  )
}