import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Hi
          Hello my name is hogyun
        </p>
        <a className="button is-primary">Primary</a>
        <a className="button is-link">Link</a>
        <a className="button is-info">Info</a>
        <a className="button is-success">Success</a>
        <a className="button is-warning">Warning</a>
        <a className="button is-danger">Danger</a>
      </div>
    );
  }
}

export default hot(module)(App);
