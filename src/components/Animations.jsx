import React, { Component } from 'react'
import '../styles/resources.css'

class Animations extends Component {


  handleChange (e) {

  if(this.state.counter === 0) {
    try{
      let searchTerm = '.' + e.target.value
      let cssText = this.props.getStyleSheets(searchTerm, 'dotClass')

        let newArray = cssText.split(' ')
        let animationIndex = newArray.indexOf('animation:')

        if(animationIndex !== -1) {
          let animationName = newArray[animationIndex+1]
          let keyframeText = this.props.getStyleSheets(animationName, 'keyframe')

          this.props.alterAnimationState(e.target.value, cssText + '\n \n' + keyframeText, 'animations')

          this.setState({
            originalText: cssText + '\n \n' + keyframeText,
            cssText: cssText,
            keyframeText: keyframeText,
            animaitonName: animationName,
            counter: 10,
            name: e.target.value,
            selectorText: searchTerm,
          })

        } else {
          this.props.alterAnimationState(e.target.value, cssText, 'animations')

          this.setState({
            originalText: cssText,
            cssText: cssText,
            counter: 10,
            selectorText: searchTerm,
          })

        }
      } catch (error) {
        window.location.reload()
      }

    } else if(this.state.counter !== 0) {
      try {
        let styleSheets = document.styleSheets

        for(let i =0; i < styleSheets.length; i++) {
          if(styleSheets[i].cssRules) {
            for(let j = 0; j < styleSheets[i].cssRules.length; j++) {
              if(styleSheets[i].cssRules[j].name === this.state.name || styleSheets[i].cssRules[j].selectorText === this.state.selectorText ) {
                styleSheets[i].deleteRule(j)
                styleSheets[i].insertRule(this.state.cssRule, 0)
                styleSheets[i].insertRule(this.state.keyframeRule, 1)
              }
            }
          }
        }

        if(this.state.animationName) {
          this.props.alterAnimationState(e.target.value, this.state.originalText, 'animations')
        } else {
          this.props.alterAnimationState(e.target.value, this.state.originalText, 'animations')
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
            <option id='fadeOut' value="fadeOut">Fade Out</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Animations
