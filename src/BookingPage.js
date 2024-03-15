import React from 'react';
import { useReducer } from 'react';
import Header from './Header';
import Footer from './Footer';
import BookingHero from './BookingHero';
import BookingForm from './BookingForm';
import { bookingDataInitialState, bookingDataReducer } from './bookingDataReducer';

const BookingPage = () => {
    const occasions = [
        {label:"-", value:"-"},
        {label:"Anniversary", value:"anniversary"},
        {label:"Birthday", value:"birthday"},
        {label:"Business", value:"business"},
        {label:"Engagement", value:"engagement"}
    ];
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
    const emailBlur = (e) => {
        dispatch({
            type: 'emailBlur',
            value: e.target.value
        });
    }
    const emailChange = (e) => {
        dispatch({
            type: 'emailChange',
            value: e.target.value
        });
    }
    const dateBlur = (e) => {
        dispatch({
            type: 'dateBlur',
            value: e.target.value
        });
    }
    const dateChange = (e) => {
        dispatch({
            type: 'dateChange',
            value: e.target.value
        });
    }
    const timeBlur = (e) => {
        dispatch({
            type: 'timeBlur',
            value: e.target.value
        });
    }
    const timeChange = (e) => {
        dispatch({
            type: 'timeChange',
            value: e.target.value
        });
    }
    const occasionBlur = (e) => {
        dispatch({
            type: 'occasionBlur',
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
    const [bookingData, dispatch] = useReducer(bookingDataReducer, bookingDataInitialState);
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
    const dateAndTimesChange = (e) => {
        dateChange(e);
        updateTimes(e);
    }
    const initializeTimes = () => {
        return(
            [
                {label:"--:--", value:"--:--"},
                {label:"19:30", value:"19:30"},
                {label:"20:00", value:"20:00"},
                {label:"20:30", value:"20:30"},
                {label:"21:00", value:"21:00"},
                {label:"21:30", value:"21:30"},
                {label:"22:00", value:"22:00"},
            ]
        );
    }
    const [times, dispatchDate] = useReducer(timesReducer, initializeTimes());
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
            emailBlur={emailBlur}
            emailChange={emailChange}
            dateBlur={dateBlur}
            dateChange={dateAndTimesChange}
            timeBlur={timeBlur}
            timeChange={timeChange}
            occasionBlur={occasionBlur}
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