import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Send,
  Compass,
  PenTool,
  Building2,
  Ruler,
  Quote,
  Menu,
  X
} from 'lucide-react';
import './App.css';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'Azure Heights Tower',
      category: 'Commercial',
      location: 'Tehran, Iran',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
    },
    {
      title: 'Serenity Villa',
      category: 'Residential',
      location: 'Shiraz, Iran',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80'
    },
    {
      title: 'The Cultural Pavilion',
      category: 'Cultural',
      location: 'Isfahan, Iran',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80'
    },
    {
      title: 'Horizon Office Complex',
      category: 'Commercial',
      location: 'Mashhad, Iran',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80'
    },
    {
      title: 'Garden Residence',
      category: 'Residential',
      location: 'Tehran, Iran',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'
    },
    {
      title: 'Innovation Hub',
      category: 'Mixed Use',
      location: 'Tabriz, Iran',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80'
    }
  ];

  const services = [
    {
      icon: <Compass size={24} />,
      title: 'Architectural Design',
      description: 'Creating innovative and functional architectural solutions that blend aesthetics with purpose.'
    },
    {
      icon: <PenTool size={24} />,
      title: 'Interior Design',
      description: 'Crafting inspiring interior spaces that reflect your lifestyle and enhance daily living.'
    },
    {
      icon: <Building2 size={24} />,
      title: 'Urban Planning',
      description: 'Developing sustainable urban solutions that shape vibrant communities for generations.'
    },
    {
      icon: <Ruler size={24} />,
      title: 'Project Management',
      description: 'Ensuring seamless execution from concept to completion with precision and care.'
    }
  ];

  const team = [
    {
      name: 'Sara Ahmadi',
      role: 'Principal Architect',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80'
    },
    {
      name: 'Reza Mohammadi',
      role: 'Design Director',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80'
    },
    {
      name: 'Mina Karimi',
      role: 'Interior Lead',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80'
    }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="navbar__logo">
          Pele<span>kan</span>
        </a>

        <ul className="navbar__menu">
          <li><a href="#about" className="navbar__link">About</a></li>
          <li><a href="#projects" className="navbar__link">Projects</a></li>
          <li><a href="#services" className="navbar__link">Services</a></li>
          <li><a href="#team" className="navbar__link">Team</a></li>
          <li><a href="#contact" className="navbar__link">Contact</a></li>
        </ul>

        <a href="#contact" className="navbar__cta">Get in Touch</a>

        <button 
          className="navbar__mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            background: 'rgba(10, 10, 10, 0.98)',
            padding: '2rem',
            zIndex: 999,
            borderBottom: '1px solid var(--color-border)'
          }}
        >
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {['About', 'Projects', 'Services', 'Team', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="navbar__link"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontSize: '1.2rem' }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.section className="hero" style={{ opacity: heroOpacity }}>
        <div className="hero__background">
          <img 
            src="https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1920&q=80" 
            alt="Modern Architecture"
          />
          <div className="hero__overlay" />
        </div>

        <div className="hero__content">
          <motion.div 
            className="hero__text"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p className="hero__subtitle" variants={fadeInUp}>
              Architecture & Design Studio
            </motion.p>
            <motion.h1 className="hero__title" variants={fadeInUp}>
              Crafting <span>Timeless</span> Spaces That Inspire
            </motion.h1>
            <motion.p className="hero__description" variants={fadeInUp}>
              We transform visionary concepts into architectural masterpieces. 
              Our designs seamlessly blend innovation, functionality, and enduring beauty 
              to create spaces that elevate human experience.
            </motion.p>
            <motion.div className="hero__buttons" variants={fadeInUp}>
              <a href="#projects" className="btn-primary">
                View Our Work <ArrowRight size={18} />
              </a>
              <a href="#about" className="btn-secondary">
                Learn More
              </a>
            </motion.div>

            <motion.div className="hero__stats" variants={fadeInUp}>
              <div className="hero__stat">
                <div className="hero__stat-number">15+</div>
                <div className="hero__stat-label">Years Experience</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">120+</div>
                <div className="hero__stat-label">Projects Completed</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">25</div>
                <div className="hero__stat-label">Design Awards</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero__visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero__image-container">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Featured Project"
                className="hero__image"
              />
              <div className="hero__image-border" />
            </div>
          </motion.div>
        </div>

        <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="about">
        <motion.div 
          className="about__container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="about__image-wrapper" variants={fadeIn}>
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
              alt="About Pelekan"
              className="about__image"
            />
            <div className="about__image-accent" />
          </motion.div>

          <motion.div className="about__content" variants={staggerContainer}>
            <motion.div className="section-label" variants={fadeInUp}>
              About Us
            </motion.div>
            <motion.h2 className="section-title" variants={fadeInUp}>
              We Design Spaces That <span>Inspire</span> and Endure
            </motion.h2>
            <motion.p className="about__text" variants={fadeInUp}>
              Founded in 2009, Pelekan has grown to become one of Iran's most respected 
              architectural practices. We believe that great architecture is born from the 
              perfect balance of creativity, technical expertise, and deep understanding 
              of human needs.
            </motion.p>
            <motion.p className="about__text" variants={fadeInUp}>
              Our multidisciplinary team combines decades of experience with fresh 
              perspectives, ensuring every project benefits from both wisdom and innovation. 
              From concept to completion, we guide our clients through a collaborative 
              journey that transforms their vision into reality.
            </motion.p>

            <motion.div className="about__features" variants={staggerContainer}>
              <motion.div className="about__feature" variants={fadeInUp}>
                <div className="about__feature-icon">
                  <Compass size={20} />
                </div>
                <div className="about__feature-text">
                  <h4>Visionary Design</h4>
                  <p>Pushing boundaries with creative solutions</p>
                </div>
              </motion.div>
              <motion.div className="about__feature" variants={fadeInUp}>
                <div className="about__feature-icon">
                  <Building2 size={20} />
                </div>
                <div className="about__feature-text">
                  <h4>Sustainable Practice</h4>
                  <p>Building for future generations</p>
                </div>
              </motion.div>
              <motion.div className="about__feature" variants={fadeInUp}>
                <div className="about__feature-icon">
                  <PenTool size={20} />
                </div>
                <div className="about__feature-text">
                  <h4>Detail Oriented</h4>
                  <p>Perfection in every element</p>
                </div>
              </motion.div>
              <motion.div className="about__feature" variants={fadeInUp}>
                <div className="about__feature-icon">
                  <Ruler size={20} />
                </div>
                <div className="about__feature-text">
                  <h4>Technical Excellence</h4>
                  <p>Precision engineering throughout</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <motion.div 
          className="projects__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="projects__header-text">
            <motion.div className="section-label" variants={fadeInUp}>
              Our Portfolio
            </motion.div>
            <motion.h2 className="section-title" variants={fadeInUp}>
              Featured <span>Projects</span>
            </motion.h2>
          </div>
          <motion.a 
            href="#" 
            className="btn-secondary"
            variants={fadeInUp}
          >
            View All Projects <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>

        <motion.div 
          className="projects__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={project.image}
                alt={project.title}
                className="project-card__image"
              />
              <div className="project-card__overlay">
                <span className="project-card__category">{project.category}</span>
                <h3 className="project-card__title">{project.title}</h3>
                <span className="project-card__location">{project.location}</span>
              </div>
              <div className="project-card__arrow">
                <ArrowUpRight size={20} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="services__container">
          <motion.div 
            className="services__header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="section-label" variants={fadeInUp}>
              What We Offer
            </motion.div>
            <motion.h2 className="section-title" variants={fadeInUp}>
              Comprehensive <span>Services</span>
            </motion.h2>
            <motion.p 
              style={{ color: 'var(--color-text-muted)', marginTop: '1rem' }}
              variants={fadeInUp}
            >
              From initial concept to final construction, we provide end-to-end 
              architectural services tailored to your unique vision.
            </motion.p>
          </motion.div>

          <motion.div 
            className="services__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                variants={fadeInUp}
              >
                <div className="service-card__number">0{index + 1}</div>
                <div className="service-card__icon">{service.icon}</div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="team__container">
          <motion.div 
            className="team__header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="section-label" variants={fadeInUp}>
              Our Team
            </motion.div>
            <motion.h2 className="section-title" variants={fadeInUp}>
              Meet the <span>Visionaries</span>
            </motion.h2>
            <motion.p 
              style={{ color: 'var(--color-text-muted)', marginTop: '1rem' }}
              variants={fadeInUp}
            >
              Our talented team brings together diverse expertise and shared 
              passion for exceptional design.
            </motion.p>
          </motion.div>

          <motion.div 
            className="team__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="team-card"
                variants={fadeInUp}
              >
                <div className="team-card__image-wrapper">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="team-card__image"
                  />
                  <div className="team-card__overlay" />
                </div>
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <motion.div 
          className="testimonials__container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Quote className="testimonials__quote-icon" />
          </motion.div>
          <motion.p className="testimonials__content" variants={fadeInUp}>
            "Pelekan transformed our vision into a stunning reality. Their attention to 
            detail, creative approach, and professional execution exceeded all our 
            expectations. Working with them was an absolute pleasure from start to finish."
          </motion.p>
          <motion.div className="testimonials__author" variants={fadeInUp}>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
              alt="Client"
              className="testimonials__author-image"
            />
            <div className="testimonials__author-info">
              <h4>Ahmad Rezaei</h4>
              <p>CEO, Rezaei Holdings</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact__container">
          <motion.div 
            className="contact__info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="section-label" variants={fadeInUp}>
              Get in Touch
            </motion.div>
            <motion.h2 variants={fadeInUp}>
              Let's Create Something <span>Extraordinary</span>
            </motion.h2>
            <motion.p className="contact__info-text" variants={fadeInUp}>
              Ready to bring your vision to life? We'd love to hear about your 
              project and explore how we can help create something truly remarkable 
              together.
            </motion.p>

            <motion.div className="contact__details" variants={staggerContainer}>
              <motion.div className="contact__detail" variants={fadeInUp}>
                <div className="contact__detail-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact__detail-text">
                  <h4>Visit Us</h4>
                  <p>No. 42, Valiasr Street<br />Tehran, Iran</p>
                </div>
              </motion.div>
              <motion.div className="contact__detail" variants={fadeInUp}>
                <div className="contact__detail-icon">
                  <Phone size={20} />
                </div>
                <div className="contact__detail-text">
                  <h4>Call Us</h4>
                  <p>+98 21 1234 5678</p>
                </div>
              </motion.div>
              <motion.div className="contact__detail" variants={fadeInUp}>
                <div className="contact__detail-icon">
                  <Mail size={20} />
                </div>
                <div className="contact__detail-text">
                  <h4>Email Us</h4>
                  <p>info@pelekan.ir</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="contact__form"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="contact__form-title">Send Us a Message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Project Inquiry" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="contact__form-submit">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__brand">
            <div className="footer__logo">
              Pele<span>kan</span>
            </div>
            <p className="footer__description">
              Creating timeless architectural experiences that inspire, 
              innovate, and endure. Where vision meets precision.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="footer__column">
            <h4>Quick Links</h4>
            <ul className="footer__links">
              <li><a href="#about" className="footer__link">About Us</a></li>
              <li><a href="#projects" className="footer__link">Projects</a></li>
              <li><a href="#services" className="footer__link">Services</a></li>
              <li><a href="#team" className="footer__link">Our Team</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h4>Services</h4>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Architecture</a></li>
              <li><a href="#" className="footer__link">Interior Design</a></li>
              <li><a href="#" className="footer__link">Urban Planning</a></li>
              <li><a href="#" className="footer__link">Consultation</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h4>Contact</h4>
            <ul className="footer__links">
              <li><span className="footer__link">info@pelekan.ir</span></li>
              <li><span className="footer__link">+98 21 1234 5678</span></li>
              <li><span className="footer__link">Tehran, Iran</span></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Pelekan Architecture Studio. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
