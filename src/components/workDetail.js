import React, { Component } from 'react';
import Data from './data.json';
import Vimeo from '@u-wave/react-vimeo';

class WorkDetail extends Component {
  constructor() {
    super();

    this.state = {
      fadeOut: false,
      setVideo: false,
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.setState({ fadeOut: !this.state.fadeOut });
    this.props.toggleDetail('showHideDetail');
  }

  componentDidMount() {
    if (Data.contents[this.props.contentHandler].url) {
      this.setState({
        setVideo: true,
      });
    } else {
      this.setState({
        setVideo: false,
      });
    }
  }

  render() {
    const { setVideo } = this.state;
    return (
      <div className='workDetail'>
        <div
          className={`workDetail__content ${
            this.state.fadeOut ? 'detailOut-left' : 'detailIn-left'
          }`}>
          {setVideo ? (
            <Vimeo
              video={Data.contents[this.props.contentHandler].url}
              className='workDetail__content--player'
              showPortrait={false}
              showByline={false}
              responsive={true}
            />
          ) : (
            ''
          )}
          <img
            src={require(`../img/${this.props.contentHandler}.png`).default}
            alt=':('
            className='workDetail__content--img'
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
            }}></button>
          <h2>{Data.contents[this.props.contentHandler].headline}</h2>
          <p>{Data.contents[this.props.contentHandler].content}</p>

          <div className='workDetail__button--wrapper'>
            <button
              className='workDetail__button workDetail__button--prev'
              onClick={() => {
                this.props.prevDetail();
                this.setState({ fadeOut: !this.state.fadeOut });
              }}></button>
            <button
              className='workDetail__button workDetail__button--next'
              onClick={() => {
                this.props.nextDetail();
                this.setState({ fadeOut: !this.state.fadeOut });
              }}></button>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkDetail;
