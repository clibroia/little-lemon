import React from 'react';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import {Routes, Route, useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  const ScrollToTop = () => {
    const {pathname} = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    },
    [pathname]);
    return null;
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking-page" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

export default App;
