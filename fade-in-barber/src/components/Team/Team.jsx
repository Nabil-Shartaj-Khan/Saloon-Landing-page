import React from 'react';
import "./Team.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import beard from '../../assets/images/beards.jpg';
import personal from '../../assets/images/personal.jpeg';
import hehe from '../../assets/images/2.jpg';
import idk from '../../assets/images/3.jpg';
import kid from '../../assets/images/kid.jpg';

const Team = () => {
    const slides = [
        { image: personal, caption: "Expertise", text: "Experienced professionals crafting personalized styles to perfection." },
        { image: hehe, caption: "Personalized Service", text: "Tailored grooming experiences, just for you." },
        { image: idk, caption: "Exceptional Atmosphere", text: "Indulge in our inviting ambiance for an exceptional grooming experience." },
        { image: beard, caption: "Quality Craftsmanship", text: "Elevating your look with meticulous attention to detail." },
        { image: kid, caption: "Luxurious Treatments", text: "Fun and gentle grooming experiences designed specifically for our younger clients." }
    ];

    return (
        <div className='car-container'>
            <h1 className='first-title text-center pb-3 p-5'>Unlock Your Style Potential with Us</h1>
            <h1 className='second-title text-center pb-5'>Where Every Cut Tells Your Story!</h1>
            <div className="carousel-container">
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    stopOnHover={false}
                    interval={3000}
                    transitionTime={1000}
                    showIndicators={false}
                    showArrows={false}
                >
                    {slides.map((slide, index) => (
                        <div key={index}>
                            <img src={slide.image} alt={`Image ${index + 1}`} />
                            <div className="carousel-text">
                                <h3>{slide.caption}</h3>
                                <p>{slide.text}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Team;
