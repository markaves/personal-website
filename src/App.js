import React, { Component } from 'react';
import Heading from './components/Heading';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <AboutMe />
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default App;
