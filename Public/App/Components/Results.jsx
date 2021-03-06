import React, { Component } from 'react';
import { Row, Col, Collection, CollectionItem } from 'react-materialize';
import Post from './Post';

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: this.props.posts };
  }

  componentWillReceiveProps(props) {
    this.setState({
      posts: this.props.posts });
  }

  render() {
    return (
      <Collection>
        {this.state.posts
          .map(post =>
            <Post
              title={post.title}
              rank={post.inLinks.length}
              desc={post.description}
              author={post.author}
              date={post.publishDate}
              tags={post.oldTags}
              key={post.postId}
            />)
        }
      </Collection>
    );
  }
}

Results.propTypes = {
  posts: React.PropTypes.array };

export default Results;

