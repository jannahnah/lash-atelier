'use client';
import { useState, useEffect } from 'react';
import { supabase } from 'jannah/lib/supabase';
import LashCalendar from './Calendar'; // Ensure the filename matches your manual component

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState('');
  const [bookedSlots, setBookedSlots] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const availableTimes = ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"];

  useEffect(() => {
    if (selectedDate) {
      const fetchAvailability = async () => {
        const { data } = await supabase
          .from('appointments')
          .select('appointment_time')
          .eq('appointment_date', selectedDate);
        
        if (data) setBookedSlots(data.map(row => row.appointment_time));
      };
      fetchAvailability();
    }
  }, [selectedDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const { error } = await supabase.from('appointments').insert([{
      client_name: formData.get('fullname'),
      email: formData.get('email'),
      service_type: formData.get('service'),
      appointment_date: selectedDate,
      appointment_time: formData.get('time'),
      notes: formData.get('goals')
    }]);

    if (!error) {
      setShowModal(true);
      e.target.reset();
      setSelectedDate('');
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

      {/* Success Modal Integrated into React */}
      {showModal && (
        <div id="successModal" className="modal-overlay active">
          <div className="modal-content">
            <div className="modal-icon">✨</div>
            <h2>Appointment Requested</h2>
            <div className="gold-accent-line" style={{ margin: "15px auto" }}></div>
            <p>Thank you, gorgeous! Julienne will review your request and contact you within 24 hours.</p>
            <button onClick={() => setShowModal(false)} className="btn-gold">Back to Site</button>
          </div>
        </div>
      )}
    </>
  );
}