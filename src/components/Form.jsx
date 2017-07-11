import React, { Component } from 'react'
import '../styles/resources.css'

class Form extends Component {

  render() {
    console.log(this.props.className);
    return (
      <div className='resource-display-form'>
        <input className={this.props.className}></input>
      </div>
    )
  }
}

export default Form;
