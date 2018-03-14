import React, { Component } from 'react';
import Nav from './partials/Nav'
import Home from './home/Home'
import Footer from './partials/Footer'

class Index extends Component {
  render() {
    return (
      <div>
          <Nav />  
          <Home />
          <Footer />
      </div>
    );
  }
}

export default Index;
