import React from 'react';
import { MotionConfig } from 'framer-motion';
import './App.css';
import BackgroundAnimation from './components/BackgroundAnimation';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="App">
        <BackgroundAnimation />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
           <Services />
      <Certifications />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;