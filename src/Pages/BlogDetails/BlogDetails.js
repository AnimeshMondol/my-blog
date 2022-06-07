import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import { toast } from 'react-toastify';


const BlogDetails = () => {

    const { blogId } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [isReload, setIsReload] = useState(false);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        fetch(`http://localhost:5000/blog/${blogId}`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handelLike = async (blogId) => {
        let remainingLike = parseInt(blogs.like) + 1;
        let like = remainingLike;

        if (like > -1) {
            fetch(`http://localhost:5000/bloglike/${blogId}`, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ like }),
            })
                .then((res) => res.json())
                .then((data) => setIsReload(!isReload));
            toast.success("You Liked The Post");
            await sleep(3000);
            window.location.reload();
        }
    }

    const handelDislike = async (blogId) => {
    
        let remainingDislike = parseInt(blogs.dislike) + 1;
        let dislike = remainingDislike;

        if (dislike > -1) {

            fetch(`http://localhost:5000/blogdislike/${blogId}`, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ dislike }),
            })
                .then((res) => res.json())
                .then((data) => setIsReload(!isReload));
            toast.danger("You Disliked The Post");
            window.location.reload();
        }
    }

    return (
        <div className='container mt-5 pt-5'>
            <br />
            <div className='bg-color h-100 p-3 d-flex flex-column box-border'>
                <img className='card-img-top img-fluid' src={blogs.img} alt="100*100" />
                <div className='card-body'>
                    <h4 className='text-center fw-bolder card-name text-uppercase'>{blogs.title}</h4>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h6 className='fw-bold fst-italic'><span className='text-danger'>Author: </span>{blogs.author}</h6>
                        <div>
                            <button onClick={() => handelLike(blogId)} className='fw-bold my-4 btn btn-light border border-2 ms-3 me-3'><AiOutlineLike></AiOutlineLike>  {blogs.like}</button>
                            <button onClick={() => handelDislike(blogId)} className='fw-bold my-4 btn btn-light border border-2 ms-3 me-3'><AiOutlineDislike></AiOutlineDislike>  {blogs.dislike}</button>
                        </div>
                    </div>
                    <hr />
                    <h6 className='my-4 fs-5'><span className='text-primary'>Detail: </span>{blogs.description}</h6>
                    <div className='card-footer'>
                        <h6 className='text-end text-muted fst-italic'>{blogs.date_time}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;

