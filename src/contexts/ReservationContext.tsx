'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ReservationData {
  name: string;
  partySize: number;
  date: string;
  time: string;
}

interface ReservationContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  reservationData: ReservationData;
  setReservationData: (data: ReservationData) => void;
  submitReservation: () => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservation must be used within ReservationProvider');
  }
  return context;
};

export const ReservationProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [reservationData, setReservationData] = useState<ReservationData>({
    name: '',
    partySize: 2,
    date: '',
    time: '',
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const submitReservation = () => {
    console.log('Reservation submitted:', reservationData);
    // In production, this would make an API call
    alert(`Thank you, ${reservationData.name}! Your table for ${reservationData.partySize} on ${reservationData.date} at ${reservationData.time} has been reserved.`);
    closeModal();
    // Reset form
    setReservationData({
      name: '',
      partySize: 2,
      date: '',
      time: '',
    });
  };

  return (
    <ReservationContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        reservationData,
        setReservationData,
        submitReservation,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};
