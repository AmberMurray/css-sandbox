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
          <select id="button" onChange={e => {
            let cssText = this.props.getStyleSheets(e.target.value)
            this.props.alterButtonState(e.target.value, cssText )}}>
            <option id="button-choice" value="try it out">Try It Out!</option>
            <option id='press' value="press">Press</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Buttons;
