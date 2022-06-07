import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './Signup.css';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import {GiArchiveRegister} from 'react-icons/gi'

const Signup = () => {
    const [agree, setAgree] = useState(false);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();

    const navigateToLogin = event => {
        navigate('/login');
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,

    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
        navigate('/home');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        toast.success("Profile is Updated!!");
        navigate('/home');
    }

    return (
        <div className="container py-4 mt-5">
            <div className="row g-0 align-items-center mt-5">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="card cascading-right card-bg">
                        <div className="card-body p-5 shadow-5 text-center">
                            <h2 className="fw-bold mb-5">Sign Up Here <GiArchiveRegister></GiArchiveRegister> !!</h2>
                            <form onSubmit={handleRegister}>
                                <div className="form-outline mb-4">
                                    <input ref={nameRef} type="text" id="form3Example1" className="form-control" required />
                                    <label className="form-label" for="form3Example1">Enter Your Name</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input ref={emailRef} type="email" id="form3Example2" className="form-control" required />
                                    <label className="form-label" for="form3Example2">Enter Email Address</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="password" id="form3Example3" className="form-control" required />
                                    <label className="form-label" for="form3Example3">Enter Password</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input ref={passwordRef} type="password" id="form3Example4" className="form-control" required />
                                    <label className="form-label" for="form3Example">Confirm Password</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" required />
                                    <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept all the Terms and Conditions</label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mb-4"
                                    disabled={!agree}
                                    value="Register">
                                    Sign Up
                                </button>
                            </form>
                            <p>Already have an account? <span><Link to="/login" className="text-danger fw-bold pe-auto text-decoration-none" onClick={navigateToLogin}>Click Here</Link></span></p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5 mb-lg-0">
                    <img src="https://images.unsplash.com/photo-1510861320402-285a6c7639ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80" className="w-100 rounded-4 shadow-4"
                        alt="" />
                </div>
            </div>
        </div>
    );
};

export default Signup;