import React from 'react';
import PostListItem from './PostListItem';

const PostList = props => {
    const { posts, clickPost, deletePost } = props;
    return posts.map(post => (
        <PostListItem 
            key={post.id} 
            post={post} 
            clickPost={clickPost}
            deletePost={deletePost}
        />
    ));
};

export default PostList;