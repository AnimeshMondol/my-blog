import React from 'react';
import './BlogsCart.css';
import {AiOutlineLike} from 'react-icons/ai';
import {AiOutlineDislike} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const BlogsCart = ({ blog }) => {
    const { _id, author, img, description, title, like, dislike, date_time} = blog;

    const navigate = useNavigate();

    const navigateToDetail = id => {
        navigate(`/blog/${id}`);
    }

    return (
        <div className='col'>
            <div className='bg-color h-100 p-3 d-flex flex-column box-border'>
                <img className='card-img-top img-fluid' src={img} alt="100*100" />
                <div className='card-body'>
                    <h4 className='text-center fw-bolder card-name'>{title}</h4>
                    <hr />
                    <div className='d-flex justify-content-between align-items-center'>
                    <h5 className='fw-bold'><span className='text-danger'>Author: </span>{author}</h5>
                    <small>{date_time}</small>
                    </div>
                    <h6 className='text-center my-4 fs-5'><span className='text-primary'>Detail: </span><small>{description.slice(0, 70)}...</small><span className='text-success'>See More in details</span></h6>
                    <div className='d-flex justify-content-between align-items-center'>
                    <button className='fw-bold my-4 btn btn-light border border-2'><AiOutlineLike></AiOutlineLike> {like}</button>
                    <button className='fw-bold my-4 btn btn-light border border-2'><AiOutlineDislike></AiOutlineDislike> {dislike}</button>
                    </div>
                    <hr />
                </div>
                <div className='d-flex justify-content-center p-2'>
                    <button onClick={() => navigateToDetail(_id)} className='btn btn-primary'>Click Here For Details!</button>
                </div>
                
            </div>
        </div>
    );
};

export default BlogsCart;