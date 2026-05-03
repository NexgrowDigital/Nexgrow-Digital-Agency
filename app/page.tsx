 'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { Video, Phone, MessageCircle, Mail } from 'lucide-react';

const services = [
  { icon: "WEB", title: "Website Design & Development", desc: "High-converting websites built for performance, branding, and growth." },
  { icon: "SEO", title: "Search Engine Optimization (SEO)", desc: "Rank higher and attract quality traffic with strategic SEO systems." },
  { icon: "PPC", title: "Pay Per Click Advertising (PPC)", desc: "Precision ad campaigns optimized for ROI and lead quality." },
  { icon: "SMM", title: "Social Media Management", desc: "Consistent social presence that engages audiences and builds trust." },
  { icon: "EML", title: "Email Marketing", desc: "Automated email funnels that nurture leads and boost conversions." },
  { icon: "ECO", title: "E-Commerce Development", desc: "Scalable e-commerce platforms designed to increase online sales." },
  { icon: "BRD", title: "Brand Identity & Logo Design", desc: "Memorable visual identity systems that differentiate your business." },
  { icon: "CPY", title: "Content Writing & Copywriting", desc: "Persuasive content that connects, ranks, and converts visitors." },
  { icon: "VID", title: "Video Editing & Reels", desc: "Attention-grabbing short-form videos tailored for social growth." },
  { icon: "CRM", title: "CRM & Automation Setup", desc: "Automate client journeys and streamline operations end-to-end." }
];

