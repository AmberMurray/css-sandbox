import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navibar extends Component {

  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navibar;
