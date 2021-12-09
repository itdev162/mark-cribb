import React from 'react';
import PostListItem from './PostListItem';

const PostList = props => {
    const { posts, clickPost } = props;
    return posts.map(post => <PostListItem key={post.id} post={post} clickPost={clickPost} />);
};

export default PostList;