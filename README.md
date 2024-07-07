Project Overview:

This project is a React-based web application for managing posts. Users can create new posts, edit existing ones, and view all posts on a dedicated display page.

Files and Components:
App.js:
This file handles the routing for the application using React Router. It directs paths to different components:

1. /create: Renders the CreatePost component for creating new posts.
2. /postDisplay: Renders the PostsDisplay component to display all posts.
3. Default redirect: Redirects any unknown paths to /postDisplay.

PostsDisplay/index.js:
This component manages the display of all posts:

1. Retrieves posts from localStorage on component mount.
2. Includes a button to create new posts, redirecting to /create.
3. Maps through stored posts and renders each using the PostItem component.
4. Provides edit functionality by passing post data to CreatePost for editing.

CreatePost/index.js:
This component allows users to create or edit posts:

1. Loads existing post data for editing if accessed through the edit button in PostsDisplay.
2. Handles form inputs for title and content.
3. Submits data to localStorage, updating or creating new posts.
4. Redirects to /postDisplay after submission to view updated posts.

PostItem/index.js:
This component displays individual posts:

1. Receives post data from PostsDisplay.
2. Renders post title, content, and an edit button.
3. Clicking the edit button triggers editing functionality in CreatePost.

Installation and Usage:
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies with npm install.
4. Start the application with npm start.

Additional Notes:
1. Ensure localStorage is enabled in the browser for data persistence.
2. Customize styling in respective index.css files for each component as needed.

