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
                <h1 className="intro-title">Best Barbers in town</h1>
                <p className="intro-text">Creating Masterpieces, Not Just Haircuts. Step in for a Transformation</p>
                <button className='btn btn-outline-warning text-white p-3 mt-5 fs-4' onClick={() => { alert("Redirect to contact or appointment page") }}>Contact now!</button>
            </div>
        </div>
    );
}

export default Intro;
