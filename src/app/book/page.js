'use client';
import Link from 'next/link';
import BookingForm from 'jannah/components/BookingForm';

export default function BookingPage() {
  return (
    <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style jsx global>{`
        /* The Hover Effect for the Form Container */
        .form-container {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
          transform: translateY(0);
        }
        .form-container:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(212, 175, 55, 0.15) !important;
        }

        /* Ensuring the BookingForm internal elements are visible and clean */
        .booking-form {
          width: 100%;
        }
        
        .booking-form button, 
        button[type="submit"] {
          width: 100% !important;
          padding: 16px !important;
          background-color: #D4AF37 !important;
          color: white !important;
          border: none !important;
          font-weight: 600 !important;
          letter-spacing: 2px !important;
          text-transform: uppercase !important;
          cursor: pointer !important;
          transition: background 0.3s ease !important;
          margin-top: 20px !important;
        }

        button[type="submit"]:hover {
          background-color: #b8962d !important;
        }

        /* Fix for spacing to ensure no fields are hidden */
        .booking-form div { 
          margin-bottom: 15px !important; 
        }
      `}</style>

      <header className="navbar">
        <div className="logo">
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            The Lash<span>Atelier</span>
          </Link>
        </div>
        <nav id="nav-list">
          <Link href="/">Home</Link>
          <a href="/#services">Services</a>
          <a href="/#gallery">Portfolio</a>
          <Link href="/contact">Contact Me</Link>
          <Link href="/book" className="btn-gold-fill">Book Now</Link>
        </nav>
      </header>

      <main className="container" style={{ padding: '60px 20px', flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        <div className="form-container" style={{ 
          maxWidth: '600px', /* Slightly wider to ensure fields don't stack weirdly */
          width: '100%',
          background: '#fff', 
          padding: '40px', 
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          borderRadius: '8px' 
        }}>
          <h2 style={{ 
            textAlign: 'center', 
            color: '#D4AF37', 
            letterSpacing: '3px', 
            marginBottom: '10px',
            fontSize: '1.8rem',
            textTransform: 'uppercase'
          }}>Reservation</h2>
          <p style={{ textAlign: 'center', marginBottom: '30px', opacity: 0.6, fontSize: '0.9rem' }}>
            Please provide your details to request an appointment.
          </p>
          
          <div className="booking-form">
            <BookingForm />
          </div>
        </div>
      </main>

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
              style={{ color: '#D4AF37', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '0.8rem' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              INSTAGRAM
            </a>
          </div>
          <p style={{ opacity: 0.5, fontSize: '0.7rem' }}>© 2026 The Lash Atelier</p>
        </div>
      </footer>
    </div>
  );
}