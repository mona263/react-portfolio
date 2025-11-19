import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDownload, FaFilePdf, FaCheck, FaClock, FaFileAlt, FaUserTie } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '15+', label: 'Technologies' }
  ];

  
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 6,
    duration: 4 + Math.random() * 4
  }));

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
    
      const cvUrl = 'https://drive.google.com/file/d/15uHuCPx5qh--H-c6YAZanpIqM5rhKbfA/view?usp=drivesdk';
      
      
      window.open(cvUrl, '_blank');
      
      setIsDownloaded(true);
      setTimeout(() => setIsDownloaded(false), 3000);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          ref={ref}
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {}
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
          >
            <div className="image-wrapper">
              {}
              <div className="floating-particles">
                {particles.map(particle => (
                  <div
                    key={particle.id}
                    className="particle"
                    style={{
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                      left: `${particle.left}%`,
                      top: `${particle.top}%`,
                      animationDelay: `${particle.delay}s`,
                      animationDuration: `${particle.duration}s`
                    }}
                  />
                ))}
              </div>
              
              {}
              <div className="image-glow"></div>
              
              {}
              <img 
                src="/images/IMG.png" 
                alt="Mona Abdelazeem - Frontend Developer"
                className="profile-real-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const placeholder = e.target.parentNode.querySelector('.profile-placeholder');
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />
              
              {}
              <div className="profile-placeholder" style={{display: 'none'}}>
                <span className="placeholder-text">MA</span>
              </div>
            </div>
          </motion.div>
          
          {}
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="section-title">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <h3 className="about-subtitle">
              Frontend Developer Specialized in <span className="highlight">React.js</span>
            </h3>
            
            <div className="about-description">
              <p>
                I'm a passionate software developer with over 2 years of experience in web development. 
                I love creating innovative web applications using the latest technologies.
              </p>
              <p>
                I specialize in React.js and its ecosystem, always striving to write clean, 
                maintainable code that follows best practices in the field.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {}
            <div className="about-actions">
              <motion.div 
                className="action-card download-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <div className="action-icon">
                  <FaFilePdf />
                </div>
                <div className="action-content">
                  <h4>Download CV</h4>
                  <p>Get my complete profile</p>
                  <button 
                    onClick={handleDownloadCV}
                    className={`download-btn ${isDownloading ? 'loading' : ''} ${isDownloaded ? 'success' : ''}`}
                    disabled={isDownloading}
                  >
                    {isDownloaded ? (
                      <>
                        <FaCheck className="btn-icon" />
                        Downloaded!
                      </>
                    ) : isDownloading ? (
                      <>
                        <div className="loading-spinner"></div>
                        Downloading...
                      </>
                    ) : (
                      <>
                        <FaDownload className="btn-icon" />
                        Download PDF
                      </>
                    )}
                  </button>
                </div>
              </motion.div>

              <motion.a 
                href="#contact"
                className="action-card contact-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <div className="action-icon">
                  <FaUserTie />
                </div>
                <div className="action-content">
                  <h4>Contact Me</h4>
                  <p>Let's work together</p>
                  <span className="action-link">Get in touch →</span>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;