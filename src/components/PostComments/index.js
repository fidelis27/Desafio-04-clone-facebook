import React from 'react';

import './style.css';

export default function PostComments({ author, content }) {
    return (
        <div className="comment">
            <div className="avatar"><img src={author.avatar}></img></div>
            <div className="content">
                
                <div><span>{author.name}</span>{content}</div>
            </div>

        </div>
    );
}
