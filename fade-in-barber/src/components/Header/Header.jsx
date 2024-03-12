import './Header.css';
import logo from '../../assets/images/logo.jpg';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand text-primary" href="#intro"><img src={logo} alt="Logo" /></a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end pe-5"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                className="nav-link active  text-white"
                                aria-current="page"
                                href="#"
                            >Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-white " href="#About">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-white " href="#Services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-white" href="#Team">Our team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-white" href="#Blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-white" href="#Contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <button className='button-join' onClick={() => { alert("Redirect to Membership page") }}>Join us</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
