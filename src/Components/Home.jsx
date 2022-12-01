import { Box, Heading, Image, Text } from '@chakra-ui/react'

export function Home() {
  return (
    <Box border="1px solid black" w="100%" h="400px" id="home" >
      

      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Box border="1px solid black" mt="60px">
          <Image src="/prateek.jpg" w="300px" borderRadius="50px"  />
        </Box>

        <Box border="1px solid black">
          <Heading>Greetings, I am Prateek</Heading>
          <Text>A Full Stack Web Developer</Text>
          <Text>From Lucknow,Uttar Pradesh </Text>
        </Box>

        <Box border="1px solid black">
          <Image
            src="https://static.vecteezy.com/system/resources/thumbnails/009/469/620/small/linkedin-american-business-icon-logo-illustration-free-vector.jpg"
            alt="linkedIn"
            w="100px"
          />
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgf5GvxhVHYUqV9roWJ4I4xyszcLCUHxRpxXKfx6R-5gSQuxrApw2QADJwvxF6OLnM810&usqp=CAU"
            alt="github"
            w="100px"
          />
        </Box>
      </Box>
    </Box>
  )
}
