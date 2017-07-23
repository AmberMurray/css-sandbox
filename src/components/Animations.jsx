import React, { Component } from 'react'
import '../styles/resources.css'

class Animations extends Component {
  constructor(props) {
    super(props)

    this.state = { counter: true,}
  }

  handleChange (e) {

  if(this.state.counter) {
    try{
      let searchTerm = '.' + e.target.value
      let cssText = this.props.getStyleSheets(searchTerm, 'dotClass')

        let newArray = cssText.split(' ')
        let animationIndex = newArray.indexOf('animation:')

        if(animationIndex !== -1) {
          let animationName = newArray[animationIndex+1]
          let keyframeText = this.props.getStyleSheets(animationName, 'keyframe')

          this.props.alterAnimationState(e.target.value, cssText + '\n \n' + keyframeText, 'animations')

          this.setState({ counter: false })

        } else {
          this.props.alterAnimationState(e.target.value, cssText, 'animations')

          this.setState({ counter: false })

        }
      } catch (error) {
        window.location.reload()
      }

    } else {
      try {
        let addlSearchTerm = e.target.value

        if (addlSearchTerm === 'play') {
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
          this.props.alterAnimationState(e.target.value, cssRule + '\n \n' + keyframeRule, 'animations')
        } else {
          this.props.alterAnimationState(e.target.value, cssRule, 'animations')
        }

      } catch (error) {
        window.location.reload()
      }
    }
  }

  render() {

    return (
      <div>
        <div className='animations-div'>
          <label id="animations-select">
            <h3 className='animations-label'>Animations</h3>
          </label>
        </div>
        <div>
          <select id="animations" onChange={this.handleChange.bind(this)}>
            <option id="animation-choice" value="play">Play!</option>
            <option id='fadeIn' value="fadeIn">Fade In</option>
            <option id='flash' value="flash">Flash</option>
            <option id='rotate' value="rotate">Rotate</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Animations
