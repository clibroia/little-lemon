import Button from './Button';

const Hero = () => {
    return(
        <section className="hero-section">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p className="description">
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist
            </p>
            <Button text={"Reserve a table"} />
            <div className="welcome-image">
            </div>
        </section>
    );
}

export default Hero;