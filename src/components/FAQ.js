'use client';
import { useState } from 'react';

const faqData = [
  { q: "How should I prepare for my appointment?", a: "Arrive with clean lashes and no eye makeup. Avoid caffeine before your session to keep your eyes calm." },
  { q: "How long does a full set take?", a: "A full set typically takes 2 to 2.5 hours depending on the chosen style and your natural lash density." },
  { q: "What is your cancellation policy?", a: "We require 24 hours notice for cancellations. Deposits are non-refundable for late cancellations." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" style={{ backgroundColor: '#FAF9F6', padding: '80px 20px', fontFamily: 'Georgia, serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: '#D4AF37', textAlign: 'center', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '40px' }}>
          Frequently Asked Questions
        </h2>
        {faqData.map((item, index) => (
          <div key={index} style={{ borderBottom: '1px solid #D4AF37', marginBottom: '10px' }}>
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              style={{
                width: '100%', textAlign: 'left', padding: '20px 0', background: 'none', border: 'none',
                display: 'flex', justifyContent: 'space-between', cursor: 'pointer', fontSize: '1.1rem', color: '#333'
              }}
            >
              <span>{item.q}</span>
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
    </section>
  );
}