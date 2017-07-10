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
      forms: 'Choose One!',
      display: {},
    }

    this.alterAnimationState = this.alterAnimationState.bind(this)
    this.alterFormState = this.alterFormState.bind(this)
  }

  alterAnimationState (value) {
    this.setState({ animations: value })
  }

  alterButtonState (value) {
    this.setState({ buttons: value })
  }

  alterFormState (value) {
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
                alterFormState={this.alterButtonState}/>
            </div>
            <div className='forms-select'>
              <Forms
              alterFormState={this.alterFormState}/>
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
