import './App.css';
import React, { Component, useState } from 'react';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'supermax'
  }

  usernameChangeHanlder = (event) => {
    this.setState({
      username: event.target.value
    })
    return (
      <div></div>
    )
  }
  render() {
    return (
      <div>
        <UserInput changed={this.usernameChangeHanlder} 
                  currentName={this.state.username}></UserInput>
        <UserOutput userName={this.state.username}></UserOutput>
        <UserOutput userName={this.state.username}></UserOutput>
        <UserOutput userName={this.state.username}></UserOutput>

      </div>
    )
  }
}

export default App;


