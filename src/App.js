import './App.css';

import React from 'react';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import {Routes, Route} from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking-page" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

export default App;
