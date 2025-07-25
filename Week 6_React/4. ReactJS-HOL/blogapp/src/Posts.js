import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // 6. Fetch data from API
  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      this.setState({ posts: data });
    } catch (error) {
      console.error('Error fetching posts:', error);
      this.setState({ hasError: true });
    }
  };

  // 7. componentDidMount hook
  componentDidMount() {
    this.loadPosts();
  }

  // 9. componentDidCatch hook
  componentDidCatch(error, info) {
    alert("An error occurred in the Posts component.");
    console.error("Error caught in componentDidCatch:", error, info);
  }

  // 8. render method
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading posts.</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.slice(0, 10).map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
