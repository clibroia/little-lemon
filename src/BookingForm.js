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
    const [name, setName] = useState("");
    const nameChange = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    }
    return(
        <>
            <form className="res-form">
                <div className="form-group">
                    <LabelInput
                    labelText={"Name"}
                    inputId={"user-name"}
                    inputType={"text"}
                    handleChange={nameChange}
                    inputValue={name}
                    />
                    <LabelInput
                    labelText={"Email"}
                    inputId={"user-email"}
                    inputType={"email"}
                    />
                </div>
                <div className="form-group">
                    <div className="form-res-date-time">
                        <LabelInput
                        labelText={"Date"}
                        inputId={"res-date"}
                        inputType={"date"}
                        />
                        <LabelSelect
                        divClassName={"form-label-data"}
                        selectId={"res-time"}
                        labelText={"Time"}
                        options={times}
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
                    />
                    <LabelSelect
                    divClassName={"form-label-data form-fit-content"}
                    selectId={"res-occasion"}
                    labelText={"Occasion"}
                    options={occasions}
                    />
                    <SeatingOption />
                </div>
                <CommentArea />
                <div className="form-submit">
                    <input type="submit" value="Reserve a table" className="hero-button"/>
                </div>
            </form>
        </>
    );
}

export default BookingForm;