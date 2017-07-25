import React, { Component } from 'react'
import '../styles/resources.css'
import '../library/buttons.css'


class Button extends Component {

  render() {
    return (
      <div className={this.props.className}>
        <button className={'resource-display-button ' + this.props.className} >Button</button>
      </div>
    )
  }
}

export default Button;
