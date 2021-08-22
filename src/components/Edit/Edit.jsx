import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

const schema  = yup.object().shape({
    title: yup.string().required().max(100),
    description: yup.string().required().min(10),
    user_id: yup.number().positive().integer().required(),
});

function Edit({match}) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [post, setPost] = useState({});
    const [lock, setLock] = useState(false);

    const onSubmit = (data) => {
        const title = data.title;
        const description = data.description;
        const user_id = data.user_id;
        setLock(true);
        setPost({...post,title,description,user_id});
    };

    useEffect(() => {
        if(lock){
            axios.put(`http://127.0.0.1:8000/api/post/${post.id}`, post)
            .then(res => {
                alert("This post was updated: " + res.data.post.title);
            })
            .catch(err => {
                console.log(err);
            });
        }
        else if(!post.id) {
            axios.get(`http://127.0.0.1:8000/api/post/${match.params.id}`)
            .then(res => {
                const post = res.data.post;
                setPost(post);
            }).catch(
                err => console.log(err)
            );
        }
    },[post]);

    return(
        <div className="divEditContainer">
            <div className="divEditContainerBanner">
                <h3 className="h1Posts">Edit Post</h3>
            </div>
            <div className="divEditContainerForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Title..."
                        className="title"
                        {...register("title")}
                        defaultValue={post.title} autoFocus/>
                    <textarea name="description" placeholder="Description..."
                        className="description"
                        {...register("description")}
                        defaultValue={post.description}/>
                    <input type="text" placeholder="Number"
                        className="number"
                        {...register("user_id")}
                        defaultValue={post.user_id}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Edit;