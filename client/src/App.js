import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';
import Option from './components/Option';


class App extends Component {
  render() {
    return (
      <div className="App" style={ {textAlign: 'center'}}>
        <Counter/>
        <Option/>
        <Button/>
      </div>
    );
  }
}

export default App;
