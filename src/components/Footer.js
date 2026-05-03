export default function Footer() {
  return (
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
    );
}