import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const AddBlog = () => {
    const [agree, setAgree] = useState(false);
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const onSubmit = (data) => {

        const url = `https://agile-reef-27808.herokuapp.com/blog`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success("data is added");
                // window.location.reload();
                navigate('/blogs');
            })
    }

    const username = user?.displayName;

    let today = new Date();

    let date = '(' + today.getDate() + ' - ' + (today.getMonth() + 1) + ' - ' + today.getFullYear() + ')';

    let time = today.getHours() + ":" + today.getMinutes();

    let dateTime = (date + '  ' + time);

    let like = 0;

    let dislike = 0;

    return (
        <div className='mt-3'>
            <br /><br /><br />
            <div className='bg-color p-3 d-flex flex-column box-border mt-5 w-75 mx-auto'>
                <div className='card-body'>
                    <h1 className='text-center mb-3'>Add New Blog</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-outline mb-4">
                            <input className="form-control" {...register("title", { type: Text, required: true, maxLength: 30 })} />
                            <label className="form-label" for="form3Example1">Enter Title</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="url" {...register("img", { required: true })} className="form-control" />
                            <label className="form-label" for="form3Example3">Enter Image URL</label>
                        </div>
                        <div className="form-outline mb-4 d-none">
                            <input type="text" value={username} {...register("author", { readOnly: true, required: true })} className="form-control" />
                            <label className="form-label" for="form3Example1">Author Name</label>
                        </div>
                        <div className="form-outline mb-4">
                            <textarea type='number' {...register("description", { required: true})} className="form-control" />
                            <label className="form-label" for="form3Example2">Enter Details</label>
                        </div>
                        <div className="form-outline mb-4 d-none">
                            <input type="text" value={like} {...register("like", { readOnly: true, required: true })} className="form-control" />
                            <label className="form-label" for="form3Example1">Like</label>
                        </div>
                        <div className="form-outline mb-4 d-none">
                            <input type="text" value={dislike} {...register("dislike", { readOnly: true, required: true })} className="form-control" />
                            <label className="form-label" for="form3Example1">Dislike</label>
                        </div>
                        <div className="form-outline mb-4 d-none">
                            <input type="text" value={dateTime} {...register("date_time", { readOnly: true, required: true })} className="form-control" />
                            <label className="form-label" for="form3Example1">Date</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" required />
                            <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Are You sure That the info is currect?</label>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button type="submit" className="btn btn-primary btn-lg rounded-3"
                                disabled={!agree}
                                value="Register">
                                Blog Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;

