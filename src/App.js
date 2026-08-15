import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
