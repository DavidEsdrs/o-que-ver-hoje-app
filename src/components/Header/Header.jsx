import styled from "styled-components"

const Title = styled.h1`
  font-size: 1rem;
`

export function Header() {
  return (
    <header>
      <Title>
        O que ver hoje?
      </Title>     
    </header>
  )
}