import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import './App.scss';
import sketch from './sketches/sketch';
import { ReactComponent as Logo } from './img/logo.svg';
import { BrowserRouter, Link } from 'react-router-dom';
import Tilt from 'react-tilt';
import HorizontalScroll from 'react-scroll-horizontal';

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
      <HorizontalScroll>
        <Tilt
          className='Tilt preview__1'
          options={{
            max: 25,
            easing: 'cubic-bezier(.03,.98,.52,.99)',
            scale: 1.1,
            perspective: 800,
          }}>
          <div className='Tilt-inner'>Pale Blue Dot</div>
        </Tilt>
        <Tilt
          className='Tilt preview__2'
          options={{
            max: 25,
            easing: 'cubic-bezier(.03,.98,.52,.99)',
            scale: 1.1,
            perspective: 800,
          }}>
          <div className='Tilt-inner'>No Star Sky</div>
        </Tilt>
        <Tilt
          className='Tilt preview__3'
          options={{
            max: 25,
            easing: 'cubic-bezier(.03,.98,.52,.99)',
            scale: 1.1,
            perspective: 800,
          }}>
          <div className='Tilt-inner'>Dogma</div>
        </Tilt>
      </HorizontalScroll>
    </div>
  );
}

export default App;
