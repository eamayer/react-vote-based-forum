import React from 'react';
import { v4 } from 'uuid';

function AddPost(props){
  let _topic = null;
  let _image = null;

  function handlePostCreation(event){
    event.preventDefault();
    props.onNewPostCreation({topic: _topic.value, image: _image.value, votes: 0, id: v4()});
    _topic = '';
    _image = '';
  }

  return(
    <form onSubmit={handlePostCreation}>
      <input ref={(input) => {_topic = input;}}></input>
      <input ref={(input) => {_image = input;}}></input>
      <button type='submit'>Add</button>
    </form>
  );
}

export default AddPost;
