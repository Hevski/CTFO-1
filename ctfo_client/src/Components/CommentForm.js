import React from 'react';
import Request from "../helpers/request";

import dayjs from 'dayjs';

const CommentForm = (props) => {
  function handleSubmit(event){
    event.preventDefault();
    const comment = {
      "date": new dayjs(),
      "comment": event.target.comment.value,
      "endMood": event.target.endMood.value
    }
    handleCommentPost(comment);
  }

  function handleCommentPost(comment){
    const request = new Request();
    request.post('/api/journals', comment).then(() => {
      window.location = '/journals'
    })
  }

 return (
  <div>
  <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Comment" name="comment"/>
    <input type="text" placeholder="End Mood" name="endMood"/>
     <button type="submit">Save</button>
  </form>
  </div>
)
}

export default CommentForm;