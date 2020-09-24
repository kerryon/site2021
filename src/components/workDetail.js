import React, { Component } from 'react';
import Data from './data.json';

class WorkDetail extends Component {
  constructor() {
    super();

    this.state = {
      fadeOut: false,
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.setState({ fadeOut: !this.state.fadeOut });
    this.props.toggleDetail('showHideDetail');
  }

  render() {
    return (
      <div className='workDetail'>
        <div
          className={`workDetail__content ${
            this.state.fadeOut ? 'detailOut-left' : 'detailIn-left'
          }`}>
          <img
            src={require(`../img/${this.props.contentHandler}.png`)}
            alt=':('
            className='workDetail__content-img'
          />
        </div>
        <div
          className={`workDetail__description ${
            this.state.fadeOut ? 'detailOut-right' : 'detailIn-right'
          }`}>
          <button
            className='workDetail__button workDetail__button--back'
            onClick={() => {
              this.changeState();
            }}>
            schließen
          </button>
          <h2>{Data.contents[this.props.contentHandler].headline}</h2>
          <p>{Data.contents[this.props.contentHandler].content}</p>
          <button
            className='workDetail__button workDetail__button--next'
            onClick={() => {
              this.props.nextDetail();
            }}>
            weiter
          </button>
        </div>
      </div>
    );
  }
}

export default WorkDetail;
