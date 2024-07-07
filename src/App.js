import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PostsDisplay from './components/PostsDisplay';
import CreatePost from './components/CreatePost';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/create" element={<CreatePost />} />
          <Route path="/postDisplay" element={<PostsDisplay />} />
          <Route path="*" element={<Navigate to="/postDisplay" />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
