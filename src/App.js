// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import HomePage from './pages/HomePage';
import Checkout from './components/Checkout';
import './App.css';
import BookingCart from './components/BookingCart';
import Login from './components/Login';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <Router>
      <BookingProvider>
        <Routes>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/userprofile'  element = {<UserProfile/>}/>
          <Route path="/homepage" element={<HomePage />} />
          <Route path='/bookings' element= {<BookingCart/>} />
          <Route path="/checkout" element={<Checkout />} />
          
        </Routes>
      </BookingProvider>
    </Router>
  );
};

export default App;
