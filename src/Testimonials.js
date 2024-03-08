import Testimonial from "./Testimonial";

const Testimonials = () => {
    return(
        <section className="testimonials">
            <h2>Testimonials</h2>
            <div className="testimonials-row">
                <Testimonial
                    user={{name: "Lisa", photo: `${window.location.origin}/images/lisa.jpg`}}
                    review={{rating: "5/5", text: `Excellent food and professional service`}}
                />
                <Testimonial
                    user={{name: "John", photo: `${window.location.origin}/images/john.jpg`}}
                    review={{rating: "5/5", text: `The best greek cuisine in Chicago`}}
                />
                <Testimonial
                    user={{name: "Andrew", photo: `${window.location.origin}/images/andrew.jpg`}}
                    review={{rating: "5/5", text: `You should definitely try the lemon dessert`}}
                />
                <Testimonial
                    user={{name: "Rebecca", photo: `${window.location.origin}/images/rebecca.jpg`}}
                    review={{rating: "5/5", text: `A warm Mediterranean vibe, especially in winter`}}
                />
            </div>
        </section>
    );
}

export default Testimonials;