import React, { Component } from 'react';
import Heading from './components/Heading';
import Skills from './components/Skills';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Skills />
      </div>
    );
  }
}

export default App;
