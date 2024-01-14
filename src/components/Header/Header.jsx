import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Menu } from "../Menu/Menu";
import { FaSearch } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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

const Navigation = styled.nav`
  background-color: ${props => props.theme.mainColor};
  padding: 1rem;
  border-radius: 25px;
  color: white;
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`

const InputLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

const Input = styled.input`
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
`

const NavItem = styled.li`
  position: relative;
  overflow: hidden;
  cursor: pointer;
`

const NavButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: white;
  font-size: 1rem;
  padding: 5px 10px;
  position: relative;
  transition: 200ms;
  
  &::before {
    cursor: pointer;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100%;
    background-color: white;
    transition: 200ms;
  }

  &:hover {
    color: ${props => props.theme.mainColor};
  }

  &:hover::before {
    left: 0;
  }
`

const ButtonText = styled.p`
  z-index: 10;
  position: relative;
  font-weight: 800;
`

const VisitGithubButton = styled.button`
  border: none;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 100%;
  border-radius: 25px;
  background-color: ${props => props.theme.mainColor};
  color: white;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 200ms;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${props => props.theme.secondaryColor};
    left: 0;
    top: 100%;
    border-radius: 25px;
    transition: 200ms;
  }

  &:hover {
    color: ${props => props.theme.mainColor};
  }

  &:hover::before {
    top: 0;
  }
`

const VisitGithubButtonText = styled.p`
  position: relative;
  z-index: 10;
  font-weight: 600;
`

const GithubIcon = styled(FaGithub)`
  position: relative;
  z-index: 10;
`

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = (e) => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <Container>
      <Title>
        O que ver hoje?
      </Title>
      <Navigation>
        <List>
          <NavItem>
            <NavButton>
              <ButtonText>
                filmes
              </ButtonText>
            </NavButton>
          </NavItem>
          <NavItem>
            <NavButton>
              <ButtonText>
                séries
              </ButtonText>
            </NavButton>
          </NavItem>
          <li>
            <InputLabel>
              <Input type="text" placeholder="pesquisar" />
              <FaSearch/>
            </InputLabel>
          </li>
        </List>
      </Navigation>
      <VisitGithubButton>
        <VisitGithubButtonText>
          Ver no Github
        </VisitGithubButtonText>
        <GithubIcon size={24} cursor={"pointer"} />
      </VisitGithubButton>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </Container>
  )
}