import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/resources.css'
import '../library/buttons.css'


class AnimateButton extends Component {

  render() {
    return (
      <div>
        <h2 className='home-title'>CSS Sandbox</h2>
          <div className='home-container'>
          <div className='resource-display-button '>
            <Link to='/animations'><button><span className='button-text'>Animations</span></button></Link>
          </div>
          <div className='resource-display-button '>
            <Link to='/buttons'><button><span className='button-text'>Buttons</span></button></Link>
          </div>
          <div className='resource-display-button '>
            <Link to='/forms'><button><span className='button-text'>Forms</span></button></Link>
          </div>
        </div>
    </div>
    )
  }
}

export default AnimateButton;
