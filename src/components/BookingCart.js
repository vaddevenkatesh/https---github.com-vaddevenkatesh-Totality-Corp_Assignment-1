import React from 'react';
import { useBookings } from '../context/BookingContext';
import './BookingCart.css';

const BookingCart = () => {
  const { bookings, removeBooking } = useBookings();

  const calculateTotal = () => {
    return bookings.reduce((total, booking) => total + booking.price, 0);
  };

  return (
    <div className="booking-cart">
      <h2>Your Bookings</h2>
      <div className="cart-items">
        {bookings.map(booking => (
          <div className="cart-item" key={booking.id}>
            <img src={booking.image} alt={booking.title} />
            <div className="item-details">
              <h3>{booking.title}</h3>
              <p>Booking Date: {booking.date}</p>
              <p>Price: ${booking.price}</p>
              <button onClick={() => removeBooking(booking.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${calculateTotal()}</h3>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default BookingCart;
