import React, { Component } from 'react'
import '../styles/resources.css'

class Forms extends Component {

  render() {
    return (
      <div>
        <div className='forms-div'>
          <label id="forms-select">
            <h3 className='forms-label'>Forms</h3>
          </label>
        </div>
        <div>
          <select id="form" onChange={e => {this.props.alterFormState(e.target.value)}}>
            <option
              id="form-choice"
              value="choose one"
              >Choose One!
            </option>
            <option
              id='fun'
              value="fun"
              >Fun
            </option>
          </select>
        </div>
      </div>
    )
  }
}

export default Forms;
