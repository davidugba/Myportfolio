import React from "react";
import "./index.css"
import Navbar from "./Navbar";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';



library.add(faGithub, faLinkedin, faTwitter, faInstagram);




function App() {

  return(
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

        
      </main>
      <Footer />
    </div>
    
  

    

  );
  
}

export default App
