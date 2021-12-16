import React from 'react';
import PostListItem from './PostListItem';

const PostList = props => {
    const { posts, clickPost, deletePost, editPost } = props;
    return posts.map(post => (
        <PostListItem 
            key={post.id} 
            post={post} 
            clickPost={clickPost} 
            deletePost={deletePost}
            editPost={editPost}
        />
    ));
}

export default PostList;