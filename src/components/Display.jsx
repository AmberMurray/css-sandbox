import React, { Component } from 'react'
import '../styles/resources.css'

class Display extends Component {

  // componentWillReceiveProps () {
  //   console.log('i did an update!!!!!');
  //   this.forceUpdate()
  // }

  render() {

    return (
      <div className='resource-display'>
        { this.props.animationComponent ?
          React.cloneElement(this.props.animationComponent, { className: this.props.animationClass })
          : null
        }
        {
        this.props.buttonComponent ?
         React.cloneElement(this.props.buttonComponent, { className: this.props.buttonClass})
         : null
       }
       {
       this.props.formComponent ?
        React.cloneElement(this.props.formComponent, { className: this.props.formClass})
        : null
      }
      </div>
    )
  }
}

export default Display;
