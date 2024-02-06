import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import About from "./components/about";
import Footer from "./components/footer";
import Skills from "./components/skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}

export default App;
