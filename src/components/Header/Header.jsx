import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi";

const Container = styled.header`
  padding: 2rem 1rem;
  position: relative;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1rem;

    width: calc(100% - 2rem);
    height: 1px;

    background-color: #0000002c;
  }
`

const Title = styled.h1`
  font-size: 1.3rem;
  color: ${props => props.theme.mainColor};
`

export function Header() {
  return (
    <Container>
      <Title>
        O que ver hoje?
      </Title>
      <GiHamburgerMenu size={24} />
    </Container>
  )
}