import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navibar extends Component {

  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/buttons'>Buttons</Link></li>
            <li><Link to='/animations'>Animations</Link></li>
            <li><Link to='/forms'>Forms</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navibar;
