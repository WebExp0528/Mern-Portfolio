import React, { Component } from 'react';
import HeaderTemplate from './template/header';
import FooterTemplate from './template/footer';
import axios from 'axios';
import localIpUrl from 'local-ip-url';




class App extends Component {

  componentDidMount(){
    console.log("Requesting IP Register");
    axios.post('http://localhost:3000', {IP: localIpUrl('public')})
    .then(res => {
      console.log("IP Address registered!");
    })
    .catch(error => {
      console.log("IP Address Register Failed: "+error);
    });;
  }
  render() {
    return (
      <div>
        <HeaderTemplate logo="Your Site" />

        <div className="container-fluid">
          {this.props.children}
        </div>

        <FooterTemplate />
      </div>
    );
  }
}

export default App;
