import SeatingButton from "./SeatingButton";
import { useState } from "react";

const SeatingOption = ({handleSeatingSelection}) => {
    const divClassName="form-label-data";
    const pClassName="seating";
    const pText="Seating";
    const containerClassName="seating-button-container";
    const seatingButtons = [
        {name:"seating", value:"inside", type:"button", label:"Inside"},
        {name:"seating", value:"outside", type:"button", label:"Outside"}
    ];
    const [insideButtonClicked, setInsideButtonClicked] = useState(false);
    const insideButtonHandleClick = (e) => {
        setInsideButtonClicked(true);
        setOutsideButtonClicked(false);
        handleSeatingSelection(e);
    }
    const [outsideButtonClicked, setOutsideButtonClicked] = useState(false);
    const outsideButtonHandleClick = (e) => {
        setOutsideButtonClicked(true);
        setInsideButtonClicked(false);
        handleSeatingSelection(e);
    }
    return(
        <div className={divClassName}>
            <p className={pClassName}>
                {pText}
            </p>
            <div className={containerClassName}>
                <SeatingButton
                buttonName={seatingButtons[0].name}
                buttonValue={seatingButtons[0].value}
                buttonType={seatingButtons[0].type}
                buttonLabel={seatingButtons[0].label}
                clicked={insideButtonClicked}
                handleClick={insideButtonHandleClick}
                />
                <SeatingButton
                buttonName={seatingButtons[1].name}
                buttonValue={seatingButtons[1].value}
                buttonType={seatingButtons[1].type}
                buttonLabel={seatingButtons[1].label}
                clicked={outsideButtonClicked}
                handleClick={outsideButtonHandleClick}
                />
            </div>
        </div>
    );
}

export default SeatingOption;