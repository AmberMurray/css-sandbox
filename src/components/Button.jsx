import React, { Component } from 'react'
import '../styles/resources.css'
import '../library/buttons.css'


class Button extends Component {

  render() {
    console.log(this.props.className);
    return (
      <div className='resource-display-button '>
        <button id={this.props.className}><span className='button-text'>Button</span></button>
      </div>
    )
  }
}

export default Button;
