import React, {useState, useEffect} from 'react';
import axios from'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Show({match}) {
    const [post, setPost] = useState({id: 1, title: 'Socialism Republic of Vietnam', description: 'Description of Vietnam'});
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/post/${match.params.id}`).then(
            res => {
                const post = res.data.post;
                setPost(post);
            }
        ).catch(
            err => console.log(err)
        );
    }, []);
    return (
        <div className="divShowContainer">
            <div className="divShowContainerBanner">
                <h1>{post.title}</h1>
            </div>
            <div className="divShowContainerText">
                <p>{post.description}</p>
            </div>
            <div className="divShowContainerButton">
                <Link to="/blog">Go to Back</Link>
            </div>
        </div>
    )
}

export default Show;