import React, { Component } from 'react';

import LandingPage from './landing_page';
import Work from '../work/work';
import About from '../about/about';
import Skills from '../skills/skills';
import Contact from '../contact/contact';

class HomePage extends Component {
  render() {
    return (
      <div>
        <LandingPage/>
        <Work/>
        <About/>
        <Skills/>
        <Contact/>
      </div>
    );
  }
}

export default HomePage;
