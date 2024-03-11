import './App.css';

import React from 'react';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import {Routes, Route} from 'react-router-dom';
import Confirmation from './Confirmation';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking-page" element={<BookingPage />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </>
  );
}

export default App;
