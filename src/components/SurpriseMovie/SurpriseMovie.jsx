import styled from "styled-components"

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

const SurpriseCard = styled.div`
  width: 200px;
  height: 300px;
  background: linear-gradient(to bottom right, ${props => props.theme.neutralColor} 40%, ${props => props.theme.secondaryColor});
  border-radius: 25px;
`

export function SurpriseMovie() {
  return (
    <Container>
      <SessionTitle>
        Surpreenda-me
      </SessionTitle>
      <SurpriseCard/>
    </Container>
  )
}