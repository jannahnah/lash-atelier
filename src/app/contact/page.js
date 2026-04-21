export default function ContactPage() {
  return (
    <div style={{ backgroundColor: '#FAF9F6', color: '#333', minHeight: '100vh', padding: '80px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ color: '#D4AF37', fontSize: '2.5rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>
          Get in Touch
        </h1>
        <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '60px' }}>
          We’d love to hear from you. Experience the art of the lash.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          {/* Location Section */}
          <div style={{ padding: '20px', border: '1px solid #E5E5E5', backgroundColor: '#FFF' }}>
            <h3 style={{ color: '#D4AF37', textTransform: 'uppercase', fontSize: '1.1rem' }}>The Atelier</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              📍 Located near Seton, SE, Calgary, AB
            </p>
          </div>

          {/* Business Hours */}
          <div style={{ padding: '20px', border: '1px solid #E5E5E5', backgroundColor: '#FFF' }}>
            <h3 style={{ color: '#D4AF37', textTransform: 'uppercase', fontSize: '1.1rem' }}>Studio Hours</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              Monday — Saturday<br />
              9:00 AM — 6:00 PM
            </p>
          </div>

          {/* Connect */}
          <div style={{ padding: '20px', border: '1px solid #E5E5E5', backgroundColor: '#FFF' }}>
            <h3 style={{ color: '#D4AF37', textTransform: 'uppercase', fontSize: '1.1rem' }}>Connect</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              Instagram: @thelashatelier<br />
              jannah.ada@urios.edu.ph
            </p>
          </div>
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


'use client';
import { useState } from 'react';

const faqData = [
  { q: "How should I prepare for my appointment?", a: "Arrive with clean lashes and no eye makeup. Avoid caffeine before your session to keep your eyes calm." },
  { q: "How long does a full set take?", a: "A full set typically takes 2 to 2.5 hours depending on the chosen style and your natural lash density." },
  { q: "What is your cancellation policy?", a: "We require 24 hours notice for cancellations. Deposits are non-refundable for late cancellations." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ backgroundColor: '#FAF9F6', padding: '60px 20px', fontFamily: 'Georgia, serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: '#D4AF37', textAlign: 'center', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '40px' }}>
          Frequently Asked Questions
        </h2>
        
        {faqData.map((item, index) => (
          <div key={index} style={{ borderBottom: '1px solid #D4AF37', marginBottom: '10px' }}>
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              style={{
                width: '100%', textAlignment: 'left', padding: '20px 0', background: 'none', border: 'none',
                display: 'flex', justifyContent: 'space-between', cursor: 'pointer', fontSize: '1.1rem', color: '#333'
              }}
            >
              <span style={{ textAlign: 'left' }}>{item.q}</span>
              <span style={{ color: '#D4AF37' }}>{openIndex === index ? '−' : '+'}</span>
            </button>
            
            {openIndex === index && (
              <div style={{ paddingBottom: '20px', color: '#666', lineHeight: '1.6', fontStyle: 'italic' }}>
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}