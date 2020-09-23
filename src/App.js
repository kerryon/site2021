import React from 'react';
import './App.scss';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketches/sketch';
import Work from './components/work';
import About from './components/about';
import Cursor from './components/cursor';
import LottieAnim from './components/logo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      setOpacity: '1',
      hideText: false,
      showHideButtons: true,
      showHideBack: false,
      showHideWork: false,
      showHideAbout: false,
      slideOut: false,
    };
    this.toggleComponent = this.toggleComponent.bind(this);
  }

  toggleComponent(name) {
    switch (name) {
      case 'showHideWork':
        this.setState({
          setOpacity: '0',
          fadeOut: false,
        });
        setTimeout(() => {
          this.setState({
            showHideWork: !this.state.showHideWork,
            showHideButtons: !this.state.showHideButtons,
            showHideBack: !this.state.showHideBack,
          });
        }, 450);
        break;
      case 'showHideAbout':
        this.setState({
          hideText: !this.state.hideText,
          slideOut: !this.state.slideOut,
        });
        setTimeout(() => {
          this.setState({
            showHideAbout: !this.state.showHideAbout,
          });
        }, 450);
        break;
      case 'showHideBack':
        this.setState({
          showHideButtons: true,
          showHideBack: false,
          setOpacity: !this.state.setOpacity,
          fadeOut: true,
        });
        setTimeout(() => {
          this.setState({
            showHideWork: false,
          });
        }, 450);
        break;
      default:
      // null;
    }
  }

  render() {
    const {
      hideText,
      showHideWork,
      showHideBack,
      showHideAbout,
      showHideButtons,
    } = this.state;
    return (
      <div className='App'>
        <P5Wrapper sketch={sketch} />

        {showHideBack && (
          <div
            className='back'
            onClick={() => this.toggleComponent('showHideBack')}></div>
        )}

        {showHideButtons && (
          <div
            className='btn-wrapper'
            style={{ opacity: this.state.setOpacity }}>
            <button
              className='btn'
              onClick={() => this.toggleComponent('showHideWork')}>
              works
            </button>
            <button
              className='btn'
              onClick={() => this.toggleComponent('showHideAbout')}>
              {hideText ? 'no myself' : 'myself'}
            </button>
          </div>
        )}

        {showHideWork && (
          <Work
            toggleComponent={this.toggleComponent}
            fadeOut={this.state.fadeOut}
          />
        )}
        {showHideAbout && (
          <About
            toggleComponent={this.toggleComponent}
            slideOut={this.state.slideOut}
          />
        )}
        <LottieAnim />
        <Cursor />
      </div>
    );
  }
}

export default App;
