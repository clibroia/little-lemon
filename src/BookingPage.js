import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BookingHero from './BookingHero';
import BookingForm from './BookingForm';

const BookingPage = () => {
    return(
        <>
            <Header />
            <BookingHero />
            <BookingForm />
            <Footer />
        </>
    );
}

export default BookingPage;