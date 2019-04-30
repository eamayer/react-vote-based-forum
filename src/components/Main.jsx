import React, { Component } from 'react';
import { v4 } from 'uuid';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import Post from './Post';
import AddPost from './AddPost';

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      masterPosts: [
        {topic: "I work at a cat shelter. These are the “can we keep him?” photos I sent to my partner. It worked.", votes: 10, image: image1, id: v4()},
        {topic: "Little Kitten I found outside on a rainy day. (approx 1 month old)", votes: 15, image: image2, id: v4()},
        {topic: "Best pose ever", votes: 20, image: image3, id: v4()},
      ],
      showNewPostForm: false
    };
    this.handleVote = this.handleVote.bind(this);
    this.handleNewPostCreation = this.handleNewPostCreation.bind(this);
    this.findPost = this.findPost.bind(this);
    this.handleShowNewPostForm = this.handleShowNewPostForm.bind(this);
    this.handleNewPostCreation = this.handleNewPostCreation.bind(this);
  }

  findPost(post){
    for(let i=0; i < this.state.masterPosts.length; i++)
      if (this.state.masterPosts[i].id == post.id)
        return i;
  }

  handleVote(isUp, votedPost){
    let newPost = votedPost;
    if(isUp){
      newPost.votes++;
    } else {
      newPost.votes--;
    }
    const updatedPosts = this.state.masterPosts.slice();
    updatedPosts.splice(this.findPost(votedPost), 1, newPost);
    this.setState({masterPosts: updatedPosts});
    console.log(this.state.masterPosts);
  }

  handleNewPostCreation(newPost){
    const updatedPosts = this.state.masterPosts.slice();
    updatedPosts.push(newPost);
    this.setState({masterPosts: updatedPosts, showNewPostForm: false});
  }

  handleShowNewPostForm(){
    console.log(this.state.showNewPostForm);
    this.setState((prevState) => {return {showNewPostForm:        !prevState.showNewPostForm}
    });
  }

  compare(a, b){
    if (a.votes > b.votes){
      return -1;
    }
    if (a.votes < b.votes){
      return 1;
    }
    return 0;
  }

  render(){
    var mainStyle={
      //padding: '0 20% 0 20%'
    }
    var buttonStyle={
      padding: '10px',
      margin: '10px'
    }

    let newPostSection = <AddPost onNewPostCreation={this.handleNewPostCreation}
    onCancelNewPost={this.handleShowNewPostForm}/>;

    if (this.state.showNewPostForm == false)
      newPostSection = <button style={buttonStyle} onClick={this.handleShowNewPostForm}>New post</button>;

    let sortedPosts = this.state.masterPosts;
    sortedPosts.sort(this.compare);

    // {this.state.masterPosts.map((newPost) =>
    //   <Post post={newPost} key={newPost.id} onVote={this.handleVote}/>
    // )}
    return(
      <div style={mainStyle}>
        {newPostSection}
        {sortedPosts.map((newPost) =>
          <Post post={newPost} key={newPost.id} onVote={this.handleVote}/>)}
      </div>
    );
  }
}

export default Main;
