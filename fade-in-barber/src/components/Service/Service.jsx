import React from 'react';
import './Service.css';
import haircut from '../../assets/images/haircuticon.jpg';
import beard from '../../assets/images/beard.jpg';
import massage from '../../assets/images/massage.jpg';
import color from '../../assets/images/color.jpg';

const Service = () => {
    return (
        <div className="menu-container">
            <div className="image-background"></div>
            <div className="service-box text-center">
                <p className="service-title text-white fs-3 fw-bold pt-5">Our services</p>
                <p className="second-service-title">Exceptional services that we have to offer to you!</p>
                <div className="container pt-5" style={{ marginTop: '100px' }}>
                    {/* first card */}
                    <div className="card d-flex align-items-center justify-content-center shadow-lg mb-4 me-md-5 me-0">
                        <img src={massage} className="card-img-top service-icon my-1" alt="Massage" />
                        <div className="card-body">
                            <h5 className="card-title fs-4">Massage and treatment</h5>
                            <p className="card-text">Relax and rejuvenate with our quality massage and treatment services. Our expert therapists offer therapeutic massages and exquisite treatments, leaving you refreshed and invigorated.</p>
                        </div>
                    </div>
                    {/* first card end */}
                    {/* second card */}
                    <div className="card d-flex align-items-center justify-content-center shadow-lg mb-4 me-md-5 me-0">
                        <img src={color} className="card-img-top service-icon my-1" alt="Haircut" />
                        <div className="card-body">
                            <h5 className="card-title fs-4">Hair Coloring</h5>
                            <p className="card-text">Transform your look with our professional hair coloring services, tailored to your individual style and preferences</p>
                        </div>
                    </div>
                    {/* second card end */}
                    {/* third card */}
                    <div className="card d-flex align-items-center justify-content-center shadow-lg mb-4 me-md-5 me-0">
                        <img src={beard} className="card-img-top service-icon my-1" alt="Beard" />
                        <div className="card-body">
                            <h5 className="card-title fs-4">Beard Styling</h5>
                            <p className="card-text">Elevate your appearance with our skilled beard styling. Our expert barbers can craft your beard to perfection, whether you prefer a polished or rugged look, exuding confidence and sophistication.</p>
                        </div>
                    </div>
                    {/* third card end */}
                    {/* fourth card */}
                    <div className="card d-flex align-items-center justify-content-center shadow-lg mb-4 me-md-5 me-0">
                        <img src={haircut} className="card-img-top service-icon my-1" alt="Haircut" />
                        <div className="card-body">
                            <h5 className="card-title fs-4">Stylish haircut</h5>
                            <p className="card-text">Refine your look with our expert styling. From timeless classics to the latest trends, our personalized hairstyles exude elegance and style. Visit our barbershop to begin your journey to confidence and refinement.</p>
                        </div>
                    </div>
                    {/* fourth card end */}
                </div>
                <span className="text-white fs-1 display-2">Like what you see? Go through our <button className="btn btn-outline-dark text-white p-3 fs-5 ms-2" onClick={() => { alert("Redirect to Catalogue page") }}>Catalogue now!</button></span>
            </div>
        </div>
    );
}

export default Service;
