import React, { Component } from 'react'
import '../styles/resources.css'

class Button extends Component {

  render() {
    return (
      <div className={'resource-display-button' + this.props.className}>
        <button className=''><span className='button-text'>Button</span></button>
      </div>
    )
  }
}

export default Button;
