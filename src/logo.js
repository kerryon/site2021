import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { ReactComponent as Logo } from './img/logo.svg';

class LogoSVG extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='logo'>
          <Link to='#'>
            <Logo />
          </Link>
        </div>
      </BrowserRouter>
    );
  }
}

export default LogoSVG;
