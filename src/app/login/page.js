'use client';
import { useState } from 'react';
import { supabase } from 'jannah/lib/supabase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleManualLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      setLoading(false);
    } else {
      router.push('/admin');
    }
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/admin` }
    });
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#D4AF37', textAlign: 'center' }}>ATELIER LOGIN</h2>
      
      <form onSubmit={handleManualLogin} style={formStyle}>
        <input 
          type="email" 
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)} 
          style={inputStyle}
          required
        />
        <input 
          type="password" 
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} 
          style={inputStyle}
          required
        />
        <button type="submit" disabled={loading} style={submitBtn}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <div style={{ textAlign: 'center', margin: '20px 0', color: '#888' }}>OR</div>

      <button onClick={handleGoogleLogin} style={googleBtn}>
        <img src="https://www.google.com/favicon.ico" width="16" alt="Google" style={{ marginRight: '10px' }} />
        Continue with Google
      </button>
    </div>
  );
}

// Styles to keep your luxury aesthetic
const containerStyle = { maxWidth: '400px', margin: '100px auto', padding: '40px', backgroundColor: '#fff', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', fontFamily: 'Georgia, serif' };
const formStyle = { display: 'flex', flexDirection: 'column', gap: '15px' };
const inputStyle = { padding: '12px', border: '1px solid #ddd', outline: 'none' };
const submitBtn = { padding: '12px', backgroundColor: '#D4AF37', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold' };
const googleBtn = { width: '100%', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', border: '1px solid #ddd', cursor: 'pointer' };