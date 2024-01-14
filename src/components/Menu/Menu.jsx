import styled from "styled-components"
import { IoCloseSharp } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion"

const Container = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: white;
  padding: 1rem;
  z-index: 10;
`

export function Menu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <AnimatePresence>
      {isMenuOpen && 
        <Container 
          as={motion.div} 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <IoCloseSharp 
            size={24} 
            cursor={"pointer"}
            onClick={e => setIsMenuOpen(prev => !prev)} 
          />
        </Container>
      }
    </AnimatePresence>
  )
}