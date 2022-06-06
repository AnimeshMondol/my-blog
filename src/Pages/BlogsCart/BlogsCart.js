import React from 'react';
import './BlogsCart.css'

const BlogsCart = ({ blog }) => {
    const { _id, author, img, description, title, like, dislike, date_time, comments } = blog;
    return (
        <div className='col'>
            <div className='bg-color h-100 p-3 d-flex flex-column box-border'>
                <img className='card-img-top img-fluid' src={img} alt="100*100" />
                <div className='card-body'>
                    <h2 className='text-center fw-bolder card-name'>{title}</h2>
                    <hr />
                    <h4 className='text-center fw-bold my-4 fs-4'><span className='text-danger'>Author: </span>{author}</h4>
                    <h6 className='text-center my-4 fs-5'><span className='text-primary'>Detail: </span>{description.slice(0, 70)}...<span className='text-success'>See More in details</span></h6>
                    <h6 className='text-center fw-bold my-4'><span className='text-primary'>Likes: </span>{like}</h6>
                    <h6 className='text-center fw-bold my-4'><span className='text-primary'>Dislikes: </span>{dislike}</h6>
                    <h6 className='text-center fw-bold my-4'><span className='text-primary'>Time: </span>{date_time}</h6>
                    <h6 className='text-center fw-bold my-4'><span className='text-primary'>Comments: </span>{comments}</h6>
                    <hr />
                </div>
                
            </div>
        </div>
    );
};

export default BlogsCart;