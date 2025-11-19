import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiReact, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiNodedotjs, 
  SiGit,
  SiGithub,
  SiBootstrap,
  SiTailwindcss
} from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const skills = [
    { 
      name: 'HTML5', 
      level: 95, 
      icon: <SiHtml5 />, 
      color: '#E34F26' 
    },
    { 
      name: 'CSS3', 
      level: 94, 
      icon: <SiCss3 />, 
      color: '#b615aeff' 
    },
     { 
      name: 'Bootstrap', 
      level: 85, 
      icon: <SiBootstrap />, 
      color: '#5b47a2ff' 
    },
    { 
      name: 'Tailwindcss', 
      level: 75, 
      icon: <SiTailwindcss />, 
      color: '#f4a5fcff' 
    },
    { 
      name: 'JavaScript', 
      level: 85, 
      icon: <SiJavascript />, 
      color: '#F7DF1E' 
    },
    { 
      name: 'React.js', 
      level: 80, 
      icon: <SiReact />, 
      color: '#61DAFB' 
    },
    
    { 
      name: 'Node.js', 
      level: 68, 
      icon: <SiNodedotjs />, 
      color: '#339933' 
    },
    
    { 
      name: 'Git', 
      level: 60, 
      icon: <SiGit />, 
      color: '#F05032' 
    },
    { 
      name: 'Github', 
      level: 60, 
      icon: <SiGithub />, 
      color: '#f80505ff' 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Technical <span className="text-gradient">Skills</span>
        </motion.h2>

        <motion.div 
          ref={ref}
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card card-hover"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="skill-header">
                <div 
                  className="skill-icon"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              
              <div className="skill-progress-container">
                <div className="skill-progress-bar">
                  <motion.div
                    className="skill-progress-fill progress-bar-animated"
                    style={{ 
                      backgroundColor: skill.color,
                      width: inView ? `${skill.level}%` : '0%'
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${skill.level}%` : '0%' }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                  />
                </div>
                <span className="skill-percentage" style={{ color: skill.color }}>
                  {skill.level}%
                </span>
              </div>

              <div className="skill-level-badge">
                <div 
                  className="level-dot"
                  style={{ backgroundColor: skill.color }}
                />
                <span>
                  {skill.level >= 90 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Beginner'} Level
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;