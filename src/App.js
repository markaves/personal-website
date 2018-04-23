import React, { Component } from 'react';
import SMenu from './components/Menu';
import Heading from './components/Heading';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SMenu />
        <Heading />
        <AboutMe />
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default App;
