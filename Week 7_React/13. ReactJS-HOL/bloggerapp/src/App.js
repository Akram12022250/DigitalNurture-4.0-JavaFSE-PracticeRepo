import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [page, setPage] = useState('books'); // 'books', 'blogs', 'courses'
  const [showCourses, setShowCourses] = useState(true);

  // Element Variable
  let displayComponent;
  if (page === 'books') {
    displayComponent = <BookDetails />;
  } else if (page === 'blogs') {
    displayComponent = <BlogDetails />;
  } else {
    displayComponent = <p>Please select a section</p>;
  }

  return (
    <div className="App">
      <h1>📖 BloggerApp</h1>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setPage('books')}>Book Details</button>
        <button onClick={() => setPage('blogs')}>Blog Details</button>
        <button onClick={() => setShowCourses(!showCourses)}>
          {showCourses ? 'Hide' : 'Show'} Course Details
        </button>
      </div>

      {/* Conditional Rendering using element variable */}
      {displayComponent}

      {/* Conditional Rendering using logical && */}
      {showCourses && <CourseDetails />}

      {/* Conditional Rendering using ternary */}
      <p style={{ color: 'blue' }}>
        {page === 'books'
          ? 'Books are currently displayed.'
          : page === 'blogs'
          ? 'Blogs are currently displayed.'
          : 'No section selected.'}
      </p>
    </div>
  );
}

export default App;
