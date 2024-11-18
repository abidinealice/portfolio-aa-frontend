import { Box } from "@mui/material";
import Home from "../Home"
import About from "../About";
import Projects from "../Projects";
import Skills from "../Skills";
import Contact from "../Contact";
import Footer from "../../components/Footer";

function Main() {
  
    return (
      <Box>
        <Home/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
      </Box>
    );
  }
  
  export default Main;
  