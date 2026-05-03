import Link from 'next/link';

export default function PrivacyPolicy() {
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
              <li><Link href="/appointment" className="btn btn-primary nav-cta">Book Free Strategy Call</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="section">
        <div className="container">
          <h1 className="section-title">Privacy Policy</h1>
          <p className="section-subtitle">Last updated: January 1, 2025</p>
          <div className="form-card glass" style={{ padding: '32px' }}>
            <p style={{ marginBottom: '16px' }}>At Nexgrow Digital, we value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our services.</p>
            
            <h3 style={{ fontSize: '1.3rem', marginTop: '24px', marginBottom: '12px', color: 'var(--purple)' }}>Information We Collect</h3>
            <p style={{ marginBottom: '16px' }}>We collect information you provide directly to us, such as when you fill out our contact forms, request a consultation, or communicate with us. This may include your name, email address, phone number, and business details.</p>
            
            <h3 style={{ fontSize: '1.3rem', marginTop: '24px', marginBottom: '12px', color: 'var(--purple)' }}>How We Use Your Information</h3>
            <p style={{ marginBottom: '16px' }}>We use the information we collect to provide, maintain, and improve our services, to communicate with you about our services, and to process your requests and inquiries.</p>
            
            <h3 style={{ fontSize: '1.3rem', marginTop: '24px', marginBottom: '12px', color: 'var(--purple)' }}>Information Sharing</h3>
            <p style={{ marginBottom: '16px' }}>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.</p>
            
            <h3 style={{ fontSize: '1.3rem', marginTop: '24px', marginBottom: '12px', color: 'var(--purple)' }}>Data Security</h3>
            <p style={{ marginBottom: '16px' }}>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            
            <h3 style={{ fontSize: '1.3rem', marginTop: '24px', marginBottom: '12px', color: 'var(--purple)' }}>Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at contact.nexgrowdigital@gmail.com</p>
          </div>
        </div>
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
