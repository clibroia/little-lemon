import React from 'react';
import { useReducer } from 'react';
import Header from './Header';
import Footer from './Footer';
import BookingHero from './BookingHero';
import BookingForm from './BookingForm';

const BookingPage = () => {
    const occasions = [
        {label:"Anniversary", value:"anniversary"},
        {label:"Birthday", value:"birthday"},
        {label:"Business", value:"business"},
        {label:"Engagement", value:"engagement"}
    ];
    const bookingDataReducer = (bookingData, action) => {
        switch (action.type) {
            case 'nameChange': {
                return({
                    ...bookingData,
                    name: action.value
                });
            }
            case 'emailChange': {
                return({
                    ...bookingData,
                    email: action.value
                });
            }
            case 'dateChange': {
                return({
                    ...bookingData,
                    date: action.value
                });
            }
            case 'timeChange': {
                return({
                    ...bookingData,
                    time: action.value
                });
            }
            case 'occasionChange': {
                return({
                    ...bookingData,
                    occasion: action.value
                });
            }
            case 'dinersChange': {
                return({
                    ...bookingData,
                    diners: action.value
                });
            }
            case 'handleSelection': {
                return({
                    ...bookingData,
                    seating: action.value
                });
            }
            case 'commentChange': {
                return({
                    ...bookingData,
                    comment: action.value
                });
            }
            default: {
                throw Error('Unknown action: '+ action.type)
            }
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bookingData);
    }
    const nameChange = (e) => {
        dispatch({
            type: 'nameChange',
            value: e.target.value
        });
    }
    const emailChange = (e) => {
        dispatch({
            type: 'emailChange',
            value: e.target.value
        });
    }
    const dateChange = (e) => {
        dispatch({
            type: 'dateChange',
            value: e.target.value
        });
    }
    const timeChange = (e) => {
        dispatch({
            type: 'timeChange',
            value: e.target.value
        });
    }
    const occasionChange = (e) => {
        dispatch({
            type: 'occasionChange',
            value: e.target.value
        });
    }
    const dinersChange = (e) => {
        dispatch({
            type: 'dinersChange',
            value: e.target.value
        });
    }
    const handleSelection = (e) => {
        dispatch({
            type: 'handleSelection',
            value: e.target.value
        });
    }
    const commentChange = (e) => {
        dispatch({
            type: 'commentChange',
            value: e.target.value
        });
    }
    const [bookingData, dispatch] = useReducer(
        bookingDataReducer,
        {
            name: '',
            email: '',
            date: '',
            time: '',
            occasion: '',
            diners: '1',
            seating: 'inside',
            comment: ''
        }
    );
    const timesReducer = (times, action) => {
        switch(action.type) {
            case 'updateTimes': {
                return(times);
            }
            default: {
                throw Error('Unknown action: ' + action.type);
            }
        }
    }
    const updateTimes = (e) => {
        dispatchDate({
            type: 'updateTimes',
            value: e.target.value
        });
    }
    const [times, dispatchDate] = useReducer(
        timesReducer,
        [
            {label:"19:30", value:"19:30"},
            {label:"20:00", value:"20:00"},
            {label:"20:30", value:"20:30"},
            {label:"21:00", value:"21:00"},
            {label:"21:30", value:"21:30"},
            {label:"22:00", value:"22:00"},
        ]
    );
    return(
        <>
            <Header />
            <BookingHero />
            <BookingForm
            occasions={occasions}
            times={times}
            bookingData={bookingData}
            handleSubmit={handleSubmit}
            nameChange={nameChange}
            emailChange={emailChange}
            dateChange={dateChange}
            timeChange={timeChange}
            occasionChange={occasionChange}
            dinersChange={dinersChange}
            handleSelection={handleSelection}
            commentChange={commentChange}
            />
            <Footer />
        </>
    );
}

export default BookingPage;