import { slide as Menu } from 'react-burger-menu'
import { Image } from 'react-bootstrap';
import React, { Component } from 'react';
import react from '../img/react.jpg'

class SMenu extends Component {
  showSettings (event) {
    event.preventDefault();

  }

  render () {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        <Image src={react} height="60" />
      </Menu>
    );
  }
}

export default SMenu;