import { Box, Heading, Text, Button, Link, Image } from '@chakra-ui/react'
import styles from '../CSS/AboutMe.module.css'

export function AboutMe() {
  return (
    <Box
      // border="1px solid black"
      w="100%"
      h="600px"
      id="about"
      pt="50px"
    >
      <Box boxShadow="2xl"  pt="60px" w="1200px" margin="auto" p="20px" borderRadius="50px" id={styles.card}>
        <Heading size="3xl" align="left" id={styles.heading} >About Me</Heading>
        <Text fontSize="2xl" align="left" mt="20px" id={styles.text} >
          An aspiring Full Stack Web Developer with an eye for detail and
          design. Very thoughtful in creating robust and elegant websites using
          MERN stack. Also adept in HTML, CSS & JS. Passionate about building a
          fine user experience. Genuinely looking forward to the experience of
          working in an organization.
        </Text>
        <Box align="right">
        <Link
          href="https://drive.google.com/file/d/1VJzvHdisgV5td0WpKfovrptjiMuI6cDB/view?usp=sharing"
          isExternal
        >
          <Button w="250px" h="70px" mt="20px" bg="purple.600" id={styles.btn}>
            Resume
          </Button>
        </Link>
        </Box>

        <Box display=" flex" w="210px" ml="20px"  mt="20px" id={styles.contact}>

              <Image
                src="https://static.vecteezy.com/system/resources/thumbnails/009/469/620/small/linkedin-american-business-icon-logo-illustration-free-vector.jpg"
                alt="linkedIn"
                w="100px"
                id={styles.img1}
              />
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgf5GvxhVHYUqV9roWJ4I4xyszcLCUHxRpxXKfx6R-5gSQuxrApw2QADJwvxF6OLnM810&usqp=CAU"
                alt="github"
                w="100px"
                id={styles.img2}
              />
            </Box>
      </Box>
    </Box>
  )
}
