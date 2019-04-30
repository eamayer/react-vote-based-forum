import React from 'react';
import Vote from './Vote';
import PostBody from './PostBody';

function Post(props){
  var gridStyle={
    display: 'grid',
    gridTemplateColumns: '50px 1fr',
    width: '800px',
    border: '1px solid grey',
    borderRadius: '3px',
    margin: '10px',
    textAlign: 'center'
  }

  var likeColumn={
    backgroundColor: 'lightgrey'
  }

  return(
    <div style = {gridStyle}>
      <div style={likeColumn}>
        <Vote post={props.post} onVote={props.onVote}/>
      </div>
      <div>
        <PostBody post={props.post} />
      </div>
    </div>
  );
}

export default Post;
