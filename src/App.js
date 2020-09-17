import React from 'react';
import './App.scss';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketches/sketch';
import Work from './work';
import About from './about';
import Cursor from './cursor';
import LottieAnim from './lottie';

// import HorizontalScroll from 'react-scroll-horizontal';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      setOpacity: '1',
      showHideButtons: true,
      showHideBack: false,
      showHideWork: false,
      showHideAbout: false,
    };
    this.toggleComponent = this.toggleComponent.bind(this);
  }

  toggleComponent(name) {
    switch (name) {
      case 'showHideWork':
        this.setState({
          showHideWork: !this.state.showHideWork,
          setOpacity: '0',
        });
        setTimeout(() => {
          this.setState({
            showHideButtons: !this.state.showHideButtons,
            showHideBack: !this.state.showHideBack,
          });
        }, 500);
        break;
      case 'showHideAbout':
        this.setState({
          showHideAbout: !this.state.showHideAbout,
          setOpacity: '0',
        });
        setTimeout(() => {
          this.setState({
            showHideButtons: !this.state.showHideButtons,
            showHideBack: !this.state.showHideBack,
          });
        }, 500);
        break;
      case 'showHideBack':
        this.setState({
          showHideButtons: true,
          showHideBack: false,
          setOpacity: !this.state.setOpacity,
        });
        setTimeout(() => {
          this.setState({
            showHideAbout: false,
            showHideWork: false,
          });
        }, 500);
        break;
      default:
      // null;
    }
  }

  render() {
    const {
      showHideWork,
      showHideBack,
      showHideAbout,
      showHideButtons,
    } = this.state;
    return (
      <div className='App'>
        <P5Wrapper sketch={sketch} />

        {showHideButtons && (
          <div
            className='btn-wrapper'
            style={{ opacity: this.state.setOpacity }}>
            <button
              className='btn'
              onClick={() => this.toggleComponent('showHideWork')}>
              work
            </button>
            <button
              className='btn'
              onMouseEnter={() => this.toggleComponent('showHideAbout')}>
              myself
            </button>
          </div>
        )}
        {showHideBack && (
          <div
            className='back'
            onClick={() => this.toggleComponent('showHideBack')}></div>
        )}
        {showHideWork && <Work />}
        {showHideAbout && <About />}
        <LottieAnim />
        <Cursor />
      </div>
    );
  }
}

export default App;
