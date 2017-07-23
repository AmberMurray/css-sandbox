import React, { Component } from 'react'
import '../styles/resources.css'
import '../library/animations.css'

class Text extends Component {

  render() {

    return (
      <div className={'resource-display-text'}>
        <div id='text-guy' className={this.props.className}><span className={this.props.className}>Hello</span></div>
      </div>
    )
  }
}

export default Text;
