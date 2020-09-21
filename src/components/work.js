import React, { Component } from 'react';
import Tilt from 'react-tilt';
import WorkDetail from './workDetail';

class Work extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      showHideDetail: false,
      fadeOut: false,
    };
    this.toggleDetail = this.toggleDetail.bind(this);
  }

  toggleDetail(name) {
    switch (name) {
      case 'showHideDetail':
        this.setState({
          showHideDetail: !this.state.showHideDetail,
        });
        break;
      default:
      // null;
    }
  }

  render() {
    const { showHideDetail } = this.state;
    return (
      <div className='work-wrapper'>
        <div
          className={`work ${this.props.fadeOut ? 'fadeOut' : 'fadeIn'}`}
          onClick={() => this.toggleDetail('showHideDetail')}>
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
        <div className={`work ${this.props.fadeOut ? 'fadeOut' : 'fadeIn'}`}>
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
        <div className={`work ${this.props.fadeOut ? 'fadeOut' : 'fadeIn'}`}>
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
        <div className={`work ${this.props.fadeOut ? 'fadeOut' : 'fadeIn'}`}>
          <Tilt
            className='Tilt preview__4'
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
        {showHideDetail && <WorkDetail />}
      </div>
    );
  }
}

export default Work;
