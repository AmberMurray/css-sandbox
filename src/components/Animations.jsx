import React, { Component } from 'react'
import '../styles/resources.css'

class Animations extends Component {


  handleChange (e) {
    let searchTerm = '.' + e.target.value
    let cssText = this.props.getStyleSheets(searchTerm, 'dotClass')
    let keyframeText = this.props.getStyleSheets('bounceIn', 'keyframe')
    this.props.alterAnimationState(e.target.value, cssText + keyframeText)
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
          <select id="animation" onChange={this.handleChange.bind(this)}>
            <option id="animation-choice" value="play">Play!</option>
            <option id='bounce' value="bounce">Bounce</option>
            <option id='jump' value="jump">Jump</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Animations
