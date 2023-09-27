import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./SlidingImages.css";

import Coffee from "../assets/bar-nine-coffee.jpg";
import Donut from "../assets/donut-dessert.jpg";
import Lemon from "../assets/lemon-dessert.jpg";

function SlidingImages() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel fade activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img src={Coffee} text="First slide" alt="coffee"/>
                <Carousel.Caption>
                    <h3>Ready to refuel</h3>
                    <p>now serving 7am - 4pm daily</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img src={Donut} text="Second slide" alt="donut"/>
                <Carousel.Caption>
                    <h3>Fresh Baked Goods</h3>
                    <p>made in house every day</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img src={Lemon} text="Third slide" alt="lemon treat"/>
                <Carousel.Caption>
                    <h3>New Flavor Highlight</h3>
                    <p>lemon tart</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SlidingImages;