import React, { Component } from 'react';

class About extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div className='about'>
        <a
          href='mailto: moin@kerrybartels.de'
          rel='noopener noreferrer'
          target='_blank'>
          <figure>
            <div>
              <span>Mail schreiben</span>
              <span>moin@kerrybartels.de</span>
            </div>
          </figure>
        </a>
        <a
          href='https://open.spotify.com/playlist/1jg3RYRS4kr2N8xznWygan?si=AFAY6-2iTui0_BabDiZdiw'
          rel='noopener noreferrer'
          target='_blank'>
          <figure>
            <div>
              <span>Musikgeschmack kritisieren</span>
              <span>Spotify</span>
            </div>
          </figure>
        </a>
        <a
          href='https://letterboxd.com/kerryon/'
          rel='noopener noreferrer'
          target='_blank'>
          <figure>
            <div>
              <span>Filmwissen vergleichen</span>
              <span>Letterboxd</span>
            </div>
          </figure>
        </a>
        <a
          href='https://www.instagram.com/flyingbreadcrumb/'
          rel='noopener noreferrer'
          target='_blank'>
          <figure>
            <div>
              <span>Tauben wertschätzen</span>
              <span>Bullshit</span>
            </div>
          </figure>
        </a>
      </div>
    );
  }
}

export default About;
