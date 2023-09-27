import React from 'react';
import Card from 'react-bootstrap/Card';

import AboutUs from "../../../assets/about-us-bread.jpg";
import "../../About.css";

function About() {
    return (
        <Card className="card">
            <Card.Body>
                <h2>About Us</h2>
                <p>Welcome to Flour Power Bakery & Cafe, where we take our love for baking and caffeine to a whole new level of deliciousness and whimsy! 🍰☕</p>
                
                <img src={AboutUs} className="my-3" alt="a loaf of bread" />

                <h3>Our Story</h3>
                <p>Once upon a time in a kitchen far, far away, a group of flour-tossing, coffee-sipping enthusiasts came together to create something magical. Armed with aprons and an insatiable sweet tooth, they embarked on a quest to make the world a happier place, one bite at a time.</p>

                <p>Our journey began with a simple idea: What if we combined the two most comforting things in the universe – freshly baked treats and a steaming cup of coffee? And so, Flour Power Bakery & Cafe was born, with flour on our hands and caffeine in our veins!</p>


                <h3>Meet the Team</h3>
                <p>Master Bakers: Our team of master bakers are here to make your taste buds dance with joy. They've perfected the art of turning flour, sugar, and butter into edible dreams. They're so good; they even give cookies an identity crisis!</p>

                <p>Coffee Connoisseurs: Our caffeine-loving experts are always on the hunt for the finest beans from around the world. They take coffee seriously, so you can enjoy it with a smile.</p>

                <p>Chief Cake Artists: These creative minds transform cakes into edible canvases. From birthdays to weddings and everything in between, they'll craft a cake that's almost too beautiful to eat (but trust us, you'll want to).</p>

                <p>Customer Happiness Crew: Our friendly team of cafe enthusiasts are here to ensure you have the most delightful experience. They know the menu like the back of their mixing spoons and are always ready with a warm greeting and a sprinkle of joy.</p>


                <h3>Why Choose Flour Power?</h3>
                <p>We believe that laughter is brightest where food is best. So, expect smiles, giggles, and the occasional snort while enjoying our delectable creations.</p>

                <p>We're firm believers in the power of carbs and caffeine to solve life's problems. Whether it's a tough day or a celebration, we have a treat for every occasion.</p>

                <p>Our cafe is designed to be your cozy escape from the daily grind (pun intended). Come for the food, stay for the ambiance, and leave with a heart full of happiness.</p>


                <h3>Join Us in the Floury, Caffeinated Adventure!</h3>
                <p>Thank you for choosing Flour Power Bakery & Cafe. We're excited to be a part of your sugar-fueled, caffeinated escapades. Come for the pastries, stay for the puns, and leave with your heart and stomach full! 😄🍰☕</p>

                <p>Remember, life is short, but the list of things to eat at Flour Power Bakery & Cafe is long. So, why wait? Let's embark on this delicious journey together!</p>
            </Card.Body>
        </Card>

    );
}

export default About;