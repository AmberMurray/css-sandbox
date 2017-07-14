import React, { Component } from 'react'
import '../styles/resources.css'
import '../library/buttons.css'


class Button extends Component {

  render() {
    return (
      <div>
        <button className={'resource-display-button ' + this.props.className}>Button</button>
      </div>
    )
  }
}

export default Button;
