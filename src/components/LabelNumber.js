const LabelNumber = (props) => {
    return(
        <div className={props.divClassName}>
            <label htmlFor={props.inputId}>
                {props.labelText}
            </label>
            <div className="number-container">
                <input
                id={props.inputId}
                type={props.inputType}
                placeholder={props.inputPlaceholder}
                min={props.inputMin}
                max={props.inputMax}
                value={props.numberValue}
                onChange={props.handleChange}
                aria-required={props.required}
                />
                <span>{props.numberValue}</span>
            </div>
        </div>
    );
}

export default LabelNumber;