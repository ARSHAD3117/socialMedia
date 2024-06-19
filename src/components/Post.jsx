import React, { useContext } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { PostList } from '../store/post-list-store';

const Post = ({ postListItem }) => {
    const {deletePost}=useContext(PostList)
    return (
        <div className="card post-card" style={{ width: "30rem" }}>
            <div className="card-body">
                <h5 className="card-title">{postListItem.title}
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    onClick={()=>deletePost(postListItem.id)}
                    >
                        <MdDeleteForever />
                    </span>
                </h5>
                <p className="card-text">{postListItem.body}</p>
                {postListItem.tags.map(tag =>
                    <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
                )}
                <div className="alert alert-success reactions" role="alert">
                    This post has been reacted by {postListItem.views || postListItem.reactions} people
                </div>
            </div>
        </div>
    )
}

export default Post