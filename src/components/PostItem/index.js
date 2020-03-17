import React from 'react';

import './style.css';
import PostComments from '../PostComments';

function PostItem({ author, date, content, comments }) {
    console.log(author)
    return (<>
        <div className="post">
            <div className="post-header">
                <img className="avatar" src={author.avatar} />
                <div className="details">
                    <span className="name">{author.name}</span>
                    <span className="date">{date}</span>
                </div>
            </div>
            <div className="content">
                {content}
            </div>
            { 
            comments.map((comment, index) => (
                <PostComments key={index} {...comment}/>
            ))
        }
        </div>
        
        </>
       
    );
}

export default PostItem;
