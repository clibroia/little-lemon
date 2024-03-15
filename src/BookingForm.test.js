import {render, screen} from '@testing-library/react';
import BookingForm from './BookingForm';

test('Renders the heading', () => {
    const bookingDataInitialState = {
        name: '',
        email: {value: '', valid: true},
        date: {value: '', valid: true},
        time: {value: '', valid: true},
        occasion: {value: '', valid: true},
        diners: '1',
        seating: 'inside',
        comment: '',
        submitDisabled: true
    };
    const times = [
        {label:"--:--", value:"--:--"},
        {label:"19:30", value:"19:30"},
        {label:"20:00", value:"20:00"},
        {label:"20:30", value:"20:30"},
        {label:"21:00", value:"21:00"},
        {label:"21:30", value:"21:30"},
        {label:"22:00", value:"22:00"},
    ];
    const occasions = [
        {label:"-", value:"-"},
        {label:"Anniversary", value:"anniversary"},
        {label:"Birthday", value:"birthday"},
        {label:"Business", value:"business"},
        {label:"Engagement", value:"engagement"}
    ];
    render(
        <BookingForm
        bookingData={bookingDataInitialState}
        times={times}
        occasions={occasions}
        />
    );
    const mainHeading = screen.getByText('Number of Diners');
    expect(mainHeading).toBeInTheDocument();
});