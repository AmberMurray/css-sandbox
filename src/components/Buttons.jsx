import React, { Component } from 'react'
import '../styles/resources.css'

class Buttons extends Component {

  handleChange (e) {
    let searchTerm = '.' + e.target.value
    let cssText = this.props.getStyleSheets(searchTerm, 'dotClass')
    let styleSheets = document.styleSheets

    if(this.props.animationName) {
      let newArray = cssText.split(' ')
      let animationIndex = newArray.indexOf('animation:')
      let animationName = newArray[animationIndex+1]
      let keyframeText = this.props.getStyleSheets(animationName, 'keyframe')

      this.props.alterButtonState(e.target.value, cssText + '\n \n' + keyframeText)
    } else {
      this.props.alterButtonState(e.target.value, cssText)
    }
  }

  render() {

    return (
      <div>
        <div className='buttons-div'>
          <label id="buttons-select">
            <h3 className='buttons-label'>Buttons</h3>
          </label>
        </div>
        <div>
          <select id="button" onChange={this.handleChange.bind(this)}>
            <option id="button-choice" value="try it out">Try It Out!</option>
            <option id='basic' value="basic">Basic</option>
            <option id='press' value="press">Press</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Buttons;
