import React from 'react';
import { useReducer, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import BookingHero from './BookingHero';
import BookingForm from './BookingForm';
import { bookingDataInitialState, bookingDataReducer } from '../bookingDataReducer';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/clibroia/little-lemon-API/main/timeSlotsAPI.js')
        .then(response => response.text())
        .then(script => {
            const scriptElement = document.createElement('script');
            scriptElement.innerHTML = script;
            document.head.appendChild(scriptElement);
        })
        .catch(error => {
            throw Error('An error occurred:', error);
        });

        fetch('https://raw.githubusercontent.com/clibroia/little-lemon-API/main/submitAPI.js')
        .then(response => response.text())
        .then(script => {
            const scriptElement = document.createElement('script');
            scriptElement.innerHTML = script;
            document.head.appendChild(scriptElement);
        })
        .catch(error => {
            throw Error('An error occurred:', error);
        });
    },
    []);
    const occasions = [
        {label:"-", value:"-"},
        {label:"Anniversary", value:"anniversary"},
        {label:"Birthday", value:"birthday"},
        {label:"Business", value:"business"},
        {label:"Engagement", value:"engagement"}
    ];
    const handleSubmit = async (e) => {
        e.preventDefault();
        const submissionResult = await window.submitAPI.submit();
        if(submissionResult) {
            navigate("/confirmation");
        }
    }
    const nameBlur = (e) => {
        dispatch({
            type: 'nameBlur',
            value: e.target.value
        });
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
                const availableTimes = window.timeSlotsAPI.fetchData(action.value);
                return(
                    availableTimes.map(time => {
                        return({
                            label: time,
                            value: time
                        });
                    })
                );
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
                {label: '--:--', value: '--:--'}
            ]
        );
    }
    const [times, dispatchDate] = useReducer(timesReducer, undefined, initializeTimes);
    return(
        <>
            <Header />
            <BookingHero />
            <BookingForm
            occasions={occasions}
            times={times}
            bookingData={bookingData}
            handleSubmit={handleSubmit}
            nameBlur={nameBlur}
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