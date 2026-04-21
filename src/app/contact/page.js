'use client';
import FAQ from 'jannah/components/FAQ';

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: '#FAF9F6', color: '#333', minHeight: '100vh', padding: '80px 20px', fontFamily: 'Georgia, serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ color: '#D4AF37', fontSize: '2.5rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>
          Get in Touch
        </h1>
        <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '60px' }}>
          We’d love to hear from you. Experience the art of the lash.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          <div style={{ padding: '20px', border: '1px solid #E5E5E5', backgroundColor: '#FFF' }}>
            <h3 style={{ color: '#D4AF37', textTransform: 'uppercase', fontSize: '1.1rem' }}>The Atelier</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>📍 Located near Seton, SE, Calgary, AB</p>
          </div>
          <div style={{ padding: '20px', border: '1px solid #E5E5E5', backgroundColor: '#FFF' }}>
            <h3 style={{ color: '#D4AF37', textTransform: 'uppercase', fontSize: '1.1rem' }}>Studio Hours</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>Monday — Saturday<br />9:00 AM — 6:00 PM</p>
          </div>
          <div style={{ padding: '20px', border: '1px solid #E5E5E5', backgroundColor: '#FFF' }}>
            <h3 style={{ color: '#D4AF37', textTransform: 'uppercase', fontSize: '1.1rem' }}>Connect</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>Instagram: @thelashatelier<br />jannah.ada@urios.edu.ph</p>
          </div>
        </div>

        {/* This one line replaces all that messy mapping logic! */}
        <div style={{ marginTop: '100px' }}>
          <FAQ />
        </div>
        
        <div style={{ marginTop: '60px' }}>
           <a href="/#booking" style={{ background: '#D4AF37', color: 'white', padding: '15px 40px', textDecoration: 'none', fontWeight: 'bold', letterSpacing: '1px' }}>
             BOOK AN APPOINTMENT
           </a>
        </div>
      </div>
    </div>
  );
}