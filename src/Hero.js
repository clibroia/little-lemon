import Button from './Button';

const Hero = () => {
    return(
        <section className="hero-section">
            <h1 className="hero-title">Little Lemon</h1>
            <h2 className="hero-subtitle">Chicago</h2>
            <p className="hero-description">
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist
            </p>
            <Button
                text={"Reserve a table"}
                class={"hero-button"}
            />
            <div className="welcome-image">
            </div>
        </section>
    );
}

export default Hero;