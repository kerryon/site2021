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
        <div
          className='info__text'
          onClick={() => this.props.toggleComponent('showHideInfo')}>
          <Typist>
            Hey, ich bin Kerry – Grafik-, Web-, und Motiondesigner mit einem
            Hauch Front-End aus Hannover. Konzeption, Design und Entwicklung
            benötigen mehr Zeit als ich dachte.
          </Typist>
        </div>
        <a href='https://github.com/kerryon' className='info__link'>
          <span className='info__link--impressum'>i</span> Impressum →
        </a>
        <a
          href='https://github.com/kerryon/site'
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
