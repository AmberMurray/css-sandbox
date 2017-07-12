import React, { Component } from 'react'
import '../styles/resources.css'
import '../library/buttons.css'


class EditorSubmit extends Component {
  constructor (props) {
    super(props)

  }

  render() {
    return (
      <div>
        <button className='resource-display-button submit-button' type='submit'><span className='button-text'>Submit</span></button>
      </div>
    )
  }
}

export default EditorSubmit;
