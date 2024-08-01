import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const useBookings = () => {
  return useContext(BookingContext);
};

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (property) => {
    setBookings([...bookings, property]);
  };

  const removeBooking = (id) => {
    setBookings(bookings.filter(booking => booking.id !== id));
  };

  const updateBooking = (id, newDetails) => {
    setBookings(bookings.map(booking => booking.id === id ? { ...booking, ...newDetails } : booking));
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, removeBooking, updateBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
