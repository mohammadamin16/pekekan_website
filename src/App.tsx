import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpLeft,
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
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const staggerContainer: Variants = {
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
      title: 'برج آبی‌رنگ',
      category: 'تجاری',
      location: 'تهران، ایران',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
    },
    {
      title: 'ویلای آرامش',
      category: 'مسکونی',
      location: 'شیراز، ایران',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80'
    },
    {
      title: 'پاویون فرهنگی',
      category: 'فرهنگی',
      location: 'اصفهان، ایران',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80'
    },
    {
      title: 'مجتمع اداری افق',
      category: 'تجاری',
      location: 'مشهد، ایران',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80'
    },
    {
      title: 'اقامتگاه باغ',
      category: 'مسکونی',
      location: 'تهران، ایران',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'
    },
    {
      title: 'مرکز نوآوری',
      category: 'چند منظوره',
      location: 'تبریز، ایران',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80'
    }
  ];

  const services = [
    {
      icon: <Compass size={24} />,
      title: 'طراحی معماری',
      description: 'خلق راه‌حل‌های معماری نوآورانه و کاربردی که زیبایی‌شناسی را با هدف ترکیب می‌کنند.'
    },
    {
      icon: <PenTool size={24} />,
      title: 'طراحی داخلی',
      description: 'طراحی فضاهای داخلی الهام‌بخش که بازتاب‌دهنده سبک زندگی شما و ارتقا‌دهنده زندگی روزمره هستند.'
    },
    {
      icon: <Building2 size={24} />,
      title: 'برنامه‌ریزی شهری',
      description: 'توسعه راه‌حل‌های پایدار شهری که جوامع پویا را برای نسل‌های آینده شکل می‌دهند.'
    },
    {
      icon: <Ruler size={24} />,
      title: 'مدیریت پروژه',
      description: 'تضمین اجرای بی‌نقص از مفهوم تا تکمیل با دقت و توجه.'
    }
  ];

  const team = [
    {
      name: 'سارا احمدی',
      role: 'معمار اصلی',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80'
    },
    {
      name: 'رضا محمدی',
      role: 'مدیر طراحی',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80'
    },
    {
      name: 'مینا کریمی',
      role: 'سرپرست داخلی',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80'
    }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="navbar__logo">
          پل<span>کان</span>
        </a>

        <ul className="navbar__menu">
          <li><a href="#about" className="navbar__link">درباره ما</a></li>
          <li><a href="#projects" className="navbar__link">پروژه‌ها</a></li>
          <li><a href="#services" className="navbar__link">خدمات</a></li>
          <li><a href="#team" className="navbar__link">تیم</a></li>
          <li><a href="#contact" className="navbar__link">تماس</a></li>
        </ul>

        <a href="#contact" className="navbar__cta">ارتباط با ما</a>

        <button 
          className="navbar__mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="منو"
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
            {['درباره ما', 'پروژه‌ها', 'خدمات', 'تیم', 'تماس'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item === 'درباره ما' ? 'about' : item === 'پروژه‌ها' ? 'projects' : item === 'خدمات' ? 'services' : item === 'تیم' ? 'team' : 'contact'}`} 
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
            alt="معماری مدرن"
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
              استودیو معماری و طراحی
            </motion.p>
            <motion.h1 className="hero__title" variants={fadeInUp}>
              خلق فضاهای <span>بی‌زمان</span> که الهام‌بخشند
            </motion.h1>
            <motion.p className="hero__description" variants={fadeInUp}>
              ما مفاهیم visionary را به شاهکارهای معماری تبدیل می‌کنیم.
              طراحی‌های ما نوآوری، عملکرد و زیبایی ماندگار را به هم می‌آمیزند
              تا فضاهایی که تجربه انسانی را ارتقا می‌دهند، ایجاد کنند.
            </motion.p>
            <motion.div className="hero__buttons" variants={fadeInUp}>
              <a href="#projects" className="btn-primary">
                <ArrowLeft size={18} /> مشاهده آثار
              </a>
              <a href="#about" className="btn-secondary">
                بیشتر بدانید
              </a>
            </motion.div>

            <motion.div className="hero__stats" variants={fadeInUp}>
              <div className="hero__stat">
                <div className="hero__stat-number">۱۵+</div>
                <div className="hero__stat-label">سال تجربه</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">۱۲۰+</div>
                <div className="hero__stat-label">پروژه تکمیل‌شده</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">۲۵</div>
                <div className="hero__stat-label">جایزه طراحی</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero__visual"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero__image-container">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="پروژه ویژه"
                className="hero__image"
              />
              <div className="hero__image-border" />
            </div>
          </motion.div>
        </div>

        <div className="hero__scroll">
          <span>اسکرول</span>
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
              alt="درباره پلکان"
              className="about__image"
            />
            <div className="about__image-accent" />
          </motion.div>

          <motion.div className="about__content" variants={staggerContainer}>
            <motion.div className="section-label" variants={fadeInUp}>
              درباره ما
            </motion.div>
            <motion.h2 className="section-title" variants={fadeInUp}>
              ما فضاهایی طراحی می‌کنیم که <span>الهام‌بخش</span> و ماندگارند
            </motion.h2>
            <motion.p className="about__text" variants={fadeInUp}>
              تأسیس‌شده در سال ۱۳۸۸، پلکان به یکی از محترم‌ترین دفاتر معماری ایران تبدیل شده است.
              ما معتقدیم معماری عالی از تعادل کامل خلاقیت، تخصص فنی و درک عمیق
              نیازهای انسانی به وجود می‌آید.
            </motion.p>
            <motion.p className="about__text" variants={fadeInUp}>
              تیم چند رشته‌ای ما دهه‌ها تجربه را با دیدگاه‌های تازه ترکیب می‌کند،
              تا هر پروژه از خرد و نوآوری بهره‌مند شود.
              از مفهوم تا تکمیل، ما مشتریان را در سفری مشارکتی همراهی می‌کنیم
              که چشم‌انداز آنها را به واقعیت تبدیل می‌کند.
            </motion.p>

            <motion.div className="about__features" variants={staggerContainer}>
              <motion.div className="about__feature" variants={fadeInUp}>
                <div className="about__feature-icon">
                  <Compass size={20} />
                </div>
                <div className="about__feature-text">
                  <h4>طراحی visionary</h4>
                  <p>فشار دادن مرزها با راه‌حل‌های خلاقانه</p>
                </div>
              </motion.div>
              <motion.div className="about__feature" variants={fadeInUp}>
                <div className="about__feature-icon">
                  <Building2 size={20} />
                </div>
                <div className="about__feature-text">
                  <h4>عملکرد پایدار</h4>
                  <p>ساختن برای نسل‌های آینده</p>
                </div>
              </motion.div>
              <motion.div className="about__feature" variants={fadeInUp}>
                <div className="about__feature-icon">
                  <PenTool size={20} />
                </div>
                <div className="about__feature-text">
                  <h4>توجه به جزئیات</h4>
                  <p>کمال در هر عنصر</p>
                </div>
              </motion.div>
              <motion.div className="about__feature" variants={fadeInUp}>
                <div className="about__feature-icon">
                  <Ruler size={20} />
                </div>
                <div className="about__feature-text">
                  <h4>تخصص فنی</h4>
                  <p>مهندسی دقیق در تمام مراحل</p>
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
              نمونه کارها
            </motion.div>
            <motion.h2 className="section-title" variants={fadeInUp}>
              پروژه‌های <span>ویژه</span>
            </motion.h2>
          </div>
          <motion.a 
            href="#" 
            className="btn-secondary"
            variants={fadeInUp}
          >
            <ArrowUpLeft size={16} /> مشاهده همه پروژه‌ها
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
                <ArrowUpLeft size={20} />
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
              آنچه ارائه می‌دهیم
            </motion.div>
            <motion.h2 className="section-title" variants={fadeInUp}>
              خدمات <span>جامع</span>
            </motion.h2>
            <motion.p 
              style={{ color: 'var(--color-text-muted)', marginTop: '1rem' }}
              variants={fadeInUp}
            >
              از مفهوم اولیه تا ساخت نهایی، ما خدمات معماری end-to-end
              متناسب با چشم‌انداز منحصر به فرد شما ارائه می‌دهیم.
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
                <div className="service-card__number">۰{index + 1}</div>
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
              تیم ما
            </motion.div>
            <motion.h2 className="section-title" variants={fadeInUp}>
              آشنا شوید با <span>رویاپردازان</span>
            </motion.h2>
            <motion.p 
              style={{ color: 'var(--color-text-muted)', marginTop: '1rem' }}
              variants={fadeInUp}
            >
              تیم بااستعداد ما تخصص متنوع و علاقه مشترک به طراحی استثنایی
              را گرد هم آورده است.
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
            «پلکان چشم‌انداز ما را به واقعیتی خیره‌کننده تبدیل کرد. توجه به
            جزئیات، رویکرد خلاقانه و اجرای حرفه‌ای آنها فراتر از تمام
            انتظارات ما بود. کار با آنها از ابتدا تا انتها یک لذت مطلق بود.»
          </motion.p>
          <motion.div className="testimonials__author" variants={fadeInUp}>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
              alt="مشتری"
              className="testimonials__author-image"
            />
            <div className="testimonials__author-info">
              <h4>احمد رضایی</h4>
              <p>مدیرعامل، گروه رضایی</p>
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
              ارتباط با ما
            </motion.div>
            <motion.h2 variants={fadeInUp}>
              بیایید چیزی <span>استثنایی</span> بسازیم
            </motion.h2>
            <motion.p className="contact__info-text" variants={fadeInUp}>
              آماده‌اید چشم‌انداز خود را زنده کنید؟ دوست داریم درباره پروژه شما بشنویم
              و بررسی کنیم چگونه می‌توانیم با هم چیزی واقعاً شگفت‌انگیز خلق کنیم.
            </motion.p>

            <motion.div className="contact__details" variants={staggerContainer}>
              <motion.div className="contact__detail" variants={fadeInUp}>
                <div className="contact__detail-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact__detail-text">
                  <h4>ملاقات با ما</h4>
                  <p>خیابان ولیعصر، پلاک ۴۲<br />تهران، ایران</p>
                </div>
              </motion.div>
              <motion.div className="contact__detail" variants={fadeInUp}>
                <div className="contact__detail-icon">
                  <Phone size={20} />
                </div>
                <div className="contact__detail-text">
                  <h4>تماس با ما</h4>
                  <p>۰۲۱-۱۲۳۴۵۶۷۸</p>
                </div>
              </motion.div>
              <motion.div className="contact__detail" variants={fadeInUp}>
                <div className="contact__detail-icon">
                  <Mail size={20} />
                </div>
                <div className="contact__detail-text">
                  <h4>ایمیل به ما</h4>
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
            <h3 className="contact__form-title">ارسال پیام</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">نام شما</label>
                  <input type="text" id="name" placeholder="نام و نام خانوادگی" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">آدرس ایمیل</label>
                  <input type="email" id="email" placeholder="example@email.com" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">موضوع</label>
                <input type="text" id="subject" placeholder="درخواست پروژه" />
              </div>
              <div className="form-group">
                <label htmlFor="message">پیام</label>
                <textarea id="message" placeholder="درباره پروژه خود به ما بگویید..."></textarea>
              </div>
              <button type="submit" className="contact__form-submit">
                <Send size={18} /> ارسال پیام
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
              پل<span>کان</span>
            </div>
            <p className="footer__description">
              خلق تجربیات معماری بی‌زمان که الهام‌بخش، نوآورانه و ماندگارند.
              جایی که چشم‌انداز با دقت ملاقات می‌کند.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="اینستاگرام">
                <Instagram size={18} />
              </a>
              <a href="#" className="footer__social-link" aria-label="لینکدین">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="footer__column">
            <h4>دسترسی سریع</h4>
            <ul className="footer__links">
              <li><a href="#about" className="footer__link">درباره ما</a></li>
              <li><a href="#projects" className="footer__link">پروژه‌ها</a></li>
              <li><a href="#services" className="footer__link">خدمات</a></li>
              <li><a href="#team" className="footer__link">تیم ما</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h4>خدمات</h4>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">معماری</a></li>
              <li><a href="#" className="footer__link">طراحی داخلی</a></li>
              <li><a href="#" className="footer__link">برنامه‌ریزی شهری</a></li>
              <li><a href="#" className="footer__link">مشاوره</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h4>تماس</h4>
            <ul className="footer__links">
              <li><span className="footer__link">info@pelekan.ir</span></li>
              <li><span className="footer__link">۰۲۱-۱۲۳۴۵۶۷۸</span></li>
              <li><span className="footer__link">تهران، ایران</span></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} استودیو معماری پلکان. تمامی حقوق محفوظ است.
          </p>
          <div className="footer__legal">
            <a href="#">حریم خصوصی</a>
            <a href="#">شرایط استفاده</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
