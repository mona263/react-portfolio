import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      id: 1,
      title: 'Website-market',
      description: 'Integrated electronics marketplace featuring intelligent order tracking - guaranteeing secure and effortless delivery of your products',
      fullDescription: 'A fully responsive website built with HTML5 and CSS3, featuring modern design principles and optimal user experience.',
      images: [
        '/images/project1-1.jpg',
        '/images/project1-2.jpg',
        '/images/project1-3.jpg'
      ], 
      thumbnail: '/images/project1.jpg', 
      technologies: ['HTML5', 'CSS3', 'JavaScript','Bootstrap', 'react', 'Responsive Design'],
      github: 'https://github.com/mona263',
      demo: '#',
      featured: true,
      category: ['Frontend', 'React'],
    },
    {
      id: 2,
      title: 'To-Do App', 
      description: 'Add new tasks and reset the input',
      fullDescription: 'Mark tasks as Complete/incomplete with a strike-through effect ,delete tasks individually , store and retrieve tasks from localStorage so the list is saved even after refreshing the page .',
      images: [
        '/images/project3-1.jpg', 
      ],
      thumbnail: '/images/project3.jpg', 
      technologies: ['React Hooks', 'Bootstrap', 'JavaScript ES6'],
      github: 'https://github.com/mona263',
      demo: '#',
      featured: false,
      category: ['Frontend', 'React'],
    },
    
    {
      id: 3,
      title: 'Glowing App', 
      description: 'a fully responsive skincare products website .', 
      fullDescription: 'creating a clean, modern, and user-friendly interface that allows users to explore different skincare products, view product details, and interact with a functional shopping experience .', 
      images: [
        '/images/project2-1.jpg', 
        '/images/project2-2.jpg',
      ],
      thumbnail: '/images/project2.jpg', 
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com/mona263',
      demo: '#',
      featured: true,
      category: 'Frontend'
    },
    {
      id: 4,
      title: 'Login & Register Pages', 
      description: 'Login & Register Pages , React + Formik for form state management and submission flow',
      fullDescription: 'Show / hide password toggles for password & confirm password , inline field errors using formik  .',
      images: [
        '/images/project5-1.jpg', 
      ],
      thumbnail: '/images/project5.jpg', 
      technologies: ['HTML', 'CSS','Bootstrap','Node.js','React'],
      github: 'https://github.com/mona263',
      demo: '#',
      featured: false,
      category: 'React'
    },
    {
      id: 5,
      title: 'Portfolio page', 
      description: 'portfolio using the bootstrap framework',
      fullDescription: 'Creating a fully responsive design that adapts to all screen sizes and gained more confidence in building modern, responsive website .',
      images: [
        '/images/project6-1\\=.jpg',
      ],
      thumbnail: '/images/project6.jpg', 
      technologies: ['HTML', 'CSS','Bootstrap'],
      github: 'https://github.com/mona263',
      demo: '#',
      featured: false,
      category: 'Frontend'
    },
    {
      id: 6,
      title: 'Fashion Industry Through Alense Website', 
      description: 'fully responsive website',
      fullDescription: 'This project was all about clean design, accessibility, and flexibility across all screen sizes - whether you are browsing from laptop, tablet, or phone, the layout adjusts seamlessly .',
      images: [
        '/images/project4-1.jpg', 
        '/images/project4-2.jpg',
        '/images/project4-3.jpg',
      ],
      thumbnail: '/images/project4.jpg', 
      technologies: ['HTML', 'CSS'],
      github: 'https://github.com/mona263',
      demo: '#',
      featured: false,
      category: 'Frontend'
    },
     {
      id: 7,
      title: 'Natural Website', 
      description: 'fully responsive website',
      fullDescription: 'This project was all about clean design, accessibility, and flexibility across all screen sizes - whether you are browsing from laptop, tablet, or phone .',
      images: [
        '/images/project7-1.jpg', 
        '/images/project7-2.jpg',
        '/images/project7-3.jpg',
        '/images/project7-4.jpg',
        '/images/project7-5.jpg',
        '/images/project7-6.jpg',
        '/images/project7-7.jpg',
        '/images/project7-8.jpg',
      ],
      thumbnail: '/images/project7.jpg', 
      technologies: ['HTML', 'CSS'],
      github: 'https://github.com/mona263',
      demo: '#',
      featured: false,
      category: 'Frontend'
    },
  ];


  const categories = ['All', 'Frontend', 'React'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => 
        Array.isArray(project.category) 
          ? project.category.includes(activeCategory)
          : project.category === activeCategory
      );

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 3);

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
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-gradient">Projects</span>
        </motion.h2>

        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore a collection of my featured projects that reflect my passion for web development
        </motion.p>

        {}
        <motion.div 
          className="projects-filters"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(category);
                setShowAllProjects(false);
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card card-hover ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onClick={() => openProjectModal(project)}
            >
              {project.featured && (
                <div className="featured-badge">
                  ⭐ Featured
                </div>
              )}
              
              {}
              <div className="project-image">
                {project.thumbnail ? (
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="project-thumbnail"
                    onError={(e) => {
                     
                      e.target.style.display = 'none';
                      const placeholder = e.target.parentNode.querySelector('.image-placeholder');
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                ) : null}
                
                <div className="image-placeholder" style={project.thumbnail ? {display: 'none'} : {}}>
                  <div className="project-number">0{index + 1}</div>
                </div>
                
                <div className="project-overlay">
                  <div className="overlay-content">
                    <span className="view-project">View Project</span>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-category">
                  {Array.isArray(project.category) ? project.category.join(', ') : project.category}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag more">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {}
        {filteredProjects.length > 3 && (
          <motion.div 
            className="show-more-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button 
              className="show-more-btn"
              onClick={toggleShowAllProjects}
            >
              {showAllProjects ? (
                <>
                  <Minus size={18} />
                  Show Less
                </>
              ) : (
                <>
                  <Plus size={18} />
                  Show More Projects ({filteredProjects.length - 3} more)
                </>
              )}
            </button>
          </motion.div>
        )}

        {}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProjectModal}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-btn" onClick={closeProjectModal}>
                  <X size={24} />
                </button>

                <div className="modal-gallery">
                  <div className="gallery-container">
                    <button className="nav-btn prev-btn" onClick={prevImage}>
                      <ChevronLeft size={24} />
                    </button>
                    
                    {}
                    <div className="main-image">
                      {selectedProject.images && selectedProject.images.length > 0 ? (
                        <img 
                          src={selectedProject.images[currentImageIndex]} 
                          alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                          className="modal-main-image"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            const placeholder = e.target.parentNode.querySelector('.image-placeholder');
                            if (placeholder) placeholder.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      
                      <div className="image-placeholder large" style={selectedProject.images && selectedProject.images.length > 0 ? {display: 'none'} : {}}>
                        <div className="image-counter">
                          {currentImageIndex + 1} / {selectedProject.images.length}
                        </div>
                      </div>
                    </div>

                    <button className="nav-btn next-btn" onClick={nextImage}>
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  {}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <div className="image-thumbnails">
                      {selectedProject.images.map((image, index) => (
                        <div
                          key={index}
                          className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                          onClick={() => setCurrentImageIndex(index)}
                        >
                          <img 
                            src={image} 
                            alt={`Thumbnail ${index + 1}`}
                            className="thumbnail-image"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="modal-details">
                  <div className="modal-header">
                    <div>
                      <span className="project-category">
                        {Array.isArray(selectedProject.category) ? selectedProject.category.join(', ') : selectedProject.category}
                      </span>
                      <h2 className="modal-title">{selectedProject.title}</h2>
                    </div>
                    <div className="modal-links">
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="demo-link">
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="github-link">
                        <Github size={18} />
                        Source Code
                      </a>
                    </div>
                  </div>

                  <p className="modal-description">{selectedProject.fullDescription}</p>

                  <div className="technologies-grid">
                    <h4>Technologies Used:</h4>
                    <div className="tech-list">
                      {selectedProject.technologies.map((tech, index) => (
                        <div key={index} className="tech-item">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      <li>Responsive design for all screens</li>
                      <li>Modern and smooth user interface</li>
                      <li>Optimized and fast performance</li>
                      <li>Clean and maintainable code</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;