import styled from "styled-components"
import { Header } from "./components/Header/Header"
import { Recomendations } from "./components/Recomendations/Recomendations"
import { SurpriseMovie } from "./components/SurpriseMovie/SurpriseMovie"
import { Outlet } from "react-router"

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
        <SurpriseMovie />
        <Outlet />
      </List>
    </Container>
  )
}

export default App
