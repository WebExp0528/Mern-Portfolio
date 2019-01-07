import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import linkedinLogo from '../../public/images/footer/linkedin.jpg';
import githubLogo from '../../public/images/footer/github.png';
import facebookLogo from '../../public/images/footer/facebook.jpg'

class FooterTemplate extends Component {
  renderLinks() {
      return (
        <div className="row footerRow">
          <div className="footer-links">
              <a href="https://github.com/webdev0528">
                <img id="github-logo" src={githubLogo} alt="Github" />
                <br/>
                Github
              </a>
          </div>
          <div className="footer-links">
            <a href="">
              <img id="facebook-logo" src={facebookLogo} alt="Facebook" />
              <br/>
              Facebook
            </a>
          </div>

          <div className="footer-links">
              <a target="_blank" href=""><img id="linkedin-logo" src={linkedinLogo} alt="LinkedIn" /><br/>LinkedIn</a>
          </div>
        </div>
      );
    }

  render() {
    const d = new Date();
    const year = d.getFullYear();

    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Let's Connect!</h3>
              <hr className="sub"/>
              <p className="text-faded contact dark">Obey the principles without being bound by them.</p>
              {this.renderLinks()}
              <p className="copyright">© {year}, Your Site. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps, null)(FooterTemplate);
