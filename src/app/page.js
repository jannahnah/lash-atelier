'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link'; 
import FAQ from 'jannah/components/FAQ';
import GradientText from '../components/GradientText/GradientText';

export default function Home() {
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => preloader.classList.add('hide-loader'), 2000);
    }
  }, []);

  const portfolioItems = [
    { id: 1, title: 'Classic Elegance', type: 'Classic Full Set', img: '/images/dolleye.jpeg' },
    { id: 2, title: 'Wispy Hybrid', type: 'Hybrid Full Set', img: '/images/wispyhybrid.jpeg' },
    { id: 3, title: 'Midnight Volume', type: 'Volume Full Set', img: '/images/volume.jpeg' },
    { id: 4, title: 'Natural Glow', type: 'Classic Full Set', img: '/images/natural.jpeg' },
    { id: 5, title: 'Textured Volume', type: 'Volume Full Set', img: '/images/textured.jpeg' },
    { id: 6, title: 'Cat-Eye Hybrid', type: 'Hybrid Full Set', img: '/images/cat.jpeg' },
  ];

  return (
    <>
      <div id="preloader">
        <div className="loader-content">
          <div className="logo">The Lash<span>Atelier</span></div>
          <div className="loader-line start-line"></div>
        </div>
      </div>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <span className="eyebrow">Premium Lash Artistry</span>
            
            {/* LUXURY GRADIENT HEADER */}
            <h1 style={{ marginBottom: '20px' }}>
              <GradientText
                colors={["#D4AF37", "#F2E2B0", "#D4AF37", "#B8962D", "#D4AF37"]}
                animationSpeed={2.5}
                showBorder={false}
                className="hero-gradient-text"
              >
                Elevate Your Natural Radiance
              </GradientText>
            </h1>

            <p>Bespoke lash extensions tailored to your unique eye shape.</p>
          </div>
        </section>

        {/* Meet the Artist Section */}
        <section id="about" className="about-artist" style={{ padding: '80px 0', backgroundColor: '#fff' }}>
          <div className="container artist-flex" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '50px', 
            maxWidth: '1200px', 
            margin: '0 auto',
            padding: '0 20px'
          }}>
            <div className="artist-image" style={{ flex: '1' }}>
              <div className="image-frame" style={{ 
                position: 'relative', 
                borderRadius: '4px', 
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}>
                <img 
                  src="/images/artist-portrait.jpg" 
                  alt="Julienne" 
                  style={{ width: '100%', display: 'block', objectFit: 'cover' }} 
                />
              </div>
            </div>
            
            <div className="artist-content" style={{ flex: '1' }}>
              <span className="eyebrow" style={{ color: '#D4AF37', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                The Artist
              </span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '10px', marginBottom: '20px' }}>Meet Julienne</h2>
              <div className="gold-accent-line" style={{ width: '40px', height: '2px', background: '#D4AF37', marginBottom: '25px' }}></div>
              <p style={{ lineHeight: '1.6', color: '#666', marginBottom: '30px' }}>
                I’m Julienne, a certified lash artist dedicated to enhancing your natural beauty through custom lash extensions, with 3 years of experience. Every set is thoughtfully designed based on your eye shape, features, and lifestyle.
              </p>
              
              <Link href="/contact" className="btn-gold" style={{ 
                display: 'inline-block', 
                padding: '12px 24px', 
                border: '1px solid #D4AF37', 
                color: '#D4AF37', 
                textDecoration: 'none',
                transition: '0.3s'
              }}>
                CONSULT WITH ME
              </Link>
            </div>
          </div>
        </section>

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

       <section id="gallery" className="section" style={{ padding: '80px 0', backgroundColor: '#fff', overflow: 'hidden' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>The Portfolio</h2>
            
            <div className="carousel-container">
              <div className="carousel-track">
                {/* We map the items twice to create an infinite loop feel */}
                {[...portfolioItems, ...portfolioItems].map((item, index) => (
                  <div key={`${item.id}-${index}`} className="portfolio-card-wrapper">
                    <div className="image-frame-portfolio">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div className="image-overlay">
                        <span className="overlay-type">{item.type}</span>
                        <h3 className="overlay-title">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <FAQ />
      
      {/* STYLES */}
<style jsx>{`
        /* CAROUSEL LOGIC */
        .carousel-container {
          width: 100%;
          overflow: hidden;
          padding: 20px 0;
          position: relative;
        }

        .carousel-track {
          display: flex;
          gap: 30px;
          width: max-content;
          animation: scroll 40s linear infinite; /* Adjust time for speed */
        }

        /* PAUSE ON HOVER */
        .carousel-container:hover .carousel-track {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 15px)); } /* Half the track width */
        }

        /* CARD DESIGN INTACT */
        .portfolio-card-wrapper {
          width: 350px; /* Fixed width for carousel consistency */
          flex-shrink: 0;
        }

        .image-frame-portfolio {
          position: relative;
          overflow: hidden;
          border-radius: 40px 4px 40px 4px; 
          height: 450px;
          transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 40px 20px 20px;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .portfolio-card-wrapper:hover .image-overlay {
          opacity: 1;
        }

        /* WHITE FONT UPDATES */
        .overlay-type {
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 1px;
        }

        .overlay-title {
          color: #ffffff; /* Explicitly White */
          font-family: 'Georgia', serif;
          margin-top: 5px;
          font-size: 1.5rem;
        }
      `}</style>

      <style jsx global>{`
        .hero-gradient-text {
          font-family: 'Georgia', serif;
          font-size: clamp(2.5rem, 6vw, 4rem);
          line-height: 1.2;
          font-weight: 500;
          background-color: transparent !important;
          backdrop-filter: none !important;
        }
      `}</style>
    </>
  );
}