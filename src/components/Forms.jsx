import React, { Component } from 'react'
import '../styles/resources.css'


class Forms extends Component {
  constructor(props) {
    super(props)

    this.state = { counter: true,}
  }

  handleChange (e) {

  if(this.state.counter) {
    try {
      let searchTerm = '.' + e.target.value
      let cssText = this.props.getStyleSheets(searchTerm, 'dotClass')

      console.log(cssText);

        let newArray = cssText.split(' ')
        let animationIndex = newArray.indexOf('animation:')

        if(animationIndex !== -1) {
          let animationName = newArray[animationIndex+1]
          let keyframeText = this.props.getStyleSheets(animationName, 'keyframe')

          let allText = cssText.concat('\n\n' + keyframeText)

          this.props.alterFormState(e.target.value, allText, 'forms')

          this.setState({ counter: false })

        } else {
          this.props.alterFormState(e.target.value, cssText, 'forms')

          this.setState({ counter: false })
        }
      } catch (error) {
        window.location.reload()
      }

    } else {
      try {
        let addlSearchTerm = e.target.value

        if (addlSearchTerm === 'choose one') {
          window.location.reload()
        }

        let keyframeRule = ''
        let cssRule = ''
        let keyframeValue = ''
        let cssValue = ''
        let styleSheets = document.styleSheets

        //find where user selection matches dropdown value & set text rules
        for(let optionsKey in this.props.options) {
          if(addlSearchTerm === optionsKey) {
            cssRule = this.props.options[optionsKey].cssText
            keyframeRule = this.props.options[optionsKey].keyframeText
            keyframeValue = this.props.options[optionsKey].keyframeValue
            cssValue = '.' + this.props.options[optionsKey].keyframeValue
          }
        }

        //find where user selection matches existing style sheet(s), delete them and replace with original stylesheet text values
        for(let i =0; i < styleSheets.length; i++) {
          if(styleSheets[i].cssRules) {
            for(let j = 0; j < styleSheets[i].cssRules.length; j++) {
              if(styleSheets[i].cssRules[j].name === keyframeValue) {
                styleSheets[i].deleteRule(j)
                styleSheets[i].insertRule(cssRule, 0)
                styleSheets[i].insertRule(keyframeRule, 1)
              }
              if(styleSheets[i].cssRules[j].selectorText === cssValue) {
                styleSheets[i].deleteRule(j)
                styleSheets[i].insertRule(cssRule, 0)
              }
            }
          }
        }

        if(keyframeRule) {
          this.props.alterFormState(e.target.value, cssRule + '\n \n' + keyframeRule, 'forms')
        } else {
          this.props.alterFormState(e.target.value, cssRule, 'forms')
        }

      } catch (error) {
        window.location.reload()
      }
    }
  }

  render() {

    return (
      <div>
        <div className='forms-div'>
          <label id="forms-select">
            <h3 className='forms-label'>Forms</h3>
          </label>
        </div>
        <div>
          <select id="forms" onChange={this.handleChange.bind(this)}>
            <option id="form-choice" value="choose one">Choose One!</option>
            <option id='base' value="base">Base</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Forms;
