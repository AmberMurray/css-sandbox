import React, { Component } from 'react'
import '../styles/resources.css'

class Text extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    console.log(this.props);
    return (
      <div className={'resource-display-text ' + this.props.className}>
        <h1>Hello</h1>
      </div>
    )
  }
}

export default Text;
