'use client';
import { useState } from 'react';

export default function LashCalendar({ onDateSelect }) {
  return (
    <div className="calendar-container py-4">
      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--gold)' }}>
        Select Appointment Date
      </label>
      <input 
        type="date" 
        className="luxury-date-input w-full p-3 rounded"
        style={{
          border: '1px solid var(--gold-line)',
          backgroundColor: 'var(--bg-color)',
          color: 'var(--text)'
        }}
        onChange={(e) => onDateSelect(e.target.value)}
        min={new Date().toISOString().split('T')[0]}
        required
      />
    </div>
  );
}