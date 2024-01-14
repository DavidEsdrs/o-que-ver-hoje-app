import styled from "styled-components"
import { Header } from "./components/Header/Header"
import { Recomendations } from "./components/Recomendations/Recomendations"
import { SurpriseMovie } from "./components/SurpriseMovie/SurpriseMovie"

const Container = styled.div``

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

function App() {
  return (
    <Container>
      <Header/>
      <List>
        <Recomendations />
        <SurpriseMovie />
      </List>
    </Container>
  )
}

export default App
