import React from 'react';

import phoneIcon from '../../assets/images/phone-icon.jpg';
import addressIcon from '../../assets/images/address-icon.jpg';
import './Location.css';

const Location = () => {
    return (
        <div className='contact'>
            <h3>Get in Touch - Let's Make Your Vision a Reality!</h3>
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
                        title="Google Map"
                        width="100%"
                        height="500"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Unit%205/613%20Hume%20Hwy,%20Casula%20NSW%202170,%20Australia+(Fade%20In%20Barber%20Shop)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Location;
