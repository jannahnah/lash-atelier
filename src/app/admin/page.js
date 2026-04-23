'use client';
import { useEffect, useState } from 'react';
import { supabase } from 'jannah/lib/supabase';

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);

  // Fetch all appointments to categorize them
  const fetchAppointments = async () => {
    const { data } = await supabase
      .from('appointments')
      .select('*')
      .order('appointment_date', { ascending: true });
    if (data) setAppointments(data);
  };

  useEffect(() => { fetchAppointments(); }, []);

  // Function to update status
  const updateStatus = async (id, newStatus) => {
    const { error } = await supabase
      .from('appointments')
      .update({ status: newStatus })
      .eq('id', id);
    
    if (!error) fetchAppointments(); // Refresh the list
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#FAF9F6', minHeight: '100vh' }}>
      <h1 style={{ color: '#D4AF37', marginBottom: '30px' }}>Atelier Management</h1>
      
      {/* Category: Pending Requests */}
      <section>
        <h2 style={{ color: '#333', borderBottom: '1px solid #D4AF37' }}>Pending Requests</h2>
        {appointments.filter(a => a.status === 'pending').map(app => (
          <div key={app.id} style={{ background: '#fff', padding: '15px', margin: '10px 0', border: '1px solid #ddd' }}>
            <p><strong>{app.client_name}</strong> - {app.appointment_date} at {app.appointment_time}</p>
            <button onClick={() => updateStatus(app.id, 'confirmed')} style={{ background: '#D4AF37', color: '#fff', border: 'none', padding: '5px 15px', marginRight: '10px', cursor: 'pointer' }}>Confirm</button>
            <button onClick={() => updateStatus(app.id, 'cancelled')} style={{ background: '#fff', color: '#666', border: '1px solid #666', padding: '5px 15px', cursor: 'pointer' }}>Decline</button>
          </div>
        ))}
      </section>

      {/* Category: Confirmed Schedule */}
      <section style={{ marginTop: '40px' }}>
        <h2 style={{ color: '#333', borderBottom: '1px solid #D4AF37' }}>Confirmed Appointments</h2>
        {appointments.filter(a => a.status === 'confirmed').map(app => (
          <div key={app.id} style={{ background: '#fff', padding: '15px', margin: '10px 0', borderLeft: '5px solid #D4AF37' }}>
            <p><strong>{app.client_name}</strong> - {app.appointment_date} at {app.appointment_time}</p>
            <button onClick={() => updateStatus(app.id, 'cancelled')} style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>Cancel Appointment</button>
          </div>
        ))}
      </section>
    </div>
  );
}