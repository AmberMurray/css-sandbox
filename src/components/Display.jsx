import React, { Component } from 'react'
import '../styles/resources.css'
// import Text from './Text'
// import Form from './Form'
// import Button from './Button'

class Display extends Component {
  constructor (props) {
    super(props)

    // this.state = {
    //
    // }
  }


  render() {
    console.log(this.props);
    return (
      <div className='resource-display'>
        { this.props.animationComponent ?
          React.cloneElement(this.props.animationComponent, { className: this.props.animationClass})
          : null
        }
      </div>
    )
  }
}

export default Display;
