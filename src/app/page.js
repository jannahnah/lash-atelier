'use client';
import { useEffect } from 'react';
import Link from 'next/link'; // Import Link for navigation
import FAQ from 'jannah/components/FAQ';

export default function Home() {
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => preloader.classList.add('hide-loader'), 2000);
    }
  }, []);

  return (
    <>
      <div id="preloader">
        <div className="loader-content">
          <div className="logo">The Lash<span>Atelier</span></div>
          <div className="loader-line start-line"></div>
        </div>
      </div>

      <header className="navbar">
        <div className="logo">The Lash<span>Atelier</span></div>
        <nav id="nav-list">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Portfolio</a>
          <a href="#aftercare">Care</a>
          <a href="#booking" className="btn-gold-fill">Book Now</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <span className="eyebrow">Premium Lash Artistry</span>
            <h1>Elevate Your Natural Radiance</h1> 
            <p>Bespoke lash extensions tailored to your unique eye shape.</p>
            <div className="hero-btns">
              <a href="#booking" className="btn-gold-fill">Reserve Session</a>
              <a href="#services" className="btn-gold">View Menu</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-artist">
          <div className="container artist-flex">
            <div className="artist-image">
              <div className="image-frame">
                <img src="/images/artist-portrait.jpg" alt="Julienne" />
              </div>
            </div>
            <div className="artist-content">
              <span className="eyebrow">The Artist</span>
              <h2>Meet Julienne</h2>
              <div className="gold-accent-line"></div>
              <p>I’m Julienne, a certified lash artist dedicated to enhancing your natural beauty through custom lash extensions, with 3 years of experience. Every set is thoughtfully designed based on your eye shape, features, and lifestyle—because no two clients are the same.</p>
              <a href="#booking" className="btn-gold">Consult with Me</a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services">
          <div className="container">
            <h2 className="section-title">The Collection</h2>
            <div className="services-grid">
              <div className="service-card"><h3>Classic</h3><p>$75</p></div>
              <div className="service-card featured"><h3>Hybrid</h3><p>$85</p></div>
              <div className="service-card"><h3>Volume</h3><p>$100</p></div>
            </div>
          </div>
        </section>

{/* Updated Booking Section */}
        <section id="booking" className="contact-section">
          <div className="container" style={{ textAlign: 'center', padding: '80px 20px' }}>
            <span className="eyebrow">Your Transformation Awaits</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready to Book?</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 40px auto', opacity: 0.8 }}>
              Experience bespoke artistry tailored to your eyes. Secure your preferred date and time through our specialized booking portal.
            </p>
            
            {/* The "Clean" Button */}
            <Link href="/book" className="btn-gold-fill" style={{ padding: '20px 60px', fontSize: '1.1rem' }}>
              RESERVE YOUR SESSION
            </Link>
          </div>
        </section>
      </main>

      <FAQ />

      <footer className="luxury-footer">
        <div className="footer-content">
          <div className="logo">The Lash<span>Atelier</span></div>
          <p>© 2026 The Lash Atelier. Designed for Luxury</p>
        </div>
      </footer>
    </>
  );
}