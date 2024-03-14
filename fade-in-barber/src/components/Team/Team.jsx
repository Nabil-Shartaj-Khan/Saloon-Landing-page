import React from 'react';
import './Team.css'
import one from '../../assets/images/artist1.jpg';
import two from '../../assets/images/artist2.jpg';
import three from '../../assets/images/artist3.jpg';

const Team = () => {
    return (
        <div className='service-container'>
            <div className="text-center">
                <p className="second-service-title">Meet our artists!</p>
                <p className="text-white fs-3 fw-bold">Our team working for you</p>
                <div className="container pt-5 d-flex justify-content-around flex-wrap"> {/* Added flex-wrap class for responsiveness */}
                    {/* first member */}
                    <div className="team-card mb-4" style={{ width: '18rem' }}> {/* Added mb-4 class for margin bottom */}
                        <img className="team-card-img-top" src={one} alt="Card image cap" />
                        <div className="team-card-body">
                            <h5 className="team-card-title py-2 text-dark">Random James</h5>
                            <p className="team-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <button className='btn btn-dark p-2 mb-3 fw-light fst-italic'>Book Appointment</button>
                    </div>
                    {/* first member end */}
                    {/* second member */}
                    <div className="team-card mb-4" style={{ width: '18rem' }}> {/* Added mb-4 class for margin bottom */}
                        <img className="team-card-img-top" src={two} alt="Card image cap" />
                        <div className="team-card-body">
                            <h5 className="team-card-title py-2 text-dark">Random Gabriel</h5>
                            <p className="team-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <button className='btn btn-dark p-2 mb-3 fw-light fst-italic'>Book Appointment</button>
                    </div>
                    {/* second member end */}
                    {/* third member */}
                    <div className="team-card mb-4" style={{ width: '18rem' }}> {/* Added mb-4 class for margin bottom */}
                        <img className="team-card-img-top" src={three} alt="Card image cap" />
                        <div className="team-card-body">
                            <h5 className="team-card-title py-2 text-dark">Random Michael</h5>
                            <p className="team-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        </div>
                        <button className='btn btn-dark p-2 mb-3 fw-light fst-italic'>Book Appointment</button>
                    </div>
                    {/* third member end */}
                </div>
            </div>
        </div>
    );
}

export default Team;
