import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SocialLogin.css';
import Loading from '../Loading/Loading';
import {FcGoogle} from 'react-icons/fc';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className="text-center">
            {errorElement}
            <div className='d-flex align-items-center'>
                <div style={{ height: '3px' }} className='bg-info w-50'></div>
                <p className='mt-2 px-2 text-danger'>Or Login With</p>
                <div style={{ height: '3px' }} className='bg-info w-50'></div>
            </div>
            <div className='d-flex justify-content-center'>
                <button onClick={() => signInWithGoogle()} type="button" className="btn btn-outline-success w-50">
                    <FcGoogle className='fs-2'></FcGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;