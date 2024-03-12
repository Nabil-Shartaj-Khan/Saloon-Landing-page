import './About.css';
import collage from '../../assets/images/collage.jpg';

const About = () => {
  return (
    <div className="container d-flex flex-row justify-content-evenly">
      <div>
        <img src={collage} alt="Collage of haircuts" />
      </div>
      <div className='right-side'>
        <div><p className="about-title">Know About us</p></div>
        <div><h4 className='about-heading py-4'>Experienced with haircut for about 20 years!</h4></div>
        <div><p className='about-description pt-3'>Our objective is to offer exceptional grooming services in a welcoming environment, ensuring every customer leaves satisfied and looking their best. Through continuous improvement and community engagement, we aim to build trust and loyalty while prioritizing health and safety. Ultimately, we're here to boost our customers' confidence and wellbeing.</p>
          <button className='btn btn-dark p-3 mt-1' onClick={() => { alert("Redirect to about us page!") }}>Read more...</button></div>
      </div>
    </div>
  );
}

export default About;
