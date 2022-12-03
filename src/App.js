import './App.css';
import { VStack, Box } from "@chakra-ui/react";
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { AboutMe } from './Components/AboutMe';
import { Skills } from "./Components/Skills"
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Resume } from './Components/Resume';
import { Calendar } from "./Components/Calendar"


function App() {

  document.title = "Prateek's Portfolio";
  
  return (
    <div className="App" style={{backgroundColor:"rgb(234, 228, 228)", color: ""}} > 

      {/* <Calendar /> */}
      
      <Box bg="837569">

        <VStack>

          <Navbar />
          <Home />
          <AboutMe />
          <Skills />
          <Projects />
          <Calendar />
          <Contact />
          <Resume />
          
        </VStack>
      </Box>
     
    </div>
  );
}

export default App;
