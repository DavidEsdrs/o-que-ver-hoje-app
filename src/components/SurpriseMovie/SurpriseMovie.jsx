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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  padding: 1rem;
`

const GenerateButton = styled.button`
  position: relative;
  cursor: pointer;
  padding: 10px 15px;
  width: 100%;
  border-radius: 20px;
  border: none;
  background-color: black;
  color: white;
  overflow: hidden;
  transition: 200ms;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: ${props => props.theme.secondaryColor};
    overflow: hidden;
    transition: 200ms;
  }

  &:hover::before {
    top: 0;
  }

  &:hover {
    color: black;
  }

  &:active {
    transform: scale(0.95);
  }
`

const ButtonText = styled.p`
  position: relative;
  z-index: 10;
  font-size: 14px;
  font-weight: 800;
`

export function SurpriseMovie() {
  return (
    <Container>
      <SessionTitle>
        Descubra um filme aleatório
      </SessionTitle>
      <SurpriseCard>
        <GenerateButton>
          <ButtonText>
            Surpreenda-me
          </ButtonText>
        </GenerateButton>
      </SurpriseCard>
    </Container>
  )
}