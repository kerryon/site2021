import React from 'react';
import './App.scss';
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from './sketches/sketch';
import Work from './components/work';
import About from './components/about';
import Info from './components/info';
// import Cursor from './components/cursor';
import LottieAnim from './components/logo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      showHideButtons: true,
      showHideBack: false,
      showHideWork: false,
      showHideAbout: false,
      showHideInfo: true,
      slideOut: false,
      fadeOut: true,
    };
    this.toggleComponent = this.toggleComponent.bind(this);
  }

  toggleComponent(name) {
    switch (name) {
      case 'showHideWork':
        this.setState({
          fadeOut: !this.state.fadeOut,
          slideOut: false,
          showHideInfo: false,
        });
        setTimeout(() => {
          this.setState({
            showHideWork: !this.state.showHideWork,
            // showHideButtons: !this.state.showHideButtons,
            showHideBack: !this.state.showHideBack,
            showHideAbout: false,
          });
        }, 200);
        break;
      case 'showHideAbout':
        this.setState({
          showHideBack: false,
          slideOut: !this.state.slideOut,
          fadeOut: true,
        });
        setTimeout(() => {
          this.setState({
            showHideWork: false,
            showHideAbout: !this.state.showHideAbout,
          });
        }, 300);
        break;
      case 'showHideBack':
        this.setState({
          // showHideButtons: true,
          showHideBack: false,
          fadeOut: true,
        });
        setTimeout(() => {
          this.setState({
            showHideWork: false,
          });
        }, 200);
        break;
      case 'showHideInfo':
        this.setState({
          showHideInfo: !this.state.showHideInfo,
          fadeOut: true,
        });
        setTimeout(() => {
          this.setState({
            showHideWork: false,
          });
        }, 200);
        break;
      default:
      // null;
    }
  }

  render() {
    const {
      showHideWork,
      showHideAbout,
      showHideInfo,
      showHideBack,
      showHideButtons,
    } = this.state;
    return (
      <div className='App'>
        <ReactP5Wrapper sketch={sketch} />

        {showHideInfo && <Info toggleComponent={this.toggleComponent} />}

        {showHideBack && (
          <div
            className='back'
            onClick={() => this.toggleComponent('showHideBack')}></div>
        )}

        {showHideButtons && (
          <div
            className='btn-wrapper'
            // style={{ opacity: showHideWork ? '0' : '1' }}
            >
            <button
              className='btn'
              onClick={() => this.toggleComponent('showHideWork')}>
              {showHideWork ? 'keine Projekte' : 'Projekte'}
            </button>
            <button
              className='btn'
              onClick={() => this.toggleComponent('showHideAbout')}>
              {showHideAbout ? 'kein Kontakt' : 'Kontakt'}
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
        <LottieAnim toggleComponent={this.toggleComponent} />
        {/* <Cursor /> */}
      </div>
    );
  }
}

export default App;
