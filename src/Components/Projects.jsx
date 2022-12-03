import { Box, Heading, Image, Text, Link, Button } from '@chakra-ui/react';
import styles from "../CSS/Projects.module.css"

export function Projects() {
  return (
    <Box  w="100%" h="780px" pt="50px"  id={styles.mainContainer}>

    <Box id="project"   >
      <Heading mb="50px">Projects</Heading>

      <Box
        display="flex"
        justifyContent="space-around"
        textAlign="center"
        id={styles.container}
      >
        <Box id={styles.project1} h="550px" w="500px" boxShadow="2xl" borderRadius="50px" >
          <Box borderBottom="5px solid black" borderRadius="50px">
            <Image
              src="/chargebee.png"
              alt="ChargeBee.com"
              w="500px"
              borderRadius="50px"
            />
          </Box>

          <Text fontWeight="bold" fontSize="20px">
            Chargebee.com Clone
          </Text>
          <Text w="200px" align="left" ml="20px" mt="10px">
            Chargebee is a subscription management system which can help you
            handle all the aspects of the subscription life cycle.
          </Text>
          <Text align="left" ml="20px" mt="10px">
            {' '}
            <Text fontWeight="bold">Tech Stack</Text> :HTML | CSS |JavaScript
            
          </Text>

          <Box mt="20px">
            <Link
              href="https://github.com/crusher8010/brawny-plough-6910"
              isExternal
            >
              <Button>GitHub</Button>
            </Link>
            <Link href="https://lucky-cranachan-2874c7.netlify.app/" isExternal>
              <Button>Deployed</Button>
            </Link>
          </Box>
        </Box>
{/*   ------------------------------------------------------------------------------- */}
        <Box id={styles.project2} h="550px" w="500px" boxShadow="2xl" borderRadius="50px"  >
          <Box borderBottom="5px solid black" borderRadius="50px">
            <Image
              src="/naukri.png"
              alt="naukri.com"
              w="500px"
              borderRadius="50px"
            />
          </Box>

          <Text fontWeight="bold" fontSize="20px">
            Naukri.com Clone
          </Text>
          <Text w="200px" align="left" ml="20px" mt="10px">
            Naukri.com is an Indian employment website operating in India and
            Middle East.
          </Text>
          <Text align="left" ml="20px" mt="10px">
            {' '}
            <Text fontWeight="bold">Tech Stack</Text> :HTML | CSS |JavaScript
            |React
          </Text>

          <Box mt="45px">
            <Link
              href="https://github.com/crusher8010/brawny-plough-6910"
              isExternal
            >
              <Button>GitHub</Button>
            </Link>
            <Link href="https://lucky-cranachan-2874c7.netlify.app/" isExternal>
              <Button>Deployed</Button>
            </Link>
          </Box>
        </Box>

        {/* <Box border="1px solid black" textAlign="center">
          <Image src="/naukri.png" alt="Naukri.com" w="400px" />
          <Text>Naukri.com Clone</Text>
          <Text w="200px" align="center">
            Naukri.com is an Indian employment website operating in India and
            Middle East.
          </Text>
          <Text>Tech Stack:HTML | CSS |JavaScript |React</Text>

          <Link href="https://github.com/prateekoctane/previous-sound-2568" isExternal>
             <Button>GitHub</Button>
          </Link>
          <Link href="https://meripehlinaukri.netlify.app/" isExternal>
             <Button>Deployed</Button>
          </Link>
        </Box> */}
      </Box>
    </Box>
    </Box>
  )
}
