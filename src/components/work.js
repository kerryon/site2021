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
    this.prevDetail = this.prevDetail.bind(this);
  }

  toggleDetail(name) {
    switch (name) {
      case 'showHideDetail':
        setTimeout(() => {
          this.setState({
            showHideDetail: !this.state.showHideDetail,
          });
        }, 50);
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
    }, 80);
  }

  prevDetail() {
    this.toggleDetail('showHideDetail');
    setTimeout(() => {
      this.toggleDetail('showHideDetail');
      if (this.state.contentHandler <= 0) {
        this.setState({
          contentHandler: 3,
        });
      } else {
        this.setState({
          contentHandler: this.state.contentHandler - 1,
        });
      }
    }, 80);
  }

  render() {
    const { showHideDetail } = this.state;
    return (
      <div className='work-wrapper'>
        <div
          className={`work ${this.props.fadeOut ? 'fadeOut' : 'fadeIn'} highlightCursor`}
          onClick={() => {
            this.setState({ contentHandler: 0 });
            this.toggleDetail('showHideDetail');
          }}>
          <Tilt
            className='Tilt preview__1'
            options={{
              max: 20,
              easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
              scale: 1.1,
              perspective: 1500,
              speed: 500,
            }}>
            <div className='Tilt-inner'>
              <p>Pale Blue</p>
              <p className='font-weight-regular'>Serious Game</p>
            </div>
          </Tilt>
        </div>
        <div
          className={`work ${this.props.fadeOut ? 'fadeOut' : 'fadeIn'} highlightCursor`}
          onClick={() => {
            this.setState({ contentHandler: 1 });
            this.toggleDetail('showHideDetail');
          }}>
          <Tilt
            className='Tilt preview__2'
            options={{
              max: 20,
              easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
              scale: 1.1,
              perspective: 1500,
              speed: 500,
            }}>
            <div className='Tilt-inner'>
              <p>Cu–be</p>
              <p className='font-weight-regular'>Creative Coding</p>
            </div>
          </Tilt>
        </div>
        <div
          className={`work ${this.props.fadeOut ? 'fadeOut' : 'fadeIn'} highlightCursor`}
          onClick={() => {
            this.setState({ contentHandler: 2 });
            this.toggleDetail('showHideDetail');
          }}>
          <Tilt
            className='Tilt preview__3'
            options={{
              max: 20,
              easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
              scale: 1.1,
              perspective: 1500,
              speed: 500,
            }}>
            <div className='Tilt-inner'>
              <p>No Star Sky</p>
              <p className='font-weight-regular'>Information Design</p>
            </div>
          </Tilt>
        </div>
        <div
          className={`work ${this.props.fadeOut ? 'fadeOut' : 'fadeIn'} highlightCursor`}
          onClick={() => {
            this.setState({ contentHandler: 3 });
            this.toggleDetail('showHideDetail');
          }}>
          <Tilt
            className='Tilt preview__4'
            options={{
              max: 20,
              easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
              scale: 1.1,
              perspective: 1500,
              speed: 500,
            }}>
            <div className='Tilt-inner'>
              <p>Mehr ...</p>
              <p className='font-weight-regular'>Verschiedenes</p>
            </div>
          </Tilt>
        </div>
        {showHideDetail && (
          <WorkDetail
            toggleDetail={this.toggleDetail}
            nextDetail={this.nextDetail}
            prevDetail={this.prevDetail}
            showHideDetail={this.state.showHideDetail}
            contentHandler={this.state.contentHandler}
          />
        )}
      </div>
    );
  }
}

export default Work;
