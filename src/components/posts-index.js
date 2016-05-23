import React, { Component } from 'react';

class PostsIndex extends Component {

  componentWillMount() {
    console.log('fetch');
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

export default PostsIndex;
