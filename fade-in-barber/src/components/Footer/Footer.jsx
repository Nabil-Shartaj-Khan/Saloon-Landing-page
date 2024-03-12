import './Footer.css';
import logo from '../../assets/images/logo.jpg';

const Footer = () => {
    return (
        <footer className="text-light py-4">
            <div className="footer-container">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="d-flex flex-column">
                            <img src={logo} alt="Company Logo" className="mb-2" style={{ maxWidth: '200px' }} />
                            <p className='footer-pg pt-3'>Address: Unit 5/613 Hume Hwy, Casula NSW 2170, Australia</p>
                            <p className='footer-pg'>Contact: +61450797980</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="d-flex flex-column">
                            <p className='fs-4'>Follow us on our socials!</p>
                            <div className="d-flex flex-wrap"> {/* Added flex-wrap class for small screens */}
                                <a href="#" className="me-3 mb-2" style={{ textDecoration: 'none' }}>Facebook</a> {/* Added margin classes */}
                                <a href="#" className="me-3 mb-2" style={{ textDecoration: 'none' }}>Instagram</a> {/* Added margin classes */}
                                <a href="#" className="me-3 mb-2" style={{ textDecoration: 'none' }}>Twitter</a> {/* Added margin classes */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="d-flex flex-column">
                            <p className='footer-pg'>Search across website</p>
                            <input type="text" placeholder="Search" className="mb-2 form-control" />
                        </div>
                    </div>
                </div>
            </div>

            <hr className="bg-light" />

            <div className="text-center">
                <p className='fs-5'>Nabil Shartaj Khan &copy; All Rights Reserved  2024</p>
            </div>
        </footer>
    );
}

export default Footer;
