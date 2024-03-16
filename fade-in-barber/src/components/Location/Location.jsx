import React from 'react';

import phoneIcon from '../../assets/images/phone-icon.jpg';
import addressIcon from '../../assets/images/address-icon.jpg';
import './Location.css';

const Location = () => {
    return (
        <div className='contact'>
            <h3 >Get in Touch : <span className='text-white'> Let's Make Your Vision a Reality!</span></h3>
            <div className="container">

                <div className='flex-it'>
                    <div className="contact-info">
                        <img className="icon" src={phoneIcon} alt="phone" />
                        <div className="contact-details">
                            <div><span style={{ color: "goldenrod" }}>Phone:</span></div>
                            <div><span >+61450797980</span></div>
                        </div>
                    </div>
                    <div className="contact-info">
                        <img className="icon" src={addressIcon} alt="address" />
                        <div className="contact-details">
                            <div><span style={{ color: "goldenrod" }}>Address:</span></div>
                            <div><span>Unit 5/613 Hume Hwy, Casula NSW 2170, Australia</span></div>
                        </div>
                    </div>
                </div>
                <div className="business-hours">
                    <span>Business Hours:</span>
                    <div>
                        <div className='fs-5'><b className='pe-1'>Friday : </b> 9:30 AM – 6:30PM</div>
                        <div className='fs-5'><b className='pe-1'>Saturday : </b> 9:30 AM – 5:00PM</div>
                        <div className='fs-5'><b className='pe-1'>Sunday :</b> 9:30 AM – 4:00PM</div>
                        <div className='fs-5'><b className='pe-1'>Monday :</b> 9:30 AM – 6:00PM</div>
                        <div className='fs-5'><b className='pe-1'>Tuesday :</b> 9:30 AM – 6:00PM</div>
                        <div className='fs-5'><b className='pe-1'>Wednesday :</b> 9:30 AM – 6:00PM</div>
                        <div className='fs-5'><b className='pe-1'>Thursday :</b> 9:30 AM – 8:00PM</div>
                    </div>
                </div>
            </div>
            <div className='google-map-container pt-4'>
                <div className='google-map'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.4625236682214!2d150.89549010000002!3d-33.9549495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1295d116196711%3A0x69417ae62c5498ad!2sFade%20In%20Barber%20Shop!5e0!3m2!1sen!2sbd!4v1710509686808!5m2!1sen!2sbd"
                        width="1000"
                        height="520"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Location;
