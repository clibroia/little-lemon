import { useState } from "react";
import CommentArea from "./CommentArea";
import LabelInput from "./LabelInput";
import LabelNumber from "./LabelNumber";
import LabelSelect from "./LabelSelect";
import SeatingOption from "./SeatingOption";

const BookingForm = () => {
    const occasions = [
        {label:"Anniversary", value:"anniversary"},
        {label:"Birthday", value:"birthday"},
        {label:"Business", value:"business"},
        {label:"Engagement", value:"engagement"}
    ];
    const times = [
        {label:"19:30", value:"19:30"},
        {label:"20:00", value:"20:00"},
        {label:"20:30", value:"20:30"},
        {label:"21:00", value:"21:00"},
        {label:"21:30", value:"21:30"},
        {label:"22:00", value:"22:00"},
    ];
    const [bookingData, setBookingData] = useState({
        name:"",
        email:"",
        date:"",
        time:"",
        occasion:"",
        diners:"1",
        seating:"",
        comment:""
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bookingData);
    }
    const nameChange = (e) => {
        setBookingData(prevState => {
            return({
                ...prevState,
                name: e.target.value
            });
        });
    }
    const emailChange = (e) => {
        setBookingData(prevState => {
            return({
                ...prevState,
                email: e.target.value
            });
        });
    }
    const dateChange = (e) => {
        setBookingData(prevState => {
            return({
                ...prevState,
                date: e.target.value
            });
        });
    }
    const timeChange = (e) => {
        setBookingData(prevState => {
            return({
                ...prevState,
                time: e.target.value
            });
        });
    }
    const occasionChange = (e) => {
        setBookingData(prevState => {
            return({
                ...prevState,
                occasion: e.target.value
            });
        });
    }
    const dinersChange = (e) => {
        setBookingData(prevState => {
            return({
                ...prevState,
                diners: e.target.value
            });
        });
    }
    const handleSelection = (e) => {
        setBookingData(prevState => {
            return({
                ...prevState,
                seating: e.target.value
            });
        });
    }
    const commentChange = (e) => {
        setBookingData(prevState => {
            return({
                ...prevState,
                comment: e.target.value
            });
        });
    }
    return(
        <>
            <form
            className="res-form"
            onSubmit={handleSubmit}
            >
                <div className="form-group">
                    <LabelInput
                    labelText={"Name"}
                    inputId={"user-name"}
                    inputType={"text"}
                    handleChange={nameChange}
                    inputValue={bookingData.name}
                    />
                    <LabelInput
                    labelText={"Email"}
                    inputId={"user-email"}
                    inputType={"email"}
                    handleChange={emailChange}
                    inputValue={bookingData.email}
                    />
                </div>
                <div className="form-group">
                    <div className="form-res-date-time">
                        <LabelInput
                        labelText={"Date"}
                        inputId={"res-date"}
                        inputType={"date"}
                        handleChange={dateChange}
                        inputValue={bookingData.date}
                        />
                        <LabelSelect
                        divClassName={"form-label-data"}
                        selectId={"res-time"}
                        labelText={"Time"}
                        options={times}
                        selectedValue={bookingData.time}
                        handleChange={timeChange}
                        />
                    </div>
                    <LabelNumber
                    divClassName={"form-label-data form-fit-content"}
                    inputId={"res-diners"}
                    labelText={"Number of Diners"}
                    inputType={"number"}
                    inputPlaceholder={"1"}
                    inputMin={"1"}
                    inputMax={"15"}
                    numberValue={bookingData.diners}
                    handleChange={dinersChange}
                    />
                    <LabelSelect
                    divClassName={"form-label-data form-fit-content"}
                    selectId={"res-occasion"}
                    labelText={"Occasion"}
                    options={occasions}
                    selectedValue={bookingData.occasion}
                    handleChange={occasionChange}
                    />
                    <SeatingOption
                    handleSeatingSelection={handleSelection}
                    />
                </div>
                <CommentArea
                areaValue={bookingData.comment}
                handleChange={commentChange}
                />
                <div className="form-submit">
                    <input type="submit" value="Reserve a table" className="hero-button"/>
                </div>
            </form>
        </>
    );
}

export default BookingForm;