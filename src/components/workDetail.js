import React, { Component } from 'react';
import Meteor from '../img/meteor.gif';

class WorkDetail extends Component {
  constructor() {
    super();

    this.state = {
      fadeOut: false,
    };
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
          <img src={Meteor} alt=':(' className='workDetail__content-img' />
        </div>
        <div
          className={`workDetail__description ${
            this.state.fadeOut ? 'detailOut-right' : 'detailIn-right'
          }`}>
          <button
            className='workDetail__button'
            onClick={() => {
              this.changeState();
            }}>
            back
          </button>
          <h2>Lorem Ipsum dolor</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    );
  }
}

export default WorkDetail;
