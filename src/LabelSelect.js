const LabelSelect = (props) => {
    return(
        <div className={props.divClassName}>
            <label htmlFor={props.selectId}>
                {props.labelText}
            </label>
            <select id={props.selectId}>
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
        </div>
    );
}

export default LabelSelect;