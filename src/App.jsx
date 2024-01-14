import styled from "styled-components"
import { Header } from "./components/Header/Header"
import { Recomendations } from "./components/Recomendations/Recomendations"

const Container = styled.div``

function App() {
  return (
    <Container>
      <Header/>
      <Recomendations />
    </Container>
  )
}

export default App
