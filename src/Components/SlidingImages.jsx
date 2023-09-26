import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function SlidingImages() {
    return (
        <>
            <Carousel fade>
                <Carousel.Item interval={5000}>
                    <img 
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1541781550486-81b7a2328578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="First" 
                    />
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img 
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                        alt="Second" 
                    />
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img 
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1559598466-f081d11d2238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                        alt="Third"
                    />
                </Carousel.Item>

            </Carousel>
        </>
    );
}

export default SlidingImages;