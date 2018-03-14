import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './Index'



class App extends Component {
    render() {
        return ( 
            <div className = "app" >
                <BrowserRouter >
                     <Route exact path = "/" component = { Index }/>   
                </BrowserRouter>
            </div>
        );
    }
}

export default App;