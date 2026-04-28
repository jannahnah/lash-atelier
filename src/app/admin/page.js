'use client';
import { useEffect, useState } from 'react';
import { supabase } from 'jannah/lib/supabase';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showArchived, setShowArchived] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  
  const router = useRouter();

  useEffect(() => {
    const closeMenu = () => setActiveMenu(null);
    window.addEventListener('click', closeMenu);
    return () => window.removeEventListener('click', closeMenu);
  }, []);

  const fetchAppointments = async () => {
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .order('created_at', { ascending: false }); 

    if (error) {
      console.error('Error fetching data:', error.message);
    } else {
      setAppointments(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    const checkUser = async () => {
      // 1. Get the current session immediately from local storage/Supabase
      const { data: { session } } = await supabase.auth.getSession();

      if (session?.user) {
        const userEmail = session.user.email.toLowerCase().trim();
        const allowed = ['jannah.ada@urios.edu.ph', 'thelashatelieryyc@gmail.com'].map(e => e.toLowerCase().trim());

        if (allowed.includes(userEmail)) {
          setIsAuthenticated(true);
          await fetchAppointments(); // Only fetch if they are authorized
        } else {
          await supabase.auth.signOut();
          router.replace('/login');
        }
      } else {
        // No session found, send to login
        router.replace('/login');
      }
      setLoading(false); // Stop the pulse once we have an answer
    };

    checkUser();

    // 2. Keep the listener for active sign-outs/token refreshes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        setIsAuthenticated(false);
        router.replace('/login');
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  const updateStatus = async (appointment, newStatus) => {
    const { error } = await supabase
      .from('appointments')
      .update({ status: newStatus })
      .eq('id', appointment.id);

    if (!error) fetchAppointments();
  };

  const toggleArchive = async (id, currentArchivedStatus) => {
    const { error } = await supabase
      .from('appointments')
      .update({ is_archived: !currentArchivedStatus })
      .eq('id', id);

    if (!error) fetchAppointments();
  };

  const filteredAppointments = appointments.filter(app => 
    app.is_archived === showArchived && 
    app.client_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await supabase.auth.signOut();
      setIsAuthenticated(false);
      router.replace('/login');
    } catch (error) {
      console.error('Error signing out:', error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-[#D4AF37] tracking-[0.2em] animate-pulse">LOADING ATELIER EXECUTIVE...</p>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
  <div style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', padding: '40px', fontFamily: 'Georgia, serif', position: 'relative' }}>
    
    {/* Burger Menu Button */}
    <button onClick={(e) => { e.stopPropagation(); setIsMenuOpen(!isMenuOpen); }} style={burgerBtnStyle}>
      {isMenuOpen ? '✕' : '☰'}
    </button>

    {/* Admin Session Drawer */}
    {isMenuOpen && (
      <div style={menuDrawerStyle}>
        <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '20px' }}>ADMIN SESSION</p>
        <button onClick={handleSignOut} style={signOutBtnStyle}>Sign Out</button>
      </div>
    )}

    <header style={{ textAlign: 'center', marginBottom: '40px' }}>
      <h1 style={{ color: '#D4AF37', letterSpacing: '5px' }}>
        {showArchived ? 'ATELIER ARCHIVE' : 'ATELIER EXECUTIVE'}
      </h1>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Search client name..." 
          onChange={(e) => setSearchTerm(e.target.value)}
          style={luxuryInput}
          disabled={loading}
        />
        <button onClick={() => setShowArchived(!showArchived)} style={archiveToggleStyle}>
          {showArchived ? 'View Active' : 'View Archived'}
        </button>
      </div>
    </header>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
      {['pending', 'confirmed', 'cancelled'].map((statusLabel) => {
        const categoryAppointments = filteredAppointments.filter(a => 
          a.status?.replace(/['"]+/g, '').trim() === statusLabel
        );

        return (
          <section key={statusLabel}>
            <h2 style={sectionHeader}>
              {statusLabel} {!loading && `(${categoryAppointments.length})`}
            </h2>
            
            {loading ? (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            ) : (
              categoryAppointments.map(app => (
                <div key={app.id} style={cardStyle(statusLabel)}>
                  <div>
                    <h4 style={{ margin: 0 }}>{app.client_name}</h4>
                    <p style={{ fontSize: '0.8rem', color: '#666' }}>
                      {app.appointment_date} @ {app.appointment_time}
                    </p>
                  </div>
                  
                  {/* Ellipsis Menu Controls */}
                  <div style={{ position: 'relative' }}>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMenu(activeMenu === app.id ? null : app.id);
                      }} 
                      style={ellipsisBtnStyle}
                    >
                      ⋮
                    </button>

                    {activeMenu === app.id && (
                      <div style={dropdownMenuStyle}>
                        {!showArchived && (
                          <>
                            {app.status?.replace(/['"]+/g, '').trim() === 'pending' && (
                              <button onClick={() => updateStatus(app, 'confirmed')} style={menuItemStyle}>✅ Confirm</button>
                            )}
                            {app.status?.replace(/['"]+/g, '').trim() !== 'cancelled' && (
                              <button onClick={() => updateStatus(app, 'cancelled')} style={menuItemStyle}>❌ Cancel</button>
                            )}
                          </>
                        )}
                        <button onClick={() => toggleArchive(app.id, app.is_archived)} style={menuItemStyle}>
                          {showArchived ? '📤 Unarchive' : '📁 Archive'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </section>
        );
      })}
    </div>
  </div>
);
}
const SkeletonCard = () => (
  <div style={{ 
    ...cardStyle('pending'), 
    backgroundColor: '#eee', 
    borderLeft: '5px solid #e0e0e0', 
    animation: 'pulse 1.5s infinite ease-in-out' 
  }}>
    <div style={{ flex: 1 }}>
      <div style={{ height: '18px', width: '60%', backgroundColor: '#ddd', marginBottom: '8px' }} />
      <div style={{ height: '14px', width: '40%', backgroundColor: '#ddd' }} />
    </div>
    <div style={{ height: '24px', width: '24px', backgroundColor: '#ddd', borderRadius: '50%' }} />
    <style>{`
      @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 1; }
      }
    `}</style>
  </div>
);

// STYLES - Moved outside the component
const luxuryInput = { padding: '12px', border: '1px solid #D4AF37', width: '300px', textAlign: 'center', outline: 'none' };
const sectionHeader = { fontSize: '0.9rem', textTransform: 'uppercase', color: '#888', borderBottom: '1px solid #D4AF37', paddingBottom: '10px', marginBottom: '20px' };
const archiveToggleStyle = { background: 'none', border: '1px solid #D4AF37', color: '#D4AF37', padding: '10px 20px', cursor: 'pointer', fontFamily: 'Georgia, serif', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' };
const cardStyle = (status) => ({
  backgroundColor: '#fff', padding: '15px', marginBottom: '10px', 
  borderLeft: `5px solid ${status === 'confirmed' ? '#2ECC71' : status === 'pending' ? '#D4AF37' : '#E74C3C'}`,
  display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
});
const ellipsisBtnStyle = { background: 'none', border: 'none', color: '#D4AF37', fontSize: '1.5rem', cursor: 'pointer', padding: '0 10px' };
const dropdownMenuStyle = { position: 'absolute', right: 0, top: '30px', backgroundColor: '#fff', border: '1px solid #D4AF37', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 10, minWidth: '130px', display: 'flex', flexDirection: 'column' };
const menuItemStyle = { padding: '10px 15px', textAlign: 'left', background: 'none', border: 'none', borderBottom: '1px solid #f0f0f0', cursor: 'pointer', fontSize: '0.85rem', fontFamily: 'Georgia, serif', color: '#333', whiteSpace: 'nowrap' };
const burgerBtnStyle = { position: 'absolute', top: '40px', right: '40px', background: 'none', border: '1px solid #D4AF37', color: '#D4AF37', fontSize: '1.5rem', padding: '5px 12px', cursor: 'pointer', zIndex: 1000 };
const menuDrawerStyle = { position: 'absolute', top: '90px', right: '40px', backgroundColor: '#fff', border: '1px solid #D4AF37', padding: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', zIndex: 999, minWidth: '150px', textAlign: 'right' };
const signOutBtnStyle = { background: '#D4AF37', color: 'white', border: 'none', padding: '8px 15px', cursor: 'pointer', fontFamily: 'Georgia, serif', width: '100%' };