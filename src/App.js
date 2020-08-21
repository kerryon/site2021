import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import './App.scss';
import sketch from './sketches/sketch';
import { ReactComponent as Logo } from './img/logo.svg';

function LogoSVG() {
  return (
    <div className='logo'>
      <Logo />
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <P5Wrapper sketch={sketch} />
      <LogoSVG />
      <div className='title'>
        <h1>hallo</h1>
      </div>
    </div>
  );
}

export default App;
