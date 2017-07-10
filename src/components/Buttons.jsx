import React, { Component } from 'react'
import '../styles/resources.css'

class Buttons extends Component {

  render() {
    return (
      <div>
        <div className='buttons-div'>
          <label id="buttons-select">
            <h3 className='buttons-label'>Buttons</h3>
          </label>
        </div>
        <div>
          <select id="button">
            <option
              id="button-choice"
              value="try it out"
              selected>Try It Out!
            </option>
            <option
              id='press'
              value="press"
              >Press
            </option>
          </select>
        </div>
      </div>
    )
  }
}

export default Buttons;
