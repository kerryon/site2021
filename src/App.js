import React, { lazy, Suspense } from 'react';
import './App.scss';
import sketch from './sketches/sketch';
const ReactP5Wrapper = lazy(() => import('react-p5-wrapper').then(module=>({default:module.ReactP5Wrapper})));
const Work = lazy(() => import('./components/work'));
const About = lazy(() => import('./components/about'));
const Info = lazy(() => import('./components/info'));
const LottieAnim = lazy(() => import('./components/logo'));
// import { ReactP5Wrapper } from "react-p5-wrapper";
// import Work from './components/work';
// import About from './components/about';
// import Info from './components/info';
// import LottieAnim from './components/logo';

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
          showHideBack: false,
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
      <Suspense fallback={<div>Lade...</div>}>
        <ReactP5Wrapper sketch={sketch} />
      </Suspense>

        {showHideInfo && <Suspense fallback={<div>Lade...</div>}><Info toggleComponent={this.toggleComponent} /></Suspense>}

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
              className={`btn ${this.state.showHideWork ? 'btn--state' : ''}`}
              onClick={() => this.toggleComponent('showHideWork')}>
              {showHideWork ? 'keine Projekte' : 'Projekte'}
            </button>
            <button
              className={`btn ${this.state.showHideWork ? 'btn--state' : ''}`}
              onClick={() => this.toggleComponent('showHideAbout')}>
              {showHideAbout ? 'nee, doch nicht' : 'Kontakt'}
            </button>
          </div>
        )}

        {showHideWork && (
          <Suspense fallback={<div>Lade...</div>}>
            <Work
              toggleComponent={this.toggleComponent}
              fadeOut={this.state.fadeOut}
            />
          </Suspense>
        )}
        {showHideAbout && (
          <Suspense fallback={<div>Lade...</div>}>
            <About
              toggleComponent={this.toggleComponent}
              slideOut={this.state.slideOut}
            />
          </Suspense>
        )}
        <Suspense fallback={<div>Lade...</div>}>
          <LottieAnim toggleComponent={this.toggleComponent} />
        </Suspense>
      </div>
    );
  }
}

export default App;
