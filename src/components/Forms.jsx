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
          <select id="form">
            <option
              id="form-choice"
              value="default"
              disabled selected>Choose One!
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
