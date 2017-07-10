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
          <select id="animation" onChange={e => {this.props.alterAnimationState(e.target.value)}}>
            <option
              id="animation-choice"
              value="play"
              selected>Play!
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

export default Animations;
