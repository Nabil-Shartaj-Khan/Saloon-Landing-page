import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <div className="testimonial-container">
            <div className="background-image"></div>
            <div className="testimonial-content">
                <h1 className='test-title pt-5 ps-3'>What our customers think of us?</h1>
                <p className='test-paragraph pt-4 ps-3 fs-4 '>
                    "Elevating experiences, exceeding expectations, one satisfied customer at a time."</p>
            </div>
            <div className='container d-flex justify-content-evenly'>
                <div className="testimonial-item me-5">
                    <span className='test-span '>&rdquo;</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quam tenetur consequatur, optio sequi officia incidunt quia pariatur, rerum distinctio dolor eius minus nihil, asperiores eaque perspiciatis a ipsam odio.</p>
                    <hr />
                    <span style={{ color: 'goldenrod', fontWeight: 'bold' }}>John wick</span>

                </div>
                <div className="testimonial-item me-5 ">
                    <span className='test-span'>&rdquo;</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quam tenetur consequatur, optio sequi officia incidunt quia pariatur, rerum distinctio dolor eius minus nihil, asperiores eaque perspiciatis a ipsam odio.</p>
                    <hr />
                    <span style={{ color: 'goldenrod', fontWeight: 'bold' }}>Dom Toretto</span>
                </div>
                <div className="testimonial-item me-5">
                    <span className='test-span'>&rdquo;</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quam tenetur consequatur, optio sequi officia incidunt quia pariatur, rerum distinctio dolor eius minus nihil, asperiores eaque perspiciatis a ipsam odio.</p>
                    <hr />
                    <span style={{ color: 'goldenrod', fontWeight: 'bold' }}>Deckard Shaw</span>
                </div>

            </div>

        </div>
    );
}

export default Testimonial;
