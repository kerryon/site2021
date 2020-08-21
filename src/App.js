import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import './App.scss';
import sketch from './sketches/sketch';

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <P5Wrapper sketch={sketch} />
      <div className='title'>
        <h1>hey, hallo</h1>
      </div>
    </div>
  );
}

export default App;
