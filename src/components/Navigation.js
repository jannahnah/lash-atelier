'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
        <div className="logo">
          The Lash<span>Atelier</span>
        </div>

      <div 
        className={`menu-toggle ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="#services" onClick={() => setIsOpen(false)}>Services</Link>
        <Link href="#gallery" onClick={() => setIsOpen(false)}>Portfolio</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Me</Link>
        <Link href="/book" onClick={() => setIsOpen(false)}>Book Now</Link>
      </nav>
    </header>
  );
}