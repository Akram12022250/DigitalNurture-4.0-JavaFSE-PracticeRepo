import React from 'react';

const blogs = [
  { id: 101, title: 'React Hooks Deep Dive', date: '2025-07-30' },
  { id: 102, title: 'JSX vs JS', date: '2025-07-25' },
  { id: 103, title: 'Node.js Crash Course', date: '2025-07-20' },
];

const BlogDetails = () => {
  return (
    <div>
      <h2>📝 Blog Details</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h4>{blog.title}</h4>
          <p>Date: {blog.date}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
