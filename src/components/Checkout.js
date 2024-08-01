import React, { useState } from 'react';
import { useBookings } from '../context/BookingContext';
import './Checkout.css';

const Checkout = () => {
  const { bookings } = useBookings();
  const [contactInfo, setContactInfo] = useState({ name: '', email: '' });
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expiryDate: '', cvv: '' });
  const [errors, setErrors] = useState({});

  const calculateTotal = () => {
    return bookings.reduce((total, booking) => total + booking.price, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!contactInfo.name) newErrors.name = 'Name is required';
    if (!contactInfo.email || !/\S+@\S+\.\S+/.test(contactInfo.email)) newErrors.email = 'Valid email is required';
    if (!paymentInfo.cardNumber || paymentInfo.cardNumber.length !== 16) newErrors.cardNumber = 'Valid card number is required';
    if (!paymentInfo.expiryDate) newErrors.expiryDate = 'Expiry date is required';
    if (!paymentInfo.cvv || paymentInfo.cvv.length !== 3) newErrors.cvv = 'Valid CVV is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle successful checkout (e.g., send data to server, display confirmation)
    console.log('Checkout successful:', { contactInfo, paymentInfo });
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={contactInfo.name}
            onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={contactInfo.email}
            onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            value={paymentInfo.cardNumber}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
          />
          {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <input
            type="text"
            value={paymentInfo.expiryDate}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })}
          />
          {errors.expiryDate && <p className="error">{errors.expiryDate}</p>}
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input
            type="text"
            value={paymentInfo.cvv}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
          />
          {errors.cvv && <p className="error">{errors.cvv}</p>}
        </div>
        <div className="checkout-summary">
          <h3>Total Cost: ${calculateTotal()}</h3>
        </div>
        <button type="submit">Complete Checkout</button>
      </form>
    </div>
  );
};

export default Checkout;
