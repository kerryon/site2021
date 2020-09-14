import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import './App.scss';
import sketch from './sketches/sketch';
import Work from './work';
import About from './about';
import LogoSVG from './logo';
import LottieAnim from './lottie';

// import HorizontalScroll from 'react-scroll-horizontal';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      showHideWork: false,
      showHideAbout: false,
    };
    this.hideComponent = this.toggleComponent.bind(this);
  }

  toggleComponent(name) {
    switch (name) {
      case 'showHideWork':
        this.setState({ showHideWork: !this.state.showHideWork });
        break;
      case 'showHideAbout':
        this.setState({ showHideAbout: !this.state.showHideAbout });
        break;
      default:
      // null;
    }
  }

  render() {
    const { showHideWork, showHideAbout } = this.state;
    return (
      <div className='App'>
        <P5Wrapper sketch={sketch} />

        <button onClick={() => this.toggleComponent('showHideWork')}>
          Click to hide Work component
        </button>
        <button onClick={() => this.toggleComponent('showHideAbout')}>
          Click to hide About component
        </button>
        {showHideWork && <Work />}
        {showHideAbout && <About />}

        <LogoSVG />
        <LottieAnim />
      </div>
    );
  }
}

export default App;
