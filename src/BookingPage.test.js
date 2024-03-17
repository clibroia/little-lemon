import {render, fireEvent, screen} from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import BookingPage from './BookingPage';
import mockTimeSlotsAPI from './mockTimeSlotsAPI';

global.window.timeSlotsAPI = mockTimeSlotsAPI;

test("Initializing times", () => {
    render(
        <MemoryRouter initialEntries={['/booking-page']}>
            <Routes>
                <Route path="/booking-page" element={<BookingPage />} />
            </Routes>
        </MemoryRouter>
    );
    const initialTimes = ["--:--"];
    initialTimes.forEach(time => {
        const renderedTime = screen.getByText(time);
        expect(renderedTime).toBeInTheDocument();
    });
});

test("Updating times", () => {
    render(
        <MemoryRouter initialEntries={['/booking-page']}>
            <Routes>
                <Route path="/booking-page" element={<BookingPage />} />
            </Routes>
        </MemoryRouter>
    );
    const validTimes = ['19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
    const inputDate = screen.getByLabelText(/Date/);
    fireEvent.change(inputDate, {target: {value: '2024-03-16'}});
    expect(inputDate).toHaveDisplayValue('2024-03-16');
    const timeSelect = screen.getByLabelText(/Time/);
    expect(timeSelect).toBeInTheDocument();
    const updatedOptions = timeSelect.children;
    [...updatedOptions].forEach(option => {
        const renderedTime = option.value;
        expect(validTimes.includes(renderedTime)).toBe(true);
    });
});