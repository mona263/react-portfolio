import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { Share2 } from 'lucide-react';

const Header = () => {
  const [isDark, setIsDark] = useState(true); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.body.classList.add('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const shareOptions = [
    {
      name: 'Copy Link',
      icon: '📋',
      action: () => {
        navigator.clipboard.writeText(window.location.href);
        setShowShareModal(false);
        alert('✅ Portfolio link copied to clipboard!');
      }
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      action: () => window.open(`https://wa.me/?text=Check out Mona Abdelazeem's portfolio: ${window.location.href}`)
    },
    {
      name: 'Email',
      icon: '📧',
      action: () => window.open(`mailto:?subject=Mona Abdelazeem - Portfolio&body=Check out this amazing portfolio: ${window.location.href}`)
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      action: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`)
    }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand">
          <a href="#home" className="logo">
            <span className="logo-text">Portfolio</span>
          </a>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a 
                  href={item.href} 
                  className="nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          {}
          <div className="action-buttons">
            {}
            <button
              className="share-btn"
              onClick={() => setShowShareModal(true)}
            >
              <Share2 size={18} />
              <span className="share-text">Share</span>
            </button>

            {}
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
            >
              {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
          </div>

          {}
          <button 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {}
        {showShareModal && (
          <div className="share-modal-overlay" onClick={() => setShowShareModal(false)}>
            <div className="share-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Share My Portfolio</h3>
                <button 
                  className="close-btn"
                  onClick={() => setShowShareModal(false)}
                >
                  &times;
                </button>
              </div>
              
              <p className="modal-description">
                Share my work with others who might be interested!
              </p>
              
              <div className="share-options">
                {shareOptions.map((option, index) => (
                  <button 
                    key={index} 
                    className="share-option"
                    onClick={option.action}
                  >
                    <span className="option-icon">{option.icon}</span>
                    <span className="option-name">{option.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;