'use client';
import { useEffect } from 'react';
import BookingForm from 'jannah/components/BookingForm';
import FAQ from 'jannah/components/FAQ';

export default function Home() {
  // Preloader Logic
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

        {/* Booking Section */}
        <section id="booking" className="contact-section">
          <div className="container contact-flex">
            <div className="contact-info">
              <h2>Book Your Experience</h2>
              <p>Ready for a transformation?</p>
            </div>
            <div className="contact-form-container">
              {/* WE WILL PUT THE BOOKING COMPONENT HERE */}
              <BookingForm />
            </div>
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