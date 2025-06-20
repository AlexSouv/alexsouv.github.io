import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import image1 from './images/blast.png';
import image2 from './images/street.JPG';
import image3 from './images/water.JPG';

function CarouselGallery() {
    return(
        <Carousel style={{ width: '600px', height: '300px', margin: '0 auto'}}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
                 style={{ 
                    width: '600px', 
                    height: '300px',
                    objectfit: 'cover',
                    display: 'block',
                    margin: '0 auto'
                 }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image2}
                alt="Second slide"
                 style={{ 
                    width: '600px', 
                    height: '300px',
                    objectfit: 'cover',
                    display: 'block',
                    margin: '0 auto'
                 }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image3}
                alt="Third slide"
                 style={{ 
                    width: '600px', 
                    height: '300px',
                    objectfit: 'cover',
                    display: 'block',
                    margin: '0 auto'
                 }}
                />
            </Carousel.Item>
        </Carousel>
    );
}
export default CarouselGallery;