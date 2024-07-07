import React, { Component } from 'react';
import PostItem from '../PostItem';
import './index.css';

class PostsDisplay extends Component {
  constructor(props) {
    super(props);
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    this.state = {
      posts: savedPosts,
      postToEdit: null
    };
  }

  handleCreatePost = (post) => {
    if (this.state.postToEdit) {
      const updatedPosts = this.state.posts.map(p => p.id === post.id ? post : p);
      this.setState({ posts: updatedPosts, postToEdit: null }, () => {
        localStorage.setItem('posts', JSON.stringify(this.state.posts));
      });
    } else {
      const newPost = { ...post, id: Date.now() };
      this.setState({
        posts: [...this.state.posts, newPost]
      }, () => {
        localStorage.setItem('posts', JSON.stringify(this.state.posts));
      });
    }
  };

  handleEditPost = (post) => {
    this.setState({ postToEdit: post });
    window.location.href = '/create';
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="posts-display">
        <button className="create-post-button" onClick={() => this.setState({ postToEdit: null }, () => window.location.href = '/create')}>
          Create New Post
        </button>
        {posts.map(post => (
          <PostItem key={post.id} post={post} onEdit={this.handleEditPost} />
        ))}
      </div>
    );
  }
}

export default PostsDisplay;
