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

let initialState = {
  animations: 'Select One!',
  animationComponent: <Text />,
  text: '',
  buttons: 'Try It Out!',
  buttonComponent: null,
  forms: 'Choose One!',
  formComponent: null,
  animationName: '',
  id: ['animations', 'buttons', 'forms'],
  options: {'animations': {}, 'buttons': {}, 'forms': {}},
}

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = initialState

    this.alterAnimationState = this.alterAnimationState.bind(this)
    this.alterButtonState = this.alterButtonState.bind(this)
    this.alterFormState = this.alterFormState.bind(this)
    this.getStyleSheets = this.getStyleSheets.bind(this)
    this.setAnimationName = this.setAnimationName.bind(this)
    this.getSelectOptionsValues = this.getSelectOptionsValues.bind(this)
    this.formatText = this.formatText.bind(this)
  }

  componentDidMount () {
    let styleSheets = document.styleSheets
    let self = this
    for ( let m = 0; m < this.state.id.length; m++) {
        let select = document.getElementById(this.state.id[m])

        for(let i = 0; i < select.length; i++) {

        let choice ={}
        choice.cssValue = '.' + select[i].value
        choice.keyframeValue = select[i].value

        Array.from(styleSheets).forEach(styleSheet => {
          if(!styleSheet.cssRules) {
            return
          }
          Array.from(styleSheet.cssRules).forEach(rule => {
            // will match if is a keyFrameRule
            if (choice.keyframeValue === rule.name) {
              choice.keyframeText = rule.cssText
            }
            // will match if is a non-keyframe rule
            if (choice.cssValue === rule.selectorText) {
              choice.cssText = rule.cssText
            }
          })
        })

        let newOptions = self.state.options

        newOptions[self.state.id[m]][choice.keyframeValue] = choice
        self.setState({options: newOptions})
      }
    }
  }

  getSelectOptionsValues (id) {
    let classes = []

    if (id) {
      let select = document.getElementById(id)

      for(let i = 0; i < select.length; i++) {
        classes.push(select[i].value)
      }
    }
    return classes
  }

  formatText (text) {
    let newText = text.replace(/;/g, ';\n')
    return newText
  }

  alterAnimationState (value, cssText, id) {
    let classes = this.getSelectOptionsValues(id)
    let animationComponent
    let formatted

    if (classes.length > 0) {
      classes.forEach(name => {
        if(value === name) {
          this.alterButtonState()
          this.alterFormState()
          animationComponent = <Text />
          formatted = this.formatText(cssText)
        }
      })
    } else {
      animationComponent = null
    }
    this.setState({ animations: value, animationComponent, text: formatted })
  }

  alterButtonState (value, cssText, id) {
    let classes = this.getSelectOptionsValues(id)
    let buttonComponent
    let formatted

    if (classes.length > 0) {
      classes.forEach(name => {
        if(value === name) {
          this.alterAnimationState()
          this.alterFormState()
          buttonComponent = <Button />
          formatted = this.formatText(cssText)
        }
      })
    } else {
       buttonComponent = null
    }
    this.setState({ buttons: value, buttonComponent, text:formatted })
  }

  alterFormState (value, cssText, id) {
    let classes = this.getSelectOptionsValues(id)
    let formComponent
    let formatted

    if (classes.length > 0) {
      classes.forEach(name => {
        if(value === name) {
          this.alterAnimationState()
          this.alterButtonState()
          formComponent = <Form />
          formatted = this.formatText(cssText)
        }
      })
    } else {
       formComponent = null
    }
    this.setState({ forms: value, formComponent, text: formatted })
  }

  setAnimationName (value) {
    this.setState({ animationName: value })
  }

  getStyleSheets (value, ruleType) {
    let styleSheets = document.styleSheets
    let searchProp = ruleType === 'keyframe' ? 'name' : 'selectorText'

    if(searchProp === 'name') {
      this.setAnimationName(value)
    } else {
      this.setAnimationName(null)
    }

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

    return (
      <div>
        <h2 className='home-title'>CSS Sandbox</h2>
        <div className='home-container'>
          <div className='dropdowns dropdowns-container'>
            <div className='animations-select'>
              <Animations
                alterAnimationState={this.alterAnimationState}
                getStyleSheets={this.getStyleSheets}
                options={this.state.options.animations}
              />
            </div>
            <div className='buttons-select'>
              <Buttons
                alterButtonState={this.alterButtonState}
                getStyleSheets={this.getStyleSheets}
                options={this.state.options.buttons}
              />
            </div>
            <div className='forms-select'>
              <Forms
              alterFormState={this.alterFormState}
              getStyleSheets={this.getStyleSheets}
              options={this.state.options.forms}
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
              getStyleSheets={this.getStyleSheets}
              animationName={this.state.animationName}
            />
          </div>
        </div>
        <div className='github-link'>
        <a className='github-link-text' href={'https://github.com/AmberMurray/css-sandbox'} target='_blank'>
        <h2>View on GitHub</h2>
        </a>
        </div>
      </div>
    )
  }
}

export default Home;
