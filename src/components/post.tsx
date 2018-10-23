import * as React from "react";

import { connect } from "react-redux";
import { fetchPosts } from "../actions/postAction";

import { IPost } from "../actions/Types";

import { IROOT_REDUCER } from "../reducers/index";

interface IProps {
  posts: IPost[];
  newPost: IPost;
  fetchPosts(): void;
}

interface IState {}

class Posts extends React.Component<IProps, IState> {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

const mapStatetoProps = (state: IROOT_REDUCER) => ({
  posts: state.postReducer.items,
  newPost: state.postReducer.item
});

export default connect(
  mapStatetoProps,
  { fetchPosts }
)(Posts);
