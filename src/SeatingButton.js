const SeatingButton = (props) => {
    const buttonClassName = props.clicked ? "seating-button seating-button-clicked":"seating-button";
    return(
        <button
        name={props.buttonName}
        value={props.buttonValue}
        type={props.buttonType}
        className={buttonClassName}
        onClick={props.handleClick}
        >
            {props.buttonLabel}
        </button>
    );
}

export default SeatingButton;