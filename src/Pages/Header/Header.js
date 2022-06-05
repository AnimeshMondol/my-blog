import React from 'react';
import './Header.css';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../Images/logo.png';

const Header = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark navbar-bg-color">
                <div className="container-fluid">
                    <CustomLink className='img-fluid mx-auto' to="/home">
                        <img
                            src={logo}
                            height='90px'
                            alt=''
                        />
                    </CustomLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <CustomLink to="/home">Home</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to="/blogs">Blog</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to="/about">About Us</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to="/contact">Contact US</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to="/signup">Sign Up</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to="/login">Login</CustomLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;