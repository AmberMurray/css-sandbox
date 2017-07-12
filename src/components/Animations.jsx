import React, { Component } from 'react'
import '../styles/resources.css'

class Animations extends Component {

  render() {
    return (
      <div>
        <div className='animations-div'>
          <label id="animations-select">
            <h3 className='animations-label'>Animations</h3>
          </label>
        </div>
        <div>
          <select id="animation" onChange={e => {
            let cssText = document.styleSheets[10].cssRules[0].cssText
            console.log(cssText);
            this.props.alterAnimationState(e.target.value, cssText)}}>
            <option
              id="animation-choice"
              value="play"
              >Play!
            </option>
            <option
              id='bounce'
              value="bounce"
              >Bounce
            </option>
          </select>
        </div>
      </div>
    )
  }
}

export default Animations
