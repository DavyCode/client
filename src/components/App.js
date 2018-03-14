import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './partials/Header';
import Home from './home/Home';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
            <Header />
            <Route  exact path="/" component={Home} />
            <Route  exact path="/contact" component={Contact} />
        </BrowserRouter>
      </div>
    )
  }
};

export default App;