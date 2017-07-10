import React, { Component } from 'react'
import '../styles/resources.css'

class Animations extends Component {

  //this will call the change method from HOME to make the change happen

  render() {
    return (
      <div>
        <div className='animations-div'>
          <label id="animations-select">
            <h3 className='animations-label'>Animations</h3>
          </label>
        </div>
        <div>
          <select id="animation">
            <option
              id="animation-choice"
              value="default"
              disabled selected>Play!
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
