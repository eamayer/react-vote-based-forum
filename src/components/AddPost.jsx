import React from 'react';
import { v4 } from 'uuid';

function AddPost(props){
  let _topic = null;
  let _image = null;

  function handlePostCreation(event){
    event.preventDefault();
    if (_topic.value != ''){
      props.onNewPostCreation({topic: _topic.value, image: _image.value, votes: 0, id: v4()});
      _topic = '';
      _image = '';
    } else {
      alert('Topic should be filled in!');
      document.getElementById('topic').focus();
    }
  }

  var mainStyle={
    width: '80%', padding: '0, 10%, 0, 10%'
  }

  var inputStyle={
    fontSize: '10pt',
    width: '80%',
  }

  var buttonStyle={
    padding: '10px',
    margin: '10px'
  }
  return(
    <form style={mainStyle} onSubmit={handlePostCreation}>
      <label>Topic</label><br />
      <input id='topic' style={inputStyle} ref={(input) => {_topic = input;}}></input><br/>
      <label>Image</label><br />
      <input style={inputStyle} ref={(input) => {_image = input;}}></input><br/><br/>
      <button style={buttonStyle} type='submit'>Add</button>
      <button style={buttonStyle} onClick={props.onCancelNewPost}>Cancel</button>
    </form>
  );
}

export default AddPost;
