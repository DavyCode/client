import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/home/Home';
import Contact from './components/Contact';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='contact' component={Contact} />
    <Route path='*' component={Home} />
  </Route>
);


import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';



class App extends Component {

  render() {
    return (
      <div className="main-container">
        <BrowserRouter>
          <div>
            <Header />
            <div className='container'>
              <Route  exact path="/" component={Landing} />
              <Route  exact path="/surveys" component={Dashboard} />
              <Route  path="/surveys/new" component={SurveyNew} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
};

export default connect(null, actions)(App);