import React, { Component } from 'react'
import '../styles/resources.css'
import Text from './Text'
import Form from './Form'
import Button from './Button'

class Display extends Component {
  constructor (props) {
    super(props)
  }


  render() {
    return (
      <div className='resource-display'>
        <Button />
      </div>
    )
  }
}

export default Display;
