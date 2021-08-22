import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Post({post, onDelete}) {
    return (
        <div className="divPost">
            <div className="divPostImage">
                <img className="divPostImageImg" src="" alt="No images" />
            </div>
            <div className="divPostText">
                <h2 className="divPostTextH2">
                    {post.title}
                </h2>
                <span className="divPostTextSpan">
                    By <span className="divPostTextSpanIn">Code with Sy Hoang
                    </span>, 1 day ago
                </span>
                <p className="divPostTextP">
                    {post.description}
                </p>
            </div>
            <div className="divPostLinkA divPostLinkARead">
                <Link to={"/blog/"+post.id}>Keep Reading</Link>
            </div>
            <div  className="divPostLinkA divPostLinkAEdit">
                <Link to={"blog/"+post.id+"/edit"}>Edit</Link>
            </div>
            <div  className="divPostLinkA divPostLinkADelete">
                <button onClick={() => onDelete(post)}>Delete</button>
            </div>
        </div>
    )
}

export default Post;