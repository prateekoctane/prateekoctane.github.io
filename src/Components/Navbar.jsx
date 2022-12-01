import { Box, Heading, Link } from '@chakra-ui/react'


export function Navbar() {
  return <Box h="50px" w="100%" >

      <Box border="1px solid black" bg="gray" h="50px" w="100%" position="fixed" display="flex" justifyContent="space-between" zIndex="2">
        <Box>
          <Heading>Prateek Bhattacharya</Heading>
        </Box>
         
         <Box display="flex" justifyContent="space-around" w="60%" >
  
          <Link href="#home">Home</Link>
          <Link href="#about">About Me</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#project"> Project</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#resume">Resume</Link>
         </Box>
      </Box>
    
  </Box>
}
