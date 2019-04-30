import React, { Component } from 'react';
import { v4 } from 'uuid';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import Post from './Post';
import AddPost from './AddPost';

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      masterPosts: [
        {topic: "I work at a cat shelter. These are the “can we keep him?” photos I sent to my partner. It worked.", votes: 10, image: image1, id: v4()},
        {topic: "Little Kitten I found outside on a rainy day. (approx 1 month old)", votes: 15, image: image2, id: v4()}
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
    this.setState({showNewPostForm: true});
  }

  render(){
    var mainStyle={
      //padding: '0 20% 0 20%'
    }
    let newPostSection = <AddPost onNewPostCreation={this.handleNewPostCreation}/>;
    if (this.state.showNewPostForm == false)
      newPostSection = <button onClick={this.handleShowNewPostForm}>New post</button>;

    return(
      <div style={mainStyle}>
        {newPostSection}
        {this.state.masterPosts.map((newPost) =>
          <Post post={newPost} key={newPost.id} onVote={this.handleVote}/>
        )}
      </div>
    );
  }
}

export default Main;
