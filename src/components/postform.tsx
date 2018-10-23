import * as React from "react";

import { connect } from "react-redux";

import { createPosts, ICreatePosts } from "../actions/postAction";

interface IProps {
  createPosts(key: ICreatePosts): void;
}
interface IState {
  [key: string]: string;
}

class Postsform extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const name = e.currentTarget.name;
    this.setState({ [name]: e.currentTarget.value });
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.props.createPosts({
      title: this.state.title,
      body: this.state.body
    });
  };

  render() {
    return (
      <div>
        <h1>AddPosts</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title</label>
            <br />
            <input type="text" name="title" onChange={this.onChange} />
          </div>
          <div>
            <label>body</label>
            <br />
            <input type="text" name="body" onChange={this.onChange} />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { createPosts }
)(Postsform);
