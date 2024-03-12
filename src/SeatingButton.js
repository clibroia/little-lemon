const SeatingButton = (props) => {
    const buttonClassName="seating-button";
    return(
        <button
        name={props.buttonName}
        value={props.buttonValue}
        type={props.buttonType}
        className={buttonClassName}
        >
            {props.buttonLabel}
        </button>
    );
}

export default SeatingButton;