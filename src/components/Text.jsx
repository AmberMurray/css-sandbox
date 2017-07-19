import React, { Component } from 'react'
import '../styles/resources.css'
import '../library/animations.css'

class Text extends Component {

  render() {

    return (
      <div className={'resource-display-text'}>
        <h1><span id='text-guy' className={this.props.className}>Hello</span></h1>
      </div>
    )
  }
}

export default Text;
