import './App.css';

import React from 'react';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking-page" element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
