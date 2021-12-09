import React from 'react';
import { useHistory } from 'react-router-dom';
import slugify from 'slugify';
import './styles.css';

const PostListItem = props => {
    const { post, clickPost } = props;
    const history = useHistory();

    const handleClickPost = post => {
        const slug = slugify(post.title, { lower: true });

        clickPost(post);
        history.push(`/posts/${slug}`);
    };

    return (
        <div>
            <div className="postListItem" onClick={() => handleClickPost(post)}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    );
};

export default PostListItem;