import React from 'react';
import './Header.css';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../Images/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

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
                                <CustomLink to="/contact">Contact Us</CustomLink>
                            </li>
                            {
                                user ?
                                    <div className='d-flex flex-column flex-sm-column flex-lg-row'>
                                        <li className="nav-item">
                                            <CustomLink to="/add-blog">Add Blog</CustomLink>
                                        </li>
                                        <li className="nav-item nav-item text-light fw-bold ms-5">
                                            Hello <span className='text-decor'> {user.displayName}</span>
                                        </li>
                                        <li className='nav-item text-light fw-bold ms-5' onClick={handleSignOut}>
                                            Sign Out
                                        </li>
                                    </div>
                                    :
                                    <div className='d-flex flex-sm-column flex-lg-row'>
                                        <li className="nav-item">
                                            <CustomLink to="/signup">Sign Up</CustomLink>
                                        </li>
                                        <li className="nav-item">
                                            <CustomLink to="/login">Login</CustomLink>
                                        </li>
                                    </div>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;