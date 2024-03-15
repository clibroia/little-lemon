const LabelInput = (props) => {
    const divClassName="form-label-data";
    return(
        <div className={divClassName}>
            <label htmlFor={props.inputId}>
                {props.labelText}
            </label>
            <input
            id={props.inputId}
            type={props.inputType}
            value={props.inputValue}
            onChange={props.handleChange}
            aria-required={props.required}
            onBlur={props.handleBlur}
            aria-invalid={props.ariaInvalid}
            />
        </div>
    );
}

export default LabelInput;