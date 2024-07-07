import React, { Component } from 'react';
import './index.css';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };
  }

  componentDidMount() {
    const postToEdit = window.history.state && window.history.state.postToEdit;
    if (postToEdit) {
      this.setState({
        title: postToEdit.title,
        content: postToEdit.content
      });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, content } = this.state;
    const postToEdit = window.history.state && window.history.state.postToEdit;

    const newPost = postToEdit ? { ...postToEdit, title, content } : { title, content, id: Date.now() };
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    
    if (postToEdit) {
      const updatedPosts = storedPosts.map(p => p.id === postToEdit.id ? newPost : p);
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
    } else {
      localStorage.setItem('posts', JSON.stringify([...storedPosts, newPost]));
    }

    this.setState({ title: '', content: '' });
    window.location.href = '/postDisplay';
  };

  render() {
    const { title, content } = this.state;
    const postToEdit = window.history.state && window.history.state.postToEdit;

    return (
      <div className="create-post">
        <h2>{postToEdit ? 'Edit Post' : 'Create New Post'}</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea
              name="content"
              value={content}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">{postToEdit ? 'Save Changes' : 'Create Post'}</button>
        </form>
      </div>
    );
  }
}

export default CreatePost;
