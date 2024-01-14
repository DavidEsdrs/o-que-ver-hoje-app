import { motion } from "framer-motion"
import styled from "styled-components"

const Container = styled.li`
  :hover {
    cursor: pointer;
  }
`

const MovieTitle = styled.h3`
  font-size: 1rem;
  white-space: nowrap;
`
export function Movie({ title, poster_path }) {
  return (
    <Container>
      <motion.img 
        src={`https://image.tmdb.org/t/p/w200${poster_path}`} 
        alt="" 
        whileHover={{
          scale: 1.05
        }}
        whileTap={{ scale: 0.98 }}
      />
      <MovieTitle>
        {title}
      </MovieTitle>
    </Container>
  )
}