import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate, FaAward, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const certifications = [
    {
      id: 1,
      title: 'Frontend Web Developer',
      issuer: 'NTI',
      date: '2025',
      skills: ['HTML5','CSS3','Bootstrap', 'JavaScript', 'React'],
      badge: '🎓',
      color: '#61DAFB',
      featured: true,
      showLink: false
    },
    {
      id: 2,
      title: 'Web Designer',
      issuer: 'Digital Egypt Youth Program',
      date: '2025',
      skills: ['HTML5', 'CSS3', 'JavaScript','Bootstrap'],
      badge: '🏆',
      color: '#4285F4',
      link: 'https://drive.google.com/file/d/14vKv8dZaUJEjrM_ASAeWctr4Ji3lbdyx/view?usp=drivesdk',
      showLink: true
    },
    {
      id: 3,
      title: 'Web Development Fundamentals',
      issuer: 'SprintUp',
      date: '2025',
      skills: ['HTML5', 'CSS3', 'JavaScript'],
      badge: '⚡',
      color: '#0A0A23',
      link: 'https://drive.google.com/file/d/14SnMpP4Bo5zXVYb1OurYXz_hi-F0zAlN/view?usp=drivesdk' ,
      showLink: true
    },
    
    {
      id: 4,
      title: 'Git & GitHub',
      issuer: 'LinkedIn Learning',
      date: '2024',
      skills: ['Version Control', 'Collaboration'],
      badge: '🔧',
      color: '#6F42C1',
      showLink: false
    },
    
    {
      id: 5,
      title: 'Communication Skills',
      issuer: 'Career',
      date: '2025',
      skills: ['Listening', 'Speaking','Observing and Empathising','Stress management'],
      badge: '🚀',
      color: '#34A853',
      link: 'https://drive.google.com/file/d/14lCKluoyGZvOmQCFfNNGOUG7byI6I_8q/view?usp=drivesdk',
      showLink: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-gradient">Certifications</span>
        </motion.h2>

        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Continuous learning and professional development in modern web technologies
        </motion.p>

        <motion.div
          ref={ref}
          className="certifications-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className={`certification-card ${cert.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {cert.featured && (
                <div className="featured-badge">
                  <FaAward className="badge-icon" />
                  Featured
                </div>
              )}
              
              <div className="cert-header">
                <div 
                  className="cert-badge"
                  style={{ backgroundColor: cert.color }}
                >
                  <span className="badge-emoji">{cert.badge}</span>
                </div>
                <div className="cert-title">
                  <h3>{cert.title}</h3>
                  <p className="issuer">{cert.issuer}</p>
                </div>
              </div>

              <div className="cert-details">
                <div className="cert-date">
                  <FaCalendarAlt className="icon" />
                  <span>{cert.date}</span>
                </div>
                
                <div className="cert-skills">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
                {}
  {cert.showLink && (
    <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">
      <FaExternalLinkAlt className="link-icon" />
      View Certificate
    </a>
  )}
</div>

            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="certifications-footer"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
         
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;