import React, { Component } from 'react';
import './index.css';

class PostItem extends Component {
  handleEdit = () => {
    const { post } = this.props;
    window.history.pushState({ postToEdit: post }, '', '/create');
    window.location.href = '/create';
  };

  render() {
    const { post } = this.props;
    return (
      <div className="post-item">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <button onClick={this.handleEdit}>Edit</button>
      </div>
    );
  }
}

export default PostItem;
