import React, { useEffect, useState } from 'react';
import './Blogs.css';
import BlogsCart from '../BlogsCart/BlogsCart';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blog')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='container pt-5 mt-5'>
            <h1 className='text-danger text-center mt-4'>Blogs Posted !!</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mt-3">
                {
                    blogs.map(blog => <BlogsCart
                        key={blog._id}
                        blog={blog}
                    >
                    </BlogsCart>)
                }
            </div>
        </div>
    );
};

export default Blogs;