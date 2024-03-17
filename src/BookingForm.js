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
    nameBlur,
    nameChange,
    emailBlur,
    emailChange,
    dateBlur,
    dateChange,
    timeBlur,
    timeChange,
    occasionBlur,
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
                        handleBlur={nameBlur}
                        inputValue={bookingData.name.value}
                        required={"true"}
                        ariaInvalid={!bookingData.name.valid}
                        />
                        <LabelInput
                        labelText={"Email"}
                        inputId={"user-email"}
                        inputType={"email"}
                        handleChange={emailChange}
                        handleBlur={emailBlur}
                        inputValue={bookingData.email.value}
                        required={"true"}
                        ariaInvalid={!bookingData.email.valid}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-res-date-time">
                            <LabelInput
                            labelText={"Date"}
                            inputId={"res-date"}
                            inputType={"date"}
                            handleChange={dateChange}
                            handleBlur={dateBlur}
                            inputValue={bookingData.date.value}
                            required={"true"}
                            ariaInvalid={!bookingData.date.valid}
                            />
                            <LabelSelect
                            divClassName={"form-label-data"}
                            selectId={"res-time"}
                            labelText={"Time"}
                            options={times}
                            selectedValue={bookingData.time.value}
                            handleChange={timeChange}
                            handleBlur={timeBlur}
                            required={"true"}
                            ariaInvalid={!bookingData.time.valid}
                            />
                        </div>
                        <LabelNumber
                        divClassName={"form-label-data form-fit-content"}
                        inputId={"res-diners"}
                        labelText={"Number of Diners"}
                        inputType={"range"}
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
                        selectedValue={bookingData.occasion.value}
                        handleChange={occasionChange}
                        handleBlur={occasionBlur}
                        required={"false"}
                        ariaInvalid={!bookingData.occasion.valid}
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
                        <input
                        type="submit"
                        value="Reserve a table"
                        className="hero-button"
                        aria-disabled={bookingData.submitDisabled}
                        disabled={bookingData.submitDisabled}
                        />
                    </div>
                </form>
            </>
        );
}

export default BookingForm;