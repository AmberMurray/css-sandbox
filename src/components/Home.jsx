import React, { Component } from 'react';
import '../styles/home.css'
import Display from './Display'
import CodeEditor from './CodeEditor'
import Animations from './Animations'
import Buttons from './Buttons'
import Forms from './Forms'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      animations: 'Play!',
      buttons: 'Try It Out!',
      forms: 'Choose One!'
    }

    this.alterAnimationState = this.alterAnimationState.bind(this)
    this.alterFormsState = this.alterFormsState.bind(this)
  }

  alterAnimationState (value) {
    this.setState({ animations: value })
  }

  alterFormsState (value) {
    this.setState({ forms: value })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h2 className='home-title'>CSS Sandbox</h2>
        <div className='home-container'>
          <div className='dropdowns dropdowns-container'>
            <div className='animations-select'>
              <Animations
                alterAnimationState={this.alterAnimationState}/>
            </div>
            <div className='buttons-select'>
              <Buttons
                alterFormsState={this.alterFormsState}/>
            </div>
            <div className='forms-select'>
              <Forms />
            </div>
          </div>
          <div className='display'>
            <Display />
          </div>
          <div className='code-display' id='ace_content'>
            <CodeEditor />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
