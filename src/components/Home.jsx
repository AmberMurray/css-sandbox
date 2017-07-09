import React, { Component } from 'react';
import '../styles/home.css'
import { Link } from 'react-router-dom'
import CodeEditor from './CodeEditor'
import Animations from './Animations'
import Buttons from './Buttons'
import Forms from './Forms'

class Home extends Component {

  render() {
    return (
      <div>
        <h2 className='home-title'>CSS SandBox</h2>
        <div className='home-container'>
          <div className='dropdowns dropdowns-container'>

              <button className='animations-button'><Link to='/animations'>Animations</Link></button>
              <button className='buttons-button'><Link to='/buttons'>Buttons</Link></button>
              <button className='forms-button'><Link to='/forms'>Forms</Link></button>

          </div>
          <div className='display'></div>
          <div className='code-display' id='ace_content'><CodeEditor /></div>
        </div>
      </div>
    )
  }
}

export default Home;
