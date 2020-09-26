import React, { Component } from 'react';
import Typist from 'react-typist';

class Info extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='info'>
        <div className='info__text'>
          <Typist>
            Hey, ich bin Kerry – Grafik-, Web-, und Motiondesigner aus Hannover.
            Schau dich gerne ein bisschen um.
          </Typist>
        </div>
        <a href='https://github.com/kerryon' className='info__link'>
          Impressum →
        </a>
        <a
          href='https://github.com/kerryon'
          className='info__link'
          rel='noopener noreferrer'
          target='_blank'>
          <img
            src={require('../img/GitHub-Mark-Light-120px.png')}
            alt=':('
            style={{ height: '1.1rem' }}
          />{' '}
          GitHub →
        </a>
      </div>
    );
  }
}

export default Info;
