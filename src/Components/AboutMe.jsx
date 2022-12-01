import { Box, Heading, Text, Button, Link } from '@chakra-ui/react'

export function AboutMe() {
  return (
    <Box border="1px solid black" w="100%" h="400px" id="about" pt="50px">
      <Heading align="left">About Me</Heading>

      <Box>
        <Text align="left" w="400px">
          An aspiring Full Stack Web Developer with an eye for detail and
          design. Very thoughtful in creating robust and elegant websites using
          MERN stack. Also adept in HTML, CSS & JS. Passionate about building a
          fine user experience. Genuinely looking forward to the experience of
          working in an organization.
        </Text>

        <Link href="https://drive.google.com/file/d/1VJzvHdisgV5td0WpKfovrptjiMuI6cDB/view?usp=sharing" isExternal>
          <Button w="300px" h="100px" bg="purple.600">Resume</Button>
        </Link>
      </Box>
    </Box>
  )
}
