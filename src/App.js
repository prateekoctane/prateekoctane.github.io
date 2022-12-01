import './App.css';
import { VStack, Box } from "@chakra-ui/react";
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { AboutMe } from './Components/AboutMe';
import { Skills } from "./Components/Skills"
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Resume } from './Components/Resume';

function App() {
  return (
    <div className="App" > 
      
      <Box bg="837569">

        <VStack>

          <Navbar />
          <Home />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
          <Resume />
        </VStack>
      </Box>
     
    </div>
  );
}

export default App;
