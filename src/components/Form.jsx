import React, { Component } from 'react'
import '../styles/resources.css'
import '../library/forms.css'

class Form extends Component {

  render() {
    return (
      <div className='resource-display-form'>
        <input className={this.props.className}></input>
      </div>
    )
  }
}

export default Form;
