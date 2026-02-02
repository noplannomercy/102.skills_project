'use client';

import React, { useState } from 'react';
import Modal from './Modal';
import Input from './Input';
import { useReservation } from '@/contexts/ReservationContext';

const ReservationModal = () => {
  const { isOpen, closeModal, reservationData, setReservationData, submitReservation } = useReservation();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors: Record<string, string> = {};
    if (!reservationData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!reservationData.date) {
      newErrors.date = 'Date is required';
    }
    if (!reservationData.time) {
      newErrors.time = 'Time is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    submitReservation();
  };

  // Generate time slots from 5:00 PM to 9:30 PM in 30-minute intervals
  const timeSlots = [];
  for (let hour = 17; hour <= 21; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      if (hour === 21 && minute > 30) break; // Stop at 9:30 PM
      const time12hr = hour > 12 ? hour - 12 : hour;
      const minuteStr = minute.toString().padStart(2, '0');
      const period = hour >= 12 ? 'PM' : 'AM';
      timeSlots.push(`${time12hr}:${minuteStr} ${period}`);
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      title="Reserve a Table"
      size="md"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Name"
          type="text"
          value={reservationData.name}
          onChange={(e) => setReservationData({ ...reservationData, name: e.target.value })}
          placeholder="Enter your name"
          error={errors.name}
          required
          fullWidth
        />

        <div>
          <label className="block text-body-sm font-medium text-neutral-700 mb-2">
            Party Size <span className="text-error-500">*</span>
          </label>
          <select
            value={reservationData.partySize}
            onChange={(e) => setReservationData({ ...reservationData, partySize: parseInt(e.target.value) })}
            className="w-full h-11 px-4 rounded-lg border border-neutral-300
              hover:border-neutral-400 focus:border-primary-400 focus:ring-3
              focus:ring-primary-400 focus:ring-offset-2
              transition-all duration-200"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((size) => (
              <option key={size} value={size}>
                {size} {size === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>

        <Input
          label="Date"
          type="date"
          value={reservationData.date}
          onChange={(e) => setReservationData({ ...reservationData, date: e.target.value })}
          error={errors.date}
          required
          fullWidth
          min={new Date().toISOString().split('T')[0]}
        />

        <div>
          <label className="block text-body-sm font-medium text-neutral-700 mb-2">
            Time <span className="text-error-500">*</span>
          </label>
          <select
            value={reservationData.time}
            onChange={(e) => setReservationData({ ...reservationData, time: e.target.value })}
            className={`w-full h-11 px-4 rounded-lg border transition-all duration-200
              ${errors.time
                ? 'border-error-500 focus:border-error-500 focus:ring-error-500'
                : 'border-neutral-300 hover:border-neutral-400 focus:border-primary-400 focus:ring-primary-400'
              }
              focus:ring-3 focus:ring-offset-2
            `}
          >
            <option value="">Select a time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {errors.time && (
            <p className="mt-2 text-body-xs text-error-600">{errors.time}</p>
          )}
        </div>

        <div className="bg-neutral-50 rounded-lg p-4 text-body-sm text-neutral-600">
          <p className="font-medium text-neutral-700 mb-1">Reservation Policy</p>
          <p>We'll hold your table for 15 minutes past your reservation time. Please call us if you're running late.</p>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={closeModal}
            className="h-11 px-6 rounded-lg border border-neutral-300 text-neutral-700
              hover:bg-neutral-100 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="h-11 px-6 rounded-lg bg-primary-500 text-white font-medium
              hover:bg-primary-600 transition-colors"
          >
            Reserve Table
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ReservationModal;
