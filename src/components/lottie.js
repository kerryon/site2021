import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Lottie } from '@crello/react-lottie';
import animationData from '../img/lottie.json';

class LottieAnim extends Component {
  constructor() {
    super();

    this.state = {
      isStopped: true,
      speed: 1,
      direction: -1,
      playingState: 'stopped',
    };
  }

  render() {
    const { isStopped, playingState, direction, speed } = this.state;

    const clickHandler = () => {
      if (isStopped === true) {
        this.setState({
          playingState: 'playing',
          isStopped: false,
        });
      } else {
        this.setState({
          playingState: 'playing',
          isStopped: true,
        });
      }
      this.setState({ direction: direction * -1 });
    };

    return (
      <BrowserRouter>
        <Link to='#' onClick={() => window.location.reload()}>
          <div
            className='logo'
            onMouseEnter={clickHandler}
            onMouseLeave={clickHandler}>
            <Lottie
              playingState={playingState}
              direction={direction}
              speed={speed}
              config={{
                animationData: animationData,
                loop: false,
                autoplay: false,
              }}
              height={100}
              width={100}
            />
          </div>
        </Link>
      </BrowserRouter>
    );
  }
}

export default LottieAnim;
