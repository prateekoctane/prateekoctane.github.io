import { Box, Heading, Image, Text } from '@chakra-ui/react'
import styles from '../CSS/Home.module.css'

export function Home() {
  return (
    <Box id="home" w="100%"
    h="700px"
    display="flex"
    justifyContent="space-evenly"
    alignItems="center"
    >
      <Box
        w="100%"
        h="500px"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        id={styles.box}
        
      >
        <img src="/prateek.jpg" alt="prateek.jpg" id={styles.image} />

        <Box borderRadius="50px" p="20px" boxShadow="2xl" id={styles.greeting}>
          <Heading size="3xl" align=" left" id={styles.heading}>
            Greetings, I am Prateek !!
          </Heading>
          <Text fontSize="3xl" align="left" mt=" 20px" className={styles.text}>
            Full Stack Web Developer
          </Text>
          <Text fontSize="3xl" align="left" mt=" 20px" className={styles.text}>
            From Lucknow,Uttar Pradesh{' '}
          </Text>

          <Box
            display=" flex"
            w="210px"
            ml="20px"
            mt="20px"
            id={styles.contact}
          >
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
      </Box>
  )
}
