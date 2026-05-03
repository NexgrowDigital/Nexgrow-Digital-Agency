'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Video, Phone, MessageCircle, Mail } from 'lucide-react';

const services = [
  "Website Design & Development",
  "Search Engine Optimization (SEO)",
  "Pay Per Click Advertising (PPC)",
  "Social Media Management",
  "Email Marketing",
  "E-Commerce Development",
  "Brand Identity & Logo Design",
  "Content Writing & Copywriting",
  "Video Editing & Reels",
  "Chatbot Development",
  "CRM & Automation Setup",
  "Other"
];

export default function Appointment() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState({ type: '', text: '' });

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (selectedServices.length === 0) {
      setFormMessage({ type: 'error', text: 'Please select at least one service.' });
      return;
    }

    setIsSubmitting(true);
    setFormMessage({ type: '', text: '' });

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('services_required', selectedServices.join(', '));

    try {
      const response = await fetch("https://formspree.io/f/xkokdglz", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      });

      if (!response.ok) throw new Error("Submission failed");

      form.reset();
      setSelectedServices([]);
      setFormMessage({ type: 'success', text: 'Thank you! Your appointment request has been sent. We will contact you within 24 hours.' });
    } catch (error) {
      setFormMessage({ type: 'error', text: 'Something went wrong. Please try again in a moment.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/NewGrow.png" alt="Nexgrow Digital" style={{ height: '35px', width: 'auto' }} />
            <span style={{ color: '#2d8653', fontWeight: 'bold' }}>Nexgrow Digital</span>
          </Link>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Link href="/" className="back-link">Back to Home</Link>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="appointment-hero">
          <h1>
            Let's Build<br />Something Great
          </h1>
          <p>
            Tell us about your project. We'll get back to you within 24 hours.
          </p>
        </section>

        <section className="layout">
          <article className="card form-card">
            <h3 style={{ fontSize: '1.45rem', marginBottom: '14px', color: '#153c2b' }}>About You</h3>
            <form id="appointmentPageForm" onSubmit={handleSubmit} action="https://formspree.io/f/xkokdglz" method="POST">
              <div className="field-grid timeline-budget">
                <div className="field">
                  <label htmlFor="name">Name *</label>
                  <input id="name" name="name" required placeholder="Your full name" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email *</label>
                  <input id="email" name="email" type="email" required placeholder="you@business.com" />
                </div>
                <div className="field">
                  <label htmlFor="phone">WhatsApp Num</label>
                  <input id="phone" name="phone" placeholder="+1 (365) 276-8648" />
                </div>
                <div className="field">
                  <label htmlFor="company">Company Name</label>
                  <input id="company" name="company" placeholder="Your company" />
                </div>
              </div>

              <h4 className="form-block">Your Project</h4>
              <label>What service do you need? *</label>
              <div className="chip-grid" id="serviceChips">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    className={`chip ${selectedServices.includes(service) ? 'active' : ''}`}
                    onClick={() => toggleService(service)}
                  >
                    {service}
                  </button>
                ))}
              </div>

              <div className="field full" style={{ marginTop: '12px' }}>
                <label htmlFor="details">Tell us about your project *</label>
                <textarea id="details" name="details" required placeholder="What problem are you trying to solve? What does success look like?"></textarea>
              </div>

              <h4 className="form-block">Timeline & Budget</h4>
              <div className="field-grid">
                <div>
                  <label>Timeline</label>
                  <div className="radio-grid">
                    <label className="radio-item"><input type="radio" name="timeline" value="ASAP" /> ASAP</label>
                    <label className="radio-item"><input type="radio" name="timeline" value="1-3 Months" /> 1-3 Months</label>
                    <label className="radio-item"><input type="radio" name="timeline" value="3-6 Months" /> 3-6 Months</label>
                    <label className="radio-item"><input type="radio" name="timeline" value="Exploring" /> Just Exploring</label>
                  </div>
                </div>
                <div>
                  <label>Budget Range</label>
                  <div className="radio-grid">
                    <label className="radio-item"><input type="radio" name="budget" value="Under 500" /> Under 500$</label>
                    <label className="radio-item"><input type="radio" name="budget" value="500-1500" /> 500$ - 1500$</label>
                    <label className="radio-item"><input type="radio" name="budget" value="1500-2500" /> 1500$ - 2500$</label>
                    <label className="radio-item"><input type="radio" name="budget" value="2500-5000" /> 2500$ - 5000$</label>
                    <label className="radio-item"><input type="radio" name="budget" value="5000-10000+" /> 5000$ - 10000$ +</label>
                    <label className="radio-item"><input type="radio" name="budget" value="Not sure" /> Not Sure Yet</label>
                  </div>
                </div>
              </div>

              <h4 className="form-block">Preferred Meeting Platform</h4>
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

              <h4 className="form-block">One More Thing</h4>
              <div className="field" style={{ maxWidth: '300px' }}>
                <label htmlFor="source">How did you hear about us?</label>
                <select id="source" name="source" defaultValue="">
                  <option value="">Select..</option>
                  <option>Google Search</option>
                  <option>Instagram</option>
                  <option>Facebook</option>
                  <option>LinkedIn</option>
                  <option>Referral</option>
                  <option>YouTube</option>
                  <option>Other</option>
                </select>
              </div>

              <button className="submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Book Appointment'}
              </button>
              {formMessage.text && (
                <p className={`form-message ${formMessage.type}`} role="status" aria-live="polite">
                  {formMessage.text}
                </p>
              )}
            </form>
          </article>

          <aside className="card side-card">
            <h3 style={{ fontSize: '1.45rem', marginBottom: '14px', color: '#153c2b' }}>What Happens Next</h3>
            <ul className="next-list">
              <li><span className="dot"></span><span>We review your request within 24 hours.</span></li>
              <li><span className="dot"></span><span>We schedule a discovery call (30 minutes).</span></li>
              <li><span className="dot"></span><span>We send a project roadmap and quote within 48 hours.</span></li>
            </ul>
            <p className="note">Your information is secure. We'll never share or sell your data.</p>
            <p className="contact">Prefer email?<br /><a href="mailto:contact.nexgrowdigital@gmail.com">contact.nexgrowdigital@gmail.com</a></p>
            <p className="contact">Chat with us on WhatsApp:<br /><a href="https://wa.me/13652768648" target="_blank" rel="noopener noreferrer">+1 (365) 276-8648</a></p>
          </aside>
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
                <li>Automation Setup</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul className="contact-list">
                <li><strong>Email:</strong> contact.nexgrowdigital@gmail.com</li>
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

      <a href="https://wa.me/13652768648" target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="Chat with us on WhatsApp" title="Chat with us on WhatsApp">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg" alt="WhatsApp" style={{ width: '32px', height: '32px', filter: 'brightness(0) invert(1)' }} />
      </a>
    </>
  );
}
