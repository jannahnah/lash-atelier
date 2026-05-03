'use client';
import { useState, useEffect, useCallback } from 'react';
import { supabase } from 'jannah/lib/supabase';
import LashCalendar from './Calendar';

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState('');
  const [bookedSlots, setBookedSlots] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorModal, setErrorModal] = useState({ show: false, message: '' });

  const availableTimes = ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"];

  // 1. Move fetch logic to a useCallback so it can be reused safely
  const fetchAvailability = useCallback(async () => {
    if (!selectedDate) return;
    
    const { data } = await supabase
      .from('appointments')
      .select('appointment_time')
      .eq('appointment_date', selectedDate)
      .eq('status', 'confirmed');
    
    setBookedSlots(data ? data.map(row => row.appointment_time) : []);
  }, [selectedDate]);

  // 2. Combined Effect for initial load and real-time updates
  useEffect(() => {
    fetchAvailability();

    const channel = supabase
      .channel('schema-db-changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'appointments' }, 
        () => fetchAvailability() 
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [selectedDate, fetchAvailability]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const selectedTime = formData.get('time');

    // Safety Check
    const { data: existingAppt } = await supabase
      .from('appointments')
      .select('id')
      .eq('appointment_date', selectedDate)
      .eq('appointment_time', selectedTime)
      .eq('status', 'confirmed')
      .maybeSingle();

    if (existingAppt) {
      setErrorModal({ 
        show: true, 
        message: "Wait! This slot was just confirmed by another client. Please pick a different time." 
      });
      setIsSubmitting(false);
      return; 
    }

    const { error } = await supabase.from('appointments').insert([{
      client_name: formData.get('fullname'),
      email: formData.get('email'),
      service_type: formData.get('service'),
      appointment_date: selectedDate,
      appointment_time: selectedTime,
      notes: formData.get('goals'),
      status: 'pending' 
    }]);

    if (!error) {
      setShowModal(true);
      e.target.reset();
      setSelectedDate('');
    } else {
      setErrorModal({ show: true, message: "Something went wrong. Please try again." });
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input name="fullname" type="text" placeholder="Full Name" required />
          <input name="email" type="email" placeholder="Email Address" required />
        </div>
        
        <select name="service" required defaultValue="">
          <option value="" disabled>Select Service</option>
          <option value="Classic Full Set">Classic Full Set</option>
          <option value="Hybrid Full Set">Hybrid Full Set</option>
          <option value="Volume Full Set">Volume Full Set</option>
        </select>

        <div className="calendar-wrapper">
          <LashCalendar onDateSelect={(date) => setSelectedDate(date)} />
          <p className="selected-date-display">
            {selectedDate ? `Selected: ${selectedDate}` : "Please select a date"}
          </p>
        </div>

        <div className="form-row">
          <select name="time" required disabled={!selectedDate}>
            <option value="">{selectedDate ? "Select Time" : "Pick a date first"}</option>
            {availableTimes.map(time => (
              <option key={time} value={time} disabled={bookedSlots.includes(time)}>
                {time} {bookedSlots.includes(time) ? '— (Fully Booked)' : ''}
              </option>
            ))}
          </select>
        </div>

        <textarea name="goals" placeholder="Lash goals or allergies..." rows="5"></textarea>
        
        <button type="submit" className="btn-gold-fill" disabled={isSubmitting}>
          {isSubmitting ? 'Processing...' : 'Request Appointment'}
        </button>
      </form>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div className="modal-overlay active">
          <div className="modal-content">
            <div className="modal-icon">✨</div>
            <h2>Appointment Requested</h2>
            <div className="gold-accent-line" style={{ margin: "15px auto" }}></div>
            <p>Thank you, Gorgeous! Julienne will review your request and contact you within 24 hours.</p>
            <button onClick={() => setShowModal(false)} className="btn-gold">Back to Site</button>
          </div>
        </div>
      )}

      {/* ERROR MODAL */}
      {errorModal.show && (
        <div className="modal-overlay active">
          <div className="modal-content" style={{ borderColor: '#E74C3C' }}>
            <div className="modal-icon" style={{ background: '#FDEDEC', color: '#E74C3C' }}>⚠️</div>
            <h2 style={{ color: '#333' }}>Slot Unavailable</h2>
            <div className="gold-accent-line" style={{ margin: "15px auto", background: '#E74C3C' }}></div>
            <p>{errorModal.message}</p>
            <button 
              onClick={() => setErrorModal({ show: false, message: '' })} 
              className="btn-gold"
              style={{ background: '#333', color: '#fff', border: 'none' }}
            >
              Try Another Time
            </button>
          </div>
        </div>
      )}
    </>
  );
}