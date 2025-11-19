import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      url: 'https://github.com/MonaAbdelazeem', 
      name: 'GitHub' 
    },
    { 
      icon: <FaLinkedin />, 
      url: 'https://linkedin.com/in/mona-abdelazeem', 
      name: 'LinkedIn' 
    },
    { 
      icon: <FaEnvelope />, 
      url: 'mailto:monaabdelazeem96@gmail.com', 
      name: 'Email' 
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Mona Abdelazeem</h3>
            <p className="footer-description">
              Frontend developer specialized in React.js, always striving to build exceptional web experiences.
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">My Services</h4>
            <ul className="footer-links">
              <li>Web Development</li>
              <li>React Applications</li>
              <li>User Interfaces</li>
              <li>Technical Consultations</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="contact-info">
              <a href="mailto:monaabdelazeem96@gmail.com">
                <FaEnvelope /> monaabdelazeem96@gmail.com
              </a>
              <a href="tel:+201022425897">
                <FaPhone /> +20 1022425897
              </a>
              <a href="https://maps.google.com/?q=Cairo,Beni_Suef,Egypt" target="_blank" rel="noopener noreferrer">
                <FaMapMarkerAlt /> Cairo, Egypt, Beni_Suef
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Mona Abdelazeem. All rights reserved.</p>
          <p>Made with ❤️ using React.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;