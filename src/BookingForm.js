import CommentArea from "./CommentArea";
import LabelInput from "./LabelInput";
import LabelNumber from "./LabelNumber";
import LabelSelect from "./LabelSelect";
import SeatingOption from "./SeatingOption";

const BookingForm = ({
    occasions,
    times,
    bookingData,
    handleSubmit,
    nameChange,
    emailChange,
    dateChange,
    timeChange,
    occasionChange,
    dinersChange,
    handleSelection,
    commentChange}) => {
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
                    required={"true"}
                    />
                    <LabelInput
                    labelText={"Email"}
                    inputId={"user-email"}
                    inputType={"email"}
                    handleChange={emailChange}
                    inputValue={bookingData.email}
                    required={"true"}
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
                        required={"true"}
                        />
                        <LabelSelect
                        divClassName={"form-label-data"}
                        selectId={"res-time"}
                        labelText={"Time"}
                        options={times}
                        selectedValue={bookingData.time}
                        handleChange={timeChange}
                        required={"true"}
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
                    required={"true"}
                    />
                    <LabelSelect
                    divClassName={"form-label-data form-fit-content"}
                    selectId={"res-occasion"}
                    labelText={"Occasion"}
                    options={occasions}
                    selectedValue={bookingData.occasion}
                    handleChange={occasionChange}
                    required={"false"}
                    />
                    <SeatingOption
                    handleSeatingSelection={handleSelection}
                    />
                </div>
                <CommentArea
                areaValue={bookingData.comment}
                handleChange={commentChange}
                required={"false"}
                />
                <div className="form-submit">
                    <input type="submit" value="Reserve a table" className="hero-button"/>
                </div>
            </form>
        </>
    );
}

export default BookingForm;