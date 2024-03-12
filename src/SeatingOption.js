import SeatingButton from "./SeatingButton";

const SeatingOption = () => {
    const divClassName="form-label-data";
    const pClassName="seating";
    const pText="Seating";
    const containerClassName="seating-button-container";
    const seatingButtons = [
        {name:"seating", value:"inside", type:"button", label:"Inside"},
        {name:"seating", value:"outside", type:"button", label:"Outside"}
    ];
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
                />
                <SeatingButton
                buttonName={seatingButtons[1].name}
                buttonValue={seatingButtons[1].value}
                buttonType={seatingButtons[1].type}
                buttonLabel={seatingButtons[1].label}
                />
            </div>
        </div>
    );
}

export default SeatingOption;