import React, { Component } from 'react'
import '../styles/resources.css'
import '../library/animations.css'

class Text extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    console.log(this.props);
    return (
      <div className={'resource-display-text'}>
        <h1><span className={this.props.className}>Hello</span></h1>
      </div>
    )
  }
}

export default Text;
