import React from 'react';
import './Service.css';
import haircut from '../../assets/images/haircuticon.jpg';
import beard from '../../assets/images/beard.jpg';
import massage from '../../assets/images/massage.jpg';
import color from '../../assets/images/color.jpg';

const services = [
    {
        image: massage,
        title: "Massage and Treatment",
        description: "Relax and rejuvenate with our quality massage and treatment services. Our expert therapists offer therapeutic massages and exquisite treatments, leaving you refreshed and invigorated."
    },
    {
        image: color,
        title: "Hair Coloring",
        description: "Transform your look with our professional hair coloring services, tailored to your individual style and preferences."
    },
    {
        image: beard,
        title: "Beard Styling",
        description: "Elevate your appearance with our skilled beard styling. Our expert barbers can craft your beard to perfection, whether you prefer a polished or rugged look, exuding confidence and sophistication."
    },
    {
        image: haircut,
        title: "Stylish Haircut",
        description: "Refine your look with our expert styling. From timeless classics to the latest trends, our personalized hairstyles exude elegance and style. Visit our barbershop to begin your journey to confidence and refinement."
    }
];

const Service = () => {
    return (
        <div className="menu-container">
            <div className="image-background"></div>
            <div className="service-box text-center">
                <p className="second-service-title">Exceptional services</p>
                <p className='third-service-title'>In an exceptional manner</p>
                <div className="container pt-1" style={{ marginTop: '100px' }}>
                    {services.map((service, index) => (
                        <div className="card d-flex align-items-center justify-content-center shadow-lg mb-4 me-md-5 me-0" key={index}>
                            <img src={service.image} className="card-img-top service-icon my-1" alt={service.title} />
                            <div className="card-body">
                                <h5 className="card-title fs-3">{service.title}</h5>
                                <p className="card-text">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <span className="text-white like-span ">Like what you see? Go through our <button className="intro-button fs-3" onClick={() => { alert("Redirect to Catalogue page") }}>Catalogue now!</button></span>
            </div>
        </div>
    );
}

export default Service;
