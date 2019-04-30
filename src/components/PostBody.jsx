import React from 'react';

function PostBody(props){
  var imgStyle={
    width: 'inherit'
  }
  var mainStyle={
    padding: '20px'
  }
  return(
    <div style={mainStyle}>
      <h3>{props.post.topic}</h3>
      <img style={imgStyle} src={props.post.image}></img>
    </div>
  );
}

export default PostBody;
