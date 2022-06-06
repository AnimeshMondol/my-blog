import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import BlogsCart from '../BlogsCart/BlogsCart';
import './Home.css'

const Home = () => {

    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/blog')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const goToBlogsPage = () => {
        const path = `/blogs`
        navigate(path);
    }

    return (
        <div>
            <Banner></Banner>
            <div className='container pt-5 mt-5'>
                <h1 className='text-danger text-center mt-4'>Blogs Posted !!</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mt-3">
                    {
                        blogs.slice(0, 6).map(blog => <BlogsCart
                            key={blog._id}
                            blog={blog}
                        >
                        </BlogsCart>)
                    }
                </div>
                <br />
                <div className='d-flex p-2 justify-content-center'>
                    <button onClick={goToBlogsPage} className='btn btn-danger my-3 me-2'>Click Here To See More Blog Posts</button>
                </div>
            </div>
        </div>
    );
};

export default Home;