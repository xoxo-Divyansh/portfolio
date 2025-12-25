import AboutMe from "./Components/About/AboutMe";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Contact from "./Sections/Contact";
import Projects from "./Sections/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;
