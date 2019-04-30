import React from 'react';
import upVote from '../assets/images/upVote.png';
import downVote from '../assets/images/downVote.png';

function Vote(props){
  var arrowStyle={
    width: '20px',
    padding: '10px'
  }
  var mainStyle={
    textAlign: 'center'
  }

  return(
    <div style={mainStyle}>
      <img style={arrowStyle} src={upVote} onClick={() => {props.onVote(true, props.post)}}></img>
      <p>{props.post.votes}</p>
      <img style={arrowStyle} src={downVote} onClick={() => {props.onVote(false, props.post)}}></img>
    </div>
  );
}

export default Vote;
