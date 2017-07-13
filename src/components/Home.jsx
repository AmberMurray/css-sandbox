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
      }

    this.alterAnimationState = this.alterAnimationState.bind(this)
    this.alterButtonState = this.alterButtonState.bind(this)
    this.alterFormState = this.alterFormState.bind(this)
    this.getStyleSheets = this.getStyleSheets.bind(this)
  }

  alterAnimationState (value, cssText) {
    let animationComponent
    if(value === 'bounce') {
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
    if(value === 'press') {
      this.alterAnimationState()
      this.alterFormState()
      console.log('this is', cssText);
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

  getStyleSheets (value) {
    let styleSheets = document.styleSheets
    let styleSheetsRules = document.styleSheets[2].cssRules
    let dotClass = '.' + value
    let hash = '#' + value

    console.log('This is styleSheetsRules ', styleSheetsRules);

    // for(let i = 0; i < styleSheets.length; i++) {
	  //   if(styleSheets[i].cssRules) {
    //     if(styleSheets[i].cssRules[0].selectorText === dotClass || styleSheets[i].cssRules[0].selectorText === hash) {
    //       let styleSheetText = styleSheets[i].cssRules[0].cssText
    //       console.log(styleSheets[i].cssRules);
    //       console.log(styleSheetText);
    //       return styleSheetText
    //     }
    //   }
    // }
    console.log('Welcome to getStyleSheets!');
    console.log('Length of styleSheetsRules: ', styleSheetsRules.length);
    console.log('styleSheetsRules[18]: ', styleSheetsRules[18]);
    console.log('styleSheetsRules[18].cssText: ', styleSheetsRules[18].cssText);
    console.log('styleSheetsRules[18].selectorText: ' + styleSheetsRules[18].selectorText);
    for(let i = styleSheetsRules.length -1; i > styleSheetsRules.length; i--) {
      console.log('this is i ', i);
      console.log('These are stylesheetRules ', styleSheetsRules[i]);
      if(styleSheetsRules[i].selectorText === dotClass) {
        let styleSheetText = styleSheetsRules[i].cssText
        console.log(styleSheetText);
        return styleSheetText
      }
    }
  }

  render() {

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
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
