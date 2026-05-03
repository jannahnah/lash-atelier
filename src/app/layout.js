// 1. Keep all your imports at the top
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashCursor from '../components/SplashCursor/SplashCursor'; // Your new import

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

// 2. Only have ONE 'export default function RootLayout'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Place the cursor effect here so it stays in the background */}
        <SplashCursor 
          COLOR="#D4AF37" 
          RAINBOW_MODE={false} 
          SPLAT_RADIUS={0.15} 
        />
        
        {children}
      </body>
    </html>
  );
}