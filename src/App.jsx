import React from 'react';
import "./App.css";
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/home';
import About from './components/about/about'
import Skills from './components/skills/skills';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';
import ScrollUp from './components/scrollup/scrollup';


const App = () => {
  return (
    <>
    <Sidebar />
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </main>
    <Footer />
    <ScrollUp />
    </>
  )
}

export default App

