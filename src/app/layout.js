import "./globals.css";
import Navigation from 'jannah/components/Navigation';
import { Geist, Geist_Mono } from "next/font/google";
import SplashCursor from '../components/SplashCursor/SplashCursor';
import Footer from 'jannah/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lash Atelier",
  description: "Luxury Lash Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* The cursor effect stays in the background */}
        <SplashCursor 
          COLOR="#D4AF37" 
          RAINBOW_MODE={false} 
          SPLAT_RADIUS={0.15} 
        />
        
        {/* 2. Add the Navbar here so it appears on all pages */}
        <Navigation />
        
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}