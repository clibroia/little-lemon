import Header from "./Header";
import Footer from "./Footer";

const ConfirmedBooking = () => {
    return(
        <>
            <Header />
            <main className="confirmation-main">
                <div className="check-container">
                    <img src={`${window.location.origin}/icons/confirmation-check.svg`} alt="Green check mark" />
                </div>
                <h1 className="confirmed-heading">Thank you!</h1>
                <p className="confirmed-text">An email has been sent to the address provided</p>
            </main>
            <Footer />
        </>
    );
}

export default ConfirmedBooking;