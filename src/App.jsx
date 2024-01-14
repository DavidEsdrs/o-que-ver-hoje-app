import styled from "styled-components"
import { Header } from "./components/Header/Header"
import { Recomendations } from "./components/Recomendations/Recomendations"
import { SurpriseMovie } from "./components/SurpriseMovie/SurpriseMovie"

const Container = styled.div``

function App() {
  return (
    <Container>
      <Header/>
      <Recomendations />
      <SurpriseMovie />
    </Container>
  )
}

export default App
