import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import './App.scss';
import sketch from './sketches/sketch';
import { ReactComponent as Logo } from './img/logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function LogoSVG() {
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

function App() {
  return (
    <div className='App'>
      <P5Wrapper sketch={sketch} />
      <LogoSVG />
    </div>
  );
}

export default App;
