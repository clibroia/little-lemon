const Testimonial = (props) => {
    return(
        <div className="testimonial">
            <h3 className="testimonial-name">{props.user.name}</h3>
            <div className="testimonial-photo-rating">
                <img
                    src={props.user.photo}
                    alt="User profile"
                    className="testimonial-photo"
                />
                <strong className="testimonial-rating">{props.review.rating}</strong>
            </div>
            <p className="testimonial-review">{props.review.text}</p>
        </div>
    );
}

export default Testimonial;