import React, { Component } from 'react'
import '../styles/resources.css'


class Forms extends Component {

  handleChange (e) {
    let searchTerm = '.' + e.target.value
    let cssText = this.props.getStyleSheets(searchTerm, 'dotClass')

    let newArray = cssText.split(' ')
    let animationIndex = newArray.indexOf('animation:')

    if(animationIndex !== -1) {
      let animationName = newArray[animationIndex+1]
      let keyframeText = this.props.getStyleSheets(animationName, 'keyframe')

      this.props.alterFormState(e.target.value, cssText + '\n \n' + keyframeText, 'forms')
    } else {
      this.props.alterFormState(e.target.value, cssText, 'forms')
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
            <option id='fun' value="fun">Fun</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Forms;
