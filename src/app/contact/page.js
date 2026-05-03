'use client';
import FAQ from 'jannah/components/FAQ';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      {/* NAVIGATION BAR */}
      <header className="navbar">
        <div className="logo">
          The Lash<span>Atelier</span>
        </div>
        <nav id="nav-list">
          <Link href="/">Home</Link>
          <a href="/#services">Services</a>
          <a href="/#gallery">Portfolio</a>
          <Link href="/contact" className="active">Contact Me</Link>
          <Link href="/book" className="btn-gold-fill">Book Now</Link>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <div style={{ backgroundColor: '#FAF9F6', color: '#333', minHeight: '80vh', padding: '80px 20px', fontFamily: 'Georgia, serif' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ color: '#D4AF37', fontSize: '2.5rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>
            Get in Touch
          </h1>
          <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '60px' }}>
            We’d love to hear from you. Experience the art of the lash.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            
            {/* Card 1 */}
            <div className="contact-card" style={{ 
              padding: '40px 20px', 
              border: '1px solid #B8962D', // DARK GOLD BORDER
              backgroundColor: '#FFF',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <h3 style={{ color: '#D4AF37', textTransform: 'uppercase', fontSize: '1.1rem', marginBottom: '15px' }}>The Atelier</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>📍 Located near Seton, SE, Calgary, AB</p>
            </div>

            {/* Card 2 */}
            <div className="contact-card" style={{ 
              padding: '40px 20px', 
              border: '1px solid #B8962D', // DARK GOLD BORDER
              backgroundColor: '#FFF',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <h3 style={{ color: '#D4AF37', textTransform: 'uppercase', fontSize: '1.1rem', marginBottom: '15px' }}>Studio Hours</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>Monday — Saturday<br />9:00 AM — 6:00 PM</p>
            </div>

            {/* Card 3 */}
            <div className="contact-card" style={{ 
              padding: '40px 20px', 
              border: '1px solid #B8962D', // DARK GOLD BORDER
              backgroundColor: '#FFF',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <h3 style={{ color: '#D4AF37', textTransform: 'uppercase', fontSize: '1.1rem', marginBottom: '15px' }}>Connect</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>Instagram: @thelashatelieryyc<br />thelashatelieryyc@gmail.com</p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .contact-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(184, 150, 45, 0.1);
          }
        `}</style>
      </div>

      {/* COMPACT FOOTER */}
      <footer className="luxury-footer" style={{ padding: '30px 20px', background: '#fff', borderTop: '1px solid #f0f0f0' }}>
        <div className="footer-content" style={{ textAlign: 'center' }}>
          <div className="logo" style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
            The Lash<span>Atelier</span>
          </div>
          <div className="social-links" style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
            <a 
              href="https://www.instagram.com/thelashatelieryyc/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#D4AF37', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '0.75rem' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span style={{ letterSpacing: '1px', fontWeight: '500' }}>INSTAGRAM</span>
            </a>
          </div>
          <div className="gold-accent-line" style={{ margin: '0 auto 10px auto', width: '30px' }}></div>
          <p style={{ opacity: 0.6, fontSize: '0.7rem' }}>© 2026 The Lash Atelier</p>
        </div>
      </footer>
    </>
  );
}