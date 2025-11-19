import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaRocket, 
  FaPalette, 
  FaMobile, 
  FaCode, 
  FaSearch, 
  FaCog,
  FaCheck,
  FaClock
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const services = [
    {
      id: 1,
      icon: <FaRocket />,
      title: 'Performance Solutions',
      description: 'Optimize your website for lightning-fast loading speeds and smooth user experiences.',
      features: ['Core Web Vitals Optimization', 'Lazy Loading', 'Code Splitting', 'Caching Strategies'],
      delivery: '1-2 weeks',
      popular: true
    },
    {
      id: 2,
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'Create beautiful, intuitive user interfaces with exceptional user experience design.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      delivery: '2-3 weeks'
    },
    {
      id: 3,
      icon: <FaMobile />,
      title: 'Responsive Web Development',
      description: 'Build websites that look and work perfectly on all devices and screen sizes.',
      features: ['Mobile-First Design', 'Cross-Browser Compatibility', 'Touch-Friendly Interfaces', 'Progressive Enhancement'],
      price: 'Starting at $399',
      delivery: '2-3 weeks'
    },
    {
      id: 4,
      icon: <FaCode />,
      title: 'React Development',
      description: 'Modern React applications with clean code, best practices, and latest features.',
      features: ['Component Architecture', 'State Management', 'API Integration', 'Testing'],
      delivery: '3-4 weeks'
    },
    {
      id: 5,
      icon: <FaSearch />,
      title: 'SEO Optimization',
      description: 'Improve your website visibility and ranking on search engines.',
      features: ['Technical SEO', 'On-Page Optimization', 'Performance SEO', 'Analytics Setup'],
      price: 'Starting at $199',
      delivery: '1 week'
    },
    {
      id: 6,
      icon: <FaCog />,
      title: 'Website Maintenance',
      description: 'Keep your website updated, secure, and running smoothly.',
      features: ['Security Updates', 'Performance Monitoring', 'Backup Solutions', 'Technical Support'],
      delivery: 'Ongoing'
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
    <section id="services" className="services">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-gradient">Services</span>
        </motion.h2>

        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Comprehensive web development services to bring your digital ideas to life
        </motion.p>

        <motion.div
          ref={ref}
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`service-card ${service.popular ? 'popular' : ''}`}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {service.popular && (
                <div className="popular-badge">
                  Most Popular
                </div>
              )}
              
              <div className="service-icon">
                {service.icon}
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature">
                    <FaCheck className="feature-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="service-meta">
                <div className="service-price">
                  {service.price}
                </div>
                <div className="service-delivery">
                  <FaClock className="delivery-icon" />
                  <span>{service.delivery}</span>
                </div>
              </div>
              
              <motion.button 
                className="service-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3>Ready to start your project?</h3>
          <p>Let's discuss your requirements and create something amazing together</p>
          <div className="cta-buttons">
            <motion.a 
              href="#contact" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
            </motion.a>
            <motion.a 
              href="#projects" 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;