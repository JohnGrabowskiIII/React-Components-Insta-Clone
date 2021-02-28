import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {/* DONE map through the comments prop and render a Comment for every piece of data */}
      {comments.map(cb => {
        return Comment(cb);
      })}
    </div>
  );
};

export default Comments;
