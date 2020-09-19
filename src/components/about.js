import React, { Component } from 'react';
import { Lottie } from '@crello/react-lottie';
import Writing from '../img/about.json';

class About extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      isStopped: true,
      playingState: 'stopped',
    };
  }

  render() {
    const { isStopped, playingState } = this.state;

    const clickHandler = () => {
      if (isStopped === true) {
        this.setState({
          playingState: 'playing',
          isStopped: !this.state.isStopped,
        });
      } else {
        this.setState({
          playingState: 'stopped',
          isStopped: !this.state.isStopped,
        });
      }
    };
    return (
      <div className='about'>
        <a
          className={this.props.slideOut ? 'slideIn' : 'slideOut'}
          href='mailto: moin@kerrybartels.de'
          rel='noopener noreferrer'
          target='_blank'>
          <figure>
            <div>
              <span>Mail schreiben</span>
              <span onMouseEnter={clickHandler} onMouseLeave={clickHandler}>
                <Lottie
                  playingState={playingState}
                  config={{
                    animationData: Writing,
                    loop: false,
                    autoplay: false,
                  }}
                  height={60}
                  width={250}
                />
              </span>
            </div>
          </figure>
        </a>
        <a
          className={this.props.slideOut ? 'slideIn' : 'slideOut'}
          href='https://open.spotify.com/playlist/1jg3RYRS4kr2N8xznWygan?si=AFAY6-2iTui0_BabDiZdiw'
          rel='noopener noreferrer'
          target='_blank'>
          <figure>
            <div>
              <span>Musikgeschmack kritisieren</span>
              <span onMouseEnter={clickHandler} onMouseLeave={clickHandler}>
                <Lottie
                  playingState={playingState}
                  config={{
                    animationData: Writing,
                    loop: false,
                    autoplay: false,
                  }}
                  height={60}
                  width={250}
                />
              </span>
            </div>
          </figure>
        </a>
        <a
          className={this.props.slideOut ? 'slideIn' : 'slideOut'}
          href='https://letterboxd.com/kerryon/'
          rel='noopener noreferrer'
          target='_blank'>
          <figure>
            <div>
              <span>Filmwissen vergleichen</span>
              <span onMouseEnter={clickHandler} onMouseLeave={clickHandler}>
                <Lottie
                  playingState={playingState}
                  config={{
                    animationData: Writing,
                    loop: false,
                    autoplay: false,
                  }}
                  height={60}
                  width={250}
                />
              </span>
            </div>
          </figure>
        </a>
        <a
          className={this.props.slideOut ? 'slideIn' : 'slideOut'}
          href='https://www.instagram.com/flyingbreadcrumb/'
          rel='noopener noreferrer'
          target='_blank'>
          <figure>
            <div>
              <span>Tauben wertschätzen</span>
              <span onMouseEnter={clickHandler} onMouseLeave={clickHandler}>
                <Lottie
                  playingState={playingState}
                  config={{
                    animationData: Writing,
                    loop: false,
                    autoplay: false,
                  }}
                  height={60}
                  width={250}
                />
              </span>
            </div>
          </figure>
        </a>
      </div>
    );
  }
}

export default About;
