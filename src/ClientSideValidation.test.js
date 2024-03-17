import {render, fireEvent, screen} from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import BookingPage from './BookingPage';

test('Entering an empty string as a name', () => {
    render(
        <MemoryRouter initialEntries={['/booking-page']}>
            <Routes>
                <Route path="/booking-page" element={<BookingPage />} />
            </Routes>
        </MemoryRouter>
    );
    const submitButton = screen.getByDisplayValue('Reserve a table');
    const email = screen.getByLabelText('Email');
    const nameInput = screen.getByLabelText('Name');
    fireEvent.change(nameInput, {target: {value: 'Giggino'}});
    expect(nameInput).toHaveDisplayValue('Giggino');
    fireEvent.blur(nameInput);
    fireEvent.change(email, {target: {value: 'c@@gmail.com'}});
    fireEvent.blur(email);
    expect(email).toHaveAttribute('aria-invalid', 'true');
    const emailMessage = screen.getByText('Insert a valid email address');
    expect(emailMessage).toBeInTheDocument();
    expect(nameInput).toHaveAttribute('aria-invalid', 'false');
    expect(submitButton).toHaveAttribute('aria-disabled', 'true');
});