const portfolioItems = [
  { title: "Velocity Roofing Website", category: "Web Design", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200" },
  { title: "Apex Dental Website", category: "Web Design", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200" },
  { title: "LawFirm UX Redesign", category: "Web Design", image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=1200" },
  { title: "FinTech Landing Site", category: "Web Design", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200" },
  { title: "Salon SEO Growth Campaign", category: "SEO", image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200" },
  { title: "HVAC Local SEO Sprint", category: "SEO", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200" },
  { title: "Chiropractic SEO Boost", category: "SEO", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200" },
  { title: "Auto Repair SEO Pack", category: "SEO", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200" },
  { title: "Zenith Brand Revamp", category: "Branding", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200" },
  { title: "Nova Cafe Identity", category: "Branding", image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200" },
  { title: "Urban Gym Branding", category: "Branding", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200" },
  { title: "Boutique Logo System", category: "Branding", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200" },
  { title: "UrbanStyle Online Store", category: "E-Commerce", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200" },
  { title: "Beauty Store Migration", category: "E-Commerce", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200" },
  { title: "Pet Supplies Shop", category: "E-Commerce", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200" },
  { title: "Fashion Checkout Revamp", category: "E-Commerce", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200" },
  { title: "Realtor Social Funnel", category: "Social Media", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200" },
  { title: "Restaurant Reels Campaign", category: "Social Media", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200" },
  { title: "Clinic Lead Ads Creative", category: "Social Media", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200" },
  { title: "Auto Shop Content Plan", category: "Social Media", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200" },
  { title: "FitLife Landing Page", category: "Landing Page", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200" },
  { title: "Webinar Lead Page", category: "Landing Page", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200" },
  { title: "Dental Offer Funnel Page", category: "Landing Page", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200" },
  { title: "Real Estate Offer Page", category: "Landing Page", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200" }
];

const testimonials = [
  { text: "Nexgrow built our plumbing website in just 7 days. We started getting calls within weeks!", name: "Mike Davis", business: "Davis Plumbing TX", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" },
  { text: "Our Google ranking went from page 5 to page 1 in just 2 months. Absolutely incredible results!", name: "Sarah Johnson", business: "Johnson Salon NY", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" },
  { text: "Best investment we made for our restaurant. Online orders increased by 40% after our new website!", name: "Robert Martinez", business: "Casa Martinez Restaurant FL", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" },
  { text: "They managed our Facebook ads and we tripled our leads in just one month!", name: "Emily Clark", business: "Clark Real Estate CA", photo: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?auto=format&fit=crop&w=200&q=80" },
  { text: "Professional, fast and affordable. Nexgrow is the only agency we will ever use!", name: "James Wilson", business: "Wilson Auto Repair TX", photo: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=200&q=80" }
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [portfolioFilter, setPortfolioFilter] = useState('All');
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState({ type: '', text: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gsapReady, setGsapReady] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const servicesGridRef = useRef<HTMLDivElement>(null);
  const portfolioGridRef = useRef<HTMLDivElement>(null);
  const portfolioFiltersRef = useRef<HTMLDivElement>(null);
  const testimonialsTrackRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gsap) {
      setGsapReady(true);
    }
  }, []);

  useEffect(() => {
    if (!gsapReady) return;

    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    
    if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

    // Hero animations
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    
    gsap.from(".hero-badge", { y: -14, opacity: 0, duration: 0.7, ease: "power2.out", delay: 0.25 });
    gsap.from(".hero p", { y: 18, opacity: 0, duration: 0.8, ease: "power2.out", delay: 0.45 });
    gsap.from(".hero-actions .btn", { y: 14, opacity: 0, stagger: 0.08, duration: 0.55, ease: "power2.out", delay: 0.6 });
    gsap.from(".hero-trust-item", { y: 10, opacity: 0, stagger: 0.08, duration: 0.5, ease: "power2.out", delay: 0.82 });

    // Scroll animations
    gsap.utils.toArray(".reveal, .section-title, .section-subtitle, .about-text, .form-card, .stat-card").forEach((el: any) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 34 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 86%"
          }
        }
      );
    });

    // Stats counter
    document.querySelectorAll(".stat-number").forEach((stat: any) => {
      const target = parseInt(stat.dataset.target, 10);
      const suffix = stat.dataset.suffix || "";
      ScrollTrigger.create({
        trigger: stat,
        start: "top 85%",
        once: true,
        onEnter: () => {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              stat.textContent = Math.floor(obj.val) + suffix;
            }
          });
        }
      });
    });

    // Testimonials animation
    if (testimonialsTrackRef.current) {
      gsap.to(testimonialsTrackRef.current, {
        x: "-50%",
        duration: 44,
        ease: "none",
        repeat: -1
      });
    }

    // Refresh ScrollTrigger after fonts/images load
    requestAnimationFrame(() => {
      if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
    });
    setTimeout(() => {
      if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh(true);
    }, 600);

    return () => {
      if (ScrollTrigger) ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, [gsapReady]);

  useEffect(() => {
    if (!gsapReady || !portfolioGridRef.current) return;

    const gsap = (window as any).gsap;
    gsap.fromTo(
      ".portfolio-card",
      { y: 30, opacity: 0, scale: 0.97 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" }
    );
  }, [portfolioFilter, gsapReady]);

  const categories = ["All", ...Array.from(new Set(portfolioItems.map(item => item.category)))];
  const filteredPortfolio = portfolioFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === portfolioFilter);
  
  const displayPortfolio = isMobile && !mobileExpanded && portfolioFilter === "All"
    ? filteredPortfolio.slice(0, 4) 
    : filteredPortfolio;

  const handleLoadMore = () => {
    setMobileExpanded(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage({ type: '', text: '' });

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xkokdglz", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      });

      if (!response.ok) throw new Error("Submission failed");

      form.reset();
      setFormMessage({ type: 'success', text: "Thank you! Your appointment request has been sent." });
      setIsModalOpen(true);
      
      const gsap = (window as any).gsap;
      if (gsap) {
        gsap.fromTo("#successCheck", { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.8)" });
      }
    } catch (error) {
      setFormMessage({ type: 'error', text: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive" onLoad={() => setGsapReady(true)} />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="afterInteractive" />

      <div className={`site-loader ${isLoaded ? 'hidden' : ''}`}>
        <div className="loader-logo">Nexgrow Digital</div>
      </div>

      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} ref={navbarRef}>
        <div className="container nav-inner">
          <a className="logo" href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/NewGrow.png" alt="Nexgrow Digital" style={{ height: '35px', width: 'auto' }} />
            <span style={{ color: '#2d8653', fontWeight: 'bold' }}>Nexgrow Digital</span>
          </a>
          <nav>
            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <li><a className="nav-link" href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a className="nav-link" href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
              <li><a className="nav-link" href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a></li>
              <li><a className="nav-link" href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a className="nav-link" href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
              <li><Link href="/faqs" className="nav-link" onClick={() => setIsMenuOpen(false)}>FAQs</Link></li>
              <li><Link href="/appointment" className="btn btn-primary nav-cta" onClick={() => setIsMenuOpen(false)}>Book Free Strategy Call</Link></li>
            </ul>
          </nav>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">☰</button>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div>
              <div className="hero-badge">Trusted Full-Service Growth Partner for Service Businesses</div>
              <h1><span className="typing-target">We Grow Businesses Digitally</span></h1>
              <p>From websites to marketing — we handle everything your business needs to dominate online.</p>
              <div className="hero-actions">
                <Link href="/appointment" className="btn btn-primary">Book Free Strategy Call</Link>
                <a href="#portfolio" className="btn btn-secondary">View Our Work</a>
              </div>
              <div className="hero-trust">
                <span className="hero-trust-item">150+ Projects Delivered</span>
                <span className="hero-trust-item">Results-Focused Strategy</span>
                <span className="hero-trust-item">Transparent Weekly Reporting</span>
              </div>
            </div>
            <div className="hero-visual">
              <img
                className="hero-image"
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
                alt="Nexgrow Digital team discussing growth strategy"
                loading="eager"
              />
              <div className="hero-floating-card">
                <span className="check-icon">✓</span>
                <span>500+ Businesses Grown</span>
              </div>
            </div>
          </div>
          <a href="#services" className="scroll-down" aria-label="Scroll to next section"><span></span></a>
        </section>

        <section className="trusted-by-section">
          <div className="container">
            <h2 className="trusted-by-heading">Trusted By</h2>
            <div className="trusted-by-scroll">
              <div className="trusted-by-track">
                <div className="trusted-logo-item">
                  <img src="/Trusted_by_logo/Boltshift.jpg" alt="Boltshift" className="trusted-logo" />
                  <span className="trusted-logo-name">Boltshift</span>
                </div>
                <div className="trusted-logo-item">
                  <img src="/Trusted_by_logo/Eightball.jpg" alt="Eightball" className="trusted-logo" />
                  <span className="trusted-logo-name">Eightball</span>
                </div>
                <div className="trusted-logo-item">
                  <img src="/Trusted_by_logo/Europa.jpg" alt="Europa" className="trusted-logo" />
                  <span className="trusted-logo-name">Europa</span>
                </div>
                <div className="trusted-logo-item">
                  <img src="/Trusted_by_logo/PictelAI.jpg" alt="PictelAI" className="trusted-logo" />
                  <span className="trusted-logo-name">PictelAI</span>
                </div>
                <div className="trusted-logo-item">
                  <img src="/Trusted_by_logo/Railspeed.jpg" alt="Railspeed" className="trusted-logo" />
                  <span className="trusted-logo-name">Railspeed</span>
                </div>
                <div className="trusted-logo-item">
                  <img src="/Trusted_by_logo/FocalPoint.jpg" alt="FocalPoint" className="trusted-logo" />
                  <span className="trusted-logo-name">FocalPoint</span>
                </div>
                <div className="trusted-logo-item">
                  <img src="/Trusted_by_logo/Prometheus.jpg" alt="Prometheus" className="trusted-logo" />
                  <span className="trusted-logo-name">Prometheus</span>
                </div>
                <div className="trusted-logo-item">
                  <img src="/Trusted_by_logo/Euphoria.jpg" alt="Euphoria" className="trusted-logo" />
                  <span className="trusted-logo-name">Euphoria</span>
                </div>
                <div className="trusted-logo-item">
                  <img src="/Trusted_by_logo/Mastermail.jpg" alt="Mastermail" className="trusted-logo" />
                  <span className="trusted-logo-name">Mastermail</span>
                </div>
                {/* Duplicate for infinite scroll */}
                <div className="trusted-logo-item">
                  <img src="/Trusted_by_logo/Boltshift.jpg" alt="Boltshift" className="trusted-logo" />
                  <span className="trusted-logo-name">Boltshift</span>
                </div>
                <div className="trusted-logo-item">
                  <img src="/Trusted_by_logo/Eightball.jpg" alt="Eightball" className="trusted-logo" />
                  <span className="trusted-logo-name">Eightball</span>
                </div>
                <div className="trusted-logo-item">
                  <img src="/Trusted_by_logo/Europa.jpg" alt="Europa" className="trusted-logo" />
                  <span className="trusted-logo-name">Europa</span>
                </div>
                <div className="trusted-logo-item">
                  <img src="/Trusted_by_logo/PictelAI.jpg" alt="PictelAI" className="trusted-logo" />
                  <span className="trusted-logo-name">PictelAI</span>
                </div>
                <div className="trusted-logo-item">
                  <img src="/Trusted_by_logo/Railspeed.jpg" alt="Railspeed" className="trusted-logo" />
                  <span className="trusted-logo-name">Railspeed</span>
                </div>
                <div className="trusted-logo-item">
                  <img src="/Trusted_by_logo/FocalPoint.jpg" alt="FocalPoint" className="trusted-logo" />
                  <span className="trusted-logo-name">FocalPoint</span>
                </div>
                <div className="trusted-logo-item">
                  <img src="/Trusted_by_logo/Prometheus.jpg" alt="Prometheus" className="trusted-logo" />
                  <span className="trusted-logo-name">Prometheus</span>
                </div>
                <div className="trusted-logo-item">
                  <img src="/Trusted_by_logo/Euphoria.jpg" alt="Euphoria" className="trusted-logo" />
                  <span className="trusted-logo-name">Euphoria</span>
                </div>
                <div className="trusted-logo-item">
                  <img src="/Trusted_by_logo/Mastermail.jpg" alt="Mastermail" className="trusted-logo" />
                  <span className="trusted-logo-name">Mastermail</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-strip-inner">
            <div className="trust-strip-label">Trusted by growing businesses in:</div>
            <div className="trust-strip-logos">
              <span className="trust-logo">Home Services</span>
              <span className="trust-logo">Healthcare</span>
              <span className="trust-logo">Legal</span>
              <span className="trust-logo">E-Commerce</span>
              <span className="trust-logo">Real Estate</span>
              <span className="trust-logo">Local Businesses</span>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">Data-driven digital services designed to scale your visibility, conversions, and long-term business growth.</p>
            <div className="services-grid" ref={servicesGridRef}>
              {services.map((service, index) => (
                <article key={index} className="service-card glass reveal">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="portfolio">
          <div className="container">
            <h2 className="section-title">Our Work</h2>
            <p className="section-subtitle">A curated selection of projects across design, growth, branding, and conversion-focused marketing campaigns.</p>
            <div className="portfolio-controls" ref={portfolioFiltersRef}>
              {categories.map((cat, idx) => (
                <button
                  key={cat}
                  className={`filter-btn ${portfolioFilter === cat ? 'active' : ''}`}
                  onClick={() => setPortfolioFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="portfolio-grid" ref={portfolioGridRef}>
              {displayPortfolio.map((item, idx) => (
                <article key={idx} className="portfolio-card reveal">
                  <div className="portfolio-image" style={{ backgroundImage: `url('${item.image}')` }}>
                    <div className="portfolio-overlay">
                      <h3>{item.title}</h3>
                      <span>{item.category}</span>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <h3>{item.title}</h3>
                    <span>{item.category}</span>
                  </div>
                </article>
              ))}
            </div>
            {isMobile && !mobileExpanded && portfolioFilter === "All" && filteredPortfolio.length > 4 && (
              <button className="btn btn-secondary load-more-btn" onClick={handleLoadMore} style={{ marginTop: '24px', width: '100%' }}>
                Load More
              </button>
            )}
          </div>
        </section>

        <section className="section stats" id="stats">
          <div className="container">
            <div className="stats-grid">
              <article className="stat-card glass">
                <div className="stat-number" data-target="150" data-suffix="+">0</div>
                <div className="stat-label">Projects Completed</div>
              </article>
              <article className="stat-card glass">
                <div className="stat-number" data-target="80" data-suffix="+">0</div>
                <div className="stat-label">Happy Clients</div>
              </article>
              <article className="stat-card glass">
                <div className="stat-number" data-target="8" data-suffix="+">0</div>
                <div className="stat-label">Years Experience</div>
              </article>
              <article className="stat-card glass">
                <div className="stat-number" data-target="25" data-suffix="+">0</div>
                <div className="stat-label">Team Members</div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="results">
          <div className="container">
            <h2 className="section-title">Recent Client Wins</h2>
            <p className="section-subtitle">Quick performance snapshots from campaigns and websites launched for service-based businesses.</p>
            <div className="results-grid">
              <article className="result-card reveal">
                <div className="result-metric">+187%</div>
                <h3 className="result-title">Organic Leads Growth</h3>
                <p className="result-note">Local SEO and landing page optimization in 90 days.</p>
              </article>
              <article className="result-card reveal">
                <div className="result-metric">3.4x</div>
                <h3 className="result-title">Return on Ad Spend</h3>
                <p className="result-note">Google + Meta ad funnel with call-focused creative strategy.</p>
              </article>
              <article className="result-card reveal">
                <div className="result-metric">42%</div>
                <h3 className="result-title">Lower Cost Per Lead</h3>
                <p className="result-note">Conversion tracking cleanup and high-intent audience targeting.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-wrap">
            <div className="about-text">
              <span className="why-badge">Why Choose Us</span>
              <h2>We Are <span className="gradient-text">Nexgrow Digital</span></h2>
              <p>We are a full service digital agency helping businesses across the globe grow their online presence. From stunning websites to powerful marketing strategies, we deliver results that matter.</p>
              <ul className="check-list">
                <li className="check-card"><span className="check-icon-circle"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span>Result Driven Strategies</span></li>
                <li className="check-card"><span className="check-icon-circle"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span>Custom Tailored Solutions</span></li>
                <li className="check-card"><span className="check-icon-circle"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span>Transparent Reporting</span></li>
                <li className="check-card"><span className="check-icon-circle"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span>Dedicated Support Team</span></li>
              </ul>
              <div className="trust-badges">
                <div className="trust-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                  <span>100% Satisfaction Guarantee</span>
                </div>
                <div className="trust-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  <span>Trusted by 80+ Clients</span>
                </div>
                <div className="trust-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <span>5 Star Rated Agency</span>
                </div>
              </div>
            </div>
            <div className="about-3d">
              <img
                className="about-photo"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                alt="Nexgrow Digital team collaborating in modern office"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="section" id="testimonials">
          <div className="container">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">Real client feedback from businesses we helped grow through modern websites and measurable marketing campaigns.</p>
            <div className="testimonials-track-wrap">
              <div className="testimonials-track" ref={testimonialsTrackRef}>
                {[...testimonials, ...testimonials].map((t, idx) => (
                  <article key={idx} className="testimonial-card glass">
                    <div className="avatar"><img src={t.photo} alt={t.name} loading="lazy" referrerPolicy="no-referrer" /></div>
                    <div className="stars">★★★★★</div>
                    <p className="testimonial-text">"{t.text}"</p>
                    <div className="client-meta">— {t.name}, {t.business}</div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section appointment" id="appointment">
          <div className="container">
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-subtitle">Tell us about your project and we will get back to you within 24 hours.</p>
            <div className="form-card glass">
              <form ref={formRef} onSubmit={handleSubmit} action="https://formspree.io/f/xkokdglz" method="POST">
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="fullName">Full Name</label>
                    <input id="fullName" name="fullName" required placeholder="Enter your full name" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" required placeholder="Enter your email address" />
                  </div>
                  <div className="field">
                    <label htmlFor="whatsapp">WhatsApp Number</label>
                    <input id="whatsapp" name="whatsapp" required placeholder="Enter your WhatsApp number with country code" />
                  </div>
                  <div className="field">
                    <label htmlFor="service">Select Service Required</label>
                    <select id="service" name="service" required defaultValue="">
                      <option value="" disabled>Select a service</option>
                      <option>Website Design & Development</option>
                      <option>Search Engine Optimization (SEO)</option>
                      <option>Pay Per Click Advertising (PPC)</option>
                      <option>Social Media Management</option>
                      <option>Email Marketing</option>
                      <option>E-Commerce Development</option>
                      <option>Brand Identity & Logo Design</option>
                      <option>Content Writing & Copywriting</option>
                      <option>Video Editing & Reels</option>
                      <option>Chatbot Development</option>
                      <option>CRM & Automation Setup</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="field field-full">
                    <label htmlFor="details">Project Details</label>
                    <textarea id="details" name="details" required placeholder="Describe your project in detail. What are you looking for? What are your goals? Any specific requirements?"></textarea>
                  </div>
                  <div className="field field-full">
                    <label>Preferred Meeting Platform</label>
                    <div className="meeting-grid">
                      <label className="meeting-option">
                        <input type="radio" name="platform" value="Google Meet" />
                        <Video size={20} style={{ color: '#2d8653' }} />
                        <span>Google Meet</span>
                      </label>
                      <label className="meeting-option">
                        <input type="radio" name="platform" value="Phone Call" />
                        <Phone size={20} style={{ color: '#2d8653' }} />
                        <span>Phone Call</span>
                      </label>
                      <label className="meeting-option">
                        <input type="radio" name="platform" value="WhatsApp Message" />
                        <MessageCircle size={20} style={{ color: '#2d8653' }} />
                        <span>WhatsApp Message</span>
                      </label>
                      <label className="meeting-option">
                        <input type="radio" name="platform" value="Email" />
                        <Mail size={20} style={{ color: '#2d8653' }} />
                        <span>Email</span>
                      </label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary submit-btn" type="submit" disabled={isSubmitting}>
                  <span className="btn-text">{isSubmitting ? 'Submitting...' : 'Book Free Strategy Call'}</span>
                  {isSubmitting && <span className="spinner" style={{ display: 'inline-block' }}></span>}
                </button>
                {formMessage.text && (
                  <p className={`form-message ${formMessage.type}`} role="status" aria-live="polite">{formMessage.text}</p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="footer-line"></div>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <a className="logo" href="#home" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src="/NewGrow.png" alt="Nexgrow Digital" style={{ height: '35px', width: 'auto' }} />
                <span style={{ color: '#ffffff', fontWeight: 'bold' }}>Nexgrow Digital</span>
              </a>
              <p style={{ marginTop: '10px' }}>Modern web experiences and growth-focused marketing systems built to help your business scale faster.</p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#results">Results</a></li>
                <li><a href="#about">About</a></li>
                <li><Link href="/faqs">FAQs</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><a href="#appointment">Book Free Strategy Call</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li>Web Development</li>
                <li>SEO</li>
                <li>PPC</li>
                <li>Social Media Marketing</li>
                <li>Automation Setup</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul className="contact-list">
                <li><strong>Email:</strong> contact@nexgrowdigital.com</li>
                <li><strong>Whatsapp:</strong> +1 (365) 276-8648</li>
                <li><strong>Hours:</strong> Mon-Sat, 9:00 AM - 7:00 PM</li>
              </ul>
              <div className="socials">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg" alt="Facebook icon" loading="lazy" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" alt="Instagram icon" loading="lazy" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" alt="LinkedIn icon" loading="lazy" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X (Twitter)">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg" alt="X icon" loading="lazy" />
                </a>
                <a href="https://wa.me/13652768648" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg" alt="WhatsApp icon" loading="lazy" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/refund-policy">Refund Policy</Link>
          </div>
          <div className="copyright">© 2025 Nexgrow Digital. All Rights Reserved.</div>
        </div>
      </footer>

      <div className={`success-modal ${isModalOpen ? 'open' : ''}`} onClick={() => setIsModalOpen(false)}>
        <div className="success-card" onClick={(e) => e.stopPropagation()}>
          <div className="checkmark-wrap" id="successCheck">✓</div>
          <h3>Appointment Booked Successfully!</h3>
          <p>Thank you! We have received your request. Our team will contact you within 24 hours on your preferred platform.</p>
          <button className="btn btn-primary" onClick={() => setIsModalOpen(false)}>Close</button>
        </div>
      </div>

      <a href="https://wa.me/13652768648" target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="Chat with us on WhatsApp" title="Chat with us on WhatsApp">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg" alt="WhatsApp" style={{ width: '32px', height: '32px', filter: 'brightness(0) invert(1)' }} />
      </a>
    </>
  );
}
