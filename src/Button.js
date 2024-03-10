import { Link } from "react-router-dom";

const Button = (props) => {
    return(
        <Link to={props.pageLink}>
            <button
                type="button"
                className={props.class}
            >
                {props.text}
            </button>
        </Link>
    );
}

export default Button;