import React, { Component } from 'react';

import LandingPage from './landing_page';
import Work from '../work/work';
import About from '../about/about';
// import About from './components/about';
// import Skills from './components/skills';
// import Contact from './components/contact';

class HomePage extends Component {
  render() {
    return (
      <div>
        <LandingPage/>
        <Work/>
        <About/>
        {/* <Skills/> */}
        {/* <Contact/> */}
      </div>
    );
  }
}

export default HomePage;
