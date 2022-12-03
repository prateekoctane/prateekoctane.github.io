import { Box, Heading, Link, Button, Text } from '@chakra-ui/react'
import { ChevronDownIcon,HamburgerIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import styles from '../CSS/Navbar.module.css'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

export function Navbar() {





  return (
    <Box h="50px" w="100%">
      <Box
        id={styles.container}
        // border="1px solid black"
        bg="gray"
        h="50px"
        w="100%"
        position="fixed"
        display="flex"
        justifyContent="space-between"
        zIndex="2"
      >
        <Box>
          <Heading>Prateek Bhattacharya</Heading>
        </Box>

        <Box display="flex" justifyContent="space-around" alignItems="center" w="60%"  id={styles.hamburger}  >
  
          <Link href="#home">    <Text fontSize="lg" fontWeight="bold" >Home</Text> </Link>
          <Link href="#about">   <Text fontSize="lg" fontWeight="bold" >About Me</Text> </Link>
          <Link href="#skills">  <Text fontSize="lg" fontWeight="bold" >Skills  </Text>      </Link>
          <Link href="#project"> <Text fontSize="lg" fontWeight="bold" >Projects</Text>    </Link>
          <Link href="#contact"> <Text fontSize="lg" fontWeight="bold" >Contact </Text>     </Link>
          <Link href="#resume">  <Text fontSize="lg" fontWeight="bold">Resume  </Text>    </Link>
        </Box>

        <Box id={styles.menu}>
          <Menu  display="grid">
            <MenuButton as={IconButton} aria-label='Options' icon={<HamburgerIcon />} variant='outline' />
            
            <MenuList>
              <MenuItem> <Link href="#home">Home</Link> </MenuItem>
              <MenuItem> <Link href="#about">About Me</Link> </MenuItem>
              <MenuItem> <Link href="#skills">Skills</Link> </MenuItem>
              <MenuItem> <Link href="#project"> Projects </Link> </MenuItem>
              <MenuItem> <Link href="#contact">Contact</Link> </MenuItem>
              <MenuItem> <Link href="#resume">Resume</Link> </MenuItem>
            </MenuList>
          </Menu>
        </Box>


      </Box>
    </Box>
  )
}
