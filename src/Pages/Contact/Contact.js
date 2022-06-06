import React from 'react';

const Contact = () => {
    return (
        <div className='container mt-5 my-5'>
            <br /><br /><br /><br /><br />
            <h3 className='mt-5 text-center fw-bold my-5'>Contact Us</h3>
            <br />
            <div className='p-3'>
                <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Enter Your Email" /></div>
                <br />
                <div className="form-group"><textarea className="form-control" type="text" name="text" placeholder="Enter Your Quary Here" /></div>
                <br />
                <div className="form-group  d-flex justify-content-center"><button className="btn btn-primary btn-block" type="submit">Submit</button></div>
            </div>
        </div>
    );
};

export default Contact;