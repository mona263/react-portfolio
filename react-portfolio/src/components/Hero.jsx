import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Rocket, Code2, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['React Developer', 'Frontend Developer', 'Problem Solver'];

  useEffect(() => {
    if (currentIndex < texts.length) {
      const timeout = setTimeout(() => {
        setCurrentText(texts[currentIndex].substring(0, currentText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentIndex]);

  useEffect(() => {
    if (currentText === texts[currentIndex]) {
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % texts.length);
        setCurrentText('');
      }, 2000);
    }
  }, [currentText, currentIndex]);

  return (
    <section id="home" className="hero">
      

      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {}
          <div className="hero-profile-section">
            {}
            
            <motion.div 
              className="hero-text-content"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div 
                className="welcome-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
              >
                <Sparkles className="sparkle-icon" />
                Welcome to My Portfolio
              </motion.div>

              <motion.h1 className="hero-title">
  <span className="hi-emoji">👋</span> Hi, I'm{" "}
  <span className="name-gradient">
    Mona Abd Elezeem
  </span>
</motion.h1>
              <motion.div 
                className="typing-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                <Code2 className="code-icon" />
                <span className="typing-text">{currentText}</span>
                <span className="cursor">|</span>
              </motion.div>

              <motion.p 
                className="hero-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                Passionate Frontend Developer specializing in React.js and modern web technologies. 
                I create exceptional digital experiences with clean code and innovative solutions.
              </motion.p>

              <motion.div 
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <motion.a 
                  href="#projects" 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Rocket className="btn-icon" />
                  View My Work
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Talk
                </motion.a>
              </motion.div>

              
            </motion.div>
          </div>

          {}
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <div className="floating-card">
              <div className="code-window">
                <div className="window-header">
                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="code-content">
                  <pre>{`function Developer() {
  return {
    name: "Mona Abd Elezeem",
    role: "Frontend Developer",
    skills: ["React", "JavaScript", "TypeScript"],
    passion: "Creating amazing web experiences"
  };
}`}</pre>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="scroll-icon" />
      </motion.div>
       
    </section>
  );
};

export default Hero;