import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './TestComponent.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Click me!'
    };

    this.changeText = this.changeText.bind(this);
  }
    
  changeText(event) {
    console.log(event.text)
    event.persist();
    this.setState(state => ({
      text: event.target.value
    }));
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TestComponent text={this.state.text}/>
        </header>
        <input onChange={this.changeText}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
