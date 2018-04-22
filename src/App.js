import React, { Component } from 'react';
import Heading from './components/Heading';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <AboutMe />
        <Carousel />
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default App;
