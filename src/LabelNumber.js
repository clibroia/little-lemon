const LabelNumber = (props) => {
    return(
        <div className={props.divClassName}>
            <label htmlFor={props.inputId}>
                {props.labelText}
            </label>
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
        </div>
    );
}

export default LabelNumber;