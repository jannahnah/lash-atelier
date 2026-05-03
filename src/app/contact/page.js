'use client';
import FAQ from 'jannah/components/FAQ';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>

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
    </>
  );
}