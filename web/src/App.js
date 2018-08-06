// Copyright © 2018 Yokesh Thirumoorthi
// [This program is licensed under the "MIT License"]
// Please see the file LICENSE in the source
// distribution of this software for license terms.

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';
import QuillEditor from './QuillEditor';
import WSServices from './WSServices';

class App extends Component {

  componentDidMount() {
    WSServices.init(this.handleReceivedMessage);
  }

  handleReceivedMessage(evt) {
    console.log("WS Event Received", evt);
  }

  sendMessage(message) {
    WSServices.sendMessage(message);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <QuillEditor sendMessage={this.sendMessage} />
        <ChatWindow sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default App;
