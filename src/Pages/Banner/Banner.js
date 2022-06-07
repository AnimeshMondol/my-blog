import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='container mt-5'>
            <br /><br /><br />
            <div className="swiffy-slider slider-nav-round slider-nav-animation slider-nav-animation-fadein slider-item-first-visible">
                <ul className="slider-container">
                    <li className="slide-visible">
                        <div className="card rounded-0 h-100">
                            <div className="row g-0 h-100">
                                <div className="col-md-6 col-xl-5 d-flex align-items-center p-2 p-md-3 p-xl-5">
                                    <div className="card-body p-1 p-md-3 p-xl-5">
                                        <p className="lead">Why is my blog</p>
                                        <h2 className="card-title text-danger">My-Blogs</h2>
                                        <p className="card-text mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus hic deserunt sunt error voluptates, non inventore consectetur exercitationem laboriosam dolore.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minima!</p>
                                        <p className="card-text"><small className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing.</small></p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-7">
                                    <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" className="card-img d-none d-md-block size" loading="lazy" alt="..." />
                                    <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" className="card-img d-block d-md-none size2" loading="lazy" alt="..." />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="">
                        <div className="card rounded-0 h-100">
                            <div className="row g-0 h-100">
                                <div className="col-md-6 col-xl-7">
                                    <img src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" className="card-img d-none d-md-block size" loading="lazy" alt="..." />
                                    <img src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" className="card-img d-block d-md-none size2" loading="lazy" alt="..." />
                                </div>
                                <div className="col-md-6 col-xl-5 d-flex align-items-center p-2 p-md-3 p-xl-5">
                                    <div className="card-body p-1 p-md-3 p-xl-5">
                                        <p className="lead">Lorem ipsum dolor sit amet.</p>
                                        <h2 className="card-title text-danger">Lorem ipsum dolor sitlld kkdjf iurd.</h2>
                                        <p className="card-text mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, suscipit. Voluptatibus nobis laborum cum quidem impedit quae, nam voluptatum voluptatem.</p>
                                        <p className="card-text"><small className="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing.</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="">
                        <div className="card rounded-0 h-100 text-white">
                            <img src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" className="card-img h-100 size3" alt="..." />
                            <div className="card-img-overlay d-flex align-items-start align-items-md-center justify-content-center flex-column">
                                <h2 className="card-title h1 d-block d-md-inline-block text-danger">Lorem ipsum dolor sit amet.</h2>
                                <p className="card-text lead col-md-8 col-lg-6 text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias saepe tempora voluptas dolorem in impedit possimus consectetur dolores est eveniet. Non, libero nesciunt?</p>
                            </div>
                        </div>
                    </li>
                </ul>

                <button type="button" className="slider-nav" aria-label="Go left"></button>
                <button type="button" className="slider-nav slider-nav-next" aria-label="Go left"></button>

                <div className="slider-indicators">
                    <button className="active" aria-label="Go to slide"></button>
                    <button aria-label="Go to slide" className=""></button>
                    <button aria-label="Go to slide" className=""></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;