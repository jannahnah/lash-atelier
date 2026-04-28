'use client';
import Link from 'next/link';
import BookingForm from 'jannah/components/BookingForm';

export default function BookingPage() {
  return (
    <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh' }}>
      <header className="navbar" style={{ position: 'relative', background: '#fff' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" className="logo">The Lash<span>Atelier</span></Link>
          <Link href="/" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to Home</Link>
        </div>
      </header>

      <main className="container" style={{ padding: '60px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <h1 style={{ textAlign: 'center', color: '#D4AF37', letterSpacing: '2px', marginBottom: '10px' }}>RESERVATION</h1>
          <p style={{ textAlign: 'center', marginBottom: '40px', opacity: 0.7 }}>Please provide your details to request an appointment.</p>
          
          <BookingForm />
        </div>
      </main>
    </div>
  );
}