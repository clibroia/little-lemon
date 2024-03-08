import Button from './Button';
import Card from './Card';

const Specials = () => {
    return(
        <section className="highlights">
            <div className="highlights-heading">
                <h2>SPECIALS</h2>
                <Button text={"On the menu"}/>
            </div>
            <div className="cards-container">
                <Card
                    img={{path: `${window.location.origin}/images/greek salad.jpg`, alt: "Greek salad"}}
                    title={"Greek salad"}
                    amount={"$12.99"}
                    copy={`The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese,
                            garnished with crunchy garlic and rosemary croutons`}
                />
                <Card
                    img={{path: `${window.location.origin}/images/bruschetta.png`, alt: "Bruschetta"}}
                    title={"Bruschetta"}
                    amount={"$5.99"}
                    copy={`Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with
                            salt and olive oil`}
                />
                <Card
                    img={{path: `${window.location.origin}/images/lemon dessert.jpg`, alt: "Lemon dessert"}}
                    title={"Lemon dessert"}
                    amount={"$5.00"}
                    copy={`This comes straight from grandma’s recipe book, every last ingredient has been sourced and is
                            as authentic as can be imagined`}
                />
            </div>
        </section>
    );
}

export default Specials;