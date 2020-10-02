import React, { Component } from 'react';
import Typist from 'react-typist';
import Popup from './popup';

class Info extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
    };
    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  render() {
    const { showPopup } = this.state;
    return (
      <div>
        <div className='info'>
          <div className='info__text'>
            <Typist avgTypingDelay={50} stdTypingDelay={30}>
              Hey. Ich bin Kerry – Grafik-, Web-, und Motiondesigner mit einem
              Hauch von Front-End aus Hannover. Schau dich gerne um.
              <Typist.Backspace count={20} delay={700} />
              <span
                className='info__text--btn highlightCursor'
                onClick={() => this.props.toggleComponent('showHideInfo')}>
                {'  '}←
              </span>
            </Typist>
          </div>
          <button className='info__link' onClick={() => this.togglePopup()}>
            <span className='info__link--impressum'>i</span> Impressum ↗
          </button>
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
            GitHub ↗
          </a>
        </div>
        {showPopup && <Popup closePopup={this.togglePopup.bind(this)} />}
      </div>
    );
  }
}

export default Info;
