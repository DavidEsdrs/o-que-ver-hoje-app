import styled from "styled-components"
import { SurpriseCard } from "./SurpriseCard"
import { createContext, useContext, useState } from "react"

const Container = styled.section`
  padding: 1rem;
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
  /* background-color: ${props => props.theme.mainColor}; */
  
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  overflow: hidden;
`

const SessionTitle = styled.h3`
  margin: 0 auto;
  color: white;
  margin-bottom: 1rem;
`

const BackdropImage = styled.img`
  position: absolute;
  width: 100%;

  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);

  /* Center and scale the image nicely */
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
        <SessionTitle>
          Descubra um filme aleatório
        </SessionTitle>
        <SurpriseCard />
      </Container>
    </BackdropContext.Provider>
  )
}