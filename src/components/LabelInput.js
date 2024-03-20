const LabelInput = (props) => {
    const displayErrorMessage = () => {
        switch(props.labelText) {
            case 'Name':
            case 'Date':
                return 'Required';
            case 'Email': {
                if(props.inputValue==='') {
                    return 'Required';
                }
                return 'Insert a valid email address';
            }
            default:
                return '';
        }
    }
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
            {props.ariaInvalid && <p className="error-message">{displayErrorMessage()}</p>}
        </div>
    );
}

export default LabelInput;