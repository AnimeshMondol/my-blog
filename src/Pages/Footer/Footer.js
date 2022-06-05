import React from 'react';
import './Footer.css';
import logo from '../../Images/logo.png';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FcPhoneAndroid } from 'react-icons/fc';

const Footer = () => {

    let today = new Date();

    let date = '(' + today.getDate() + ' - ' + (today.getMonth() + 1) + ' - ' + today.getFullYear() + ')';

    let time = today.getHours() + ":" + today.getMinutes();

    let dateTime = (date + '  ' + time);


    return (
        <div>
            <footer id="sticky-footer" style={{ overflow: 'hidden' }} className="flex-shrink-0 navbar-bg-color text-white-50 mt-4 py-2">
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5'>
                    <div className='col pe-3 pb-2'>
                        <div>
                            <img className='img-fluid mt-5 d-flex mx-auto' src={logo} alt="" />
                            <p className='p-3 d-flex mx-auto text-dark'><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quaerat deleniti minus ullam quidem soluta non? Quam!</small></p>
                            <h6 className='text-center text-danger'>Our Social Links</h6>
                            <div className='d-flex justify-content-center'>
                                <button className='btn btn-link fs-1'><FcGoogle></FcGoogle></button>
                                <button className='btn btn-link fs-1'><FaFacebook></FaFacebook></button>
                                <button className='btn btn-link fs-1 text-danger'><FiInstagram></FiInstagram></button>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <h3 className='pt-5 mt-4 mb-5 text-center text-danger'>Some Useful Links</h3>
                            <div className=''>
                                <h5 className='text-center'><Link className='text-decoration-none text-light' to={'/aboutus'}>About Us</Link></h5>
                                <h5 className='text-center'><Link className='text-decoration-none text-light' to={'/blogs'}>Blogs</Link></h5>
                                <h5 className='text-center'><Link className='text-decoration-none text-light' to={'/home'}>Home</Link></h5>
                                <h5 className='text-center'><Link className='text-decoration-none text-light' to={'/signup'}>Sign Up</Link></h5>
                                <h5 className='text-center'><Link className='text-decoration-none text-light' to={'/login'}>Login</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className=''>
                            <h3 className='pt-5 mt-4 mb-5 text-center text-danger'>Contact Us</h3>
                            <h6 className='text-center text-dark'>You can cantact us using phone and email.</h6>
                            <div className='p-3'>
                                <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Enter Your Email" /></div>
                                <br />
                                <div className="form-group"><textarea className="form-control" type="text" name="text" placeholder="Enter Your Quary Here" /></div>
                                <br />
                                <div className="form-group  d-flex justify-content-center"><button className="btn btn-primary btn-block" type="submit">Submit</button></div>
                            </div>
                        </div>
                        <h6 className='text-center text-dark'><FcPhoneAndroid className='fs-1'></FcPhoneAndroid>Or Give A Call At +00801111111111</h6>
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center mt-3 mb-2'>
                    <h5 className='mb-3 text-dark'><small>Copyright &copy; My-Blogs</small></h5>
                    <h6 className='text-dark'><small>{dateTime}</small></h6>

                </div>
            </footer>
        </div>
    );
};

export default Footer;