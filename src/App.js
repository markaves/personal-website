import React, { Component } from 'react';
import Heading from './components/Heading';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <AboutMe />
        <Skills />
      </div>
    );
  }
}

export default App;
