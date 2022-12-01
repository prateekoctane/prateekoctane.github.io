import { Box, Heading, Image, Text, Link, Button } from '@chakra-ui/react'

export function Projects() {
  return (
    <Box id='project' border="1px solid black" w="100%" h="500px" pt="50px">
      <Heading>Projects</Heading>

      <Box display="flex" justifyContent="space-around" textAlign="center">
        <Box border="1px solid black">
          <Image src="/chargebee.png" alt="ChargeBee.com" w="400px" />
          <Text>Chargebee.com Clone</Text>
          <Text w="200px" align="center">
            Chargebee is a SaaS product company, which builds subscription and
            billing softwares.
          </Text>
          <Text>Tech Stack:HTML | CSS |JavaScript |React</Text>

          <Link href="https://github.com/crusher8010/brawny-plough-6910" isExternal>
             <Button>GitHub</Button>
          </Link>
          <Link href="https://lucky-cranachan-2874c7.netlify.app/" isExternal>
             <Button>Deployed</Button>
          </Link>
        </Box>

        <Box border="1px solid black" textAlign="center">
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
        </Box>
      </Box>
    </Box>
  )
}
