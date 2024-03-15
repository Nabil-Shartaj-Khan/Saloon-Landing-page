import React from 'react';
import './About.css';
import kid from '../../assets/images/kid.jpg';
import facility from '../../assets/images/facility.jpeg';
import beard from '../../assets/images/beards.jpg';
import personal from '../../assets/images/personal.jpeg';
import hehe from '../../assets/images/2.jpg';
import idk from '../../assets/images/3.jpg';

const services = [
  { image: kid, title: 'Our services', description: 'Discover premier grooming services tailored to elevate your style.' },
  { image: facility, title: 'Book Appointment', description: 'Simplify your grooming routine – book your appointment effortlessly today.' },
  { image: beard, title: 'Beard treatment', description: 'Elevate your beard game with our specialized beard treatments, crafted for a distinguished and groomed look.' },
  { image: personal, title: 'Scalp treatments', description: 'Nourish your scalp and promote healthy hair growth with our revitalizing scalp treatments.' },
  { image: hehe, title: 'Hair coloring', description: 'Revitalize your hair with our professional coloring services, tailored to match your style and personality.' },
  { image: idk, title: 'Loyalty programme', description: 'Unlock exclusive benefits and rewards with our loyalty program, designed to show appreciation for our valued customers.' }
];

const About = () => {
  return (
    <div>
      <h1 className='grid-header'>Grooming Oasis :<span className='text-white'> Discover Services! </span></h1>
      <div className="grid-container">
        {services.map((service, index) => (
          <div className="grid-item" key={index} onClick={() => alert("Hehe")}>
            <img src={service.image} alt={service.title} className="about-image" />
            <div className="overlay">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
            <div className="initial-text">
              <p className='initial-text-p'>{service.title}</p>
            </div>
          </div>
        ))
        }
      </div >
    </div>
  );
}

export default About;