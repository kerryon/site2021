import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import './App.scss';
import sketch from './sketches/sketch';
import Work from './work';
import About from './about';
import LottieAnim from './lottie';

// import HorizontalScroll from 'react-scroll-horizontal';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      showHideButtons: true,
      showHideWork: false,
      showHideAbout: false,
    };
    this.toggleComponent = this.toggleComponent.bind(this);
  }

  toggleComponent(name) {
    switch (name) {
      case 'showHideWork':
        this.setState({ showHideWork: !this.state.showHideWork });
        setTimeout(() => {
          this.setState({ showHideButtons: !this.state.showHideButtons });
        }, 500);
        break;
      case 'showHideAbout':
        this.setState({ showHideAbout: !this.state.showHideAbout });
        this.setState({ showHideButtons: !this.state.showHideButtons });
        break;
      default:
      // null;
    }
  }

  render() {
    const { showHideWork, showHideAbout, showHideButtons } = this.state;
    return (
      <div className='App'>
        <P5Wrapper sketch={sketch} />

        {showHideButtons && (
          <div className='btn-wrapper'>
            <button
              className='btn'
              onClick={() => this.toggleComponent('showHideWork')}>
              projects
            </button>
            <button
              className='btn'
              onClick={() => this.toggleComponent('showHideAbout')}>
              myself
            </button>
          </div>
        )}
        {showHideWork && <Work />}
        {showHideAbout && <About />}

        <LottieAnim />
      </div>
    );
  }
}

export default App;
