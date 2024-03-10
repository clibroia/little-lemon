const Button = (props) => {
    return(
        <button
            type="button"
            className={props.class}
        >
            {props.text}
        </button>
    );
}

export default Button;