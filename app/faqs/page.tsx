'use client';

import Link from 'next/link';
import { useState } from 'react';

const faqs = [
  {
    question: "What services does Nexgrow Digital offer?",
    answer: "We offer Website Design and Development, SEO, Social Media Marketing, Branding, E-Commerce Solutions, and Landing Page Design, everything your business needs to grow online."
  },
  {
    question: "How long does it take to build a website?",
    answer: "A standard website takes 7-14 days. More complex projects may take 3-4 weeks depending on requirements."
  },
  {
    question: "How much does your service cost?",
    answer: "Every project is different. We offer affordable packages tailored to your budget. Book a free strategy call and we'll give you a custom quote."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! We work with clients worldwide. All communication is done via WhatsApp, Zoom, or Google Meet."
  },
  {
    question: "Will I own my website after it's completed?",
    answer: "Absolutely. Once the project is complete and payment is done, you have 100% ownership of your website."
  },
  {
    question: "Do you offer ongoing support after the project?",
    answer: "Yes, we offer post-launch support and maintenance packages to keep your website running smoothly."
  },
  {
    question: "How do I get started with Nexgrow Digital?",
    answer: "Simply book a free strategy call through our website. We'll discuss your goals, understand your business, and suggest the best plan for you, no obligation at all."
  },
  {
    question: "What information do I need to provide to start a project?",
    answer: "Just a basic idea of what you need, your target audience, and any examples you like. We handle everything else from design to development."
  },
  {
    question: "Do you offer refunds?",
    answer: "We are committed to 100% client satisfaction. If you are not happy with the initial work, we offer free revisions. Refund terms are discussed before starting any project."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Absolutely! We specialize in website redesigns. Whether your site looks outdated or isn't converting visitors, we can transform it completely."
  },
  {
    question: "How will I be updated on my project progress?",
    answer: "We provide regular updates via WhatsApp or email. You will always know exactly what stage your project is at."
  },
  {
    question: "Can you help me get more clients through my website?",
    answer: "Yes! We don't just build websites, we build websites that convert visitors into paying clients using proven SEO and marketing strategies."
  }
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <header className="navbar">
        <div className="container nav-inner">
          <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/NewGrow.png" alt="Nexgrow Digital" style={{ height: '35px', width: 'auto' }} />
            <span style={{ color: '#2d8653', fontWeight: 'bold' }}>Nexgrow Digital</span>
          </Link>
          <nav>
            <ul className="nav-links">
              <li><Link href="/" className="nav-link">Home</Link></li>
              <li><Link href="/#services" className="nav-link">Services</Link></li>
              <li><Link href="/#portfolio" className="nav-link">Portfolio</Link></li>
              <li><Link href="/#about" className="nav-link">About</Link></li>
              <li><Link href="/faqs" className="nav-link">FAQs</Link></li>
              <li><Link href="/appointment" className="btn btn-primary nav-cta">Book Free Strategy Call</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section with Light Green Background */}
        <section style={{ 
          background: 'linear-gradient(135deg, rgba(126, 200, 164, 0.15), rgba(45, 134, 83, 0.08))',
          padding: '80px 0 60px 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
              fontWeight: '800', 
              marginBottom: '20px',
              color: '#1e5e3d',
              letterSpacing: '-0.5px'
            }}>
              Frequently Asked Questions
            </h1>
            
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#666', 
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Find answers to common questions about our services, process, and how we can help your business grow online.
            </p>
          </div>
        </section>

        {/* FAQ Cards Section */}
        <section style={{ padding: '60px 0' }}>
          <div className="container">
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button 
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className={`faq-icon ${activeIndex === index ? 'active' : ''}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </span>
                  </button>
                  <div 
                    id={`faq-answer-${index}`}
                    className={`faq-answer ${activeIndex === index ? 'active' : ''}`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Green Banner CTA Section */}
        <section style={{ 
          background: 'linear-gradient(135deg, #2d8653, #1e5e3d)',
          padding: '60px 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h2 style={{ 
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', 
              fontWeight: '800', 
              marginBottom: '20px',
              color: '#ffffff',
              letterSpacing: '-0.5px'
            }}>
              Still have questions?
            </h2>
            
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'rgba(255, 255, 255, 0.9)', 
              marginBottom: '30px',
              maxWidth: '600px',
              margin: '0 auto 30px auto',
              lineHeight: '1.6'
            }}>
              We're here to help! Book a free strategy call and we'll answer all your questions.
            </p>
            
            <Link href="/appointment" className="btn btn-white" style={{
              background: '#ffffff',
              color: '#2d8653',
              padding: '15px 30px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              display: 'inline-block',
              transition: 'all 0.3s ease'
            }}>
              Book Free Strategy Call
            </Link>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="footer-line"></div>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src="/NewGrow.png" alt="Nexgrow Digital" style={{ height: '35px', width: 'auto' }} />
                <span style={{ color: '#ffffff', fontWeight: 'bold' }}>Nexgrow Digital</span>
              </Link>
              <p style={{ marginTop: '10px' }}>Modern web experiences and growth-focused marketing systems built to help your business scale faster.</p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#services">Services</Link></li>
                <li><Link href="/#portfolio">Portfolio</Link></li>
                <li><Link href="/#results">Results</Link></li>
                <li><Link href="/#about">About</Link></li>
                <li><Link href="/faqs">FAQs</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/appointment">Book Free Strategy Call</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li>Web Development</li>
                <li>SEO</li>
                <li>PPC</li>
                <li>Social Media Marketing</li>
                <li>Email Marketing</li>
                <li>Branding</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:contact.nexgrowdigital@gmail.com">contact.nexgrowdigital@gmail.com</a></li>
                <li><a href="https://wa.me/13652768648" target="_blank" rel="noopener noreferrer">+1 (365) 276-8648</a></li>
                <li>Available 24/7 for your queries</li>
              </ul>
            </div>
          </div>
          <div className="footer-legal">
            <div className="legal-links">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
              <Link href="/refund-policy">Refund Policy</Link>
            </div>
            <div className="copyright">© 2025 Nexgrow Digital. All Rights Reserved.</div>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/13652768648" target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="Chat with us on WhatsApp" title="Chat with us on WhatsApp">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg" alt="WhatsApp" style={{ width: '32px', height: '32px', filter: 'brightness(0) invert(1)' }} />
      </a>

      <style jsx>{`
        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          margin-bottom: 16px;
          border: 1px solid rgba(45, 134, 83, 0.15);
          border-radius: 12px;
          overflow: hidden;
          background: #ffffff;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: rgba(45, 134, 83, 0.3);
          box-shadow: 0 4px 12px rgba(45, 134, 83, 0.1);
        }

        .faq-question {
          width: 100%;
          padding: 20px 24px;
          background: none;
          border: none;
          text-align: left;
          font-size: 1.05rem;
          font-weight: 600;
          color: #1e5e3d;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }

        .faq-question:hover {
          color: #2d8653;
          background: rgba(45, 134, 83, 0.05);
        }

        .faq-icon {
          transition: transform 0.3s ease;
          color: #2d8653;
        }

        .faq-icon.active {
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          background: rgba(45, 134, 83, 0.02);
        }

        .faq-answer.active {
          max-height: 300px;
          padding: 0 24px 20px 24px;
        }

        .faq-answer p {
          margin: 0;
          line-height: 1.6;
          color: #666;
          font-size: 0.95rem;
        }

        .btn-white:hover {
          background: #f8fcfa !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(45, 134, 83, 0.2);
        }

        .footer-legal {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          margin-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .legal-links {
          display: flex;
          gap: 20px;
        }

        .legal-links a {
          color: #ffffff;
          text-decoration: none;
          font-size: 0.9rem;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .legal-links a:hover {
          opacity: 1;
        }

        .copyright {
          color: #ffffff;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .footer-legal {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }

          .legal-links {
            justify-content: center;
          }

          .faq-question {
            padding: 20px 24px;
            font-size: 1rem;
          }

          .faq-answer.active {
            padding: 0 24px 20px 24px;
          }

          .faq-icon {
            width: 28px;
            height: 28px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}
