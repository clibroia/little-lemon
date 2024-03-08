const Card = (props) => {
    return(
        <div className="card">
            <img
                src={props.img.path}
                alt={props.img.alt}
                className="card-image"
            />
            <div className="card-title">
                <h3>{props.title}</h3>
                <strong>{props.amount}</strong>
            </div>
            <p className="card-copy">{props.copy}</p>
            <div className="card-cta">
                <p>Order a delivery</p>
                <img src={`${window.location.origin}/icons/delivery-icon.svg`} alt="Delivery icon"/>
            </div>
        </div>
    );
}

export default Card;