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
      animationComponent: <Text />,
      text: '',
      buttons: 'Try It Out!',
      buttonComponent: null,
      forms: 'Choose One!',
      formComponent: null,
      currentClass: this.props.animationClass || this.props.buttonClass || this.props.formClass,
      animationName: ''
      }

    this.alterAnimationState = this.alterAnimationState.bind(this)
    this.alterButtonState = this.alterButtonState.bind(this)
    this.alterFormState = this.alterFormState.bind(this)
    this.getStyleSheets = this.getStyleSheets.bind(this)
    this.setAnimationName = this.setAnimationName.bind(this)
  }

  alterAnimationState (value, cssText) {
    let animationComponent
    if(value === 'bounce' || value === 'jump') {
      this.alterButtonState()
      this.alterFormState()
      animationComponent = <Text />
    } else {
      animationComponent = null
    }
    this.setState({ animations: value, animationComponent, currentClass: value, text: cssText })
  }

  alterButtonState (value, cssText) {
    let buttonComponent
    if(value === 'press' || value ===   'basic') {
      this.alterAnimationState()
      this.alterFormState()
      buttonComponent = <Button />
    } else {
      buttonComponent = null
    }
    this.setState({ buttons: value, buttonComponent, currentClass: value, text:cssText })
  }

  alterFormState (value, cssText) {
    let formComponent
    if(value === 'fun') {
      this.alterAnimationState()
      this.alterButtonState()
      formComponent = <Form />
    }  else {
      formComponent = null
    }
    this.setState({ forms: value, formComponent, currentClass: value, text: cssText })
  }

  setAnimationName (value) {
    this.setState({ animationName: value })
  }

  getStyleSheets (value, ruleType) {
    console.log(ruleType);
    let styleSheets = document.styleSheets
    let searchProp = ruleType === 'keyframe' ? 'name' : 'selectorText'

    console.log(searchProp);

    if(searchProp === 'name') {
      this.setAnimationName(value)
    } else {
      this.setAnimationName(null)
    }

    console.log(this.state.animationName);

    for(let i = 0; i < styleSheets.length; i++) {
	    if(styleSheets[i].cssRules) {
        for (let j = 0; j < styleSheets[i].cssRules.length; j++ ) {
          if(styleSheets[i].cssRules[j][searchProp] === value) {
            let styleSheetText = styleSheets[i].cssRules[j].cssText
            return styleSheetText
          }
        }
      }
    }
  }

  render() {
    console.log(this.state.animationName);
    return (
      <div>
        <h2 className='home-title'>CSS Sandbox</h2>
        <div className='home-container'>
          <div className='dropdowns dropdowns-container'>
            <div className='animations-select'>
              <Animations
                alterAnimationState={this.alterAnimationState}
                getStyleSheets={this.getStyleSheets}
              />
            </div>
            <div className='buttons-select'>
              <Buttons
                alterButtonState={this.alterButtonState}
                getStyleSheets={this.getStyleSheets}
              />
            </div>
            <div className='forms-select'>
              <Forms
              alterFormState={this.alterFormState}
              getStyleSheets={this.getStyleSheets}
              />
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
            <CodeEditor
              animationComponent={this.state.animationComponent}
              animationClass={this.state.animations}
              text={this.state.text}
              buttonComponent={this.state.buttonComponent}
              buttonClass={this.state.buttons}
              formComponent={this.state.formComponent}
              formClass={this.state.forms}
              currentClass={this.state.currentClass}
              getStyleSheets={this.getStyleSheets}
              animationName={this.state.animationName}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
