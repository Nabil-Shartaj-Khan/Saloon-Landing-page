import './Location.css';
import location from '../../assets/images/location.jpg';

const Location = () => {
    return (
        <div className="map-container d-flex flex-column flex-md-row justify-content-evenly align-items-center"> {/* Added flex-column class for small screens */}
            <div>
                <img src={location} alt="Location" className="img-fluid" /> {/* Added img-fluid class for responsive images */}
            </div>
            <div className='map-right-side'>
                <div><h4 className='map-heading py-4'>We are located in!</h4></div>
                <div><p className="map-title text-white"><a href='https://maps.app.goo.gl/pd7Qf6wWMEVzuNru6' target='_blank' rel='noopener noreferrer'>Google map location</a></p></div> {/* Added rel='noopener noreferrer' for security */}
                <div><p className='map-description pt-3 text-white'>Unit 5/613 Hume Hwy, Casula NSW 2170, Australia</p></div>
                <div><p className='map-description pt-3 text-white'>+61450797980</p></div>
            </div>
        </div>
    );
}

export default Location;
