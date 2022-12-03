import GitHubCalendar from 'react-github-calendar'
import { Box, Heading } from '@chakra-ui/react'

export function Calendar() {
  return (
    <Box  w=" 100%" align="center" mt="100px">
      <Heading mb="20px">My GitHub Calendar</Heading>
      <GitHubCalendar username="prateekoctane" />
    </Box>
  )
}
