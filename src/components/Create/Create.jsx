import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

const schema  = yup.object().shape({
    title: yup.string().required().max(100),
    description: yup.string().required().min(10),
    user_id: yup.number().positive().integer().required(),
});

function Create() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [post, setPost] = useState({});

    const onSubmit = (post) => {
        setPost(post);
    };

    useEffect(() => {
        if(post.user_id){
            axios.post(`http://127.0.0.1:8000/api/post`, post)
            .then(res => {
                alert("New post was submitted: " + res.data.post.title);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        }
    },[post]);
    return (
        <div className="divCreateContainer">
            <div className="divCreateContainerBanner">
                <h1 className="h1Posts">Create Posts</h1>
            </div>
            <div className="divCreateContainerForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text"
                        placeholder="Title..." className="title"
                        {...register("title")} autoFocus/>
                    <p className="messagesCreate">{errors.title?.message}</p>
                    <textarea placeholder="Description..."
                        className="description"
                        {...register("description")}/>
                    <p className="messagesCreate">{errors.description?.message}</p>
                    <input type="text" placeholder="Number"
                        className="number"
                        {...register("user_id")}/>
                    <p className="messagesCreate">{errors.user_id?.message}</p>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create;