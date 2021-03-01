import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* DONE Map through the posts array returning a Post component at each iteration */}
      {/* DONE Check the implementation of Post to see what props it requires! */}
      {/* {posts.map(e => { */}
        {/* Post(e); */}
      {/* })} */}
      {posts.map((e, index) => {
        return <Post key={index} likePost={likePost} post={e} />
      })}
    </div>
  );
};

export default Posts;
