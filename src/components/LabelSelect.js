const LabelSelect = (props) => {
    const displayErrorMessage = () => {
        switch(props.labelText) {
            case 'Time':
            case 'Occasion':
                return 'Required';
            default:
                return '';
        }
    }
    return(
        <div className={props.divClassName}>
            <label htmlFor={props.selectId}>
                {props.labelText}
            </label>
            <select
            id={props.selectId}
            value={props.selectedValue}
            onChange={props.handleChange}
            aria-required={props.required}
            onBlur={props.handleBlur}
            aria-invalid={props.ariaInvalid}
            >
                {props.options.map(option => {
                    return(
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    );
                })}
            </select>
            {props.ariaInvalid && <p className="error-message">{displayErrorMessage()}</p>}
        </div>
    );
}

export default LabelSelect;