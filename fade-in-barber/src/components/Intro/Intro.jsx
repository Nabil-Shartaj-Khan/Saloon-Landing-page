import React from 'react';
import './Intro.css';
import video from '../../assets/images/video.mp4';


const Intro = () => {
    return (
        <div className="intro-section">

            <video autoPlay loop muted>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="text-overlay">
                <h1 className="intro-title text-white">Your hairstyle speaks volumes about who you are</h1>
                <h1 className="intro-title-second pt-1">make it count , with us</h1>
                <button className='intro-button mt-4' onClick={() => { alert("Redirect to contact or appointment page") }}>Book appointment!</button>
            </div>
        </div>
    );
}

export default Intro;
