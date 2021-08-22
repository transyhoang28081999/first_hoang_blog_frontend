import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from'axios';
import Post from './Post';
import Pagination from '../Pagination/Pagination';

function Posts() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Socialism Republic of Vietnam', description: 'Description of Vietnam'},
        {id: 2, title: 'Population Republic of China', description: 'Description of China'}
    ]);
    const [pagination, setPagination] = useState({
        total: 2,
        perPage: 2,
        currentPage: 1
    });
    const [page, setPage] = useState(1);
    const onDelete = item => {
        axios.delete(`http://127.0.0.1:8000/api/post/${item.id}`)
        .then(res => {
            console.log(res);
            alert("A post was deleted: " + item.title);
        })
        .catch(err => console.log(err))
    };
    const handleChangePage = newPage => {
        setPage(newPage);
    };
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/posts?page=${page}`)
        .then(
        res => {
            const posts = res.data.posts;
            const pagination = res.data.meta;
            setPagination(pagination);
            setPosts(posts);
        }
        ).catch(
            err => console.log(err)
        );
    },[page]);
    return (
        <div className="divPostsContainer">
            <div className="divPostsContainerBanner">
                <h1 className="h1Posts">Blog Posts</h1>
            </div>
            <div className="divPostsContainerButtonCreate">
                <span>
                    <Link to="/blog/create">Create Post</Link>
                </span>
            </div>
            <div>
                {posts.map(post =>
                    <Post
                        key={post.id}
                        post={post}
                        onDelete={onDelete}
                    />
                )}
            </div>
            <Pagination
                pagination={pagination}
                onChangePage={handleChangePage}
                />
        </div>
    )
}

export default Posts;