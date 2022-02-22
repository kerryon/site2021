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
    setTimeout(() => {
        this.props.toggleDetail('showHideDetail');
    }, 200);
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

  Video(props) {
    const isTrue = props.isTrue;
    let contentHandler = props.contenHandler;
    if (isTrue) {
      return <video src={require(`../img/case_${contentHandler}.mp4`)} type="video/mp4" width="100%" height="auto" autoPlay loop muted playsInline></video>;
    } else {
      return null;
    }
  }

  render() {
    const { setVideo } = this.state;
    const reactStringReplace = require('react-string-replace');
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
            src={require(`../img/${this.props.contentHandler}_0.png`)}
            alt=':('
            className='workDetail__content--img'
          />
          <this.Video isTrue={Data.contents[this.props.contentHandler].hasVideo} contenHandler={this.props.contentHandler}/>
          <img
            src={require(`../img/${this.props.contentHandler}_1.png`)}
            alt=':('
            className='workDetail__content--img'
          />
          <img
            src={require(`../img/${this.props.contentHandler}_2.png`)}
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
            <div className='workDetail__description--textWrapper'>
              <p className='workDetail__description--data'>{Data.contents[this.props.contentHandler].data}</p>
              <h2>{Data.contents[this.props.contentHandler].headline}</h2>
              <p>
              {reactStringReplace(Data.contents[this.props.contentHandler].content, /(https?:\/\/\S+)/g, (match, i) => (
              <a key={i} className="workDetail__description--link" href={match}>{match}</a>
              ))}
              </p>
            </div>
          <div className='workDetail__button--wrapper'>
            <button
              className='workDetail__button workDetail__button--prev'
              onClick={() => {
                this.setState({ fadeOut: !this.state.fadeOut });
                setTimeout(() => {
                  this.props.prevDetail();
                }, 200);
                
              }}></button>
            <button
              className='workDetail__button workDetail__button--next'
              onClick={() => {
                this.setState({ fadeOut: !this.state.fadeOut });
                setTimeout(() => {
                  this.props.nextDetail();
                }, 200);
              }}></button>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkDetail;
