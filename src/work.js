import React, { Component } from 'react';
import Tilt from 'react-tilt';

class Work extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div className='work-wrapper'>
        <div className='work'>
          <Tilt
            className='Tilt preview__1'
            options={{
              max: 25,
              easing: 'cubic-bezier(.03,.98,.52,.99)',
              scale: 1.1,
              perspective: 800,
            }}>
            <div className='Tilt-inner'>
              <p>Lorem ipsum Dolor</p>
              <p className='font-weight-regular'>sit ament</p>
            </div>
          </Tilt>
        </div>
        <div className='work'>
          <Tilt
            className='Tilt preview__2'
            options={{
              max: 25,
              easing: 'cubic-bezier(.03,.98,.52,.99)',
              scale: 1.1,
              perspective: 800,
            }}>
            <div className='Tilt-inner'>
              <p>Lorem ipsum Dolor</p>
              <p className='font-weight-regular'>sit ament</p>
            </div>
          </Tilt>
        </div>
        <div className='work'>
          <Tilt
            className='Tilt preview__3'
            options={{
              max: 25,
              easing: 'cubic-bezier(.03,.98,.52,.99)',
              scale: 1.1,
              perspective: 800,
            }}>
            <div className='Tilt-inner'>
              <p>Lorem ipsum Dolor</p>
              <p className='font-weight-regular'>sit ament</p>
            </div>
          </Tilt>
        </div>
        <div className='work'>
          <Tilt
            className='Tilt preview__3'
            options={{
              max: 25,
              easing: 'cubic-bezier(.03,.98,.52,.99)',
              scale: 1.1,
              perspective: 800,
            }}>
            <div className='Tilt-inner'>
              <p>Lorem ipsum Dolor</p>
              <p className='font-weight-regular'>sit ament</p>
            </div>
          </Tilt>
        </div>
      </div>
    );
  }
}

export default Work;
