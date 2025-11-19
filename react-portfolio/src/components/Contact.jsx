import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, MapPin, Phone, Mail, Github, Linkedin, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  

  const sendEmail = async (data) => {
  // الحل الأكثر موثوقية مع Formspree
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('subject', data.subject);
  formData.append('message', data.message);
  formData.append('_replyto', data.email);
  formData.append('_subject', `New Message from Portfolio: ${data.subject}`);

  const response = await fetch('https://formspree.io/f/mpzvqjqg', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });
  
  console.log('Response status:', response.status);
  
  if (!response.ok) {
    const errorData = await response.text();
    console.error('Error details:', errorData);
    throw new Error('Failed to send message. Please try again.');
  }
  
  return response;
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);
  
  try {
    
    if (!formData.name.trim() || !formData.email.trim() || 
        !formData.subject.trim() || !formData.message.trim()) {
      throw new Error('Please fill in all required fields');
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error('Please enter a valid email address');
    }

    await sendEmail(formData);
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
  } catch (error) {
    setIsSubmitting(false);
    setSubmitStatus('error');
    console.error('Submission error:', error);
    
    setTimeout(() => setSubmitStatus(null), 5000);
  }
};

  const socialLinks = [
    { 
      icon: <Github />, 
      url: 'https://github.com/Mona263',
      name: 'GitHub', 
      color: '#333' 
    },
    { 
      icon: <Linkedin />, 
      url: 'https://www.linkedin.com/in/mona-abdelazeem-0ab506282/',
      name: 'LinkedIn', 
      color: '#0077b5' 
    },
    { 
      icon: <MessageCircle />, 
      url: 'https://wa.me/201022425897', 
      name: 'WhatsApp', 
      color: '#25D366' 
    },
    { 
      icon: <Mail />, 
      url: 'mailto:monaabdelazeem96@gmail.com', 
      name: 'Email', 
      color: '#ea4335' 
    }
  ];

  const contactInfo = [
    { 
      icon: <MapPin />, 
      title: 'Location', 
      details: 'Cairo, Egypt, Beni_Suef', 
      color: '#e94560',
      link: 'https://maps.google.com/?q=Cairo,Beni_Suef,Egypt'
    },
    { 
      icon: <Phone />, 
      title: 'Phone / WhatsApp', 
      details: '+20 1022425897', 
      color: '#25D366',
      link: 'https://wa.me/201022425897'
    },
    { 
      icon: <Mail />, 
      title: 'Email', 
      details: 'monaabdelazeem96@gmail.com', 
      color: '#764ba2',
      link: 'mailto:monaabdelazeem96@gmail.com'
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
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Let's Work <span className="text-gradient">Together</span>
        </motion.h2>

        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ready to bring your ideas to life? Let's discuss your project and create something amazing!
        </motion.p>

        <motion.div
          ref={ref}
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {}
          <motion.div className="contact-info" variants={itemVariants}>
            <div className="contact-header">
              <h3 className="contact-info-title">Get In Touch</h3>
              <p className="contact-info-description">
                I'm always excited to collaborate on new and innovative projects. 
                Feel free to reach out through any channel that works best for you.
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.link}
                  className="contact-item card-hover"
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.3 }}
                  target={item.link.includes('http') ? '_blank' : '_self'}
                  rel={item.link.includes('http') ? 'noopener noreferrer' : ''}
                >
                  <div 
                    className="contact-icon"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{item.title}</h4>
                    <p>{item.details}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-section">
              <h4>Connect With Me</h4>
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ '--social-color': link.color }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 5,
                      backgroundColor: link.color
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                    <span className="social-tooltip">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            
            <motion.a
              href="https://wa.me/201022425897"
              className="whatsapp-cta"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="whatsapp-icon" />
              <span>Chat on WhatsApp</span>
            </motion.a>
          </motion.div>

          {}
          <motion.form 
            className="contact-form card-hover"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <motion.div 
              className="form-header"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3>Send a Message</h3>
              <p>I typically respond within a few hours</p>
            </motion.div>

           <div className="form-column">
  <motion.div 
    className="form-group"
    whileFocus={{ scale: 1.02 }}
  >
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Your full name"
      required
      className="form-input"
    />
    <label className="form-label">Name</label>
  </motion.div>

  <motion.div 
    className="form-group"
    whileFocus={{ scale: 1.02 }}
  >
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Your email address"
      required
      className="form-input"
    />
    <label className="form-label">Email</label>
  </motion.div>
</div>
           

            <motion.div 
              className="form-group"
              whileFocus={{ scale: 1.02 }}
            >
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project or inquiry subject"
                required
                className="form-input"
              />
              <label className="form-label">Subject</label>
            </motion.div>

            <motion.div 
              className="form-group"
              whileFocus={{ scale: 1.02 }}
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, timeline, and budget..."
                rows="6"
                required
                className="form-textarea"
              ></textarea>
              <label className="form-label">Project Details</label>
            </motion.div>

            <motion.button 
              type="submit" 
              className="submit-btn btn-magnetic"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? (
                <div className="loading-spinner">
                  <div className="spinner"></div>
                  Sending...
                </div>
              ) : (
                <>
                  <Send className="btn-icon" />
                  Send Message
                </>
              )}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✅ Thank you! Your message has been sent successfully. I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div 
                className="error-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ❌ Sorry, there was an error sending your message. Please try again or contact me directly via WhatsApp.
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;