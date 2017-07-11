import React, { Component } from 'react';
import '../styles/home.css'
import Display from './Display'
import CodeEditor from './CodeEditor'
import Animations from './Animations'
import Buttons from './Buttons'
import Forms from './Forms'
import Text from './Text'
import Button from './Button'
import Form from './Form'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      animations: 'Play!',
      animationComponent: null,
      buttons: 'Try It Out!',
      buttonComponent: null,
      forms: 'Choose One!',
      formComponent: null,
    }

    this.alterAnimationState = this.alterAnimationState.bind(this)
    this.alterButtonState = this.alterButtonState.bind(this)
    this.alterFormState = this.alterFormState.bind(this)
  }

  alterAnimationState (value) {
    let animationComponent
    if(value === 'bounce') {
      animationComponent = <Text />
    }
    this.setState({ animations: value, animationComponent })
  }

  alterButtonState (value) {
    let buttonComponent
    if(value === 'press') {
      buttonComponent = <Button />
    }
    this.setState({ buttons: value, buttonComponent })
  }

  alterFormState (value) {
    let formComponent
    if(value === 'fun') {
      formComponent = <Form />
    }
    this.setState({ forms: value, formComponent })
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
                alterButtonState={this.alterButtonState}/>
            </div>
            <div className='forms-select'>
              <Forms
              alterFormState={this.alterFormState}/>
            </div>
          </div>
          <div className='display'>
            <Display
              animationComponent={this.state.animationComponent}
              animationClass={this.state.animations}
              buttonComponent={this.state.buttonComponent}
              buttonClass={this.state.buttons}
              formComponent={this.state.formComponent}
              formClass={this.state.forms}
            />
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
