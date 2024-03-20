import React from 'react';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import {Routes, Route} from 'react-router-dom';
import ConfirmedBooking from './components/ConfirmedBooking';

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
