import React, { Component } from 'react';
import Tilt from 'react-tilt';
import WorkDetail from './workDetail';

class Work extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      showHideDetail: false,
      contentHandler: '',
    };
    this.toggleDetail = this.toggleDetail.bind(this);
    this.nextDetail = this.nextDetail.bind(this);
  }

  toggleDetail(name) {
    switch (name) {
      case 'showHideDetail':
        setTimeout(() => {
          this.setState({
            showHideDetail: !this.state.showHideDetail,
          });
        }, 450);
        break;
      default:
      // null;
    }
  }

  nextDetail() {
    this.toggleDetail('showHideDetail');
    setTimeout(() => {
      this.toggleDetail('showHideDetail');
      if (this.state.contentHandler >= 3) {
        this.setState({
          contentHandler: 0,
        });
      } else {
        this.setState({
          contentHandler: this.state.contentHandler + 1,
        });
      }
    }, 450);
  }

  render() {
    const { showHideDetail } = this.state;
    return (
      <div className='work-wrapper'>
        <div
          className={`work ${this.props.fadeOut ? 'fadeOut' : 'fadeIn'}`}
          onClick={() => {
            this.setState({ contentHandler: 0 });
            this.toggleDetail('showHideDetail');
          }}>
          <Tilt
            className='Tilt preview__1'
            options={{
              max: 25,
              easing: 'cubic-bezier(.17,.67,.83,.67)',
              scale: 1.1,
              perspective: 800,
              speed: 800,
            }}>
            <div className='Tilt-inner'>
              <p>Lorem ipsum Dolor</p>
              <p className='font-weight-regular'>sit ament</p>
            </div>
          </Tilt>
        </div>
        <div
          className={`work ${this.props.fadeOut ? 'fadeOut' : 'fadeIn'}`}
          onClick={() => {
            this.setState({ contentHandler: 1 });
            this.toggleDetail('showHideDetail');
          }}>
          <Tilt
            className='Tilt preview__2'
            options={{
              max: 25,
              easing: 'cubic-bezier(.17,.67,.83,.67)',
              scale: 1.1,
              perspective: 800,
              speed: 800,
            }}>
            <div className='Tilt-inner'>
              <p>Lorem ipsum Dolor</p>
              <p className='font-weight-regular'>sit ament</p>
            </div>
          </Tilt>
        </div>
        <div
          className={`work ${this.props.fadeOut ? 'fadeOut' : 'fadeIn'}`}
          onClick={() => {
            this.setState({ contentHandler: 2 });
            this.toggleDetail('showHideDetail');
          }}>
          <Tilt
            className='Tilt preview__3'
            options={{
              max: 25,
              easing: 'cubic-bezier(.17,.67,.83,.67)',
              scale: 1.1,
              perspective: 800,
              speed: 800,
            }}>
            <div className='Tilt-inner'>
              <p>Lorem ipsum Dolor</p>
              <p className='font-weight-regular'>sit ament</p>
            </div>
          </Tilt>
        </div>
        <div
          className={`work ${this.props.fadeOut ? 'fadeOut' : 'fadeIn'}`}
          onClick={() => {
            this.setState({ contentHandler: 3 });
            this.toggleDetail('showHideDetail');
          }}>
          <Tilt
            className='Tilt preview__4'
            options={{
              max: 25,
              easing: 'cubic-bezier(.17,.67,.83,.67)',
              scale: 1.1,
              perspective: 800,
              speed: 800,
            }}>
            <div className='Tilt-inner'>
              <p>Lorem ipsum Dolor</p>
              <p className='font-weight-regular'>sit ament</p>
            </div>
          </Tilt>
        </div>
        {showHideDetail && (
          <WorkDetail
            toggleDetail={this.toggleDetail}
            nextDetail={this.nextDetail}
            showHideDetail={this.state.showHideDetail}
            contentHandler={this.state.contentHandler}
          />
        )}
      </div>
    );
  }
}

export default Work;
