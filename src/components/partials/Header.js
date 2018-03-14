import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Header extends Component {

  render () {
    return (
      <div >
        <nav>        
              <Link to="/contact" > Contact</Link>
        </nav>  
      </div>
    )
  }
};


export default Header;