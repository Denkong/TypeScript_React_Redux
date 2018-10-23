import * as React from "react";
import "./App.css";

import logo from "./logo.svg";

import { Provider } from "react-redux";
import store from "./store";

import Posts from "./components/post";
import Postsform from "./components/postform";

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Postsform />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
