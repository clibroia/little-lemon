const BookingForm = () => {
    return(
        <>
            <form className="res-form">
                <div className="form-user">
                    <div className="form-user-name">
                    <label htmlFor="user-name">Name</label>
                    <input id="user-name" type="text"/>
                    </div>
                    <div className="form-user-email">
                        <label htmlFor="user-email">Email</label>
                        <input id="user-email" type="email"/>
                    </div>
                </div>
                <div className="form-res-details">
                    <div className="form-res-date-time">
                        <div className="form-res-date">
                            <label htmlFor="res-date">Date</label>
                            <input id="res-date" type="date"/>
                        </div>
                        <div className="form-res-time">
                            <label htmlFor="res-time">Time</label>
                            <select id="res-time">
                                <option>19:30</option>
                                <option>20:00</option>
                                <option>20:30</option>
                                <option>21:00</option>
                                <option>21:30</option>
                                <option>22:00</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-res-diners">
                        <label htmlFor="res-diners">Number of Diners</label>
                        <input id="res-diners" type="number" placeholder="1" min="1" max="15" />
                    </div>
                    <div className="form-res-occasion">
                        <label htmlFor="res-occasion">Occasion</label>
                        <select id="res-occasion">
                            <option>Anniversary</option>
                            <option>Birthday</option>
                            <option>Business</option>
                            <option>Engagement</option>
                        </select>
                    </div>
                    <div className="form-res-seating">
                        <p className="seating">Seating</p>
                        <div className="seating-button-container">
                            <button name="seating" value="inside" type="button">Inside</button>
                            <button name="seating" value="outside" type="button">Outside</button>
                        </div>
                    </div>
                </div>
                <div className="form-comments">
                    <label htmlFor="res-comments">Additional comments</label>
                    <textarea id="res-comments" maxLength="300"></textarea>
                </div>
                <div className="form-submit">
                    <input type="submit" value="Reserve a table" className="hero-button"/>
                </div>
            </form>
        </>
    );
}

export default BookingForm;