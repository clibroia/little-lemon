import { useState } from "react";

const LabelInput = (props) => {
    const divClassName="form-label-data";
    const [isValid, setIsValid] = useState(true);
    const handleBlur = () => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setIsValid(emailPattern.test(props.inputValue));
    }
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
            onBlur={handleBlur}
            aria-invalid={!isValid}
            />
        </div>
    );
}

export default LabelInput;