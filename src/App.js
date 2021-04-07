import './App.css';
import React, { useState } from 'react';
import { Component } from 'react';
import Validation from './Validation/Validation'
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandle = (event) => {
    this.setState({ userInput: event.target.value });
  }

  deleteCharHandle = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updateText = text.join('');
    this.setState({userInput: updateText});
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
      character={ch} 
      key={index}
      clicked={() => this.deleteCharHandle(index)}/>
    })
    return (
      <div className="App">
        <p>Pratice test</p>
        <input
          type='text'
          onChange={this.inputChangedHandle}
          value={this.state.userInput}></input>
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length}/>
          {charList}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;


